const CartHeading = ({ products }) => {
  return (
    <div className="mb-3 border-b border-gray-200">
      <h1 className="text-3xl md:text-5xl font-light tracking-tight">
        Your Bag
      </h1>
      <p className="mb-6 mt-2 text-[14px] text-black/60">{products.length} items</p>
    </div>
  );
};

export default CartHeading;
