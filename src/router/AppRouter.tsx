import PageCart from "@/pages/PageCart"
import PagePhoneList from "@/pages/PagePhoneList"
import PagePhoneSpecs from "@/pages/PagePhoneSpecs"
import Layout from "@/components/Layout"
import { Routes, Route } from "react-router-dom"

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PagePhoneList />} />
        <Route path="products/:id" element={<PagePhoneSpecs />} />
        <Route path="cart" element={<PageCart />} />
      </Route>
    </Routes>
  )
}

export default AppRouter