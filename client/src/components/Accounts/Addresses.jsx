import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressModal from "./AddressModal";
import { IoHomeOutline, IoAddOutline } from "react-icons/io5";
import { PiBuildingOffice } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress,
} from "../../redux/slices/addressSlice";

const Addresses = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const { addresses, loading } = useSelector((state) => state.address);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const getAddressIcon = (type) => {
    switch (type) {
      case "Home":
        return <IoHomeOutline className="text-lg" />;
      case "Work":
        return <PiBuildingOffice className="text-lg" />;
      default:
        return <SlLocationPin className="text-lg" />;
    }
  };

  const handleSubmitAddress = async (formData) => {
    try {
      if (editingAddress) {
        await dispatch(
          updateAddress({
            addressId: editingAddress._id,
            formData,
          }),
        ).unwrap();
      } else {
        await dispatch(addAddress(formData)).unwrap();
      }

      setShowModal(false);
      setEditingAddress(null);
    } catch (error) {
      console.error(error);
    }
  };

  const data = addresses;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-light tracking-tight">
            Saved Addresses
          </h2>

          <p className="text-sm text-black/50 mt-1">
            Manage your shipping and billing addresses for a faster checkout.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingAddress(null);
            setShowModal(true);
          }}
          className="px-4 py-2  border border-gray-300 text-sm font-medium hover:border-black transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>
            <IoAddOutline className="text-lg" />
          </span>
          Add New Address
        </button>
      </div>

      {loading && <p className="text-sm text-black/50">Loading addresses...</p>}

      {!loading && data.length === 0 && (
        <div className="border border-dashed border-gray-300 p-12 text-center">
          <h3 className="text-lg font-light">No addresses yet</h3>

          <p className="text-sm text-black/50 mt-2">
            Add your first shipping address.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((address) => (
          <div
            key={address._id}
            className="py-3 px-6 border transition-colors relative flex flex-col border-black/15"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {getAddressIcon(address.addressType)}
                <h3 className="font-normal">{address.addressType}</h3>
              </div>
              {address.isDefault && (
                <span className="text-xs bg-black text-white px-2.5 py-1 font-medium">
                  Default
                </span>
              )}
            </div>

            <div className="text-sm text-black/70 flex-1">
              <p className="font-medium text-black">{address.fullName}</p>

              <p className="text-sm text-black/60">{address.phone}</p>
              <p className="mt-3">
                {address.addressLine1}
                {address.addressLine2 && `, ${address.addressLine2}`}
              </p>
              <p>
                {address.city}, {address.state}, {address.postalCode}
              </p>

              <p>{address.country}</p>
            </div>

            <div className="flex items-center gap-3 mt-3 pt-3 border-t border-black/5 ">
              <button
                onClick={() => {
                  setEditingAddress(address);
                  setShowModal(true);
                }}
                className="text-sm font-medium hover:text-black/70 uppercase"
              >
                Edit
              </button>

              <span className="text-gray-300">|</span>

              <button
                onClick={() => dispatch(deleteAddress(address._id))}
                className="text-sm font-medium text-red-600 hover:text-red-500 uppercase"
              >
                Remove
              </button>

              {!address.isDefault && (
                <>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => dispatch(setDefaultAddress(address._id))}
                    className="text-xs uppercase tracking-wide hover:text-black/70  transition"
                  >
                    Set As Default
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <AddressModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingAddress(null);
        }}
        onSubmit={handleSubmitAddress}
        initialData={editingAddress}
      />
    </div>
  );
};

export default Addresses;
