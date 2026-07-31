import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = ["/hero-1.avif", "/hero-2.avif", "/hero-3.avif"];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative h-[85vh] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="relative h-full w-full shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              loading="eager"
              fetchPriority="high"
              className="absolute inset-0 shrink-0 h-full w-full object-cover object-top"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/60" />

      <div className="absolute w-full inset-0 pt-45 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl text-center text-white">
          <p className="mb-2 text-xs sm:text-sm uppercase tracking-widest text-white/70">
            New Collection 2026
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white/80 leading-tight tracking-tighter">
            Elevate Your
            <br />
            Everyday Style.
          </h1>

          <Link to="/collections">
            <button className="mt-4 bg-transparent border border-white px-6 py-3 sm:px-8 sm:py-3 text-sm font-light transition-all duration-500 cursor-pointer uppercase hover:bg-white hover:text-black  hover:border-white">
              Shop Collection
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-px rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 sm:w-10 bg-white"
                : "w-4 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
