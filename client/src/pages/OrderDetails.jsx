import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchOrderDetails } from "../redux/slices/orderSlice";

const statusClasses = {
  Pending: "border-gray-300 text-gray-700",
  Processing: "border-yellow-300 text-yellow-700",
  Shipped: "border-blue-300 text-blue-700",
  Delivered: "border-green-300 text-green-700",
  Cancelled: "border-red-300 text-red-700",
};

const OrderDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { currentOrder, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetails(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-black/50 tracking-wide animate-pulse">
          Loading order...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!currentOrder) {
    return null;
  }

  return (
    <section className="bg-stone-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="border-b border-gray-300 pb-6">
          <Link
            to="/account/orders"
            className="text-xs uppercase tracking-widest text-black/50 hover:text-black"
          >
            ← Back to orders
          </Link>

          <div className="flex justify-between items-start mt-6 gap-5 flex-wrap">
            <div>
              <h1 className="text-3xl font-light">Order Details</h1>

              <p className="text-sm text-black/50 mt-2">
                {currentOrder.orderId}
              </p>

              <p className="text-sm text-black/50">
                {new Date(currentOrder.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <span
              className={`px-4 py-2 text-xs uppercase tracking-widest border ${
                statusClasses[currentOrder.orderStatus]
              }`}
            >
              {currentOrder.orderStatus}
            </span>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-light mb-5">Items</h2>

          <div className="flex flex-col gap-4">
            {currentOrder.orderItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 p-5 flex gap-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-32 object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-light text-lg">{item.name}</h3>

                  <p className="text-sm text-black/50 mt-2">
                    Size: {item.size}
                  </p>

                  <p className="text-sm text-black/50">Color: {item.color}</p>

                  <p className="mt-3 text-sm">
                    {item.quantity} × ₹{item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="flex-1 border border-gray-300 p-6">
            <h2 className="text-lg font-light mb-5">Shipping Address</h2>
            <p>{currentOrder.shippingAddress.fullName}</p>

            <p className="text-sm text-black/70">
              {currentOrder.shippingAddress.phone}
            </p>

            <p className="text-sm text-black/70 mt-2">
              {currentOrder.shippingAddress.addressLine1}
              {currentOrder.shippingAddress.addressLine2 &&
                `, ${currentOrder.shippingAddress.addressLine2}`}
            </p>

            <p className="text-sm text-black/70">
              {currentOrder.shippingAddress.city},{" "}
              {currentOrder.shippingAddress.state},{" "}
              {currentOrder.shippingAddress.postalCode}
            </p>

            <p className="text-sm text-black/70">
              {currentOrder.shippingAddress.country}
            </p>
          </div>

          <div className="border border-gray-300 p-6">
            <h2 className="text-lg font-light mb-5">Payment Summary</h2>

            <div className="flex justify-between text-sm mb-3">
              <span>Payment Method</span>

              <span>
                {currentOrder.paymentMethod === "COD"
                  ? "Cash on Delivery"
                  : currentOrder.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between text-sm mb-3">
              <span>Payment Status</span>

              <span
                className={
                  currentOrder.paymentStatus === "Paid"
                    ? "text-green-600"
                    : currentOrder.paymentStatus === "Failed" ||
                        currentOrder.paymentStatus === "Cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                }
              >
                {currentOrder.paymentStatus}
              </span>
            </div>

            {currentOrder.paidAt && (
              <div className="flex justify-between text-sm mb-3">
                <span>Paid At</span>

                <span className="text-right">
                  {new Date(currentOrder.paidAt).toLocaleString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            )}

            <div className="flex justify-between text-sm mb-3">
              <span>Items Price</span>

              <span>
                ₹
                {currentOrder.itemsPrice.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>

            <hr className="my-5 border-gray-300" />

            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>

              <span>
                ₹
                {currentOrder.totalPrice.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetails;
