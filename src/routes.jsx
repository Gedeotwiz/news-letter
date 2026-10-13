import Home from "./pages/home"
import Register from "./pages/register"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import { Dashboard } from "./pages/dashboard"
import { DashboardLayout } from "./components/dashboardLayout"
import { Order } from "./pages/order"
import { Product } from "./pages/product"
import { Profile } from "./pages/profile"
import { Setting } from "./pages/setting"


function Routers () {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="" element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="register" element={<Register/>}/>
      </Route>

      <Route path="admin" element={<DashboardLayout/>}>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="orders" element={<Order/>}/>
        <Route path="products" element={<Product/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="settings" element={<Setting/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default Routers