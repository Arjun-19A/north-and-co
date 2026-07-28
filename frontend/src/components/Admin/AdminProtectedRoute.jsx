import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminProtectedRoute() {
  const { isAuthenticated } = useSelector(
    (state) => state.adminAuth
  );

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}