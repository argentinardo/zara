import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.svg"
import CartBadge from "../CartBadge/CartBadge"

const MainBar = () => {
  return (
    <div className="mainBar">
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