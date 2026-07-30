const OrderSummary = ({ subtotal, total, products }) => {
  return (
    <aside>
      <div className="border border-gray-300 p-8 sticky top-50">
        <h3 className="text-[13px] tracking-[0.12em] uppercase font-light text-primary mb-6">
          Order Summary
        </h3>

        {products.map((product) => (
          <div className="flex justify-between mb-3">
            <span className="text-[13px] font-light text-black/70">
              {product.name}
              <span className="text-secondary"> x {product.quantity}</span>
            </span>
            <span className="text-[13px] font-light text-black/80 shrink-0 ml-4">
              ₹{product.price * product.quantity}
            </span>
          </div>
        ))}

        <div className="border-t border-gray-300 pt-5 mt-5 flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-[13px] font-light text-black/70">
              Subtotal
            </span>
            <span className="text-[13px] font-light text-black/80">
              ₹{subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[13px] font-light text-black/70">
              Shipping
            </span>
            <span className="text-[13px] font-light text-black/80">Free</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-3 mt-1">
            <span className="text-[14px] font-light text-black/90">Total</span>
            <span className="text-[15px] font-light text-black/90">
              ₹{total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default OrderSummary;
