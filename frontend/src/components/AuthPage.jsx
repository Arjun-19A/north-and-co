import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { clearError, loginUser, registerUser } from "../redux/slices/authSlice";
import { mergeCart } from "../redux/slices/cartSlice";

const AuthPage = ({ type }) => {
  const isLogin = type === "login";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearError());
  }, [type, dispatch]);

  const { guestId } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        await dispatch(loginUser({ email, password })).unwrap();

        await dispatch(
          mergeCart({
            guestId,
          }),
        ).unwrap();
      } else {
        await dispatch(registerUser({ name, email, password })).unwrap();

        await dispatch(
          mergeCart({
            guestId,
          }),
        ).unwrap();
      }

      navigate("/");
    } catch (err) {}
  };
  return (
    <>
      <Link
        to="/"
        className="absolute top-5 text-3xl left-5 text-white md:text-5xl font-bold tracking-tight whitespace-nowrap"
      >
        North <span className="font-light">& Co.</span>
      </Link>
      <div className="flex h-dvh w-full">
        <div className="w-full hidden md:inline-block">
          <img
            className="h-full"
            src="https://images.unsplash.com/photo-1763872011479-aa293bf083a8?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="leftSideImage"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <form
            className="md:w-96 w-80 flex flex-col items-center justify-center"
            onSubmit={handleSubmit}
          >
            <h2 className="text-4xl text-gray-900 font-medium">
              {isLogin ? "Sign In" : "Create Account"}
            </h2>
            <p className="text-sm text-gray-500/90 mt-3">
              {isLogin
                ? "Welcome back! Please sign in to continue"
                : "Join North & Co. and start shopping today."}
            </p>
            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-black/50"></div>
              <p className="w-full text-nowrap text-sm text-black">
                {isLogin ? "or sign in with email" : "or sign up with email"}
              </p>
              <div className="w-full h-px bg-black/50"></div>
            </div>

            {!isLogin && (
              <div className="flex items-center mt-6 w-full bg-transparent border border-black/50 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <BsFillPersonFill />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  disabled={loading}
                  placeholder="Full Name"
                  className="bg-transparent text-black/80 placeholder-gray-500/80 outline-none text w-full h-full"
                  required
                />
              </div>
            )}

            <div className="flex items-center mt-6 w-full bg-transparent border border-black/50 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <MdEmail />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
                placeholder="you@example.com"
                className="bg-transparent text-black/80 placeholder-gray-500/80 outline-none text w-full h-full"
                required
              />
            </div>

            <div className="flex items-center mt-6 w-full bg-transparent border border-black/50 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <BsFillLockFill />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                placeholder="Password"
                className="bg-transparent text-black/80 placeholder-gray-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            {isLogin && (
              <div className="w-full flex items-center justify-between mt-8 text-black/60">
                <div className="flex items-center gap-2">
                  <input className="h-5" type="checkbox" id="checkbox" />
                  <label className="text-sm" htmlFor="checkbox">
                    Remember me
                  </label>
                </div>
              </div>
            )}
            {error && (
              <div className="mt-4 w-full rounded-md bg-red-50 border border-red-200 px-4 py-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full h-11 rounded-full bg-black text-white hover:opacity-80 disabled:opacity-50"
            >
              {loading
                ? "Please wait..."
                : isLogin
                  ? "Sign In"
                  : "Create Account"}
            </button>
            <p className="text-gray-500/90 text-sm mt-4">
              {isLogin ? (
                <>
                  Don’t have an account?{" "}
                  <Link
                    className="text-black font-semibold hover:underline"
                    to="/register"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <Link
                    className="text-black font-semibold hover:underline"
                    to="/login"
                  >
                    Sign In
                  </Link>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
