import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaBuilding,
  FaClock,
  FaTasks,
  FaFileAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaChartBar,
  FaCog,
  FaHeadset,
  FaChevronDown,
  FaPlus,
} from "react-icons/fa";

import "./AdminSidebar.css";

const AdminSidebar = () => {
  return (
    <aside className="admin-sidebar">

      {/* LOGO */}
      <div className="admin-brand">
        <div className="admin-brand-icon">W</div>

        <div className="admin-brand-text">
          <h2>WorkForce</h2>
          <span>Admin Console</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="admin-nav">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/admin/employees"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaUsers />
          <span>Employees</span>
        </NavLink>

        <NavLink
          to="/admin/managers"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaUserTie />
          <span>Managers</span>
        </NavLink>

        <NavLink
          to="/admin/departments"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaBuilding />
          <span>Departments</span>
        </NavLink>

        <NavLink
          to="/admin/attendance"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaClock />
          <span>Attendance</span>
        </NavLink>

        <NavLink
          to="/admin/tasks"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaTasks />
          <span>Tasks</span>
        </NavLink>

        <NavLink
          to="/admin/daily-updates"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaFileAlt />
          <span>Daily Updates</span>
        </NavLink>

        <NavLink
          to="/admin/leave"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaCalendarAlt />
          <span>Leave Management</span>
        </NavLink>

        <NavLink
          to="/admin/payroll"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaMoneyBillWave />
          <span>Payroll</span>
        </NavLink>

        <NavLink
          to="/admin/reports"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* SUPPORT */}
      <div className="admin-support">
        <div className="support-icon">
          <FaHeadset />
        </div>

        <h4>Need Help?</h4>

        <p>
          Contact support<br />
          or raise a request.
        </p>

        <button>
          <FaHeadset />
          Contact Support
        </button>
      </div>

      {/* ADMIN PROFILE */}
      <div className="admin-profile">

        <div className="admin-profile-avatar">
          AU
        </div>

        <div className="admin-profile-info">
          <strong>Admin User</strong>
          <span>Organization Admin</span>
        </div>

        <button className="admin-profile-dropdown">
          <FaChevronDown />
        </button>

      </div>

    </aside>
  );
};

export default AdminSidebar;