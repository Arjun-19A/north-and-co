import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import { fetchDashboard } from "../../redux/slices/adminDashboardSlice";

export default function AdminDashboard() {
  const dispatch = useDispatch();

  const { dashboard, loading } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const stats = [
    {
      title: "Products",
      value: dashboard?.products ?? 0,
      icon: <FiShoppingBag size={18} />,
    },
    {
      title: "Orders",
      value: dashboard?.orders ?? 0,
      icon: <FiPackage size={18} />,
    },
    {
      title: "Customers",
      value: dashboard?.customers ?? 0,
      icon: <FiUsers size={18} />,
    },
    {
      title: "Revenue",
      value: `₹${(dashboard?.revenue ?? 0).toLocaleString("en-IN")}`,
      icon: <FiDollarSign size={18} />,
    },
  ];

  if (loading) {
    return (
      <section className="p-10">
        <p className="text-black/45">Loading dashboard...</p>
      </section>
    );
  }

  return (
    <section className="space-y-10">
      <div>
        <span className="text-[11px] uppercase tracking-[0.25em] text-black/40">
          Store Overview
        </span>

        <h1 className="mt-3 text-4xl font-light tracking-tight">Dashboard</h1>

        <p className="mt-3 text-black/45">
          A quick snapshot of your store's performance.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white border border-gray-300 p-7">
            <div className="flex items-center justify-between text-black/40">
              <span className="uppercase tracking-[0.2em] text-[10px]">
                {item.title}
              </span>

              {item.icon}
            </div>

            <h2 className="mt-6 text-4xl font-light tracking-tight">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Store Summary */}

      <div className="bg-white border border-gray-300">
        <div className="px-8 py-6 border-b border-gray-200">
          <h2 className="text-xl font-light">Store Summary</h2>
        </div>

        <div className="px-8 py-8 grid md:grid-cols-2 gap-10 text-sm">
          <div>
            <p className="text-black/45 mb-2">Products Available</p>
            <p className="text-3xl font-light">{dashboard?.products ?? 0}</p>
          </div>

          <div>
            <p className="text-black/45 mb-2">Registered Customers</p>
            <p className="text-3xl font-light">{dashboard?.customers ?? 0}</p>
          </div>

          <div>
            <p className="text-black/45 mb-2">Orders Received</p>
            <p className="text-3xl font-light">{dashboard?.orders ?? 0}</p>
          </div>

          <div>
            <p className="text-black/45 mb-2">Total Revenue</p>
            <p className="text-3xl font-light">
              ₹{(dashboard?.revenue ?? 0).toLocaleString("en-IN")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
