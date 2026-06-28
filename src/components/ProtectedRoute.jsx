import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthorizationContext } from "./Authorization";

function ProtectedRoute() {
  const { isAuth } = useContext(AuthorizationContext);
  if (!isAuth) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}
export default ProtectedRoute;
