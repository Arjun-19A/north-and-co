import { Link } from "react-router-dom";
import { selectCartTotal } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";

const OrderSummary = ({ subtotal }) => {
  const total = useSelector(selectCartTotal);
  return (
    <div className="sticky top-50 p-8 border border-gray-200 h-fit">
      <h2 className="font-extralight uppercase tracking-widest mb-6 text-black">
        Order Summary
      </h2>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <span className="text-gray-500">Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-500">Shipping</span>
          <span className="text-green-600">Free</span>
        </div>

        <div className="flex border-t border-gray-200 pt-4 justify-between">
          <span className="text-lg text-black">Total</span>
          <span className="text-lg font-medium text-black">₹{total}</span>
        </div>
      </div>

      <Link to="/checkout">
        <button
          className="
      w-full
      mt-10
      bg-black
      py-3 uppercase
      text-white
      hover:bg-zinc-700
      transition text-sm tracking-widest cursor-pointer
      "
        >
          Proceed to Checkout
        </button>
      </Link>

      <button
        className="
      w-full
      mt-2
      bg-transparent
      py-3 uppercase
      text-sm tracking-widest
      "
      >
        <Link
          to="/shop"
          className="text-black/60
      hover:text-black/80"
        >
          Continue Shopping
        </Link>
      </button>

      <div className="border-t border-gray-200 flex flex-col items-center mt-5 pt-6 text-sm text-gray-500 ">
        <div className="text-xs text-black/50 font-light flex items-center gap-2">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M8 1l5 2v4c0 3.5-2.2 6.3-5 8-2.8-1.7-5-4.5-5-8V3l5-2z" />
          </svg>
          Secure & encrypted checkout
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
