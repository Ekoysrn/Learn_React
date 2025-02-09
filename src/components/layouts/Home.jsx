import React, { useState } from "react";
import HeaderNavHome from "../Elements/HeaderHome";
import Sidebar from "../Elements/sidebar";


function Home({ children }) {

  const [sideBar, setSideBar] = useState(false);

  const handleSideBarBtn = () => setSideBar(!sideBar);

  return (
    <div className="border-box overflow-x-hidden">
      <HeaderNavHome svg={sideBar} handleSideBar={handleSideBarBtn}/>
      <div className="flex h-screen bg-gray-100 relative dark:text-slate-50 dark:bg-slate-950">
        {/* Sidebar */}
        {sideBar ? <Sidebar hidden="block" /> : <Sidebar hidden="hidden"/>}
        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}

export default Home;
