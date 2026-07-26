import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../../redux/slices/adminProductSlice";

const initialForm = {
  name: "",
  sku: "",
  description: "",
  brand: "",
  category: "",
  gender: "",
  price: "",
  discountPrice: "",
  countInStock: "",
  sizes: [],
  colors: [],
  images: [],
  isFeatured: false,
  isPublished: false,
};

const adultSizes = ["XS", "S", "M", "L", "XL"];

const kidsSizes = [
  "1-2 Years",
  "2-4 Years",
  "4-6 Years",
  "6-8 Years",
  "8-10 Years",
  "10-12 Years",
];

export default function ProductModal({ open, onClose, product }) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialForm);
  const [colorsInput, setColorsInput] = useState("");

  const availableSizes = formData.gender === "Kids" ? kidsSizes : adultSizes;

  useEffect(() => {
    if (product) {
      setFormData({
        ...initialForm,
        ...product,
      });

      setColorsInput(product.colors?.join(", ") || "");
    } else {
      setFormData(initialForm);
      setColorsInput("");
    }
  }, [product]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const toggleArrayValue = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product) {
      dispatch(
        updateProduct({
          id: product._id,
          productData: formData,
        }),
      );
    } else {
      dispatch(createProduct(formData));
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-5">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-3xl font-light tracking-tight">
              {product ? "Update Product" : "Create Product"}
            </h2>

            <p className="text-sm text-black/45 mt-2">
              Manage product details, pricing and inventory.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-xl text-black/50 hover:text-black"
          >
            <FiX />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <InputField
              label="Product Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />

            <InputField
              label="SKU"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="Example: SHIRT-BLK-M-001"
              className={`uppercase`}
            />

            <TextareaField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the product"
            />

            <div className="grid grid-cols-2 gap-5">
              <InputField
                label="Brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Nike, Zara..."
              />

              <InputField
                label="Collection"
                name="collectionName"
                value={formData.collectionName}
                onChange={handleChange}
                placeholder="Summer Collection"
              />

              <div>
                <h3 className="text-xs uppercase text-black/40 mb-1">
                  Category
                </h3>

                <div className="flex gap-3">
                  {["Topwear", "Bottomwear"].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          category: item,
                        }))
                      }
                      className={`px-5 py-2 border text-sm ${
                        formData.category === item ? "bg-black text-white" : ""
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-5">
              <InputField
                label="Price"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="₹ Price"
              />

              <InputField
                label="Discount Price"
                name="discountPrice"
                type="number"
                value={formData.discountPrice}
                onChange={handleChange}
                placeholder="₹ Discount"
              />

              <InputField
                label="Stock Quantity"
                name="countInStock"
                type="number"
                value={formData.countInStock}
                onChange={handleChange}
                placeholder="Available stock"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase text-black/40 mb-1">Gender</h3>

            <div className="flex gap-3">
              {["Men", "Women", "Kids"].map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      gender: item,
                    }))
                  }
                  className={`px-5 py-2 border text-sm ${
                    formData.gender === item ? "bg-black text-white" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase text-black/40 mb-1">Sizes</h3>

            <div className="flex flex-wrap gap-3">
              {availableSizes.map((size) => (
                <button
                  type="button"
                  key={size}
                  onClick={() => toggleArrayValue("sizes", size)}
                  className={`
          h-10
          px-4
          border
          text-sm
          whitespace-nowrap
          transition

          ${
            formData.sizes?.includes(size)
              ? "bg-black text-white"
              : "hover:bg-black/5"
          }
        `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label
              className="
text-xs
uppercase
text-black/40
"
            >
              Colors
            </label>

            <input
              name="colors"
              value={colorsInput}
              onChange={(e) => setColorsInput(e.target.value)}
              onBlur={() =>
                setFormData((prev) => ({
                  ...prev,
                  colors: colorsInput
                    .split(",")
                    .map((c) => c.trim())
                    .filter(Boolean),
                }))
              }
              className="admin-input"
            />

            <p className="text-xs text-black/40 mt-1">
              Example: Black, White, Navy Blue
            </p>
          </div>

          <label className="flex items-center gap-3 text-sm w-fit">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
            />
            Featured Product
          </label>

          <label className="flex items-center gap-3 text-sm w-fit">
            <input
              type="checkbox"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
            />
            Published
          </label>

          <div className="flex justify-end gap-5 pt-5 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border"
            >
              Cancel
            </button>

            <button className="px-6 py-3 bg-black text-white">
              {product ? "Save Changes" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <div>
      <label
        className="
          text-xs
          uppercase
          text-black/40
        "
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`admin-input ${className}`}
      />
    </div>
  );
}

function TextareaField({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label
        className="
        text-xs
        uppercase
        text-black/40
        "
      >
        {label}
      </label>

      <textarea
        name={name}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        rows={4}
        className="
          admin-input
          resize-none
        "
      />
    </div>
  );
}
