import React, { useContext } from "react";
import { Navigate } from "react-router";
import { LoginContext } from "./LoginProvider";

const AuthRequired = ({ children }: any) => {
  const { loginDetail } = useContext(LoginContext);
  return <>{loginDetail.isLogin ? children : <Navigate to="/" />}</>;
};

export default AuthRequired;
