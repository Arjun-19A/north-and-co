import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchMyOrders } from "../../redux/slices/orderSlice";

const statusClasses = {
  Pending: "border-gray-300 text-gray-700",
  Processing: "border-yellow-300 text-yellow-700",
  Shipped: "border-blue-300 text-blue-700",
  Delivered: "border-green-300 text-green-700",
  Cancelled: "border-red-300 text-red-700",
};

const Orders = () => {
  const dispatch = useDispatch();

  const { orders, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <p className="text-sm text-black/50">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-light tracking-tight">Order History</h2>

        <p className="text-sm text-black/50 mt-1 max-w-lg">
          Check the status of recent orders, manage returns, and download
          invoices.
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="border border-gray-300 py-14 sm:py-20 px-5 sm:px-8 flex flex-col items-center text-center">
          <h3 className="text-xl font-light">No orders yet</h3>

          <p className="text-sm text-black/50 mt-3 max-w-sm">
            Once you place your first order, it will appear here.
          </p>

          <Link
            to="/shop"
            className="mt-8 border border-black px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-black hover:text-white transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order._id} className="border border-gray-300">
              <div className="hidden sm:flex items-center justify-between px-6 py-5">
                <div>
                  <p className="text-[14px] font-light">{order.orderId}</p>

                  <p className="text-[12px] text-black/50 font-light">
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-xs uppercase tracking-[0.15em] text-black/40 mt-2">
                    {order.orderItems.length}{" "}
                    {order.orderItems.length > 1 ? "Items" : "Item"}
                  </p>
                </div>

                <span
                  className={`text-[11px] uppercase tracking-widest font-light px-3 py-1 border ${
                    statusClasses[order.orderStatus] ||
                    "border-gray-300 text-gray-700"
                  }`}
                >
                  {order.orderStatus}
                </span>

                <p className="text-[14px] font-light">
                  ₹{order.totalPrice.toLocaleString()}
                </p>

                <Link
                  to={`/account/orders/${order._id}`}
                  className="text-xs tracking-widest uppercase font-light text-black/60 border-b border-black/50 hover:text-black transition"
                >
                  View →
                </Link>
              </div>

              <div className="flex flex-col gap-4 p-4 sm:hidden">
                <div className="space-y-1">
                  <p className="text-sm sm:text-[14px] font-light break-all">
                    {order.orderId}
                  </p>

                  <p className="text-[11px] sm:text-xs text-black/50 font-light">
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>

                  <p className="text-xs uppercase tracking-[0.15em] text-black/40 mt-2">
                    {order.orderItems.length}{" "}
                    {order.orderItems.length > 1 ? "Items" : "Item"}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 w-full">
                  <span
                    className={`text-[11px] uppercase tracking-widest font-light px-3 py-1 border ${
                      statusClasses[order.orderStatus] ||
                      "border-gray-300 text-gray-700"
                    }`}
                  >
                    {order.orderStatus}
                  </span>

                  <p className="text-[14px] font-light">
                    ₹{order.totalPrice.toLocaleString()}
                  </p>

                  <Link
                    to={`/account/orders/${order._id}`}
                    className="text-[11px] sm:text-xs tracking-[0.15em] uppercase font-light text-black/60 border-b border-black/50 hover:text-black transition"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
