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

  import ManagerDailyUpdates from "./apps/manager/pages/ManagerDailyUpdates";


import "./App.css";


/* =====================================================
   MANAGER PLACEHOLDER
===================================================== */

function ManagerPlaceholder({ title }) {
  return (
    <div className="manager-placeholder">
      <h1>{title}</h1>

      <p>
        {title} page coming soon.
      </p>
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
              path="/employee/dashboard"
              element={<EmployeeDashboard />}
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


  /* इन pages का अपना header है */

  const isFullPage =
    location.pathname === "/manager/team" ||
    location.pathname === "/manager/attendance" ||
    location.pathname === "/manager/tasks";


  return (
    <div className="manager-layout">

      <ManagerSidebar />

      <div className="manager-main">

        {/* ManagerTasks का अपना header है */}
        {!isFullPage && <ManagerHeader />}


        <main className="manager-content">

          <Routes>

            {/* DASHBOARD */}

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


            {/* TEAM */}

            <Route
              path="/manager/team"
              element={<ManagerTeam />}
            />


            {/* ATTENDANCE */}

            <Route
              path="/manager/attendance"
              element={<ManagerAttendance />}
            />


            {/* TASKS - REAL MANAGER TASKS PAGE */}

            <Route
              path="/manager/tasks"
              element={<ManagerTasks />}
            />


            {/* DAILY UPDATES */}

            <Route
              path="/manager/daily-updates"
              element={
                <ManagerPlaceholder
                  title="Daily Updates"
                />
              }
            />


            {/* LEAVE */}

            <Route
              path="/manager/leave"
              element={
                <ManagerPlaceholder
                  title="Leave Requests"
                />
              }
            />


            {/* REPORTS */}

            <Route
              path="/manager/reports"
              element={
                <ManagerPlaceholder
                  title="Manager Reports"
                />
              }
            />


            {/* PROFILE */}

            <Route
              path="/manager/profile"
              element={
                <ManagerPlaceholder
                  title="Manager Profile"
                />
              }
            />


            {/* SETTINGS */}

            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />


            {/* UNKNOWN MANAGER URL */}

            <Route
              path="*"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />

            <Route
  path="/manager/daily-updates"
  element={<ManagerDailyUpdates />}
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


  /* AUTH PAGES */

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* MANAGER PAGES */

  const isManagerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");


  if (isManagerPage) {
    return <ManagerLayout />;
  }


  /* EMPLOYEE PAGES */

  return <EmployeeLayout />;
}


export default App;                      