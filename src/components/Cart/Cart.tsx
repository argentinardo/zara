import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <section>
        <h2>Carrito vacío</h2>
        <a href="/">Continue shopping</a>
      </section>
    )
  }

  return (
    <section>       
      <h2>Carrito</h2>
      <ul role="list">
        {cart.map((item) => (
          <li key={item.id}>
            <span>{item.brand} {item.name}</span>
            <span>{item.price} €</span>
            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              aria-label={`Eliminar ${item.name} del carrito`}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <a href="/">continue shopping</a>
      <p>Total: {totalPrice.toFixed(2)} EUR</p>
      <a href="/">pay</a>
    </section>
  )
}

export default Cart