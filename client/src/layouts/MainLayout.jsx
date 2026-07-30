import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../redux/slices/cartSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  const { userInfo, guestId } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(
      fetchCart({
        guestId: userInfo ? undefined : guestId,
      }),
    );
  }, [dispatch, userInfo, guestId]);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
