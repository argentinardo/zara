import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import CartBadge from "../CartBadge/CartBadge"

const MainBar = () => {
  return (
    <div className="main-bar">
      <NavLink to="/" >
        <img src={logo} alt="" />
      </NavLink>
      <NavLink to="/cart" >
        <CartBadge />
      </NavLink>
    </div>
    )
}
export default MainBar