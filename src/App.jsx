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


/* =====================================================
   AUTH
===================================================== */

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

      {/* Employee Sidebar */}
      <EmployeeSidebar />

      <div className="main-area">

        {/* Dashboard ka custom header Dashboard.jsx
            ke andar hai */}
        {!isDashboard && (
          <EmployeeHeader />
        )}

        <main className="page-content">

          <Routes>

            {/* Home */}
            <Route
              path="/"
              element={<EmployeeDashboard />}
            />

            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<EmployeeDashboard />}
            />

            {/* Attendance */}
            <Route
              path="/attendance"
              element={<EmployeeAttendance />}
            />

            {/* Tasks */}
            <Route
              path="/tasks"
              element={<EmployeeTask />}
            />

            {/* Daily Updates */}
            <Route
              path="/daily-updates"
              element={<EmployeeDailyUpdates />}
            />

            {/* Leave */}
            <Route
              path="/leave"
              element={<EmployeeLeave />}
            />

            {/* Salary */}
            <Route
              path="/salary"
              element={<EmployeeSalary />}
            />

            {/* Reports */}
            <Route
              path="/reports"
              element={<EmployeeReport />}
            />

            {/* Profile */}
            <Route
              path="/profile"
              element={<EmployeeProfile />}
            />

            {/* Unknown Employee URL */}
            <Route
              path="*"
              element={
                <Navigate
                  to="/dashboard"
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

  return (
    <div className="manager-layout">

      {/* Manager Sidebar */}
      <ManagerSidebar />

      <div className="manager-main">

        {/* Manager Header */}
        <ManagerHeader />

        <main className="manager-content">

          <Routes>

            {/* /manager */}
            <Route
              path="/manager"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />

            {/* /manager/dashboard */}
            <Route
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />

            {/* /manager/team */}
            <Route
              path="/manager/team"
              element={
                <ManagerPlaceholder
                  title="My Team"
                />
              }
            />

            {/* /manager/attendance */}
            <Route
              path="/manager/attendance"
              element={
                <ManagerPlaceholder
                  title="Team Attendance"
                />
              }
            />

            {/* /manager/tasks */}
            <Route
              path="/manager/tasks"
              element={
                <ManagerPlaceholder
                  title="Team Tasks"
                />
              }
            />

            {/* /manager/daily-updates */}
            <Route
              path="/manager/daily-updates"
              element={
                <ManagerPlaceholder
                  title="Daily Updates"
                />
              }
            />

            {/* /manager/leave */}
            <Route
              path="/manager/leave"
              element={
                <ManagerPlaceholder
                  title="Leave Requests"
                />
              }
            />

            {/* /manager/reports */}
            <Route
              path="/manager/reports"
              element={
                <ManagerPlaceholder
                  title="Manager Reports"
                />
              }
            />

            {/* /manager/profile */}
            <Route
              path="/manager/profile"
              element={
                <ManagerPlaceholder
                  title="Manager Profile"
                />
              }
            />

            {/* /manager/settings */}
            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />

            {/* Unknown Manager URL */}
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
   MAIN APP
===================================================== */

function App() {

  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  /* Auth Pages */
  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* =================================================
     MANAGER URLS
     /manager/...
  ================================================= */

  const isManagerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");


  if (isManagerPage) {
    return <ManagerLayout />;
  }


  /* =================================================
     ALL OTHER URLS = EMPLOYEE
  ================================================= */

  return <EmployeeLayout />;
}


export default App;