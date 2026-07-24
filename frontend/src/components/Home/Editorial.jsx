import React from "react";
import { Link } from "react-router-dom";

const Editorial = () => {
  return (
    <section className="mt-10">
      <div className="relative overflow-hidden h-[65vh]">
        <img
          src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1600&auto=format&fit=crop"
          alt="Editorial"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 flex h-full items-center justify-center px-6">
          <div className="max-w-2xl text-center text-white">
            <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-white/70 mb-4">
              Editorial
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
              Designed to
              <br />
              Stand the Test of Time.
            </h2>

            <p className="mt-6 text-white/80 text-sm md:text-lg leading-8 max-w-xl mx-auto">
              Discover timeless essentials crafted with premium materials,
              thoughtful design, and effortless versatility. Pieces made to be
              worn today, tomorrow, and for years to come.
            </p>

            <Link to="/collections" className="inline-flex mt-10 border border-white px-8 py-3 uppercase tracking-[0.25em] text-sm hover:bg-white hover:text-black transition-all duration-500">
              Shop the Edit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editorial;
