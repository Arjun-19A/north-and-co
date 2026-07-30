import { useEffect, useState } from "react";

const AddressModal = ({ open, onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    addressType: "Home",
    isDefault: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData({
        fullName: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        addressType: "Home",
        isDefault: false,
      });
    }
  }, [initialData]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-stone-100 border border-gray-200 shadow-2xl max-h-[92vh] overflow-y-auto">
        <div className="flex items-start justify-between border-b border-gray-200 px-8 py-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-black/45">
              Shipping Address
            </p>

            <h2 className="mt-1 text-[30px] font-light tracking-tight">
              {initialData ? "Edit Address" : "Add Address"}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-2xl text-black/40 hover:text-black transition"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-8 py-5 space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="bg-transparent text-sm border-b border-gray-300 pb-1 outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                Address Line 1
              </label>

              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                Address Line 2
              </label>

              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  PIN Code
                </label>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase tracking-[0.16em] text-black/60">
                  Country
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="bg-transparent border-b border-gray-300 text-sm pb-1 outline-none focus:border-black transition"
                />
              </div>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.16em] text-black/60 mb-3">
                Address Type
              </p>

              <div className="flex gap-3 flex-wrap">
                {["Home", "Work", "Other"].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        addressType: type,
                      }))
                    }
                    className={`px-6 py-2 border text-xs uppercase tracking-[0.18em] transition
                    ${
                      formData.addressType === type
                        ? "bg-black text-white border-black"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                className="accent-black"
              />

              <span className="text-sm font-light">
                Set as default shipping address
              </span>
            </label>
          </div>

          <div className="border-t border-gray-200 px-8 py-5 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 px-8 py-3 text-xs uppercase tracking-[0.18em] hover:border-black transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-black text-white px-10 py-3 text-xs uppercase tracking-[0.2em] hover:opacity-80 transition"
            >
              {initialData ? "Update Address" : "Save Address"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
