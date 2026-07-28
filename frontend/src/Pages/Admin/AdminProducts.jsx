import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiPlus, FiSearch, FiEdit2, FiTrash2 } from "react-icons/fi";
import {
  fetchProducts,
  deleteProduct,
} from "../../redux/slices/adminProductSlice";
import ProductModal from "../../components/Admin/ProductModal";

export default function AdminProducts() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.adminProducts);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    const q = search.toLowerCase();

    return products.filter(
      (product) =>
        (product.name ?? "").toLowerCase().includes(q) ||
        (product.sku ?? "").toLowerCase().includes(q) ||
        (product.category ?? "").toLowerCase().includes(q),
    );
  }, [products, search]);

  return (
    <section className="space-y-10">
      <div className="flex items-end justify-between">
        <button
          onClick={() => {
            setSelectedProduct(null);
            setOpenModal(true);
          }}
          className="flex items-center gap-2 bg-black text-white px-5 py-3 text-sm tracking-wide hover:opacity-90 transition"
        >
          <FiPlus />

          <span>Add Product</span>
        </button>

        <p className="text-sm text-black/45 mt-1">{products.length} products</p>
      </div>

      <div className="bg-white border border-gray-300">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-200">
          <FiSearch className="text-black/40" />

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 outline-none text-sm bg-transparent"
          />
        </div>

        {loading ? (
          <div className="py-20 text-center text-black/45">
            Loading products...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-20 text-center">
            <h3 className="text-xl font-light">No products found</h3>

            <p className="mt-2 text-black/45">
              Start by adding your first product.
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr className="text-left text-[11px] uppercase tracking-[0.18em] text-black/45">
                <th className="px-6 py-4">Image</th>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th className="text-right pr-6">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-200 hover:bg-stone-50 transition"
                >
                  <td className="px-6 py-5">
                    <img
                      src={product.images?.[0]?.url}
                      alt={product.name}
                      className="w-16 h-16 object-cover border border-gray-300"
                    />
                  </td>
                  <td>
                    <h4 className="font-medium">{product.name}</h4>

                    <p className="text-xs text-black/45 mt-1">
                      {product.brand}
                    </p>
                  </td>

                  <td>
                    <span className="font-mono text-xs tracking-wider bg-stone-100 px-2 py-1">
                      {product.sku}
                    </span>
                  </td>

                  <td className="text-sm text-black/60">{product.category}</td>

                  <td className="font-medium">
                    ₹{product.price.toLocaleString("en-IN")}
                  </td>

                  <td className="font-medium">{product.countInStock} pcs</td>

                  <td>
                    {product.countInStock > 10 ? (
                      <span className="text-green-700 text-sm">In Stock</span>
                    ) : product.countInStock > 0 ? (
                      <span className="text-amber-600 text-sm">Low Stock</span>
                    ) : (
                      <span className="text-red-600 text-sm">Out of Stock</span>
                    )}
                  </td>

                  <td className="pr-6">
                    <div className="flex justify-end gap-5">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setOpenModal(true);
                        }}
                        className="text-black/50 hover:text-black transition"
                      >
                        <FiEdit2 />
                      </button>

                      <button
                        onClick={() => {
                          if (window.confirm("Delete this product?")) {
                            dispatch(deleteProduct(product._id));
                          }
                        }}
                        className="text-black/50 hover:text-red-600 transition"
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ProductModal
        open={openModal}
        product={selectedProduct}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
