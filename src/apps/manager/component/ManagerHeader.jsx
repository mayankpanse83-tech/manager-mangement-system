import React from "react";
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";

import "./ManagerHeader.css";

function ManagerHeader() {
  return (
    <header className="manager-header">

      <div>
        <h1>
          Good Morning, Rajat! 👋
        </h1>

        <p>
          Here's what's happening with your team today.
        </p>
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

          <div className="manager-profile-avatar">
            M
          </div>

          <div>
            <strong>Mayank panse</strong>
            <small>Team Manager</small>
          </div>

          <FaChevronDown />

        </div>

      </div>

    </header>
  );
}

export default ManagerHeader;