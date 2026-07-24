const About = () => {
  return (
    <section className="w-full bg-stone-100">
      <div className="max-w-360 mx-auto px-6 md:px-10 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="overflow-hidden">
            <img
              className="w-full h-125 object-cover"
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
              alt="North & Co. fashion collection"
            />
          </div>

          <div className="max-w-xl">
            <span className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 mb-4">
              Our Story
            </span>

            <h1 className="text-[clamp(32px,4vw,48px)] font-light tracking-tight text-[#111] leading-tight">
              Redefining everyday style with timeless pieces.
            </h1>

            <div className="w-20 h-px bg-black mt-8 mb-8"></div>

            <p className="text-sm leading-7 text-gray-600 font-light">
              North & Co. was created with a vision to bring modern fashion
              essentials that balance comfort, quality, and effortless style. We
              believe clothing should not only look good but also become a
              natural part of your everyday expression.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 font-light">
              From carefully selected fabrics to thoughtful silhouettes, every
              piece in our collection is designed with attention to detail. Our
              collections are inspired by contemporary trends while maintaining
              a timeless appeal.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-600 font-light">
              At North & Co., our goal is simple — create a refined shopping
              experience where discovering your next favorite piece feels
              effortless.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
