import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRow({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();

  // 2.check if Authorized or not check is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  // 3.while loading  => show a loading
  if (isLoading)
    return (
      <div className=" flex justify-center items-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  // 4.if user isAuthenticated and isAuthorized => rerender the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRow;
