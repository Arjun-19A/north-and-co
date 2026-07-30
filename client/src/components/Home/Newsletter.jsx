const Newsletter = () => {
  return (
    <section className="w-full bg-stone-100 px-8 md:px-16 py-15">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight">
          Subscribe to our{" "}
          <span className="italic border-b border-black">newsletter</span>
        </h2>

        <p className="mt-4 text-sm sm:text-base text-black/60 max-w-xl mx-auto leading-7">
          Be the first to discover new collections, exclusive offers, and
          timeless pieces crafted for everyday luxury.
        </p>

        <div className="hidden sm:flex items-center mt-10 max-w-2xl mx-auto border border-gray-300 rounded-full overflow-hidden bg-white">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-14 px-6 outline-none bg-transparent text-black placeholder:text-gray-500"
          />

          <button className="m-1 h-12 px-8 rounded-full bg-black text-white hover:bg-zinc-800 transition cursor-pointer">
            Subscribe
          </button>
        </div>

        <div className="flex sm:hidden flex-col gap-3 mt-8">
          <input
            type="email"
            placeholder="Enter your email address"
            className="h-12 px-5 border border-gray-300 rounded-full outline-none bg-white placeholder:text-gray-500"
          />

          <button className="h-12 rounded-full bg-black text-white hover:bg-zinc-800 transition cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
