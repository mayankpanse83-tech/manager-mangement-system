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
   AUTH
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

      <EmployeeSidebar />

      <div className="main-area">

        {!isDashboard && (
          <EmployeeHeader />
        )}

        <main className="page-content">

          <Routes>

            <Route
              path="/"
              element={
                <EmployeeDashboard />
              }
            />

            <Route
              path="/dashboard"
              element={
                <EmployeeDashboard />
              }
            />

            <Route
              path="/attendance"
              element={
                <EmployeeAttendance />
              }
            />

            <Route
              path="/tasks"
              element={
                <EmployeeTask />
              }
            />

            <Route
              path="/daily-updates"
              element={
                <EmployeeDailyUpdates />
              }
            />

            <Route
              path="/leave"
              element={
                <EmployeeLeave />
              }
            />

            <Route
              path="/salary"
              element={
                <EmployeeSalary />
              }
            />

            <Route
              path="/reports"
              element={
                <EmployeeReport />
              }
            />

            <Route
              path="/profile"
              element={
                <EmployeeProfile />
              }
            />

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

  const location = useLocation();

  const hideManagerHeader =
    location.pathname === "/manager/team" ||
    location.pathname === "/manager/attendance";

  return (
    <div className="manager-layout">

      {/* ===============================
          MANAGER SIDEBAR
      =============================== */}

      <ManagerSidebar />


      {/* ===============================
          MANAGER MAIN
      =============================== */}

      <div className="manager-main">

        {/* Dashboard / other pages only */}
        {!hideManagerHeader && (
          <ManagerHeader />
        )}


        <main className="manager-content">

          {/* =========================================
              IMPORTANT:
              Yahan relative routes hain
          ========================================== */}

          <Routes>

            {/* /manager */}
            <Route
              path="/"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />


            {/* /manager/dashboard */}

            <Route
              path="/dashboard"
              element={
                <ManagerDashboard />
              }
            />


            {/* /manager/team */}

            <Route
              path="/team"
              element={
                <ManagerTeam />
              }
            />


            {/* /manager/attendance */}

            <Route
              path="/attendance"
              element={
                <ManagerAttendance />
              }
            />


            {/* /manager/tasks */}

            <Route
              path="/tasks"
              element={
                <ManagerPlaceholder
                  title="Team Tasks"
                />
              }
            />


            {/* /manager/daily-updates */}

            <Route
              path="/daily-updates"
              element={
                <ManagerPlaceholder
                  title="Daily Updates"
                />
              }
            />


            {/* /manager/leave */}

            <Route
              path="/leave"
              element={
                <ManagerPlaceholder
                  title="Leave Requests"
                />
              }
            />


            {/* /manager/reports */}

            <Route
              path="/reports"
              element={
                <ManagerPlaceholder
                  title="Manager Reports"
                />
              }
            />


            {/* /manager/profile */}

            <Route
              path="/profile"
              element={
                <ManagerPlaceholder
                  title="Manager Profile"
                />
              }
            />


            {/* /manager/settings */}

            <Route
              path="/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />


            {/* UNKNOWN */}

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


  /* =========================================
     AUTH
  ========================================= */

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* =========================================
     MANAGER
  ========================================= */

  const isManager =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");


  if (isManager) {
    return <ManagerLayout />;
  }


  /* =========================================
     EMPLOYEE
  ========================================= */

  return <EmployeeLayout />;
}


export default App;