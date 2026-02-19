import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartProvider } from '@/context/CartContext'
import AppRouter from '@/router/AppRouter'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <CartProvider>
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppRouter />
        </MemoryRouter>
      </CartProvider>,
    )
  })
})
