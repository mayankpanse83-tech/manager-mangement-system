import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

/* =====================================================
   EMPLOYEE
===================================================== */

import EmployeeSidebar
  from "./apps/employee/component/Sidebar";

import EmployeeHeader
  from "./apps/employee/component/Header";

import EmployeeDashboard
  from "./apps/employee/component/pages/Dashboard";

import EmployeeAttendance
  from "./apps/employee/component/pages/Attendance";

import EmployeeTask
  from "./apps/employee/component/pages/Task";

import EmployeeDailyUpdates
  from "./apps/employee/component/pages/DailyUpdates";

import EmployeeLeave
  from "./apps/employee/component/pages/Leave";

import EmployeeSalary
  from "./apps/employee/component/pages/Salary";

import EmployeeReport
  from "./apps/employee/component/pages/Report";

import EmployeeProfile
  from "./apps/employee/component/pages/Profile";


/* =====================================================
   LOGIN
===================================================== */

import Login
  from "./apps/employee/component/pages/Login";

import AccountActivation
  from "./apps/employee/component/pages/AccountActivation";


/* =====================================================
   MANAGER
===================================================== */

import ManagerSidebar
  from "./apps/manager/component/ManagerSidebar";

import ManagerHeader
  from "./apps/manager/component/ManagerHeader";

import ManagerDashboard
  from "./apps/manager/pages/ManagerDashboard";

import ManagerTeam
  from "./apps/manager/pages/ManagerTeam";

import ManagerAttendance
  from "./apps/manager/pages/ManagerAttendance";

import ManagerTasks
  from "./apps/manager/pages/ManagerTasks";

import ManagerDailyUpadates
  from "./apps/manager/pages/ManagerDailyUpadates";

import ManagerLeaveRequests
  from "./apps/manager/pages/ManagerLeaveRequests";

import ManagerReports
  from "./apps/manager/pages/ManagerReports";

import ManagerProfile
  from "./apps/manager/pages/ManagerProfile";


/* =====================================================
   ADMIN
===================================================== */

import AdminDashboard
  from "./apps/admin/pages/AdminDashboard";
import AdminEmployees
  from "./apps/admin/pages/AdminEmployees";


/* =====================================================
   APP CSS
===================================================== */

import "./App.css";


/* =====================================================
   MANAGER PLACEHOLDER
===================================================== */

function ManagerPlaceholder({ title }) {
  return (
    <div className="manager-placeholder">
      <h1>{title}</h1>
      <p>{title} page coming soon.</p>
    </div>
  );
}


/* =====================================================
   AUTH LAYOUT
===================================================== */

function AuthLayout() {
  return (
    <div className="auth-layout">
      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/account-activation"
          element={<AccountActivation />}
        />

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>
    </div>
  );
}


/* =====================================================
   EMPLOYEE LAYOUT
===================================================== */

function EmployeeLayout() {
  return (
    <div className="app-layout">

      <EmployeeSidebar />

      <div className="main-area">

        <EmployeeHeader />

        <main className="page-content">

          <Routes>

            <Route
              path="/"
              element={
                <Navigate
                  to="/employee/dashboard"
                  replace
                />
              }
            />

            <Route
              path="/dashboard"
              element={
                <Navigate
                  to="/employee/dashboard"
                  replace
                />
              }
            />

            <Route
              path="/employee/dashboard"
              element={<EmployeeDashboard />}
            />

            <Route
              path="/employee/attendance"
              element={<EmployeeAttendance />}
            />

            <Route
              path="/employee/tasks"
              element={<EmployeeTask />}
            />

            <Route
              path="/employee/daily-updates"
              element={<EmployeeDailyUpdates />}
            />

            <Route
              path="/employee/leave"
              element={<EmployeeLeave />}
            />

            <Route
              path="/employee/salary"
              element={<EmployeeSalary />}
            />

            <Route
              path="/employee/reports"
              element={<EmployeeReport />}
            />

            <Route
              path="/employee/profile"
              element={<EmployeeProfile />}
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/employee/dashboard"
                  replace
                />
              }
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}


/* =====================================================
   MANAGER LAYOUT
===================================================== */

function ManagerLayout() {
  const location = useLocation();

  const hideManagerHeader =
    location.pathname === "/manager/team" ||
    location.pathname === "/manager/attendance" ||
    location.pathname === "/manager/tasks" ||
    location.pathname === "/manager/daily-updates" ||
    location.pathname === "/manager/leave" ||
    location.pathname === "/manager/reports" ||
    location.pathname === "/manager/profile";

  return (
    <div className="manager-layout">

      <ManagerSidebar />

      <div className="manager-main">

        {!hideManagerHeader && (
          <ManagerHeader />
        )}

        <main className="manager-content">

          <Routes>

            <Route
              path="/manager"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />

            <Route
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />

            <Route
              path="/manager/team"
              element={<ManagerTeam />}
            />

            <Route
              path="/manager/attendance"
              element={<ManagerAttendance />}
            />

            <Route
              path="/manager/tasks"
              element={<ManagerTasks />}
            />

            <Route
              path="/manager/daily-updates"
              element={<ManagerDailyUpadates />}
            />

            <Route
              path="/manager/leave"
              element={<ManagerLeaveRequests />}
            />

            <Route
              path="/manager/reports"
              element={<ManagerReports />}
            />

            <Route
              path="/manager/profile"
              element={<ManagerProfile />}
            />

            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />

          </Routes>

        </main>

      </div>

    </div>
  );
}


/* =====================================================
   ADMIN SIDEBAR
   Screenshot-style WorkForce sidebar
===================================================== */

function AdminSidebar() {
  const menu = [
    ["📊", "Dashboard", "/admin/dashboard"],
    ["👥", "Employees", "/admin/employees"],
    ["👔", "Managers", "/admin/managers"],
    ["🏢", "Departments", "/admin/departments"],
    ["🕒", "Attendance", "/admin/attendance"],
    ["✓", "Tasks", "/admin/tasks"],
    ["📝", "Daily Updates", "/admin/daily-updates"],
    ["📅", "Leave Management", "/admin/leave"],
    ["💰", "Payroll", "/admin/payroll"],
    ["📈", "Reports", "/admin/reports"],
    ["⚙", "Settings", "/admin/settings"],
  ];

  const currentPath = window.location.pathname;

  return (
    <aside className="wf-admin-sidebar">

      {/* LOGO */}
      <div className="wf-admin-logo">
        <div className="wf-logo-box">W</div>

        <div>
          <div className="wf-brand-name">WorkForce</div>
          <div className="wf-brand-subtitle">
            Admin Console
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="wf-admin-menu">

        {menu.map(([icon, label, path]) => {
          const active =
            currentPath === path ||
            (label === "Dashboard" &&
              currentPath === "/admin");

          return (
            <a
              key={path}
              href={path}
              className={`wf-admin-item ${
                active ? "active" : ""
              }`}
            >
              <span className="wf-admin-icon">
                {icon}
              </span>

              <span>{label}</span>
            </a>
          );
        })}

      </nav>

      {/* BOTTOM */}
      <div className="wf-admin-bottom">

        <div className="wf-help-box">

          <div>
            <strong>Need Help?</strong>

            <p>
              Contact support
              <br />
              or raise a request.
            </p>
          </div>

          <div className="wf-help-circle">
            🎧
          </div>

          <button>
            Contact Support
          </button>

        </div>

        <div className="wf-user-box">

          <div className="wf-user-avatar">
            AU
          </div>

          <div className="wf-user-details">
            <strong>Admin User</strong>
            <span>Organization Admin</span>
          </div>

          <span className="wf-user-arrow">
            ⌄
          </span>

        </div>

      </div>

    </aside>
  );
}


/* =====================================================
   ADMIN LAYOUT
===================================================== */

function AdminLayout() {
  return (
    <div className="wf-admin-layout">

      <AdminSidebar />

      <main className="wf-admin-main">
        <Routes>

          {/* /admin → dashboard */}
          <Route
            path="/admin"
            element={
              <Navigate
                to="/admin/dashboard"
                replace
              />
            }
          />

          {/* ADMIN DASHBOARD */}
          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          {/* ADMIN PAGES */}
          <Route
            path="/admin/employees"
            element={<AdminEmployees />}
          />

          <Route
            path="/admin/managers"
            element={
              <div className="wf-admin-placeholder">
                <h1>Managers</h1>
              </div>
            }
          />

          <Route
            path="/admin/departments"
            element={
              <div className="wf-admin-placeholder">
                <h1>Departments</h1>
              </div>
            }
          />

          <Route
            path="/admin/attendance"
            element={
              <div className="wf-admin-placeholder">
                <h1>Attendance</h1>
              </div>
            }
          />

          <Route
            path="/admin/tasks"
            element={
              <div className="wf-admin-placeholder">
                <h1>Tasks</h1>
              </div>
            }
          />

          <Route
            path="/admin/daily-updates"
            element={
              <div className="wf-admin-placeholder">
                <h1>Daily Updates</h1>
              </div>
            }
          />

          <Route
            path="/admin/leave"
            element={
              <div className="wf-admin-placeholder">
                <h1>Leave Management</h1>
              </div>
            }
          />

          <Route
            path="/admin/payroll"
            element={
              <div className="wf-admin-placeholder">
                <h1>Payroll</h1>
              </div>
            }
          />

          <Route
            path="/admin/reports"
            element={
              <div className="wf-admin-placeholder">
                <h1>Reports</h1>
              </div>
            }
          />

          <Route
            path="/admin/settings"
            element={
              <div className="wf-admin-placeholder">
                <h1>Settings</h1>
              </div>
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/admin/dashboard"
                replace
              />
            }
          />

        </Routes>
      </main>

    </div>
  );
}


/* =====================================================
   MAIN APP
===================================================== */

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  if (isAuthPage) {
    return <AuthLayout />;
  }

  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname.startsWith("/admin/");

  if (isAdminPage) {
    return <AdminLayout />;
  }

  const isManagerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");

  if (isManagerPage) {
    return <ManagerLayout />;
  }

  return <EmployeeLayout />;
}

export default App;


/* =====================================================
   ADMIN SIDEBAR STYLES
   These are injected once by this component file.
===================================================== */

const adminStyle = document.createElement("style");

adminStyle.innerHTML = `
.wf-admin-layout {
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: #f7f9fc;
}

.wf-admin-sidebar {
  width: 280px;
  min-width: 280px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  background: #071a36;
  color: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.wf-admin-logo {
  height: 76px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  gap: 7px;
  border-bottom: 1px solid rgba(255,255,255,.08);
  box-sizing: border-box;
}

.wf-logo-box {
  width: 38px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 7px;
  background: linear-gradient(135deg,#5146f5,#3625d8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 900;
}

.wf-brand-name {
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  line-height: 15px;
  white-space: nowrap;
}

.wf-brand-subtitle {
  color: #9eafc5;
  font-size: 14px;
  margin-top: 4px;
  white-space: nowrap;
}

.wf-admin-menu {
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wf-admin-item {
  width: 100%;
  height: 46px;
  padding: 0 12px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #dbe4f0;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  box-sizing: border-box;
  transition: .2s ease;
}

.wf-admin-item:hover {
  background: rgba(255,255,255,.08);
  color: #fff;
}

.wf-admin-item.active {
  background: linear-gradient(90deg,#5146f5,#4228e9);
  color: #fff;
  box-shadow: 0 5px 12px rgba(69,52,235,.25);
}

.wf-admin-icon {
  width: 22px;
  min-width: 22px;
  text-align: center;
  font-size: 18px;
}

.wf-admin-bottom {
  margin-top: auto;
  padding: 10px;
}

.wf-help-box {
  position: relative;
  padding: 14px 12px;
  margin-bottom: 7px;
  border-radius: 7px;
  background: linear-gradient(145deg,#102e60,#0b2450);
  overflow: hidden;
  box-sizing: border-box;
}

.wf-help-box strong {
  font-size: 17px;
  display: block;
}

.wf-help-box p {
  margin: 3px 0 0;
  color: #b7c5d8;
  font-size: 12px;
  line-height: 14px;
}

.wf-help-circle {
  position: absolute;
  right: 6px;
  top: 8px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: rgba(79,70,229,.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
}

.wf-help-box button {
  width: 100%;
  height: 32px;
  margin-top: 7px;
  border: 0;
  border-radius: 4px;
  background: #4935ee;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
}

.wf-user-box {
  height: 58px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  border-radius: 7px;
  background: #102849;
  box-sizing: border-box;
}

.wf-user-avatar {
  width: 27px;
  height: 27px;
  border-radius: 50%;
  background: linear-gradient(135deg,#475569,#1e293b);
  border: 1px solid #718096;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  flex-shrink: 0;
}

.wf-user-details {
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.wf-user-details strong {
  color: #fff;
  font-size: 11px;
  white-space: nowrap;
}

.wf-user-details span {
  color: #9eafc5;
  font-size: 7px;
  margin-top: 2px;
  white-space: nowrap;
}

.wf-user-arrow {
  color: #aab7c8;
  font-size: 15px;
}

.wf-admin-main {
  margin-left: 280px;
  width: calc(100% - 280px);
  min-height: 100vh;
  box-sizing: border-box;
}

.wf-admin-placeholder {
  min-height: 100vh;
  padding: 30px;
  background: #f7f9fc;
}

.wf-admin-placeholder h1 {
  margin: 0;
  color: #172033;
  font-family: Arial, Helvetica, sans-serif;
}

@media (max-width: 700px) {
  .wf-admin-sidebar {
    width: 170px;
    min-width: 170px;
  }

  .wf-admin-main {
    margin-left: 170px;
    width: calc(100% - 170px);
  }

  .wf-admin-item {
    font-size: 13px;
  }
}
`;

if (!document.getElementById("wf-admin-runtime-style")) {
  adminStyle.id = "wf-admin-runtime-style";
  document.head.appendChild(adminStyle);
}
