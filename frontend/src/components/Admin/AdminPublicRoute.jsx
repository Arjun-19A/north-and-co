import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminPublicRoute() {
  const { isAuthenticated, adminInfo } = useSelector(
    (state) => state.adminAuth,
  );

  if (isAuthenticated && adminInfo) {
    return <Navigate to="/admin" replace />;
  }

  return <Outlet />;
}
