import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthWrapper = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(
    (state: { user: { isAuthenticated: boolean } }) => state.user
  );

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  return isAuthenticated ? <Outlet /> : <></>;
};

export default AuthWrapper;
