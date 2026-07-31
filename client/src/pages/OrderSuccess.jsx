import { Link, useParams } from "react-router-dom";
import { GiCheckMark } from "react-icons/gi";

const OrderSuccess = () => {
  const { id } = useParams();

  return (
    <section className="flex-1 flex items-center justify-center bg-stone-100">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
          <GiCheckMark className="text-3xl text-green-700" />
        </div>
        <h1 className="text-[28px] font-light tracking-[-0.01em] mb-4">
          Order Placed
        </h1>
        <p className="text-[14px] text-black/70 font-light leading-relaxed mb-8">
          Thank you for shopping with us. Your order has been placed
          successfully. <br /> Your items will be dispatched within 1–2 business
          days. <br /> A confirmation email will be sent shortly.
        </p>
        <div className="mb-8">
          <p className="text-sm uppercase tracking-normal text-black/50">
            Order: #<span className="tracking-wide">{id}</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.2em] font-light hover:opacity-80 transition-opacity text-[12px] border-b border-black/60 pb-0.5"
          >
            Continue Shopping
          </Link>

          <Link
            to="/account/orders"
            className="text-xs uppercase tracking-[0.2em] font-light hover:opacity-80 transition-opacity text-[12px] border-b border-black/60 pb-0.5"
          >
            View Orders
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
