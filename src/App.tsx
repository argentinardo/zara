import { CartProvider } from '@/context/CartContext'
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider>
      <h1>Zara</h1>
      <Cart />
    </CartProvider>
  )
}

export default App
