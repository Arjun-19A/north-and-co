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
      value: dashboard?.products ?? 0,
      icon: <FiShoppingBag />,
    },
    {
      title: "Orders",
      value: dashboard?.orders ?? 0,
      icon: <FiPackage />,
    },
    {
      title: "Customers",
      value: dashboard?.customers ?? 0,
      icon: <FiUsers />,
    },
    {
      title: "Revenue",
      value: `₹${(dashboard?.revenue ?? 0).toLocaleString("en-IN")}`,
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

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-300">
          <div className="px-6 py-5 border-b">
            <h2 className="text-xl font-light">Recent Orders</h2>
          </div>

          <div className="divide-y">
            {dashboard?.recentOrders?.length ? (
              dashboard.recentOrders.map((order) => (
                <div
                  key={order._id}
                  className="px-6 py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{order.orderId}</p>

                    <p className="text-sm text-black/45">{order.user?.name}</p>
                  </div>

                  <div className="text-right">
                    <p className="font-medium">
                      ₹{order.totalPrice.toLocaleString()}
                    </p>

                    <p className="text-xs text-black/45">{order.orderStatus}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="p-6 text-black/45">No recent orders.</p>
            )}
          </div>
        </div>
        <div className="bg-white border border-gray-300">
          <div className="px-6 py-5 border-b">
            <h2 className="text-xl font-light">Low Stock Products</h2>
          </div>

          <div className="divide-y">
            {dashboard?.lowStockProducts?.length ? (
              dashboard.lowStockProducts.map((product) => (
                <div
                  key={product._id}
                  className="px-6 py-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{product.name}</p>

                    <p className="text-xs font-mono text-black/45">
                      {product.sku}
                    </p>
                  </div>

                  <span
                    className={`text-sm font-medium ${
                      product.countInStock === 0
                        ? "text-red-600"
                        : "text-amber-600"
                    }`}
                  >
                    {product.countInStock} pcs
                  </span>
                </div>
              ))
            ) : (
              <p className="p-6 text-black/45">No low stock products.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
