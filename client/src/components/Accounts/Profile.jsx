import { useEffect, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/slices/authSlice";

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.auth);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      setFormData({
        name: userInfo.name || "",
        email: userInfo.email || "",
        phone: userInfo.phone || "",
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setEditing(false);

    setFormData({
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateProfile(formData)).unwrap();
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-light tracking-tight">
            Personal Information
          </h2>
          <p className="text-black/50 text-sm mt-1">
            Manage your personal details
          </p>
        </div>

        <button
          onClick={() => setEditing(!editing)}
          className={`px-3 py-2 ${editing ? "hidden" : ""} border border-gray-300 text-sm hover:border-black transition-colors cursor-pointer`}
        >
          Edit Profile
        </button>
      </div>

      <div className="bg-linear-to-br from-black to-gray-700 p-5 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-1 md:text-left">
          <p className="text-white/60 text-sm uppercase tracking-[0.15em]">
            Welcome back
          </p>

          <h3 className="text-2xl font-light mt-1">{userInfo?.name}</h3>
          <div className="flex items-center justify-start gap-4 text-white/70 text-sm mt-1">
            <span className="flex items-center gap-1.5">
              <IoMailOutline />
              {userInfo?.email}
            </span>
            <span className="flex items-center gap-1.5">
              <SiTicktick className="text-xs text-green-600" />
              Verified Member
            </span>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" border border-black/10 p-5 sm:p-8 flex flex-col gap-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-normal mb-1.5">
              Full Name
            </label>
            <label className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors">
              <input
                type="text"
                name="name"
                disabled={!editing}
                value={formData.name}
                onChange={handleChange}
                className={`flex-1 outline-none h-full text-sm transition-colors ${
                  editing ? "text-black" : "text-black/60 cursor-default"
                }`}
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-normal mb-1.5">
              Email Address
            </label>
            <label className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors">
              <input
                type="email"
                name="email"
                disabled
                value={formData.email}
                className="flex-1 outline-none h-full text-sm transition-colors text-black/60"
              />
            </label>
          </div>
          <div>
            <label className="block text-sm font-normal mb-1.5">
              Phone Number
            </label>
            <label className="flex items-center gap-2.5 border border-black/10 rounded-lg px-3.5 h-10.5 focus-within:border-black/30 transition-colors">
              <input
                type="text"
                name="phone"
                disabled={!editing}
                value={formData.phone}
                onChange={handleChange}
                placeholder="Add phone number"
                className={`flex-1 outline-none h-full text-sm transition-colors ${
                  editing ? "text-black" : "text-black/60 cursor-default"
                }`}
              />
            </label>
          </div>
        </div>
        <div className="pt-4 border-t border-black/5 flex items-center justify-between">
          <div>
            <p className="font-normal text-sm"> Newsletter Preferences</p>
            <p className="text-sm text-black/50 mt-0.5">
              Receive updates on new arrivals and offers.
            </p>
          </div>
          <label
            htmlFor=""
            className="relative inline-flex items-center cursor-pointer"
          >
            <input type="checkbox" className="h-3 w-3 accent-black" />
          </label>
        </div>
        {editing && (
          <div className="flex justify-end gap-2.5 pt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-3 py-2 text-sm font-light hover:bg-black/3 transition-colors uppercase"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-transparent px-4 py-1 text-sm font-light border border-gray-300 w-fit hover:bg-black/3 transition uppercase cursor-pointer"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Profile;
