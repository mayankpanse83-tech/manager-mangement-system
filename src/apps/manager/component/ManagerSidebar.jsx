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
        <div className="manager-logo-icon">W</div>

        <div>
          <h2>WorkForce</h2>
          <span>Manager Workspace</span>
        </div>
      </div>

      {/* MENU */}
      <nav className="manager-menu">

        <NavLink
          to="/manager/dashboard"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/manager/team"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaUsers />
          <span>My Team</span>
        </NavLink>

        <NavLink
          to="/manager/attendance"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaCalendarCheck />
          <span>Attendance</span>
        </NavLink>

        <NavLink
          to="/manager/tasks"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaTasks />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/manager/daily-updates"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaFileAlt />
          <span>Daily Updates</span>
        </NavLink>

        <NavLink
          to="/manager/leave"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaUmbrellaBeach />
          <span>Leave Requests</span>
        </NavLink>

        <NavLink
          to="/manager/reports"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

      </nav>

      {/* BOTTOM MENU */}
      <div className="manager-bottom-menu">

        <NavLink
          to="/manager/profile"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaUser />
          <span>Profile</span>
        </NavLink>

        <NavLink
          to="/manager/settings"
          className={({ isActive }) =>
            isActive ? "manager-menu-item active" : "manager-menu-item"
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </div>

      {/* HELP */}
      <div className="manager-help">
        <strong>Need Help?</strong>
        <p>Contact admin or send a request.</p>
        <button>Contact Admin</button>
      </div>

      {/* USER */}
      <div className="manager-user">
        <div className="manager-user-avatar">RV</div>

        <div>
          <strong>Mayank Panse</strong>
          <span>Team Manager</span>
        </div>
      </div>

    </aside>
  );
}

export default ManagerSidebar;