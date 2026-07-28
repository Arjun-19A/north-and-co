import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEye, FiSearch } from "react-icons/fi";
import {
  fetchCustomerDetails,
  fetchCustomers,
  resetCustomerDetails,
} from "../../redux/slices/adminCustomerSlice";
import CustomerDrawer from "../../components/Admin/CustomerDrawer";

export default function AdminCustomers() {
  const dispatch = useDispatch();
  const [openDrawer, setOpenDrawer] = useState(false);

  const { customers, loading, customerDetails } = useSelector(
    (state) => state.adminCustomers,
  );

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  const filteredCustomers = useMemo(() => {
    const q = search.toLowerCase();

    return customers.filter(
      (customer) =>
        (customer.name ?? "").toLowerCase().includes(q) ||
        (customer.email ?? "").toLowerCase().includes(q) ||
        (customer.phone ?? "").includes(search),
    );
  }, [customers, search]);

  return (
    <section className="space-y-8">
      <div>
        <p className="text-md text-black/45">{customers.length} customers</p>
      </div>

      <div className="bg-white border border-gray-300">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
          <FiSearch className="text-black/40" />

          <input
            type="text"
            placeholder="Search by name, email or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none bg-transparent text-sm"
          />
        </div>

        {loading ? (
          <div className="py-20 text-center text-black/45">
            Loading customers...
          </div>
        ) : filteredCustomers.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="text-xl font-light">No customers found</h3>

            <p className="mt-2 text-black/45">Try a different search.</p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr className="text-left text-[11px] uppercase tracking-[0.18em] text-black/45">
                <th className="px-6 py-4">Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Joined</th>
                <th className="text-right pr-6">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer._id}
                  className="border-b border-gray-200 hover:bg-stone-50 transition"
                >
                  <td className="px-6 py-5">
                    <div>
                      <h4 className="font-medium">{customer.name}</h4>
                    </div>
                  </td>

                  <td className="text-sm">{customer.email}</td>

                  <td className="text-sm text-black/60">
                    {customer.phone || "-"}
                  </td>

                  <td className="font-medium">{customer.ordersCount}</td>

                  <td className="font-medium">
                    ₹{customer.totalSpent.toLocaleString("en-IN")}
                  </td>

                  <td className="text-sm text-black/60">
                    {new Date(customer.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  <td className="pr-6">
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          dispatch(fetchCustomerDetails(customer._id));
                          setOpenDrawer(true);
                        }}
                        className="text-black/50 hover:text-black transition"
                      >
                        <FiEye />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <CustomerDrawer
        open={openDrawer}
        customer={customerDetails}
        onClose={() => {
          setOpenDrawer(false);
          dispatch(resetCustomerDetails());
        }}
      />
    </section>
  );
}
