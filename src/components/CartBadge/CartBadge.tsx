import { useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import cartFill from "@/assets/cart-fill.svg"
import cartEmpty from "@/assets/cart-empty.svg"

const CartBadge = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className="cart-badge">
            <img src={cart.length > 0 ? cartFill : cartEmpty} /> ({cart.length})
        </div>
    
  )
}
export default CartBadge