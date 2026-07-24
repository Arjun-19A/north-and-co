import { useDispatch, useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/slices/authSlice";
import { MdOutlineLogout } from "react-icons/md";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const menu = [
    {
      title: "Profile",
      path: "profile",
    },
    {
      title: "Addresses",
      path: "addresses",
    },
    {
      title: "Orders",
      path: "orders",
    },
  ];

  return (
    <section className="pt-15 min-h-screen bg-stone-100">
      <div className="max-w-350 mx-auto px-6 py-15 md:px-8">
        <h1 className="text-[clamp(28px,3vw,40px)] font-light tracking-[-0.01em]">
          My Account
        </h1>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 pt-10 border-t border-gray-300">
          <aside className="w-full md:w-70 shrink-0">
            <nav className="flex flex-col gap-5 md:gap-3 px-4 rounded-lg">
              {menu.map((item) => (
                <NavLink
                  key={item.path}
                  to={`${item.path}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-5 py-4 border transition 
        ${isActive ? " border-black" : "border-gray-300 hover:border-black"}`
                  }
                >
                  <h2 className="text-[12px] font-light tracking-[0.2em] group-hover:opacity-75 transition-opacity uppercase">
                    {item.title}
                  </h2>
                </NavLink>
              ))}

              <hr className="my-2 border-black/10" />

              {userInfo && (
                <button
                  onClick={handleLogout}
                  className="flex items-center text-sm gap-1 w-fit text-[#6b6b6b] font-normal  transition-colors duration-200 border-b border-[#6b6b6b] cursor-pointer uppercase hover:text-black/90"
                >
                  <MdOutlineLogout />
                  Logout
                </button>
              )}
            </nav>
          </aside>

          <div className="flex-1 pt-6 md:pt-0">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8"></div>
    </section>
  );
};

export default Account;
