import React from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

/* =========================
   EMPLOYEE
========================= */

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


/* =========================
   LOGIN
========================= */

import Login from "./apps/employee/component/pages/Login";
import AccountActivation from "./apps/employee/component/pages/AccountActivation";


/* =========================
   MANAGER
========================= */

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

      {/* EMPLOYEE SIDEBAR */}
      <EmployeeSidebar />

      {/* EMPLOYEE MAIN */}
      <div className="main-area">

        {/* Dashboard ka apna header hai */}
        {!isDashboard && (
          <EmployeeHeader />
        )}

        <main className="page-content">

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<EmployeeDashboard />}
            />

            {/* DASHBOARD */}
            <Route
              path="/dashboard"
              element={<EmployeeDashboard />}
            />

            {/* ATTENDANCE */}
            <Route
              path="/attendance"
              element={<EmployeeAttendance />}
            />

            {/* TASKS */}
            <Route
              path="/tasks"
              element={<EmployeeTask />}
            />

            {/* DAILY UPDATES */}
            <Route
              path="/daily-updates"
              element={<EmployeeDailyUpdates />}
            />

            {/* LEAVE */}
            <Route
              path="/leave"
              element={<EmployeeLeave />}
            />

            {/* SALARY */}
            <Route
              path="/salary"
              element={<EmployeeSalary />}
            />

            {/* REPORTS */}
            <Route
              path="/reports"
              element={<EmployeeReport />}
            />

            {/* PROFILE */}
            <Route
              path="/profile"
              element={<EmployeeProfile />}
            />

            {/* UNKNOWN */}
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

      {/* MANAGER SIDEBAR */}
      <ManagerSidebar />

      {/* MANAGER MAIN */}
      <div className="manager-main">

        {/* MANAGER HEADER */}
        <ManagerHeader />

        <main className="manager-content">

          <Routes>

            {/* MANAGER DASHBOARD */}

            <Route
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />


            {/* MANAGER TEAM */}

            <Route
              path="/manager/team"
              element={
                <ManagerPlaceholder
                  title="My Team"
                />
              }
            />


            {/* MANAGER ATTENDANCE */}

            <Route
              path="/manager/attendance"
              element={
                <ManagerPlaceholder
                  title="Team Attendance"
                />
              }
            />


            {/* MANAGER TASKS */}

            <Route
              path="/manager/tasks"
              element={
                <ManagerPlaceholder
                  title="Team Tasks"
                />
              }
            />


            {/* MANAGER DAILY UPDATES */}

            <Route
              path="/manager/daily-updates"
              element={
                <ManagerPlaceholder
                  title="Daily Updates"
                />
              }
            />


            {/* MANAGER LEAVE */}

            <Route
              path="/manager/leave"
              element={
                <ManagerPlaceholder
                  title="Leave Requests"
                />
              }
            />


            {/* MANAGER REPORTS */}

            <Route
              path="/manager/reports"
              element={
                <ManagerPlaceholder
                  title="Manager Reports"
                />
              }
            />


            {/* MANAGER PROFILE */}

            <Route
              path="/manager/profile"
              element={
                <ManagerPlaceholder
                  title="Manager Profile"
                />
              }
            />


            {/* MANAGER SETTINGS */}

            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />


            {/* MANAGER UNKNOWN URL */}

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
   APP
===================================================== */

function App() {

  const location = useLocation();


  /* AUTH */

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* =================================================
     MANAGER URL
     /manager/...
  ================================================= */

  if (
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/")
  ) {
    return <ManagerLayout />;
  }


  /* =================================================
     EMPLOYEE
  ================================================= */

  return <EmployeeLayout />;
}


export default App;