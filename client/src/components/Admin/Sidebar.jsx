import { NavLink } from "react-router-dom";
import {
  HiOutlineSquares2X2,
  HiOutlineShoppingBag,
  HiOutlineCube,
  HiOutlineUsers,
} from "react-icons/hi2";

const menuItems = [
  {
    title: "Dashboard",
    path: "/admin",
    icon: HiOutlineSquares2X2,
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: HiOutlineShoppingBag,
  },
  {
    title: "Orders",
    path: "/admin/orders",
    icon: HiOutlineCube,
  },
  {
    title: "Customers",
    path: "/admin/customers",
    icon: HiOutlineUsers,
  }
];

export default function Sidebar() {
  return (
    <aside className="w-auto shrink-0 bg-stone-100 flex flex-col">
      <div className="px-8 pt-10 pb-8 border-b border-gray-300">
        <h1 className="text-3xl font-semibold tracking-tight select-none">
          North <span className="font-light">& Co.</span>
        </h1>

        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/40">
          Admin Panel
        </p>
      </div>

      <nav className="flex-1 px-6 py-8">
        <ul className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  end={item.path === "/admin"}
                  className={({ isActive }) =>
                    `
                    group
                    flex
                    items-center
                    gap-4
                    rounded-none
                    px-4
                    py-3.5
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-white border-l-2 border-black text-black"
                        : "text-black/55 hover:bg-white/70 hover:text-black"
                    }
                  `
                  }
                >
                  <Icon className="text-[18px] shrink-0" />

                  <span className="text-[14px] font-light tracking-wide">
                    {item.title}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="px-8 py-6 border-t border-gray-300">
        <p className="text-[10px] uppercase tracking-[0.25em] text-black/35">
          North & Co.
        </p>

        <p className="mt-1 text-xs text-black/45">Admin Dashboard v1.0</p>
      </div>
    </aside>
  );
}
