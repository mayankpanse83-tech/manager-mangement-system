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


import "./App.css";


/* =====================================================
   MANAGER OTHER PAGE
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

      {/* SIDEBAR */}

      <EmployeeSidebar />


      {/* MAIN */}

      <div className="main-area">

        <EmployeeHeader />


        <main className="page-content">

          <Routes>

            {/* HOME */}

            <Route
              path="/"
              element={
                <Navigate
                  to="/employee/dashboard"
                  replace
                />
              }
            />


            {/* DASHBOARD */}

            <Route
              path="/employee/dashboard"
              element={
                <EmployeeDashboard />
              }
            />


            {/* OLD DASHBOARD */}

            <Route
              path="/dashboard"
              element={
                <Navigate
                  to="/employee/dashboard"
                  replace
                />
              }
            />


            {/* ATTENDANCE */}

            <Route
              path="/employee/attendance"
              element={
                <EmployeeAttendance />
              }
            />


            {/* TASKS */}

            <Route
              path="/employee/tasks"
              element={
                <EmployeeTask />
              }
            />


            {/* DAILY UPDATES */}

            <Route
              path="/employee/daily-updates"
              element={
                <EmployeeDailyUpdates />
              }
            />


            {/* LEAVE */}

            <Route
              path="/employee/leave"
              element={
                <EmployeeLeave />
              }
            />


            {/* SALARY */}

            <Route
              path="/employee/salary"
              element={
                <EmployeeSalary />
              }
            />


            {/* REPORTS */}

            <Route
              path="/employee/reports"
              element={
                <EmployeeReport />
              }
            />


            {/* PROFILE */}

            <Route
              path="/employee/profile"
              element={
                <EmployeeProfile />
              }
            />


            {/* UNKNOWN EMPLOYEE URL */}

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

  const isTeamPage =
    location.pathname === "/manager/team";

  return (
    <div className="manager-layout">

      {/* MANAGER SIDEBAR */}
      <ManagerSidebar />

      {/* MANAGER MAIN */}
      <div className="manager-main">

        {/* My Team par ye header nahi dikhana */}
        {!isTeamPage && <ManagerHeader />}

        <main className="manager-content">

          <Routes>

            {/* DASHBOARD */}
            <Route
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />

            {/* MY TEAM */}
            <Route
              path="/manager/team"
              element={<ManagerTeam />}
            />

            {/* ATTENDANCE */}
            <Route
              path="/manager/attendance"
              element={
                <ManagerPlaceholder
                  title="Team Attendance"
                />
              }
            />

            {/* TASKS */}
            <Route
              path="/manager/tasks"
              element={
                <ManagerPlaceholder
                  title="Team Tasks"
                />
              }
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

            {/* DEFAULT */}
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
  path="/manager/attendance"
  element={<ManagerAttendance />}
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


  /* AUTH */

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* MANAGER */

  const isManagerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");


  if (isManagerPage) {
    return <ManagerLayout />;
  }


  /* EMPLOYEE */

  return <EmployeeLayout />;
}


export default App;