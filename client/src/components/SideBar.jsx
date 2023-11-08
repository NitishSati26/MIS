import React from "react";
import { useState } from "react";
import "../Style/sidebar.css";

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul className="sidebar-links">
        <li>DASHBOARD</li>
        <li>Products</li>
        <li>Employees</li>
        <li>Sales</li>
      </ul>
    </div>
  );
};

export default SideBar;
