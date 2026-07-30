import { Link } from "react-router-dom";

const BestSellerProduct = ({ id, name, image, price, discountPrice }) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="overflow-hidden aspect-2/3 relative shadow-sm group-hover:shadow-lg hover:-translate-y-1 transition-all duration-500 bg-transparent">
        <img
          className="absolute inset-0 h-full w-full  object-contain transition-transform duration-800 ease-out group-hover:scale-105"
          src={image}
          alt={name}
        />
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <p className="font-light text-sm sm:text-base line-clamp-2 flex-1">
          {name}
        </p>
        <div className="flex flex-col items-end">
          <p className="text-xs text-black/80 font-light shrink-0 line-through">
            ₹{price}
          </p>
          <p className="text-sm text-black/80 font-light shrink-0">
            ₹{discountPrice}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BestSellerProduct;
