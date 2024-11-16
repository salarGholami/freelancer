import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRow({ children }) {
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();

  return children;
}

export default ProtectedRow;
