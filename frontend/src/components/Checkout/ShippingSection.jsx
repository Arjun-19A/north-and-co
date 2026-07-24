import { useEffect, useState } from "react";
import { IoCheckmark } from "react-icons/io5";

const ShippingSection = ({
  step,
  completed,
  isOpen,
  addresses,
  addressMode,
  setAddressMode,
  selectedAddress,
  setSelectedAddress,
  newAddress,
  shippingAddress,
  setShippingAddress,
  setNewAddress,
  onComplete,
}) => {
  const savedAddresses = addresses || [];

  const handleChange = (e) => {
    setNewAddress({
      ...newAddress,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (savedAddresses.length > 0 && !selectedAddress) {
      const defaultAddress =
        savedAddresses.find((a) => a.isDefault) || savedAddresses[0];

      setSelectedAddress(defaultAddress);
      setShippingAddress(defaultAddress);
    }
  }, [savedAddresses, selectedAddress, setSelectedAddress, setShippingAddress]);

  const canContinue =
    addressMode === "saved"
      ? !!selectedAddress
      : !!(
          newAddress.fullName &&
          newAddress.phone &&
          newAddress.addressLine1 &&
          newAddress.city &&
          newAddress.state &&
          newAddress.postalCode
        );

  const handleContinue = () => {
    if (addressMode === "saved") {
      onComplete(selectedAddress);
      return;
    }
    onComplete(newAddress);
  };
  return (
    <section className="bg-transparent">
      <div className="flex gap-1 md:gap-5">
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition
              ${
                completed
                  ? "bg-black border-black text-white"
                  : "border-gray-300 text-black"
              }`}
        >
          {completed ? <IoCheckmark size={16} /> : step}
        </div>

        <div className="flex-1">
          <div>
            <h3 className="text-[20px] font-light tracking-[-0.01em]">
              Shipping Address
            </h3>

            {completed && shippingAddress && (
              <p className="text-sm text-black/70 mt-2">
                {shippingAddress.fullName} • {shippingAddress.phone} •{" "}
                {shippingAddress.addressLine1}
                {shippingAddress.addressLine2 &&
                  `, ${shippingAddress.addressLine2}`}
                , {shippingAddress.city}, {shippingAddress.state}
              </p>
            )}
          </div>

          {isOpen && (
            <div className="mt-6">
              {savedAddresses.length > 0 && (
                <div className="flex gap-8 pb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={addressMode === "saved"}
                      onChange={() => setAddressMode("saved")}
                      className="accent-black"
                    />

                    <span className="text-sm tracking-wide">
                      Use Saved Address
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={addressMode === "new"}
                      onChange={() => setAddressMode("new")}
                      className="accent-black"
                    />

                    <span className="text-sm tracking-wide">
                      Deliver to Another Address
                    </span>
                  </label>
                </div>
              )}

              {addressMode === "saved" && (
                <div className="space-y-4 flex flex-col">
                  {savedAddresses.map((address) => (
                    <label
                      key={address._id}
                      className={`
          block
          p-5
          cursor-pointer
          transition bg-transparent border border-gray-300
          ${
            selectedAddress?._id === address._id
              ? "border-black"
              : " hover:border-black/40"
          }
        `}
                    >
                      <div className="flex gap-4 items-start">
                        <input
                          type="radio"
                          name="shipping-address"
                          checked={selectedAddress?._id === address._id}
                          onChange={() => {
                            setSelectedAddress(address);
                            setShippingAddress(address);
                          }}
                          className="accent-black mt-1"
                        />

                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-medium">{address.fullName}</h3>
                            {address.isDefault && (
                              <span className="text-[10px] uppercase tracking-wider text-black/50">
                                Default
                              </span>
                            )}
                          </div>

                          <p className="text-sm text-black/70">
                            {address.phone}
                          </p>

                          <p className="text-sm text-black/70 mt-2">
                            {address.addressLine1}
                            {address.addressLine2 &&
                              `, ${address.addressLine2}`}
                          </p>

                          <p className="text-sm text-black/70">
                            {address.city}, {address.state},{" "}
                            {address.postalCode}
                          </p>

                          <p className="text-sm text-black/70">
                            {address.country}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}

                  <button
                    disabled={!selectedAddress}
                    onClick={handleContinue}
                    className="mt-4 w-full md:w-fit bg-black text-white text-xs tracking-[0.2em] uppercase font-light px-12 py-4 hover:opacity-80 transition-opacity duration-200 "
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {addressMode === "new" && (
                <div className="flex flex-col gap-8 mt-2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10">
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={newAddress.fullName}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={newAddress.phone}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="addressLine1"
                        value={newAddress.addressLine1}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:col-span-2">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Address Line 2
                      </label>
                      <input
                        type="text"
                        name="addressLine2"
                        value={newAddress.addressLine2}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={newAddress.city}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={newAddress.state}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={newAddress.postalCode}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[11px] tracking-[0.16em] text-black/70 uppercase font-light">
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={newAddress.country}
                        onChange={handleChange}
                        className="bg-transparent border-b border-gray-200 text-[14.5px] font-light text-primary pb-1 outline-none focus:border-primary transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <button
                    disabled={!canContinue}
                    onClick={handleContinue}
                    className={`mt-4 w-fit bg-black text-white text-xs tracking-[0.2em] uppercase font-light px-12 py-4 transition-opacity duration-200 ${
                      canContinue
                        ? "bg-black text-white hover:opacity-80 cursor-pointer"
                        : "text-gray-500 hover:opacity-85 cursor-not-allowed"
                    }`}
                  >
                    Continue to Payment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
