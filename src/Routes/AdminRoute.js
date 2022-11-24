import React, { useState } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import IsAdmin from "../Hooks/IsAdmin";
import Spinner from "../Pages/Shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const [isAdmin, adminLoading] = IsAdmin(user?.email)
  const location = useLocation();

  if (loading || adminLoading ) {
    return <Spinner></Spinner>
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default AdminRoute;
