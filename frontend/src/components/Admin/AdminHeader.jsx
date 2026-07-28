import { useLocation, useNavigate } from "react-router-dom";
import { FiCalendar, FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/slices/adminAuthSlice";

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
};

export default function AdminHeader({ onMenuClick }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await dispatch(logoutAdmin());

    navigate("/admin/login", {
      replace: true,
    });
  };

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
      <div className="px-5 lg:px-8 py-5.5 flex items-start justify-between gap-6">

        <div className="flex items-start gap-4">
          <button onClick={onMenuClick} className="lg:hidden mt-1 text-2xl">
            <FiMenu />
          </button>

          <div>
            <h1 className="text-3xl lg:text-[38px] font-light tracking-[-0.03em] leading-none">
              {page.title}
            </h1>

            <p className="mt-2 lg:mt-3 text-sm font-light text-black/45">
              {page.subtitle}
            </p>

            <div className="mt-4 h-px w-14 bg-black/20" />
          </div>
        </div>

        <div className="flex flex-col items-end gap-4 lg:gap-6">
          <div className="hidden md:flex items-center gap-2 text-black/45">
            <FiCalendar size={15} />

            <span className="text-xs tracking-wide">{today}</span>
          </div>

          <button
            onClick={handleLogout}
            className="
              border
              border-black
              px-4
              lg:px-5
              py-2
              text-[11px]
              uppercase
              tracking-[0.18em]
              hover:bg-black
              hover:text-white
              transition
            "
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
