import { Link } from "react-router-dom";

const collections = [
  {
    title: "Summer Essentials",
    description:
      "Lightweight linen, breathable cotton and warm-weather wardrobe staples.",
    image:
      "https://image.hm.com/assets/hm/7c/b5/7cb585834703b0903a307bbbfc792cee80b13dc7.jpg?imwidth=2160",
    slug: "Summer Essentials",
  },
  {
    title: "Casual Essentials",
    description:
      "Relaxed everyday pieces designed for comfort and effortless styling.",
    image:
      "https://image.hm.com/assets/hm/e6/23/e623eb011794dfeea23330d9d20711190c6a70e1.jpg?imwidth=2160",
    slug: "Casual Essentials",
  },
  {
    title: "Denim Essentials",
    description: "Timeless denim jackets and jeans made for everyday wear.",
    image:
      "https://image.hm.com/assets/hm/6d/47/6d47d9455cf940890341be26304783318b3a5ba1.jpg?imwidth=2160",
    slug: "Denim Essentials",
  },
  {
    title: "Kids Collection",
    description:
      "Comfortable cotton essentials made for every little adventure.",
    image:
      "https://image.hm.com/assets/hm/d1/8b/d18b463b0163a3a367bb174b0128790c75e3a0bf.jpg?imwidth=2160",
    slug: "Kids Collection",
  },
];

const Collections = () => {
  return (
    <section className="bg-stone-100 min-h-screen">
      <div className="max-w-360 mx-auto px-8 pb-12 border-b border-gray-300 pt-30">
        <span className="block text-[11px] tracking-[0.22em] text-black/70 uppercase font-light mb-3">
          Curated Edits
        </span>
        <h1 className="text-[clamp(28px,3vw,40px)] font-light text-primary tracking-[-0.01em]">
          Collections
        </h1>
      </div>

      <div className="max-w-360 mx-auto px-8 py-16 md:py-22">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              to={`/shop?collection=${encodeURIComponent(collection.slug)}`}
              className="group relative block overflow-hidden"
            >
              <div className="relative aspect-10/11 overflow-hidden bg-stone-100 mb-5">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full absolute inset-0  object-cover object-center transition-transform duration-700 aspect-4/3 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent flex items-end"></div>
                <div className="absolute inset-0 flex items-end">
                  <div className="p-8 md:p-12 max-w-lg text-white">
                    <p className="uppercase tracking-[0.35em] text-xs text-white/75">
                      Collection
                    </p>

                    <h2 className="mt-2 text-3xl md:text-4xl font-light">
                      {collection.title}
                    </h2>

                    <p className="mt-4 max-w-sm text-white/85 leading-relaxed">
                      {collection.description}
                    </p>

                    <span className="inline-flex items-center gap-2 mt-8 uppercase tracking-[0.2em] text-sm border-b border-white pb-1 transition-all duration-300 group-hover:gap-3 group-hover:translate-x-1.5">
                      Shop Collection →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
