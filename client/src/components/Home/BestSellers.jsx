import BestSellerProduct from "./BestSellerProduct";

const BestSellers = ({ products, loading, error }) => {
  return (
    <section className="bg-stone-100 w-full overflow-hidden">
      <div className="py-12 md:py-16 max-w-360 mx-auto px-8">
        <div className="mb-10">
          <span className="block text-[11px] tracking-[0.22em] uppercase font-light mb-2">
            Top Picks
          </span>

          <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[#111111] tracking-[-0.01em] leading-tight">
            Best Sellers
          </h2>
        </div>

        {loading && (
          <p className="text-center text-gray-500">Loading products...</p>
        )}

        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="text-center text-gray-500">No best sellers found.</p>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="relative overflow-hidden">
            <div className="flex gap-5 w-max animate-scroll">
              {[...products, ...products].map((item, index) => (
                <div
                  key={`${item._id}-${index}`}
                  className="
          w-65
          sm:w-70
          md:w-75
          shrink-0
        "
                >
                  <BestSellerProduct
                    id={item._id}
                    image={item.images[0].url}
                    name={item.name}
                    price={item.price}
                    discountPrice={item.discountPrice}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
