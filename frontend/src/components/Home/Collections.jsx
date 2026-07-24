import { Link } from "react-router-dom";

const Collections = ({ id, name, image }) => {
  return (
    <Link
        to={`/products/${id}`}
      className="group overflow-hidden aspect-3/4 relative img-zoom"
    >
      <img
        className="w-full h-full ease-[cubic-bezier(0.22,1,0.36,1)] absolute inset-0 object-cover object-center transition-transform duration-700 group-hover:scale-105"
        src={image}
        alt={name}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-400"></div>
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-400">
        <h3 className="text-white text-[15px] font-light tracking-[0.04em] leading-snug">
          {name}
        </h3>
        <span className="block text-white/60 text-[11px] tracking-widest font-light mt-1 uppercase">
          {}
        </span>
      </div>
    </Link>
  );
};

export default Collections;
