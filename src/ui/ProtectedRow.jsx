import { useEffect } from "react";
import useAuthorize from "../features/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRow({ children }) {
  const navigate = useNavigate();

  // 1. load the authenticated user
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();

  // 2.check if Authorized or not check is Authenticated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است !")
      navigate("/");
    }
    if (!isAuthorized && !isLoading) navigate("/not-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, isVerified, navigate]);

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
