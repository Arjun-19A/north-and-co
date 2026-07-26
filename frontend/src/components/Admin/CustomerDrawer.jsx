import {
  FiMail,
  FiPhone,
  FiShoppingBag,
  FiDollarSign,
  FiUser,
  FiX,
} from "react-icons/fi";

export default function CustomerDrawer({ open, onClose, customer }) {
  if (!open || !customer) return null;

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      <aside className="fixed right-0 top-0 h-screen w-[480px] bg-white border-l border-gray-300 z-50 flex flex-col">
        {/* Header */}

        <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-start">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/40">
              Customer
            </p>

            <h2 className="mt-2 text-2xl font-light">{customer.name}</h2>
          </div>

          <button
            onClick={onClose}
            className="text-xl text-black/45 hover:text-black"
          >
            <FiX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10">
          {/* Basic Info */}

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
              Customer Information
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3 items-center">
                <FiUser className="text-black/45" />

                <div>
                  <p className="text-xs text-black/45">Name</p>

                  <p>{customer.name}</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <FiMail className="text-black/45" />

                <div>
                  <p className="text-xs text-black/45">Email</p>

                  <p>{customer.email}</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <FiPhone className="text-black/45" />

                <div>
                  <p className="text-xs text-black/45">Phone</p>

                  <p>{customer.phone || "-"}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
              Statistics
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-200 p-5">
                <FiShoppingBag className="text-black/40 mb-3" />

                <p className="text-xs text-black/45 uppercase">Orders</p>

                <h4 className="text-2xl font-light mt-2">
                  {customer.ordersCount}
                </h4>
              </div>

              <div className="border border-gray-200 p-5">
                <FiDollarSign className="text-black/40 mb-3" />

                <p className="text-xs text-black/45 uppercase">Total Spent</p>

                <h4 className="text-2xl font-light mt-2">
                  ₹{customer.totalSpent.toLocaleString("en-IN")}
                </h4>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-5">
              Recent Orders
            </h3>

            <div className="space-y-3">
              {customer.recentOrders.length > 0 ? (
                customer.recentOrders.map((order) => (
                  <div key={order._id} className="border border-gray-200 p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{order.orderId}</p>

                        <p className="text-xs text-black/45 mt-1">
                          {new Date(order.createdAt).toLocaleDateString(
                            "en-IN",
                          )}
                        </p>
                      </div>

                      <div className="text-right">
                        <p className="font-medium">
                          ₹{order.totalPrice.toLocaleString("en-IN")}
                        </p>

                        <span className="text-xs text-black/45">
                          {order.orderStatus}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-black/45">No orders found.</p>
              )}
            </div>
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
              Member Since
            </h3>

            <p>
              {new Date(customer.createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </section>
        </div>
      </aside>
    </>
  );
}
