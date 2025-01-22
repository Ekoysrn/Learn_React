import React from "react";
import HeaderNavHome from "../Elements/HeaderHome";
import Sidebar from "../Elements/sidebar";

function Home({ children }) {
  return (
    <>
      <HeaderNavHome />
      <div className="flex h-screen bg-gray-100 relative">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        {children}
      </div>
    </>
  );
}

export default Home;
