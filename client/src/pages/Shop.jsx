import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";
import ProductsGrid from "../components/ProductsGrid";
import { useSearchParams } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const PRODUCTS_PER_PAGE = 12;

const Shop = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const collection = searchParams.get("collection");
  const currentPage = Number(searchParams.get("page")) || 1;

  const {
    products,
    totalPages,
    totalProducts,
    loading: { products: loading },
    error: { products: error },
  } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("newest");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    if (collection) {
      setCategory("All");
    }
  }, [collection]);

  useEffect(() => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, [search, sortType, category, collection]);

  useEffect(() => {
    const filters = {
      page: currentPage,
      limit: PRODUCTS_PER_PAGE,
    };

    if (search.trim()) filters.search = search;

    if (sortType !== "newest") {
      filters.sortBy = sortType;
    }

    if (["Men", "Women", "Kids"].includes(category)) {
      filters.gender = category;
    }

    if (["Topwear", "Bottomwear"].includes(category)) {
      filters.category = category;
    }

    if (collection) {
      filters.collectionName = collection;
    }

    dispatch(fetchProductsByFilters(filters));
  }, [dispatch, search, sortType, category, collection, currentPage]);

  return (
    <section className="pt-10 min-h-screen bg-stone-100">
      <div className="max-w-350 mx-auto px-6 py-10 md:px-8 lg:px-10 pt-15 border-b border-gray-300">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="block text-[11px] tracking-[0.22em] uppercase font-light mb-3">
              {collection ? "Featured Collection" : "All Products"}
            </span>

            <h1 className="text-[clamp(28px,3vw,40px)] font-light tracking-[-0.01em]">
              {collection || "Shop"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-45 md:w-55 text-[13px] font-light bg-transparent border-b border-gray-300 pb-1.5 outline-none"
            />

            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
              className="text-[12px] font-light uppercase bg-transparent border-b border-gray-300 pb-1.5 outline-none cursor-pointer"
            >
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A-Z</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-8">
        <div className="flex gap-12 py-12">
          <aside className="hidden md:block shrink-0 w-44">
            <div className="sticky top-25">
              <h2 className="text-[11px] tracking-[0.22em] uppercase font-light text-[#6b6b6b] mb-6">
                Category
              </h2>

              <ul className="flex flex-col gap-3">
                {["All", "Men", "Women", "Kids", "Topwear", "Bottomwear"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => setCategory(item)}
                        className={`text-[13px] transition ${
                          category === item
                            ? "text-black font-medium"
                            : "text-gray-500 hover:text-black"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </aside>

          <div className="flex-1">
            {loading && (
              <p className="text-center py-10">Loading products...</p>
            )}

            {error && <p className="text-center text-red-500 py-10">{error}</p>}

            {!loading && !error && (
              <>
                <p className="text-[12px] text-[#6b6b6b] mb-8">
                  {totalProducts} Products
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                  {products.map((item) => (
                    <ProductsGrid
                      key={item._id}
                      id={item._id}
                      image={item.images?.[0]?.url}
                      name={item.name}
                      price={item.discountPrice || item.price}
                    />
                  ))}
                </div>

                {products.length === 0 && (
                  <p className="text-center py-10">No products found.</p>
                )}

                {totalPages > 1 && (
                  // <div className="flex justify-center items-center gap-2 mt-12">
                  //   <button
                  //     disabled={currentPage === 1}
                  //     onClick={() => {
                  //       searchParams.set("page", currentPage - 1);
                  //       setSearchParams(searchParams);
                  //     }}
                  //     className="px-4 py-2 border disabled:opacity-40"
                  //   >
                  //     Prev
                  //   </button>

                  //   {[...Array(totalPages)].map((_, index) => (
                  //     <button
                  //       key={index}
                  //       onClick={() => {
                  //         searchParams.set("page", index + 1);
                  //         setSearchParams(searchParams);
                  //       }}
                  //       className={`w-10 h-10 border transition ${
                  //         currentPage === index + 1
                  //           ? "bg-black text-white"
                  //           : "hover:bg-gray-100"
                  //       }`}
                  //     >
                  //       {index + 1}
                  //     </button>
                  //   ))}

                  //   <button
                  //     disabled={currentPage === totalPages}
                  //     onClick={() => {
                  //       searchParams.set("page", currentPage + 1);
                  //       setSearchParams(searchParams);
                  //     }}
                  //     className="px-4 py-2 border disabled:opacity-40"
                  //   >
                  //     Next
                  //   </button>
                  // </div>

                  <div className="flex justify-center items-center gap-2 mt-12">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => {
                        searchParams.set("page", currentPage - 1);
                        setSearchParams(searchParams);
                      }}
                      className="rounded-full h-10 w-10 flex items-center justify-center bg-transparent hover:bg-stone-200"
                    >
                      <GrPrevious />
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          searchParams.set("page", index + 1);
                          setSearchParams(searchParams);
                        }}
                        className={`h-10 w-10 flex items-center justify-center rounded-full ${
                          currentPage === index + 1
                            ? "bg-black text-white "
                            : "hover:bg-stone-200"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        searchParams.set("page", currentPage + 1);
                        setSearchParams(searchParams);
                      }}
                      className="rounded-full h-10 w-10 flex items-center justify-center bg-transparent hover:bg-stone-200"
                    >
                      <GrNext />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
