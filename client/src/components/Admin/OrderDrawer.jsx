/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateAdminOrderStatus } from "../../redux/slices/adminOrderSlice";
import StatusBadge from "./StatusBadge";

const statuses = [
  "Pending",
  "Confirmed",
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

export default function OrderDrawer({ open, onClose, order }) {
  const dispatch = useDispatch();

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (order) {
      setStatus(order.orderStatus);
    }
  }, [order]);

  if (!open || !order) return null;

  const handleUpdate = () => {
    dispatch(
      updateAdminOrderStatus({
        id: order._id,
        orderStatus: status,
      }),
    );
  };

  const availableStatuses =
    order.paymentMethod === "Razorpay" && order.paymentStatus !== "Paid"
      ? ["Pending", "Cancelled"]
      : statuses;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
      />

      <aside className="fixed right-0 top-0 h-screen w-140 bg-stone-100 border-l border-gray-300 z-50 flex flex-col">
        <div className="px-8 py-6 border-b border-gray-300 bg-white flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3">
              <p
                className="
                text-xs uppercase tracking-[0.25em]
                text-black/40
              "
              >
                Order
              </p>

              <StatusBadge status={order.orderStatus} />
            </div>

            <h2 className="mt-2 text-3xl font-light">#{order.orderId}</h2>

            <p className="mt-2 text-sm text-black/45">
              {new Date(order.createdAt).toLocaleDateString("en-IN")}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-xl text-black/45 hover:text-black"
          >
            <FiX />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <section className="bg-white/60 border border-gray-300 p-4">
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-black/40 mb-3">
              Customer
            </h3>

            <p className="font-medium">{order.user?.name}</p>

            <p className="text-sm text-black/55 mt-1">{order.user?.email}</p>

            <p className="text-sm text-black/55">{order.user?.phone}</p>
          </section>

          <section className="bg-white/60 border border-gray-300 p-4">
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-black/40 mb-3">
              Shipping Address
            </h3>

            <p className="font-medium">{order.shippingAddress.fullName}</p>

            <p className="text-sm leading-5 text-black/60">
              {order.shippingAddress.addressLine1}
              <br />
              {order.shippingAddress.addressLine2}
              <br />
              {order.shippingAddress.city}, {order.shippingAddress.state}
              <br />
              {order.shippingAddress.postalCode}
              <br />
              {order.shippingAddress.country}
            </p>
          </section>

          <section className="bg-white/70 border border-gray-300 p-4">
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-black/40 mb-6">
              Ordered Products
            </h3>

            <div className="space-y-5">
              {order.orderItems.map((item) => (
                <div
                  key={item.product}
                  className="flex gap-5 border-b border-gray-200 pb-5 last:border-none last:pb-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-20 object-cover border border-gray-200"
                  />

                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>

                    <p className="text-xs text-black/45 font-mono">
                      SKU: {item.sku}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-black/55">
                      <p>
                        <span className="text-black/40">Size:</span> {item.size}
                      </p>

                      <p>
                        <span className="text-black/40">Color:</span>{" "}
                        {item.color}
                      </p>

                      <p>
                        <span className="text-black/40">Qty:</span>{" "}
                        {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="mt-2 text-xs text-black/40">Total</p>

                    <p className="font-normal">
                      ₹{item.price.toLocaleString("en-IN")}
                      <span className="text-sm"> x </span>
                      {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border border-gray-300 p-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-black/60">Items Total</span>

              <span>₹{order.itemsPrice.toLocaleString("en-IN")}</span>
            </div>

            {/* <div className="flex justify-between text-lg font-normal pt-2 border-t border-gray-200">
              <span>Total</span>

              <span>
                ₹
                {Number(order.totalPrice).toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div> */}

            <section className="bg-white border border-gray-300 p-6 space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.18em] text-black/40 mb-4">
                Payment Summary
              </h3>

              <div className="flex justify-between">
                <span className="text-black/60">Payment Method</span>

                <span className="font-medium">{order.paymentMethod}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-black/60">Payment Status</span>

                <span
                  className={`
        font-medium
        ${
          order.paymentStatus === "Paid"
            ? "text-green-600"
            : order.paymentStatus === "Failed"
              ? "text-red-500"
              : "text-yellow-600"
        }
      `}
                >
                  {order.paymentStatus}
                </span>
              </div>

              {order.razorpayOrderId && (
                <div className="flex justify-between gap-4">
                  <span className="text-black/60">Razorpay Order ID</span>

                  <span className="text-xs font-mono text-black/50 break-all text-right">
                    {order.razorpayOrderId}
                  </span>
                </div>
              )}

              {order.razorpayPaymentId && (
                <div className="flex justify-between gap-4">
                  <span className="text-black/60">Payment ID</span>

                  <span className="text-xs font-mono text-black/50 break-all text-right">
                    {order.razorpayPaymentId}
                  </span>
                </div>
              )}

              {order.paidAt && (
                <div className="flex justify-between gap-4">
                  <span className="text-black/60">Paid At</span>

                  <span className="text-sm text-right">
                    {new Date(order.paidAt).toLocaleString("en-IN", {
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

              <div className="flex justify-between text-lg font-normal pt-4 border-t border-gray-200">
                <span>Total</span>

                <span>
                  ₹
                  {Number(order.totalPrice).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </section>
          </section>

          <section className="bg-white border border-gray-300 p-6">
            <h3 className="text-[11px] uppercase tracking-[0.18em] text-black/40 mb-4">
              Update Order Status
            </h3>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-gray-300 bg-white p-3 outline-none"
            >
              {availableStatuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <button
              onClick={handleUpdate}
              className="w-full mt-5 bg-black text-white py-3 hover:bg-neutral-800 transition"
            >
              Save Changes
            </button>
          </section>
        </div>
      </aside>
    </>
  );
}

// import { useEffect, useState } from "react";
// import { FiX, FiCheck } from "react-icons/fi";
// import { useDispatch } from "react-redux";
// import { updateAdminOrderStatus } from "../../redux/slices/adminOrderSlice";
// import StatusBadge from "./StatusBadge";

// const statuses = [
//   "Pending",
//   "Confirmed",
//   "Processing",
//   "Shipped",
//   "Delivered",
//   "Cancelled",
// ];

// export default function OrderDrawer({ open, onClose, order }) {
//   const dispatch = useDispatch();

//   const [status, setStatus] = useState("");
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     if (order) setStatus(order.orderStatus);
//   }, [order]);

//   if (!open || !order) return null;

//   const handleUpdate = async () => {
//     setUpdating(true);

//     await dispatch(
//       updateAdminOrderStatus({
//         id: order._id,
//         orderStatus: status,
//       }),
//     );

//     setUpdating(false);
//   };

//   const changed = status !== order.orderStatus;

//   return (
//     <>
//       <div
//         onClick={onClose}
//         className="
//           fixed inset-0 bg-black/50 backdrop-blur-sm
//           z-40 transition-opacity
//         "
//       />

//       <aside
//         className="
//           fixed right-0 top-0 h-screen
//           w-full sm:w-140
//           bg-[#f8f7f4]
//           z-50
//           flex flex-col
//           shadow-2xl
//           animate-slideIn
//         "
//       >
//         <header
//           className="
//           sticky top-0 z-10
//           bg-white/90 backdrop-blur
//           border-b border-black/10
//           px-7 py-6
//           flex justify-between
//         "
//         >
//           <div>
//             <div className="flex items-center gap-3">
//               <p
//                 className="
//                 text-xs uppercase tracking-[0.25em]
//                 text-black/40
//               "
//               >
//                 Order
//               </p>

//               <StatusBadge status={order.orderStatus} />
//             </div>

//             <h2
//               className="
//               text-3xl
//               font-semibold
//               tracking-tight
//               mt-3
//             "
//             >
//               #{order.orderId}
//             </h2>

//             <p className="text-sm text-black/50 mt-2">
//               {new Date(order.createdAt).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "long",
//                 year: "numeric",
//               })}
//             </p>
//           </div>

//           <button
//             onClick={onClose}
//             className="
//               h-10 w-10
//               rounded-full
//               hover:bg-black/5
//               flex items-center justify-center
//               transition
//             "
//           >
//             <FiX size={20} />
//           </button>
//         </header>

//         <div
//           className="
//           flex-1 overflow-y-auto
//           px-7 py-6
//           space-y-6
//           "
//         >
//           <Card title="Customer">
//             <p className="font-semibold">{order.user?.name}</p>

//             <div
//               className="
//               mt-2
//               text-sm
//               text-black/55
//               space-y-1
//             "
//             >
//               <p>{order.user?.email}</p>
//               <p>{order.user?.phone}</p>
//             </div>
//           </Card>

//           <Card title="Shipping Address">
//             <p className="font-semibold">{order.shippingAddress.fullName}</p>

//             <p
//               className="
//               mt-3
//               text-sm
//               leading-6
//               text-black/60
//             "
//             >
//               {order.shippingAddress.addressLine1}
//               <br />
//               {order.shippingAddress.addressLine2}
//               <br />
//               {order.shippingAddress.city}, {order.shippingAddress.state}
//               <br />
//               {order.shippingAddress.postalCode}
//               <br />
//               {order.shippingAddress.country}
//             </p>
//           </Card>

//           <Card title="Products">
//             <div className="space-y-5">
//               {order.orderItems.map((item) => (
//                 <div
//                   key={item.product}
//                   className="
//                 flex gap-4
//                 pb-5
//                 border-b border-black/10
//                 last:border-none
//                 "
//                 >
//                   <img
//                     src={item.image}
//                     className="
//                   w-20 h-24
//                   rounded-lg
//                   object-cover
//                   border
//                   "
//                   />

//                   <div className="flex-1">
//                     <h4 className="font-semibold">{item.name}</h4>

//                     <p
//                       className="
//                     text-xs
//                     text-black/40
//                     mt-1
//                   "
//                     >
//                       SKU: {item.sku}
//                     </p>

//                     <div
//                       className="
//                     mt-3
//                     flex gap-3
//                     text-xs
//                     text-black/60
//                   "
//                     >
//                       <span>{item.size}</span>

//                       <span>{item.color}</span>

//                       <span>Qty {item.quantity}</span>
//                     </div>
//                   </div>

//                   <div className="text-right">
//                     <p className="font-semibold">
//                       ₹{(item.price * item.quantity).toLocaleString("en-IN")}
//                     </p>

//                     <p
//                       className="
//                     text-xs
//                     text-black/40
//                     mt-1
//                   "
//                     >
//                       Total
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </Card>

//           <Card title="Payment Summary">
//             <SummaryRow
//               label="Items"
//               value={`₹${order.itemsPrice.toLocaleString("en-IN")}`}
//             />

//             <SummaryRow label="Payment" value={order.paymentMethod} />

//             <div
//               className="
//               pt-4 mt-4
//               border-t
//               flex justify-between
//               text-xl
//               font-semibold
//             "
//             >
//               <span>Total</span>

//               <span>₹{order.totalPrice.toLocaleString("en-IN")}</span>
//             </div>
//           </Card>
//         </div>

//         <footer
//           className="
//           sticky bottom-0
//           bg-white
//           border-t
//           px-7 py-5
//           "
//         >
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="
//             w-full
//             rounded-xl
//             border
//             px-4 py-3
//             bg-white
//             outline-none
//             "
//           >
//             {statuses.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>

//           <button
//             disabled={!changed || updating}
//             onClick={handleUpdate}
//             className={`
//               mt-4
//               w-full
//               rounded-xl
//               py-3
//               flex
//               justify-center
//               items-center
//               gap-2
//               transition

//               ${
//                 changed
//                   ? "bg-black text-white hover:bg-neutral-800"
//                   : "bg-black/10 text-black/40 cursor-not-allowed"
//               }
//             `}
//           >
//             {updating ? (
//               "Saving..."
//             ) : (
//               <>
//                 <FiCheck />
//                 Save Changes
//               </>
//             )}
//           </button>
//         </footer>
//       </aside>
//     </>
//   );
// }

// function Card({ title, children }) {
//   return (
//     <section
//       className="
// bg-white
// rounded-2xl
// border border-black/10
// p-6
// shadow-sm
// "
//     >
//       <h3
//         className="
// text-xs
// uppercase
// tracking-[0.2em]
// text-black/40
// mb-5
// "
//       >
//         {title}
//       </h3>

//       {children}
//     </section>
//   );
// }

// function SummaryRow({ label, value }) {
//   return (
//     <div
//       className="
// flex justify-between
// text-sm
// text-black/60
// "
//     >
//       <span>{label}</span>
//       <span className="text-black">{value}</span>
//     </div>
//   );
// }
