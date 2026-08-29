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
   AUTH
========================= */

import Login from "./apps/employee/component/pages/Login";
import AccountActivation from "./apps/employee/component/pages/AccountActivation";

/* =========================
   MANAGER
========================= */

import ManagerSidebar from "./apps/manager/component/ManagerSidebar";
import ManagerHeader from "./apps/manager/component/ManagerHeader";
import ManagerDashboard from "./apps/manager/pages/ManagerDashboard";
import ManagerTeam from "./apps/manager/pages/ManagerTeam";

import "./App.css";


/* =====================================================
   AUTH
===================================================== */

function AuthLayout() {
  return (
    <div className="auth-layout">
      <Routes>
        <Route path="/login" element={<Login />} />
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
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />

            <Route
              path="/manager/team"
              element={
                <ManagerPlaceholder title="My Team" />
              }
            />

            <Route
              path="/manager/attendance"
              element={
                <ManagerPlaceholder title="Team Attendance" />
              }
            />

            <Route
              path="/manager/tasks"
              element={
                <ManagerPlaceholder title="Team Tasks" />
              }
            />

            <Route
              path="/manager/daily-updates"
              element={
                <ManagerPlaceholder title="Daily Updates" />
              }
            />

            <Route
              path="/manager/leave"
              element={
                <ManagerPlaceholder title="Leave Requests" />
              }
            />

            <Route
              path="/manager/reports"
              element={
                <ManagerPlaceholder title="Reports" />
              }
            />

            <Route
              path="/manager/profile"
              element={
                <ManagerPlaceholder title="Manager Profile" />
              }
            />

            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder title="Manager Settings" />
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
            <Route
  path="/manager/team"
  element={<ManagerTeam />}
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

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* =========================
     MANAGER ROUTES
  ========================= */

  if (
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/")
  ) {
    return <ManagerLayout />;
  }


  /* =========================
     EMPLOYEE ROUTES
  ========================= */

  return <EmployeeLayout />;
}

export default App;