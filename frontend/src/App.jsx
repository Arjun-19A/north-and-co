import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Collections from "./Pages/Collections";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Account from "./Pages/Account";
import Profile from "./components/Accounts/Profile";
import Orders from "./components/Accounts/Orders";
import Addresses from "./components/Accounts/Addresses";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./Pages/Checkout";
import CheckoutLayout from "./components/layouts/CheckoutLayout";
import OrderDetails from "./Pages/OrderDetails";
import OrderSuccess from "./Pages/OrderSuccess";
import ScrollToTop from "./components/ScrollToTop";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./components/Admin/Dashboard";
import AdminProducts from "./Pages/Admin/AdminProducts";
import AdminOrders from "./Pages/Admin/AdminOrders";
import AdminCustomers from "./Pages/Admin/AdminCutomer";

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

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="customers" element={<AdminCustomers />} />
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
