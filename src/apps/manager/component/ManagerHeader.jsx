import React from "react";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import "./ManagerHeader.css";

const ManagerHeader = () => {
  return (
    <header className="manager-header">
      <div className="manager-header-left">
        <h1>
          Good Morning Mayank! <span>👋</span>
        </h1>
        <p>Here's what's happening with your team today</p>
      </div>

      <div className="manager-header-right">
        <div className="manager-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search anything..."
          />
        </div>

        <div className="manager-notification">
          <FaBell />
          <span>3</span>
        </div>

        <div className="manager-profile">
          <div className="manager-avatar">M</div>

          <div className="manager-user-info">
            <strong>Mayank panse</strong>
            <small>Team Manager</small>
          </div>

          <FaChevronDown className="manager-chevron" />
        </div>
      </div>
    </header>
  );
};

export default ManagerHeader;