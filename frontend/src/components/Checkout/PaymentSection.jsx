import { IoCheckmark } from "react-icons/io5";
import { FiLock } from "react-icons/fi";

const PaymentSection = ({
  step,
  completed,
  isOpen,
  paymentMethod,
  setPaymentMethod,
  onComplete,
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
          <h3 className="text-[20px] font-light tracking-[-0.01em]">
            Payment Method
          </h3>

          {!completed && !isOpen && (
            <div className="mt-5 border border-dashed border-gray-300 px-5 py-4 bg-transparent opacity-60">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-9 h-9 rounded-full bg-black/5 flex items-center justify-center">
                  <FiLock size={16} />
                </div>

                <div>
                  <p className="text-sm font-medium text-primary">
                    Payment is locked
                  </p>

                  <p className="text-xs text-black/60 mt-1">
                    Complete your shipping details to continue.
                  </p>
                </div>
              </div>
            </div>
          )}

          {isOpen && (
            <div className="mt-6">
              <label
                className={`
    block
    border
    border-gray-300
    p-6
    cursor-pointer
    transition
    ${paymentMethod === "COD" ? "border-black" : "hover:border-black/40"}
  `}
              >
                <div className="flex items-start gap-4">
                  <input
                    type="radio"
                    checked={paymentMethod === "COD"}
                    onChange={() => setPaymentMethod("COD")}
                    className="accent-black mt-1"
                  />

                  <div>
                    <h4 className="font-medium">Cash on Delivery</h4>

                    <p className="text-sm text-black/60 mt-2">
                      Pay securely when your order is delivered to your
                      doorstep.
                    </p>
                  </div>
                </div>
              </label>

              <button
                onClick={onComplete}
                className="
    mt-6
    w-full
    md:w-auto
    bg-black
    text-white
    px-12
    py-4
    text-xs
    uppercase
    tracking-[0.2em]
    font-light
    hover:opacity-80
    transition-opacity
  "
              >
                Continue to Review
              </button>
            </div>
          )}

          {completed && !isOpen && (
            <p className="text-sm text-black/70 mt-2">Cash on Delivery (COD)</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
