import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaTasks,
  FaFileAlt,
  FaUmbrellaBeach,
  FaChartBar,
  FaUser,
  FaCog,
} from "react-icons/fa";

import "./ManagerSidebar.css";


const menuItems = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: <FaHome />,
  },
  {
    name: "My Team",
    path: "team",
    icon: <FaUsers />,
  },
  {
    name: "Attendance",
    path: "attendance",
    icon: <FaCalendarCheck />,
  },
  {
    name: "Tasks",
    path: "tasks",
    icon: <FaTasks />,
  },
  {
    name: "Daily Updates",
    path: "daily-updates",
    icon: <FaFileAlt />,
  },
  {
    name: "Leave Requests",
    path: "leave",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Reports",
    path: "reports",
    icon: <FaChartBar />,
  },
  {
    name: "Profile",
    path: "profile",
    icon: <FaUser />,
  },
  {
    name: "Settings",
    path: "settings",
    icon: <FaCog />,
  },
];


export default function ManagerSidebar() {

  return (
    <aside className="manager-sidebar">

      <div className="manager-logo">

        <div className="manager-logo-box">
          W
        </div>

        <div>
          <h2>WorkForce</h2>
          <span>Manager Workspace</span>
        </div>

      </div>


      <nav className="manager-menu">

        {menuItems.map((item) => (

          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "dashboard"}
            className={({ isActive }) =>
              `manager-menu-item ${
                isActive ? "active" : ""
              }`
            }
          >

            <span className="manager-menu-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>

        ))}

      </nav>


      <div className="manager-help">

        <h4>Need Help?</h4>

        <p>
          Contact admin or send a request.
        </p>

        <button type="button">
          Contact Admin
        </button>

      </div>


      <div className="manager-profile">

        <div className="manager-profile-avatar">
          M
        </div>

        <div>
          <strong>Mayank panse</strong>
          <small>Team Manager</small>
        </div>

      </div>

    </aside>
  );
}