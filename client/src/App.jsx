import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Account from "./pages/Account";
import Profile from "./components/Accounts/Profile";
import Orders from "./components/Accounts/Orders";
import Addresses from "./components/Accounts/Addresses";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Checkout";
import CheckoutLayout from "./layouts/CheckoutLayout";
import OrderDetails from "./pages/OrderDetails";
import OrderSuccess from "./pages/OrderSuccess";
import ScrollToTop from "./components/ScrollToTop";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminCustomers from "./pages/Admin/AdminCutomers";
import AdminProtectedRoute from "./components/Admin/AdminProtectedRoute";
import AdminPublicRoute from "./components/Admin/AdminPublicRoute";
import AdminLogin from "./pages/Admin/AdminLogin";

const App = () => {
  return (
    <div className="relative min-h-screen bg-stone-100 text-black">
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/account" element={<Account />}>
              <Route index element={<Profile />} />
              <Route path="profile" element={<Profile />} />
              <Route path="orders" element={<Orders />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route path="addresses" element={<Addresses />} />
            </Route>
          </Route>
        </Route>

        <Route element={<AdminPublicRoute />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>
        <Route element={<AdminProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="customers" element={<AdminCustomers />} />
          </Route>
        </Route>

        <Route element={<CheckoutLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success/:id" element={<OrderSuccess />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
