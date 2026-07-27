import { useDispatch, useSelector } from "react-redux";

import CartHeading from "../components/Cart/CartHeading";
import CartProducts from "../components/Cart/CartProducts";
import OrderSummary from "../components/Cart/OrderSummary";

import {
  updateCartItemQuantity,
  removeFromCart,
  selectCartProducts,
  selectCartSubtotal,
  selectCartLoading,
  selectCartTotal,
} from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectCartProducts) || [];
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);
  const loading = useSelector(selectCartLoading);

  const { userInfo, guestId } = useSelector((state) => state.auth);

  const increaseQty = (item) => {
    dispatch(
      updateCartItemQuantity({
        productId: item.productId,
        quantity: item.quantity + 1,
        size: item.size,
        color: item.color,
        guestId: userInfo ? undefined : guestId,
      }),
    );
  };

  const decreaseQty = (item) => {
    dispatch(
      updateCartItemQuantity({
        productId: item.productId,
        quantity: item.quantity - 1,
        size: item.size,
        color: item.color,
        guestId: userInfo ? undefined : guestId,
      }),
    );
  };

  const removeProduct = (item) => {
    dispatch(
      removeFromCart({
        productId: item.productId,
        size: item.size,
        color: item.color,
        guestId: userInfo ? undefined : guestId,
      }),
    );
  };

  const hasStockIssue = products.some((item) => !item.hasEnoughStock);

  return (
    <section className="pt-10 md:pt-14 min-h-screen bg-stone-100">
      <div className="max-w-355 mx-auto px-5 md:px-8 lg:px-10 py-20">
        <CartHeading products={products} />

        {!loading && products.length === 0 ? (
          <div className="max-w-355 mx-auto px-8 py-30 text-center">
            <p className="text-[15px] font-light text-black/60 mb-8">
              Your bag is empty.
            </p>
            <Link
              to="/shop"
              className="text-[12px] tracking-[0.2em] uppercase font-light border-b pb-0.5"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 pt-3">
            <CartProducts
              products={products}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeProduct={removeProduct}
            />

            <OrderSummary
              subtotal={subtotal}
              total={total}
              hasStockIssue={hasStockIssue}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
