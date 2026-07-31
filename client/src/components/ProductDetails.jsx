import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../redux/slices/productsSlice";
import ProductCard from "./Home/ProductCard";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { selectedProduct, similarProducts, loading, error } = useSelector(
    (state) => state.products,
  );

  const { guestId } = useSelector((state) => state.auth);

  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedProduct?._id) {
      dispatch(fetchSimilarProducts(selectedProduct._id));
    }
  }, [dispatch, selectedProduct]);

  const mainImage = selectedProduct?.images?.[selectedImage]?.url || "";

  const activeSize = selectedSize || selectedProduct?.sizes?.[0] || "";

  const activeColor = selectedColor || selectedProduct?.colors?.[0] || "";

  const handleAddToCart = async () => {
    if (selectedProduct.countInStock === 0) {
      alert("This product is currently out of stock");
      return;
    }

    if (quantity > selectedProduct.countInStock) {
      alert(`Only ${selectedProduct.countInStock} items are available`);
      return;
    }

    await dispatch(
      addToCart({
        productId: selectedProduct._id,
        quantity,
        size: activeSize,
        color: activeColor,
        guestId,
      }),
    ).unwrap();

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const handleBuyNow = async () => {
    if (selectedProduct.countInStock === 0) {
      alert("This product is currently out of stock");
      return;
    }
    if (quantity > selectedProduct.countInStock) {
      alert(`Only ${selectedProduct.countInStock} items are available`);
      return;
    }
    try {
      await dispatch(
        addToCart({
          productId: selectedProduct._id,
          quantity,
          size: activeSize,
          color: activeColor,
          guestId,
        }),
      ).unwrap();

      navigate("/checkout");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading.productDetails)
    return <div className="text-center py-20">Loading...</div>;
  if (error.productDetails)
    return (
      <div className="text-center py-20 text-red-500">
        {error.productDetails}
      </div>
    );
  if (!selectedProduct)
    return <div className="text-center py-20">Product not found</div>;

  return (
    <div className="max-w-360 mx-auto px-5 md:px-8 py-14 md:py-16">
      <div className="mt-5 md:mt-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-4 sm:gap-8 lg:gap-20">
        <div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-row md:flex-col gap-2 shrink-0">
              {selectedProduct.images?.map((image, index) => (
                <button
                  key={index}
                  className={`relative w-18 h-20 md:w-20 md:h-24 overflow-hidden bg-stone-100 transition-opacity duration-200 opacity-40 ${
                    selectedImage === index
                      ? "opacity-100"
                      : "hover:opacity-70 "
                  }`}
                  onClick={() => {
                    setSelectedImage(index);
                  }}
                >
                  <img
                    src={image.url}
                    alt={image.altText || `Thumbnail ${index}`}
                    className="object-cover object-center absolute h-full w-full inset-0"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-5/6 bg-stone-100">
              <img
                loading="lazy"
                src={mainImage}
                alt={selectedProduct.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <h1 className="text-3xl md:text-4xl font-light tracking-wide mt-4 leading-tight">
            {selectedProduct.name}
          </h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                const filled = i + 1 <= Math.floor(selectedProduct.rating);
                const half = i < selectedProduct.rating && !filled;

                return (
                  <div key={i} className="relative text-sm">
                    <FaStar className="text-gray-300" />

                    {filled && (
                      <FaStar className="absolute inset-0 text-yellow-500" />
                    )}

                    {half && (
                      <div className="absolute inset-0 overflow-hidden w-1/2">
                        <FaStar className="text-yellow-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <span className="text-xs text-black/60">
              {selectedProduct.rating.toFixed(1)} ({selectedProduct.numReviews}{" "}
              Reviews)
            </span>
          </div>

          <div className="flex items-baseline gap-3 mt-3">
            <span className="text-3xl font-light">
              ₹{selectedProduct.discountPrice || selectedProduct.price}
            </span>

            {selectedProduct.discountPrice && (
              <div className="flex items-center gap-2">
                <span className="text-lg text-black/50 line-through">
                  ₹{selectedProduct.price}
                </span>
                <span className="px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs font-medium">
                  {Math.round(
                    ((selectedProduct.price - selectedProduct.discountPrice) /
                      selectedProduct.price) *
                      100,
                  )}
                  % OFF
                </span>
              </div>
            )}
          </div>

          <div>
            <p className="text-sm text-black/80 font-light leading-relaxed my-3">
              {selectedProduct.description}
            </p>
          </div>
          <div>
            <span className="block text-[13px] tracking-[0.16em] text-gray-500 uppercase font-light mt-3 mb-1">
              Color
            </span>
            <div className="flex gap-3">
              {selectedProduct.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`h-9 w-9 rounded-full border transition
${activeColor === color ? "border-black" : "border-white"}`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                  }}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="block text-[13px] tracking-[0.16em] text-gray-500 uppercase font-light mb-1 mt-3">
              Size
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedProduct.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
          h-10
          px-4
          border
          text-sm
          whitespace-nowrap
          transition
          ${activeSize === size ? "bg-black text-white" : "hover:bg-black/5"}
        `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-wrap">
            <span className="block text-[13px] tracking-[0.16em] text-gray-500 uppercase font-light mt-3 mb-1">
              Quantity
            </span>
            <div className="flex items-center border border-gray-300 overflow-hidden w-fit">
              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 flex items-center justify-center  hover:opacity-50 transition-opacity"
              >
                -
              </button>
              <span className="w-10 text-center text-[14px] font-light ">
                {quantity}
              </span>
              <button
                disabled={quantity >= selectedProduct.countInStock}
                onClick={() =>
                  quantity < selectedProduct.countInStock &&
                  setQuantity(quantity + 1)
                }
                className="w-10 h-10 flex items-center justify-center hover:opacity-50 transition-opacity"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              disabled={selectedProduct.countInStock === 0}
              className="
  w-full h-12 mt-3
  text-[12px]
  tracking-[0.2em]
  uppercase
  font-light
  transition-all
  duration-300
  text-white
  disabled:bg-gray-300
  disabled:cursor-not-allowed
  bg-black
  hover:bg-zinc-700
  "
            >
              {selectedProduct.countInStock === 0
                ? "Out of Stock"
                : added
                  ? "✓ Added"
                  : "Add To Cart"}
            </button>
          </div>

          {selectedProduct.countInStock === 0 ? (
            ""
          ) : (
            <button
              onClick={handleBuyNow}
              className="w-full mt-2 md:mt-3 h-12 text-[12px] tracking-[0.14em] uppercase font-light text-primary border border-gray-300 hover:border-black transition-colors duration-200 bg-transparent"
            >
              Buy Now
            </button>
          )}
        </div>
      </div>

      {similarProducts.length > 0 && (
        <>
          <div className="flex flex-col justify-between mb-10 mt-20 md:mt-28">
            <p className="uppercase tracking-[0.18em] text-xs text-black/40 mb-2">
              Recommended
            </p>

            <h2 className="text-4xl font-light">You May Also Like</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-6">
            {similarProducts.map((item) => (
              <ProductCard
                key={item._id}
                id={item._id}
                image={item.images[0].url}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
