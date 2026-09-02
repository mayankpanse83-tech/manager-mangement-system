import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// ================= EMPLOYEE IMPORTS =================
import Sidebar from "./apps/employee/component/Sidebar";
import Header from "./apps/employee/component/Header";

import Dashboard from "./apps/employee/component/pages/Dashboard";
import Attendance from "./apps/employee/component/pages/Attendance";
import Task from "./apps/employee/component/pages/Task";
import DailyUpdates from "./apps/employee/component/pages/DailyUpdates";
import Leave from "./apps/employee/component/pages/Leave";
import Salary from "./apps/employee/component/pages/Salary";
import Report from "./apps/employee/component/pages/Report";
import Profile from "./apps/employee/component/pages/Profile";

import Login from "./apps/employee/component/Login";
import AccountActivation from "./apps/employee/component/AccountActivation";

// ================= MANAGER IMPORTS =================
import ManagerSidebar from "./apps/manager/component/ManagerSidebar";
import ManagerHeader from "./apps/manager/component/ManagerHeader";

import ManagerDashboard from "./apps/manager/pages/ManagerDashboard";
import ManagerTeam from "./apps/manager/pages/ManagerTeam";
import ManagerAttendance from "./apps/manager/pages/ManagerAttendance";


// ====================================================
// AUTH PAGES
// ====================================================

function AuthPages() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/account-activation"
        element={<AccountActivation />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}


// ====================================================
// EMPLOYEE LAYOUT
// ====================================================

function EmployeeLayout() {
  return (
    <div className="employee-layout">

      <Sidebar />

      <div className="employee-main">

        <Header />

        <main className="employee-content">

          <Routes>

            <Route
              path="/"
              element={<Navigate to="/dashboard" replace />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/attendance"
              element={<Attendance />}
            />

            <Route
              path="/task"
              element={<Task />}
            />

            <Route
              path="/daily-updates"
              element={<DailyUpdates />}
            />

            <Route
              path="/leave"
              element={<Leave />}
            />

            <Route
              path="/salary"
              element={<Salary />}
            />

            <Route
              path="/reports"
              element={<Report />}
            />

            <Route
              path="/profile"
              element={<Profile />}
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


// ====================================================
// MANAGER LAYOUT
// ====================================================

function ManagerLayout() {

  const location = useLocation();

  const hideHeader =
    location.pathname === "/manager/team" ||
    location.pathname === "/manager/attendance";

  return (
    <div className="manager-layout">

      <ManagerSidebar />

      <div className="manager-main">

        {!hideHeader && <ManagerHeader />}

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


// ====================================================
// MAIN APP
// ====================================================

function App() {

  const location = useLocation();

  // Login / Account Activation
  const authPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  if (authPage) {
    return <AuthPages />;
  }

  // Manager pages
  const managerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");

  if (managerPage) {
    return <ManagerLayout />;
  }

  // Employee pages
  return <EmployeeLayout />;
}

export default App;