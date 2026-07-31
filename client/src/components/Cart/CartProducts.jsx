const CartProducts = ({
  products,
  increaseQty,
  decreaseQty,
  removeProduct,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {products.map((product) => (
        <div
          key={product._id}
          className="flex gap-2 sm:gap-4 md:gap-6 p-3 sm:p-4 border border-gray-200"
        >
          <div className="relative shrink-0 overflow-hidden w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <h2 className="text-sm sm:text-[15px] md:text-base font-light tracking-[0.01em] hover:opacity-60 transition-opacity">
              {product.name}
            </h2>
            <p className="text-sm md:text-[15px] text-[#6b6b6b] font-light">
              Size: {product.size || "-"}
            </p>
            <p className="text-sm md:text-[15px] text-[#6b6b6b] font-light">
              Color: {product.color || "-"}
            </p>
            <p className="text-sm md:text-[15px] text-[#6b6b6b] font-light">
              Price: ₹{product.price}
            </p>

            {!product.hasEnoughStock && (
              <span
                className="
                w-fit
                mt-3
                px-3
                py-1
                text-xs
                uppercase
                tracking-wider
                bg-red-100
                text-red-600
                "
              >
                {product.countInStock === 0
                  ? "Out of Stock"
                  : `Only ${product.countInStock} Available`}
              </span>
            )}
          </div>

          <div className="flex flex-col items-end justify-between shrink-0">
            <div className="flex items-center border border-gray-200">
              <button
                onClick={() => decreaseQty(product)}
                className="w-8 h-8 flex items-center justify-center text-[#111] hover:opacity-50 transition-opacity text-lg font-light cursor-pointer"
              >
                −
              </button>
              <span className="w-8 text-center text-[13px] font-light text-[#111]">
                {product.quantity || 1}
              </span>
              <button
                onClick={() => increaseQty(product)}
                className="w-8 h-8 flex items-center justify-center text-[#111] hover:opacity-50 transition-opacity text-lg font-light cursor-pointer"
              >
                +
              </button>
            </div>

            <div className="text-right">
              <p className="text-sm font-light text-black">
                ₹{product.price * product.quantity}
              </p>
              <button
                onClick={() => removeProduct(product)}
                className="text-xs tracking-widest uppercase text-[#6b6b6b] font-light hover:text-red-500 transition-colors mt-1 duration-200 cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
