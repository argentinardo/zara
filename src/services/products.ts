import { httpClient } from '@/services/http'
import type { Phone, PhoneListItem } from '@/types'

const PRODUCTS_ENDPOINT = '/products'

export const productsService = {
  async getProducts(): Promise<PhoneListItem[]> {
    return httpClient.get<PhoneListItem[]>(PRODUCTS_ENDPOINT)
  },

  async getProductById(id: string): Promise<Phone | null> {
    try {
      return await httpClient.get<Phone>(`${PRODUCTS_ENDPOINT}/${id}`)
    } catch {
      return null
    }
  },
}
