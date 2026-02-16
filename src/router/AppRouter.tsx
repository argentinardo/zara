import PageCart from "@/pages/PageCart"
import PagePhoneList from "@/pages/PagePhoneList"
import PagePhoneSpecs from "@/pages/PagePhoneSpecs"
import { Routes, Route } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PagePhoneList />} />
      <Route path="/products/:id" element={<PagePhoneSpecs />} />
      <Route path="/cart" element={<PageCart />} />
    </Routes>
  )
}

export default AppRouter