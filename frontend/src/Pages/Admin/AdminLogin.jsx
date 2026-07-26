import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin, clearAdminError } from "../redux/slices/adminAuthSlice";

export default function AdminLogin() {
  const dispatch = useDispatch();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.adminAuth,
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    return () => {
      dispatch(clearAdminError());
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginAdmin(formData));
  };

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <section className="min-h-screen bg-stone-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white border border-gray-300 p-10">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-black/45">
            Administration
          </p>

          <h1 className="mt-3 text-4xl font-light">Admin Login</h1>

          <p className="mt-3 text-sm text-black/45">
            Sign in to access the admin dashboard.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-black/45 mb-3">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.18em] text-black/45 mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-black transition"
            />
          </div>

          {error && (
            <div className="border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 tracking-wide hover:opacity-90 disabled:opacity-60 transition"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
