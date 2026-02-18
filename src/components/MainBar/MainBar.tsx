import { NavLink, useMatch, useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"
import CartBadge from "../CartBadge/CartBadge"

const MainBar = () => {
  const isProductSpecs = useMatch('/products/:id')
  const navigate = useNavigate()

  return (
    <div className="main-bar">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <NavLink to="/cart">
        <CartBadge />
      </NavLink>
      {isProductSpecs && (
        <button
          type="button"
          className="main-bar__back"
          onClick={() => navigate(-1)}
          aria-label="Volver"
        >
          back
        </button>
      )}
    </div>
  )
}
export default MainBar