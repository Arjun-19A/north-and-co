import { IoCheckmark } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import ReviewItem from "./ReviewItem";

const ReviewSection = ({
  step,
  completed,
  isOpen,
  products,
  loading,
  onPlaceOrder,
  total,
}) => {
  return (
    <section className="bg-transparent">
      <div className="flex gap-1 md:gap-5">
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition
    ${
      completed
        ? "bg-black border-black text-white"
        : "border-gray-300 text-black"
    }`}
        >
          {completed ? <IoCheckmark size={16} /> : step}
        </div>

        <div className="flex-1">
          <div className="flex flex-col gap-8">
            <h2 className="text-[20px] font-light tracking-[-0.01em]">
              Review Order
            </h2>

            {!completed && !isOpen && (
              <div className="mt-5 border border-dashed border-gray-300 px-5 py-4 bg-transparent opacity-60">
                <div className="flex items-center gap-3 justify-center">
                  <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
                    <FiLock size={16} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-primary">
                      Review is locked
                    </p>

                    <p className="text-xs text-black/60 mt-1">
                      Complete payment to review your order.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {isOpen && (
              <>
                <div className="border border-gray-300 divide-y divide-gray-300">
                  {products.map((product) => (
                    <ReviewItem key={product._id} product={product} />
                  ))}
                </div>

                <p className="text-[14px] font-light text-black/60">
                  By placing your order, you agree to our{" "}
                  <span className="text-black underline underline-offset-2">
                    Terms & Conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-black underline underline-offset-2">
                    Privacy Policy
                  </span>
                  .
                </p>

                <button
                  onClick={onPlaceOrder}
                  disabled={loading}
                  className="w-full md:w-auto bg-black text-white px-12 py-4 text-xs uppercase tracking-[0.2em] font-light hover:opacity-80 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed text-[12px]  duration-200"
                >
                  {loading
                    ? "Placing..."
                    : `Place Order — ₹${total.toFixed(2)}`}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
