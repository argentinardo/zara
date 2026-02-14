import Cart from '@/components/Cart'
import { CartProvider } from '@/context/CartContext'
import PhoneSpecs from './components/PhoneDetails'
import PhoneList from './components/PhoneList'

function App() {
  return (
    <CartProvider>
      <h1>Zara</h1>
      <PhoneList />
      <PhoneSpecs />
      <Cart />
    </CartProvider>
  )
}

export default App
