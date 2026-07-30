const ReviewItem = ({ product }) => {
  return (
    <div key={product._id} className="flex items-center gap-5 p-5">
      <div className="relative w-20 h-22 bg-[#EBEBEA] overflow-hidden shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover absolute h-full w-full object-center"
        />
      </div>

      <div className="flex-1">
        <p className="text-[14px] font-light text-primary">{product.name}</p>

        <p className="text-[12px] text-secondary font-light">
          Size: {product.size} · Qty: {product.quantity} · Color:{" "}
          {product.color}
        </p>
      </div>

      <p className="text-[14px] font-light text-primary">₹{product.price}</p>
    </div>
  );
};

export default ReviewItem;
