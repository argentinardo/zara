import type { ApiErrorResponse } from '@/types'

function getRequiredEnv(key: string): string {
  const value = import.meta.env[key]
  if (value === undefined || value === '') {
    throw new Error(
      `Missing required environment variable: ${key}. Add it to .env.local or define on server enviroment variables`
    )
  }
  return value
}

const API_URL = getRequiredEnv('VITE_API_URL')
const API_KEY = getRequiredEnv('VITE_API_KEY')

export interface HttpClientConfig {
  baseUrl?: string
  apiKey?: string
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: ApiErrorResponse | unknown
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

function getConfig(): { baseUrl: string; apiKey: string } {
  return {
    baseUrl: API_URL,
    apiKey: API_KEY,
  }
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {},
  configOverride?: HttpClientConfig
): Promise<T> {
  const config = configOverride ?? getConfig()
  const { baseUrl, apiKey } = config

  const url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey ?? '',
    ...(options.headers as Record<string, string>),
  }

  const response = await fetch(url, {
    ...options,
    headers,
  })

  if (!response.ok) {
    let errorBody: ApiErrorResponse | unknown
    try {
      errorBody = (await response.json()) as ApiErrorResponse
    } catch {
      errorBody = await response.text()
    }
    throw new ApiError(
      `API Error: ${response.status} ${response.statusText}`,
      response.status,
      errorBody
    )
  }

  const contentType = response.headers.get('content-type')
  if (contentType?.includes('application/json')) {
    return response.json() as Promise<T>
  }

  return response.text() as unknown as Promise<T>
}

export const httpClient = {
  get<T>(endpoint: string, config?: HttpClientConfig): Promise<T> {
    return request<T>(endpoint, { method: 'GET' }, config)
  },

  post<T>(
    endpoint: string,
    body?: unknown,
    config?: HttpClientConfig
  ): Promise<T> {
    return request<T>(
      endpoint,
      { method: 'POST', body: JSON.stringify(body) },
      config
    )
  },

  put<T>(
    endpoint: string,
    body?: unknown,
    config?: HttpClientConfig
  ): Promise<T> {
    return request<T>(
      endpoint,
      { method: 'PUT', body: JSON.stringify(body) },
      config
    )
  },

  delete<T>(endpoint: string, config?: HttpClientConfig): Promise<T> {
    return request<T>(endpoint, { method: 'DELETE' }, config)
  },
}
