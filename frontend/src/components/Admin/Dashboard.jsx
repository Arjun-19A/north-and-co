import { useDispatch, useSelector } from "react-redux";
import {
  FiShoppingBag,
  FiPackage,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";
import { useEffect } from "react";
import { fetchDashboard } from "../../redux/slices/adminDashboardSlice";

export default function Dashboard() {
  const dispatch = useDispatch();

  const { dashboard, loading, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboard());
  }, [dispatch]);

  const stats = [
    {
      title: "Products",
      value: dashboard?.totalProducts ?? 0,
      icon: <FiShoppingBag />,
    },
    {
      title: "Orders",
      value: dashboard?.totalOrders ?? 0,
      icon: <FiPackage />,
    },
    {
      title: "Customers",
      value: dashboard?.totalCustomers ?? 0,
      icon: <FiUsers />,
    },
    {
      title: "Revenue",
      value: `₹${(dashboard?.totalRevenue ?? 0).toLocaleString("en-IN")}`,
      icon: <FiDollarSign />,
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-4xl font-light tracking-tight">Welcome back.</h2>

        <p className="mt-2 text-black/45">
          Here's a quick overview of your store today.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item) => (
          <div key={item.title} className="bg-white border border-gray-300 p-7">
            <div className="flex items-center justify-between text-black/40">
              <span className="uppercase tracking-[0.2em] text-[10px]">
                {item.title}
              </span>

              {item.icon}
            </div>

            <h3 className="mt-6 text-4xl font-light tracking-tight">
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-300">
        <div className="px-8 py-6 border-b border-gray-200">
          <h3 className="text-xl font-light">Recent Activity</h3>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="px-8 py-5 text-sm text-black/70">
            Order <span className="font-medium">#ORD-5F2A</span> placed.
          </div>

          <div className="px-8 py-5 text-sm text-black/70">
            New customer account created.
          </div>

          <div className="px-8 py-5 text-sm text-black/70">
            Product <span className="font-medium">Linen Shirt</span> updated.
          </div>

          <div className="px-8 py-5 text-sm text-black/70">
            Inventory updated for Cargo Pants.
          </div>
        </div>
      </div>
    </section>
  );
}
