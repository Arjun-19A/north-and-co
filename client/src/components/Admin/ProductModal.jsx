import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  createProduct,
  updateProduct,
} from "../../redux/slices/adminProductSlice";
import api from "../../services/api";

const getInitialForm = () => ({
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
});

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

  const [formData, setFormData] = useState(getInitialForm());
  const [colorsInput, setColorsInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [formError, setFormError] = useState("");
  const [saving, setSaving] = useState(false);

  const availableSizes = formData.gender === "Kids" ? kidsSizes : adultSizes;

  useEffect(() => {
    if (product) {
      setFormData({
        ...getInitialForm(),
        ...product,
      });

      setColorsInput(product.colors?.join(", ") || "");
    } else {
      setFormData(getInitialForm());
      setColorsInput("");
    }
  }, [product]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormError("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    const requiredFields = [
      formData.name.trim(),
      formData.sku.trim(),
      formData.description.trim(),
      formData.brand.trim(),
      formData.category,
      formData.gender,
      formData.price,
      formData.countInStock,
      formData.images.length,
      formData.sizes.length,
      formData.colors.length,
    ];

    if (
      requiredFields.some(
        (field) =>
          field === "" || field === undefined || field === null || field === 0,
      )
    ) {
      setFormError("Please fill all required fields.");
      return;
    }

    try {
      setSaving(true);

      if (product) {
        await dispatch(
          updateProduct({
            id: product._id,
            productData: formData,
          }),
        ).unwrap();
      } else {
        await dispatch(createProduct(formData)).unwrap();
      }

      onClose();
    } finally {
      setSaving(false);
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (!files.length) return;

    if (formData.images.length + files.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    const uploadData = new FormData();

    files.forEach((file) => {
      uploadData.append("images", file);
    });

    try {
      setUploading(true);
      setUploadProgress(0);

      const response = await api.post("/api/admin/upload", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },

        onUploadProgress: (progressEvent) => {
          const percent = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total,
          );

          setUploadProgress(percent);
        },
      });

      setFormData((prev) => ({
        ...prev,

        images: [...prev.images, ...response.data.images],
      }));
    } catch (error) {
      console.error(error);
      setFormError("Image upload failed. Please try again.");
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
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
          {formError && (
            <div
              className="
      border
      border-red-200
      bg-red-50
      text-red-600
      px-4
      py-3
      text-sm
    "
            >
              {formError}
            </div>
          )}
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
              value={formData.sku.toUpperCase()}
              onChange={handleChange}
              placeholder="SRT-BLK-M-001"
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
                  Category <span className="text-red-500">*</span>
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
            <h3 className="text-xs uppercase text-black/40 mb-1">
              Gender <span className="text-red-500">*</span>
            </h3>

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
            <h3 className="text-xs uppercase text-black/40 mb-1">
              Sizes <span className="text-red-500">*</span>
            </h3>

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
            <div className="flex items-center justify-between">
              <h3 className="text-xs uppercase tracking-widest text-black/40">
                Product Images <span className="text-red-500">*</span>
              </h3>

              <span className="text-xs text-black/40">
                {formData.images?.length || 0}/5 images
              </span>
            </div>

            <label
              className="
      group
      border-2
      border-dashed
      border-gray-300
      h-20
      flex
      flex-col
      items-center
      justify-center
      cursor-pointer
      hover:border-black
      transition
    "
            >
              <div className="text-center">
                <p className="text-sm font-light">Click to upload images</p>
              </div>

              <input
                disabled={uploading}
                key={formData.images.length}
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            {uploading && (
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <p className="text-xs text-black/50">Uploading images...</p>

                  <p className="text-xs font-medium">{uploadProgress}%</p>
                </div>

                <div className="h-1 bg-gray-200 overflow-hidden">
                  <div
                    className="
            h-full
            bg-black
            transition-all
            duration-300
          "
                    style={{
                      width: `${uploadProgress}%`,
                    }}
                  />
                </div>
              </div>
            )}

            {formData.images?.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 mt-5">
                {formData.images.map((image, index) => (
                  <div
                    key={index}
                    className="
            group
            relative
            aspect-square
            border
            overflow-hidden
          "
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="
              w-full
              h-full
              object-cover
              object-center
            "
                    />

                    <div
                      className="
              absolute
              inset-0
              bg-black/30
              opacity-0
              group-hover:opacity-100
              transition
              flex
              items-center
              justify-center
            "
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            images: prev.images.filter((_, i) => i !== index),
                          }))
                        }
                        className="
                w-8
                h-8
                rounded-full
                bg-white
                text-black
                text-lg
                hover:bg-red-500
                hover:text-white
                transition
              "
                      >
                        ×
                      </button>
                    </div>

                    {index === 0 && (
                      <span
                        className="
                absolute
                bottom-2
                left-2
                bg-black
                text-white
                text-[10px]
                px-2
                py-1
                tracking-wider
                uppercase
              "
                      >
                        Main
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="
        mt-5
        h-24
        border
        flex
        items-center
        justify-center
        text-sm
        text-black/40
      "
              >
                No images added yet
              </div>
            )}
          </div>

          <div>
            <label className="text-xs uppercase text-black/40">
              Colors <span className="text-red-500">*</span>
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

            <button className="px-6 py-3 bg-black text-white" disabled={saving}>
              {saving ? "Saving..." : product ? "Save Changes" : "Add Product"}
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
      <label className="text-xs uppercase text-black/40">
        {label}
        <span className="text-red-500 ml-1">*</span>
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
      <h3 className="text-xs uppercase text-black/40 mb-1">
        {label} <span className="text-red-500">*</span>
      </h3>

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
