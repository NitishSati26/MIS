import React from "react";
import "../Style/header.css";

const Header = ({ title, subtitle }) => {
  return (
    <div className="flex-container">
    <div className="flex-items">
      <svg>
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">Analytics</text>
      </svg>
    </div>
</div>
  );
};

export default Header;
