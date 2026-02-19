import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { CartContext } from '@/context/CartContext'
import MainBar from './MainBar'
import type { CartItem } from '@/types'

const renderMainBar = (initialRoute = '/', cart: CartItem[] = []) =>
  render(
    <CartContext.Provider value={{ cart, addToCart: vi.fn(), removeFromCart: vi.fn() }}>
      <MemoryRouter initialEntries={[initialRoute]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MainBar />
      </MemoryRouter>
    </CartContext.Provider>,
  )

describe('MainBar', () => {
  it('renders the logo linking to home', () => {
    renderMainBar()

    const logoLink = screen.getAllByRole('link')[0]
    expect(logoLink).toHaveAttribute('href', '/')
    expect(logoLink.querySelector('img')).toBeInTheDocument()
  })

  it('renders the cart badge linking to /cart', () => {
    renderMainBar()

    const cartLink = screen.getByText('0').closest('a')
    expect(cartLink).toHaveAttribute('href', '/cart')
  })

  it('shows cart item count', () => {
    const cartWithItems: CartItem[] = [
      { cartItemId: 'c1', brand: 'A', name: 'B', price: 100, storage: '128GB', color: 'Black', colorUrl: '' },
      { cartItemId: 'c2', brand: 'C', name: 'D', price: 200, storage: '256GB', color: 'White', colorUrl: '' },
    ]
    renderMainBar('/', cartWithItems)

    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('does not show back button on home page', () => {
    renderMainBar('/')
    expect(screen.queryByLabelText('Volver')).not.toBeInTheDocument()
  })

  it('shows back button on product detail page', () => {
    renderMainBar('/products/phone-1')
    expect(screen.getByLabelText('Volver')).toBeInTheDocument()
  })
})
