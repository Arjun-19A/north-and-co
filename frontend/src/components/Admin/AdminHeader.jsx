import { useLocation } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";

const pageInfo = {
  "/admin": {
    title: "Dashboard",
    subtitle: "Monitor store performance and activity",
  },
  "/admin/products": {
    title: "Products",
    subtitle: "Manage catalogue and inventory",
  },
  "/admin/orders": {
    title: "Orders",
    subtitle: "Track and fulfill customer orders",
  },
  "/admin/customers": {
    title: "Customers",
    subtitle: "View customer accounts and activity",
  },
  "/admin/settings": {
    title: "Settings",
    subtitle: "Store preferences and configuration",
  },
};

export default function AdminHeader() {
  const location = useLocation();

  const page = pageInfo[location.pathname] || {
    title: "Admin",
    subtitle: "Manage your store",
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="border-b border-gray-300 bg-stone-100">
      <div className="px-8 py-5.5 flex items-end justify-between">
        {/* Left */}
        <div>
          <h1 className="text-[38px] font-light tracking-[-0.03em] leading-none">
            {page.title}
          </h1>

          <p className="mt-3 text-sm font-light text-black/45">
            {page.subtitle}
          </p>

          <div className="mt-4 h-px w-14 bg-black/20" />
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2 text-black/45">
            <FiCalendar size={15} />
            <span className="text-xs tracking-wide">{today}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
