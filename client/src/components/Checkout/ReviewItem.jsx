const ReviewItem = ({ product }) => {
  return (
    <div key={product._id} className="flex items-center gap-3 sm:gap-4 md:gap-6 p-2 sm:p-4">
      <div className="relative w-20 h-22 bg-[#EBEBEA] overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover absolute h-full w-full object-center"
        />
      </div>

      <div className="flex-1">
        <p className="text-sm sm:text-[15px] font-light text-primary">{product.name}</p>

        <p className="text-xs sm:text-[13px] text-secondary font-light text-[#363636] ">
          Size: {product.size} · Qty: {product.quantity} · Color:{" "}
          {product.color}
        </p>
      </div>

      <p className="text-[14px] font-light text-primary">₹{product.price}</p>
    </div>
  );
};

export default ReviewItem;
