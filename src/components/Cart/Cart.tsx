import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <section className='cart'>       
      <h2 className='cart__title'>CART ({cart.length})</h2>
      <ul className='cart__list' role="list">
        {cart.map((item) => (
          <li className='cart__item' key={`${item.cartItemId}`}>
            <img className='cart__item-img' src={item.colorUrl} alt={`${item.name} ${item.color} ${item.storage}`} />
            <div className='cart__item-data'>
              {item.brand} {item.name} <br />
              {item.storage} | {item.color}
              <span className='cart__item-price'>{item.price} EUR</span>
            <button
              className='cart__item-delete'
              type="button"
              onClick={() => removeFromCart(item.cartItemId)}
              aria-label={`Eliminar ${item.name} del carrito`}
            >
              Eliminar
            </button> 
            </div>
          </li>
        ))}
      </ul>
      <div className="cart__footer">
        <Link to="/" className='main-button main-button--light'>Continue shopping</Link>
        
        {cart.length > 0 ? (
          <>
            <p className="cart__footer-price">
              Total &nbsp;&nbsp;&nbsp;&nbsp;{totalPrice.toFixed(2)} EUR
            </p>
            <MainButton>pay</MainButton>
          </>
        ) : null}
      </div>
    </section> 
  )
}

export default Cart