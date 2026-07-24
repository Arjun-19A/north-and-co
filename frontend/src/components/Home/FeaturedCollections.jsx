import Collections from "./Collections";

const FeaturedCollections = ({ products, loading, error }) => {
  return (
    <section className="w-full bg-stone-100">
      <div className="py-14 md:py-22 max-w-360 mx-auto px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="block text-[11px] tracking-[0.22em] text-secondary uppercase font-light mb-2">
              Explore
            </span>
            <h2 className="text-[clamp(28px,3vw,40px)] font-light text-[#111111] tracking-[-0.01em] leading-tight">
              Featured Products
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {loading && <p>Loading...</p>}

          {error && <p className="text-red-500">{error}</p>}

          {!loading &&
            products.map((item) => (
              <Collections
                key={item._id}
                id={item._id}
                image={item.images?.[0]?.url}
                name={item.name}
                price={item.discountPrice || item.price}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
