import React from "react";
import FixedNavBar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ marginTop: 40 }}>
      <FixedNavBar />
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
