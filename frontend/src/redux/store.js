import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import addressReducer from "./slices/addressSlice";
import orderReducer from "./slices/orderSlice";
import adminDashboardReducer from "./slices/adminDashboardSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrderReducer from "./slices/adminOrderSlice";
import adminCustomerReducer from "./slices/adminCustomerSlice";
import adminAuthReducer from "./slices/adminAuthSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    dashboard: adminDashboardReducer,
    adminProducts: adminProductReducer,
    adminOrders: adminOrderReducer,
    adminCustomers: adminCustomerReducer,
    adminAuth: adminAuthReducer,
  },
});

export default store;
