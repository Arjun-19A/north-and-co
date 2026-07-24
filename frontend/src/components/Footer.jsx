import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end bg-black pt-10 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          <div className="flex flex-col max-w-sm w-full md:w-[45%] lg:w-[35%] items-start text-left">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              North <span className="font-light">& Co.</span>
            </h2>
            <div className="w-full max-w-52 h-0.5 mt-3 bg-linear-to-r from-[#24212D] to-[#24212D]/0"></div>
            <p className="mt-3 text-zinc-400 leading-7">
              Modern essentials crafted with a focus on timeless design, quality
              fabrics, and effortless style. Discover collections created for
              everyday confidence.
            </p>
          </div>

          <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-white/90 text-sm font-medium">
              Shop
            </h3>

            <ul className="mt-4 space-y-3 flex flex-col">
              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  New Arrivals
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Men
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Women
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Kids
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-white/90">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  About Us
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Contact
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Shipping
                </a>
              </li>

              <li>
                <a className="text-sm text-white/50 hover:text-white transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
            <h3 className="text-sm text-white font-medium">GET IN TOUCH</h3>
            <div className="flex flex-col gap-2 mt-6">
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                +91 98765 43210
              </a>
              <a
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                contact@northandco.com
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 my-4 bg-linear-to-r from-[#24212D]/0 via-[#24212D] to-[#24212D]/0"></div>

        <div className="flex flex-wrap sm:flex-row items-center justify-between gap-y-4 gap-x-2 relative z-10">
          <p className="text-xs text-white/60">
            {" "}
            © 2026 North & Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-right">
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <div className="w-px h-4 bg-white/20"></div>
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6 md:mt-8 ">
          <h1 className="bg-linear-to-b from-zinc-900 via-zinc-800 to-zinc-500 bg-clip-text text-transparent font-black whitespace-nowrap leading-[0.72] tracking-tighter text-[clamp(3rem,14vw,16rem)] select-none pointer-events-none">
            North <span className="font-light">& Co.</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;