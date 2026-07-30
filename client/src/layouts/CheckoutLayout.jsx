import { Outlet, Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slices/cartSlice";

const CheckoutLayout = () => {
  const dispatch = useDispatch();

  const { userInfo, guestId } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCart(userInfo ? { userId: userInfo._id } : { guestId }));
  }, [dispatch, userInfo?._id, guestId]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-stone-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto h-18 px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="select-none">
            <h1 className="text-3xl font-semibold tracking-tight">
              North <span className="font-light">& Co.</span>
            </h1>
          </Link>

          <div className="hidden md:flex items-center gap-2 text-black/55">
            <FiLock size={14} />
            <span className="text-sm tracking-wide uppercase">
              Secure Checkout
            </span>
          </div>

          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.18em] text-black/45 hover:text-black transition-colors"
          >
            Need Help?
          </Link>
        </div>
      </header>

      <main className="flex-1 flex justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default CheckoutLayout;
