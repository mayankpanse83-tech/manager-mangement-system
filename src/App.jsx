import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

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
import Login from "./apps/employee/component/pages/Login";
import AccountActivation from "./apps/employee/component/pages/AccountActivation";
import Dashboard from "./apps/manager/pages/Dashboard";

import "./App.css";

function Layout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login aur Account Activation page par
  // Sidebar aur Header nahi dikhega
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";

  // Route change hone par mobile sidebar close
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Mobile sidebar ke liye body class
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }

    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [sidebarOpen]);

  return (
    <div className={`app-layout ${isAuthPage ? "auth-layout" : ""}`}>

      {/* ================= SIDEBAR ================= */}

      {!isAuthPage && (
        <>
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Mobile Overlay */}
          {sidebarOpen && (
            <div
              className="mobile-sidebar-overlay"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* Sidebar */}
          <Sidebar />
        </>
      )}

      {/* ================= MAIN AREA ================= */}

      <div className="main-area">

        {/* Header */}
        {!isAuthPage && <Header />}

        {/* Page Content */}
        <main className="page-content">
          <Routes>

            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Attendance */}
            <Route path="/attendance" element={<Attendance />} />

            {/* Tasks */}
            <Route path="/tasks" element={<Task />} />

            {/* Daily Updates */}
            <Route
              path="/daily-updates"
              element={<DailyUpdates />}
            />

            {/* Leave */}
            <Route path="/leave" element={<Leave />} />

            {/* Salary */}
            <Route path="/salary" element={<Salary />} />

            {/* Reports */}
            <Route path="/reports" element={<Report />} />

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />

            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Account Activation */}
            <Route
              path="/account-activation"
              element={<AccountActivation />}
            />
            <Route
  path="/manager/dashboard"
  element={<Dashboard />}
/>

          </Routes>
        </main>
      </div>
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;