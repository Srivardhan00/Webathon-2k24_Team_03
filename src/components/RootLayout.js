import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default RootLayout;
