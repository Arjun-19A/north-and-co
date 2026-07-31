import { Link } from "react-router-dom";

const ProductCard = ({ id, name, image, price }) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="overflow-hidden aspect-2/3 md:aspect-3/4 relative shadow-sm group-hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
        <img
          className="absolute inset-0 h-full w-full  object-center transition-transform duration-800 ease-out group-hover:scale-110"
          loading="lazy"
          src={image}
          alt={name}
        />
      </div>

      <div className="mt-1.5 flex items-start justify-between gap-3">
        <p className="font-light text-sm sm:text-base line-clamp-2 flex-1">
          {name}
        </p>
        <p className="text-sm text-black/80 font-light shrink-0">₹{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
