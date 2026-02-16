import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className='cart'>       
      <h2 className='cart__title'>CART ({cart.length})</h2>
      <ul className='cart_list' role="list">
        {cart.map((item) => (
          <li key={`${item.cartItemId}`}>
            <img className='cart_item-img' src={item.colorUrl} alt={`${item.name} ${item.color} ${item.storage}`} />
            <span className='cart_item-data'>{item.brand} {item.name}</span>
            <span className='cart_item-data'>{item.storage} | {item.color}</span>
            <span className='cart_item-data'>{item.price} EUR</span>
            <button
              className='cart_item-delete'
              type="button"
              onClick={() => removeFromCart(item.cartItemId)}
              aria-label={`Eliminar ${item.name} del carrito`}
            >
              Eliminar
            </button> 
          </li>
        ))}
      </ul>
      <div className="cart__footer">
        <Link className="cart__footer-continue" to="/">Continue shopping</Link>
        <p className="cart__footer-total">Total: {totalPrice.toFixed(2)} EUR</p>
        <a className="cart__footer-pay" href="/">pay</a>
      </div>
    </section>
  )
}

export default Cart