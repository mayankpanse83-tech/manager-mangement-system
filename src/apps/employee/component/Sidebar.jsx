import { NavLink } from "react-router-dom";
import React from "react";
import "./Sidebar.css";

import {
  FaHome,
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaClipboardList,
  FaCalendarAlt,
  FaChartBar,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div>

        {/* Logo */}

        <div className="logo">

          <div className="logo-icon">
            E
          </div>

          <h2>EMS</h2>

        </div>

        {/* Menu */}

        <ul className="menu">

          <li>
            <NavLink to="/" className="menu-link">
  <FaHome className="icon" />
  Dashboard
</NavLink>
          </li>

          <li>
            <NavLink to="/department" className="menu-link">
  <FaClipboardList className="icon" />
  Department
</NavLink>
          </li>

          <li>
            <NavLink to="/salary" className="menu-link">
  <FaClipboardList className="icon" />
  Salary
</NavLink>
          </li>

          <li>
            <NavLink to="/attendance" className="menu-link">
  <FaClipboardList className="icon" />
  Attendance
</NavLink>
          </li>

          <li>
  <NavLink to="/daily-updates" className="menu-link">
    📝
    Daily Updates
  </NavLink>
</li>

          <li>
            <NavLink to="/leave" className="menu-link">
  <FaClipboardList className="icon" />
Leave
</NavLink>
          </li>

          <li>
            <NavLink to="/reports" className="menu-link">
  <FaClipboardList className="icon" />
  Reports
</NavLink>
          </li>

          <li>
            <NavLink to="/profile" className="menu-link">
  <FaClipboardList className="icon" />
  Profile
</NavLink>
          </li>

          <li>
            <NavLink to="/setting" className="menu-link">
  <FaClipboardList className="icon" />
  Setting
</NavLink>
          </li>

<li>
  <NavLink to="/tasks" className="menu-link">
    📋
    Tasks
  </NavLink>
</li>

        </ul>

      </div>

      {/* Bottom */}

      <div>

        <div className="help-card">

          <FaQuestionCircle className="help-icon" />

          <h3>Need Help?</h3>

          <p>
            Contact support for any issue.
          </p>

          <button>Contact Us</button>

        </div>

        <div className="profile">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="profile"
          />

          <div>

            <h4>Mayank Panse</h4>

            <p>Software Developer</p>

          </div>

        </div>

      </div>

    </aside>
    
  );
}

export default Sidebar;