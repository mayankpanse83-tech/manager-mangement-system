import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

/* =====================================================
   EMPLOYEE
===================================================== */

import EmployeeSidebar from "./apps/employee/component/Sidebar";
import EmployeeHeader from "./apps/employee/component/Header";

import EmployeeDashboard from "./apps/employee/component/pages/Dashboard";
import EmployeeAttendance from "./apps/employee/component/pages/Attendance";
import EmployeeTask from "./apps/employee/component/pages/Task";
import EmployeeDailyUpdates from "./apps/employee/component/pages/DailyUpdates";
import EmployeeLeave from "./apps/employee/component/pages/Leave";
import EmployeeSalary from "./apps/employee/component/pages/Salary";
import EmployeeReport from "./apps/employee/component/pages/Report";
import EmployeeProfile from "./apps/employee/component/pages/Profile";

import Login from "./apps/employee/component/pages/Login";
import AccountActivation from "./apps/employee/component/pages/AccountActivation";

/* =====================================================
   MANAGER
===================================================== */

import ManagerSidebar from "./apps/manager/component/ManagerSidebar";
import ManagerHeader from "./apps/manager/component/ManagerHeader";
import ManagerDashboard from "./apps/manager/pages/ManagerDashboard";

import "./App.css";


/* =====================================================
   MANAGER PLACEHOLDER
===================================================== */

function ManagerPlaceholder({ title }) {
  return (
    <div className="manager-placeholder">
      <h1>{title}</h1>
      <p>{title} page</p>
    </div>
  );
}


/* =====================================================
   AUTH
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
      </Routes>
    </div>
  );
}


/* =====================================================
   EMPLOYEE LAYOUT
===================================================== */

function EmployeeLayout() {
  const location = useLocation();

  const isDashboard =
    location.pathname === "/" ||
    location.pathname === "/dashboard";

  return (
    <div className="app-layout">

      <EmployeeSidebar />

      <div className="main-area">

        {!isDashboard && <EmployeeHeader />}

        <main className="page-content">

          <Routes>

            <Route
              path="/"
              element={<EmployeeDashboard />}
            />

            <Route
              path="/dashboard"
              element={<EmployeeDashboard />}
            />

            <Route
              path="/attendance"
              element={<EmployeeAttendance />}
            />

            <Route
              path="/tasks"
              element={<EmployeeTask />}
            />

            <Route
              path="/daily-updates"
              element={<EmployeeDailyUpdates />}
            />

            <Route
              path="/leave"
              element={<EmployeeLeave />}
            />

            <Route
              path="/salary"
              element={<EmployeeSalary />}
            />

            <Route
              path="/reports"
              element={<EmployeeReport />}
            />

            <Route
              path="/profile"
              element={<EmployeeProfile />}
            />

            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
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
  return (
    <div className="manager-layout">

      <ManagerSidebar />

      <div className="manager-main">

        <ManagerHeader />

        <main className="manager-content">

          <Routes>

            <Route
              path="/dashboard"
              element={<ManagerDashboard />}
            />

            <Route
              path="/team"
              element={
                <ManagerPlaceholder title="My Team" />
              }
            />

            <Route
              path="/attendance"
              element={
                <ManagerPlaceholder title="Team Attendance" />
              }
            />

            <Route
              path="/tasks"
              element={
                <ManagerPlaceholder title="Team Tasks" />
              }
            />

            <Route
              path="/daily-updates"
              element={
                <ManagerPlaceholder title="Daily Updates" />
              }
            />

            <Route
              path="/leave"
              element={
                <ManagerPlaceholder title="Leave Requests" />
              }
            />

            <Route
              path="/reports"
              element={
                <ManagerPlaceholder title="Reports" />
              }
            />

            <Route
              path="/profile"
              element={
                <ManagerPlaceholder title="Manager Profile" />
              }
            />

            <Route
              path="/settings"
              element={
                <ManagerPlaceholder title="Manager Settings" />
              }
            />

            <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
            />

          </Routes>

        </main>
      </div>

    </div>
  );
}


/* =====================================================
   ROLE ROUTER
===================================================== */

function RoleRouter() {
  const location = useLocation();

  /*
    ROOT URL ALWAYS EMPLOYEE
  */
  if (location.pathname === "/") {
    return <EmployeeLayout />;
  }

  /*
    IMPORTANT:
    Current login role is taken from sessionStorage first.
  */

  const role =
    sessionStorage.getItem("userRole") ||
    localStorage.getItem("userRole") ||
    "employee";

  if (role === "manager") {
    return <ManagerLayout />;
  }

  return <EmployeeLayout />;
}


/* =====================================================
   APP
===================================================== */

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  if (isAuthPage) {
    return <AuthLayout />;
  }

  return <RoleRouter />;
}

export default App;