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
    path: "/manager/dashboard",
    icon: <FaHome />,
  },
  {
    name: "My Team",
    path: "/manager/team",
    icon: <FaUsers />,
  },
  {
    name: "Attendance",
    path: "/manager/attendance",
    icon: <FaCalendarCheck />,
  },
  {
    name: "Tasks",
    path: "/manager/tasks",
    icon: <FaTasks />,
  },
  {
    name: "Daily Updates",
    path: "/manager/daily-updates",
    icon: <FaFileAlt />,
  },
  {
    name: "Leave Requests",
    path: "/manager/leave",
    icon: <FaUmbrellaBeach />,
  },
  {
    name: "Reports",
    path: "/manager/reports",
    icon: <FaChartBar />,
  },
  {
    name: "Profile",
    path: "/manager/profile",
    icon: <FaUser />,
  },
  {
    name: "Settings",
    path: "/manager/settings",
    icon: <FaCog />,
  },
];


function ManagerSidebar() {

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


      <div className="manager-profile">

        <div className="manager-profile-avatar">
          M
        </div>

        <div>
          <strong>Mayank Panse</strong>
          <small>Team Manager</small>
        </div>

      </div>

    </aside>
  );
}


export default ManagerSidebar;