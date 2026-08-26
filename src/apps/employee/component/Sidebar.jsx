import React from "react";
import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaCalendarCheck,
  FaTasks,
  FaFileAlt,
  FaUmbrellaBeach,
  FaWallet,
  FaChartBar,
  FaUser,
  FaCog,
} from "react-icons/fa";

import "./Sidebar.css";


const Sidebar = () => {

  /*
    Whenever employee sidebar is clicked,
    force employee role.
  */
  const handleEmployeeClick = () => {
    sessionStorage.setItem("userRole", "employee");
    localStorage.setItem("userRole", "employee");
  };


  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "Attendance",
      path: "/attendance",
      icon: <FaCalendarCheck />,
    },
    {
      name: "Tasks",
      path: "/tasks",
      icon: <FaTasks />,
    },
    {
      name: "Daily Updates",
      path: "/daily-updates",
      icon: <FaFileAlt />,
    },
    {
      name: "Leave",
      path: "/leave",
      icon: <FaUmbrellaBeach />,
    },
    {
      name: "Salary",
      path: "/salary",
      icon: <FaWallet />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];


  return (
    <aside className="sidebar">

      {/* LOGO */}

      <div className="sidebar-logo">

        <div className="sidebar-logo-box">
          W
        </div>

        <div>
          <h2>WorkForce</h2>
          <span>Employee Workspace</span>
        </div>

      </div>


      {/* MENU */}

      <nav className="sidebar-menu">

        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleEmployeeClick}
            className={({ isActive }) =>
              `sidebar-menu-item ${
                isActive ? "active" : ""
              }`
            }
          >

            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.name}
            </span>

          </NavLink>
        ))}

      </nav>


      {/* PROFILE */}

      <div className="sidebar-bottom">

        <div className="sidebar-user">

          <div className="sidebar-user-avatar">
            M
          </div>

          <div>
            <strong>Mayank panse</strong>
            <small>Employee</small>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;