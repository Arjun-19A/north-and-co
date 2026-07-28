import ProductCard from "./ProductCard";

const NewArrivals = ({ products, loading, error }) => {
  return (
    <>
      <section className="bg-stone-100 w-full">
        <div className="py-12 md:py-16 max-w-360 mx-auto px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="block text-[11px] tracking-[0.22em] uppercase font-light mb-2">
                Just In
              </span>
              <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[#111111] tracking-[-0.01em] leading-tight">
                New Arrivals
              </h2>
            </div>
          </div>

          {loading && (
            <p className="text-center text-gray-500">Loading products...</p>
          )}

          {error && <p className="text-center text-red-500">{error}</p>}

          {!loading && !error && products.length === 0 && (
            <p className="text-center text-gray-500">No new arrivals found.</p>
          )}

          {!loading && !error && products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  image={item.images[0].url}
                  name={item.name}
                  price={item.price}
                />
              ))}
            </div>
          )} 
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
