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


function ManagerSidebar() {

  return (
    <aside className="manager-sidebar">

      {/* LOGO */}

      <div className="manager-logo">

        <div className="manager-logo-box">
          W
        </div>

        <div>
          <h2>WorkForce</h2>

          <span>
            Manager Workspace
          </span>
        </div>

      </div>


      {/* MENU */}

      <nav className="manager-menu">

        <NavLink
          to="/manager/dashboard"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaHome />

          <span>
            Dashboard
          </span>

        </NavLink>


        <NavLink
          to="/manager/team"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaUsers />

          <span>
            My Team
          </span>

        </NavLink>


        <NavLink
          to="/manager/attendance"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaCalendarCheck />

          <span>
            Attendance
          </span>

        </NavLink>


        <NavLink
          to="/manager/tasks"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaTasks />

          <span>
            Tasks
          </span>

        </NavLink>


        <NavLink
          to="/manager/daily-updates"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaFileAlt />

          <span>
            Daily Updates
          </span>

        </NavLink>


        <NavLink
          to="/manager/leave"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaUmbrellaBeach />

          <span>
            Leave Requests
          </span>

        </NavLink>


        <NavLink
          to="/manager/reports"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaChartBar />

          <span>
            Reports
          </span>

        </NavLink>


        <NavLink
          to="/manager/profile"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaUser />

          <span>
            Profile
          </span>

        </NavLink>


        <NavLink
          to="/manager/settings"
          className={({ isActive }) =>
            `manager-menu-item ${
              isActive ? "active" : ""
            }`
          }
        >

          <FaCog />

          <span>
            Settings
          </span>

        </NavLink>

      </nav>


      {/* PROFILE */}

      <div className="manager-profile">

        <div className="manager-profile-avatar">
          M
        </div>

        <div>

          <strong>
            Mayank Panse
          </strong>

          <small>
            Team Manager
          </small>

        </div>

      </div>

    </aside>
  );
}


export default ManagerSidebar;