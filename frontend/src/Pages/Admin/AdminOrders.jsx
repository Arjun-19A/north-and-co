import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiPackage, FiSearch } from "react-icons/fi";

import {
  fetchAdminOrders,
  fetchAdminOrderDetails,
} from "../../redux/slices/adminOrderSlice";

import OrderDrawer from "../../components/Admin/OrderDrawer";
import StatusBadge from "../../components/Admin/StatusBadge";

export default function AdminOrders() {
  const dispatch = useDispatch();

  const { orderList, orderDetails, loading, error } = useSelector(
    (state) => state.adminOrders,
  );

  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    dispatch(fetchAdminOrders());
  }, [dispatch]);
  

  const filteredOrders = useMemo(() => {
    if (!search) return orderList;

    return orderList.filter((order) => {
      const orderId = order.orderId?.toLowerCase() || "";

      const customer = order.user?.name?.toLowerCase() || "";

      return (
        orderId.includes(search.toLowerCase()) ||
        customer.includes(search.toLowerCase())
      );
    });
  }, [orderList, search]);

  const handleViewOrder = (id) => {
    dispatch(fetchAdminOrderDetails(id));
    setOpenDrawer(true);
  };

  return (
    <>
      <section className="space-y-8">
        <div className="bg-white/50">
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
            <FiSearch className="text-black/40" />

            <input
              type="text"
              placeholder="Search order or customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 outline-none text-sm bg-transparent"
            />
          </div>

          {loading ? (
            <div className="py-20 text-center text-black/45">
              Loading orders...
            </div>
          ) : error ? (
            <div className="py-20 text-center text-red-500">{error}</div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-20 text-center">
              <FiPackage className="mx-auto text-4xl text-black/20" />

              <h3 className="mt-4 text-xl font-light">No Orders Found</h3>

              <p className="mt-2 text-black/45">
                Orders will appear here once customers start purchasing.
              </p>
            </div>
          ) : (
            <table className="w-full">
              <thead className="border-b border-gray-200">
                <tr className="text-left text-[11px] uppercase tracking-[0.18em] text-black/45">
                  <th className="px-6 py-4">Order ID</th>

                  <th>Customer</th>

                  <th>Date</th>

                  <th>Total</th>

                  <th>Status</th>

                  <th className="text-right pr-6">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-gray-200 hover:bg-stone-50 transition"
                  >
                    <td className="px-6 py-5">
                      <p className="font-medium">{order.orderId}</p>
                    </td>

                    <td>
                      <p className="font-medium">{order.user?.name}</p>

                      <p className="text-xs text-black/45 mt-1">
                        {order.user?.email}
                      </p>
                    </td>

                    <td className="text-sm text-black/60">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                    <td className="font-medium">
                      ₹{order.totalPrice.toLocaleString("en-IN")}
                    </td>

                    <td>
                      <StatusBadge status={order.orderStatus} />
                    </td>

                    <td className="pr-6">
                      <div className="flex justify-end">
                        <button
                          onClick={() => handleViewOrder(order._id)}
                          className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition"
                        >
                          <FiEye />
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <OrderDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        order={orderDetails}
      />
    </>
  );
}
