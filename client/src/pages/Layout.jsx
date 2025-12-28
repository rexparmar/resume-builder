import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../componenets/Navbar";
import {useSelector} from "react-redux";
import Loader from "../componenets/Loader";
import Login from "./Login";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {user ? (
        <div>
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
