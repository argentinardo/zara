import { NavLink, useMatch, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import cartFill from "@/assets/cart-fill.svg"
import cartEmpty from "@/assets/cart-empty.svg"
import chevronLeft from "@/assets/chevron-left.svg"


    
const MainBar = () => {
  const { cart } = useContext(CartContext)
  const isProductSpecs = useMatch('/products/:id')
  const navigate = useNavigate()

  return (
    <div className="main-bar">
      <NavLink to="/">
        <img className="main-bar__logo" src={logo} alt="" />
      </NavLink>
      <NavLink className="main-bar__cart-badge" to="/cart">
        <img className="main-bar__cart-icon" src={cart.length > 0 ? cartFill : cartEmpty} />
        <div className="main-bar__cart-text">{cart.length}</div>
      </NavLink>
      {isProductSpecs && (
        <div className="main-bar__footer">
          <button
            className="main-bar__back"
            onClick={() => navigate(-1)}
            aria-label="Volver"
          ><img src={chevronLeft} alt="" />back
          </button>
        </div>
      )}
    </div>
  )
}
export default MainBar    