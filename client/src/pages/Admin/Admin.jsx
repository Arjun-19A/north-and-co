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
      <section className="py-20 flex justify-center">
        <p className="text-black/45 animate-pulse">Loading dashboard...</p>
      </section>
    );
  }

  return (
    <section className="space-y-8 lg:space-y-10">
      <div>
        <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-black/40">
          Store Overview
        </span>

        <h1 className="mt-2 lg:mt-3 text-3xl lg:text-5xl font-light tracking-tight">
          Dashboard
        </h1>

        <p className="mt-3 text-sm lg:text-base text-black/45 max-w-xl">
          A quick snapshot of your store's performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white border border-gray-300 p-6">
            <div className="flex items-center justify-between text-black/40">
              <span className="uppercase tracking-[0.18em] text-xs">
                {item.title}
              </span>

              {item.icon}
            </div>

            <h2 className="mt-5 text-3xl lg:text-4xl font-light wrap-break-word">
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-300">
        <div className="px-5 lg:px-8 py-5 lg:py-6 border-b border-gray-200">
          <h2 className="text-lg lg:text-xl font-light">Store Summary</h2>
        </div>
      </div>
    </section>
  );
}
