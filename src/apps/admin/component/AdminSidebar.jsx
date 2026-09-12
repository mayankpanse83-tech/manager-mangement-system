import React from "react";
import {
  FiHome,
  FiUsers,
  FiUserCheck,
  FiGrid,
  FiClock,
  FiCheckSquare,
  FiFileText,
  FiCalendar,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiHeadphones,
  FiChevronDown,
} from "react-icons/fi";

import "./AdminSidebar.css";

const menuItems = [
  {
    label: "Dashboard",
    icon: FiHome,
    path: "/admin/dashboard",
  },
  {
    label: "Employees",
    icon: FiUsers,
    path: "/admin/employees",
  },
  {
    label: "Managers",
    icon: FiUserCheck,
    path: "/admin/managers",
  },
  {
    label: "Departments",
    icon: FiFileText,
    path: "/admin/departments",
  },
  {
    label: "Attendance",
    icon: FiClock,
    path: "/admin/attendance",
  },
  {
    label: "Tasks",
    icon: FiCheckSquare,
    path: "/admin/tasks",
  },
  {
    label: "Daily Updates",
    icon: FiFileText,
    path: "/admin/daily-updates",
  },
  {
    label: "Leave Management",
    icon: FiCalendar,
    path: "/admin/leave",
  },
  {
    label: "Payroll",
    icon: FiDollarSign,
    path: "/admin/payroll",
  },
  {
    label: "Reports",
    icon: FiBarChart2,
    path: "/admin/reports",
  },
  {
    label: "Settings",
    icon: FiSettings,
    path: "/admin/settings",
  },
];

function AdminSidebar() {
  const currentPath = window.location.pathname;

  return (
    <aside className="admin-sidebar">

      {/* LOGO */}
      <div className="admin-logo-section">
        <div className="admin-logo">
          W
        </div>

        <div className="admin-brand">
          <h2>WorkForce</h2>
          <span>Admin Console</span>
        </div>
      </div>

      {/* MENU */}
      <nav className="admin-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            currentPath === item.path ||
            (item.label === "Dashboard" &&
              currentPath === "/admin");

          return (
            <a
              key={item.label}
              href={item.path}
              className={`admin-menu-item ${
                isActive ? "active" : ""
              }`}
            >
              <Icon className="admin-menu-icon" />

              <span>{item.label}</span>
            </a>
          );
        })}

      </nav>

      {/* BOTTOM AREA */}
      <div className="admin-sidebar-bottom">

        {/* NEED HELP */}
        <div className="admin-help-box">

          <div className="help-text">
            <h4>Need Help?</h4>

            <p>
              Contact support
              <br />
              or raise a request.
            </p>
          </div>

          <div className="help-icon">
            <FiHeadphones />
          </div>

          <button>
            Contact Support
          </button>

        </div>

        {/* USER */}
        <div className="admin-user-card">

          <div className="admin-user-avatar">
            AU
          </div>

          <div className="admin-user-info">
            <strong>Admin User</strong>
            <span>Organization Admin</span>
          </div>

          <FiChevronDown className="user-arrow" />

        </div>

      </div>

    </aside>
  );
}

export default AdminSidebar;