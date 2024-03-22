import { Routes, Route } from "react-router-dom";
import { HomePage, ProductsList, ProductDetail, Login, Register, CartPage, OrderPage, DashboardPage, PageNotFound, ProfilePage } from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<ProtectedRoutes><CartPage /></ProtectedRoutes>} />
        <Route path="order-summary" element={<ProtectedRoutes><OrderPage /></ProtectedRoutes>} />
        <Route path="Dashboard" element={<ProtectedRoutes><DashboardPage /></ProtectedRoutes>} />
        <Route path="Profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
