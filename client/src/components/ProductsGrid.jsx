import { Link } from "react-router-dom";

const ProductsGrid = ({ id, name, image, price }) => {
  return (
    <Link to={`/products/${id}`} className="group">
      <div className="overflow-hidden aspect-5/6 relative shadow-sm group-hover:shadow-xl transition-all duration-300">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          src={image}
          alt={name}
        />
      </div>

      <div className="mt-2 flex items-start justify-between gap-3">
        <p className="font-light sm:text-base line-clamp-2 flex-1">{name}</p>
        <p className="text-black/80 font-light shrink-0">₹{price}</p>
      </div>
    </Link>
  );
};

export default ProductsGrid;
