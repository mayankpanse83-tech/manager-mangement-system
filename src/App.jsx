import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* ================= EMPLOYEE ================= */

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

/* ================= MANAGER ================= */

import ManagerDashboard
  from "./apps/manager/pages/ManagerDashboard";

import ManagerSidebar
  from "./apps/manager/component/ManagerSidebar";

import ManagerHeader
  from "./apps/manager/component/ManagerHeader";

import "./App.css";


function Layout() {

  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);


  /* ================= PAGE TYPE ================= */

  const isManagerPage =
    location.pathname.startsWith("/manager");

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  /* ================= CLOSE MOBILE SIDEBAR ================= */

  useEffect(() => {

    setSidebarOpen(false);

  }, [location.pathname]);


  /* ================= BODY CLASS ================= */

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


  /* ======================================================
     AUTH PAGE
  ====================================================== */

  if (isAuthPage) {

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


  /* ======================================================
     MANAGER LAYOUT
  ====================================================== */

  if (isManagerPage) {

    return (

      <div className="manager-app-layout">

        <ManagerSidebar />

        <div className="manager-main-area">

          <ManagerHeader />

          <main className="manager-page-content">

            <Routes>

              <Route
                path="/manager/dashboard"
                element={<ManagerDashboard />}
              />

              {/* Temporary pages */}
              <Route
                path="/manager/team"
                element={
                  <div className="empty-manager-page">
                    <h1>My Team</h1>
                    <p>My Team page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/attendance"
                element={
                  <div className="empty-manager-page">
                    <h1>Team Attendance</h1>
                    <p>Attendance page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/tasks"
                element={
                  <div className="empty-manager-page">
                    <h1>Team Tasks</h1>
                    <p>Tasks page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/daily-updates"
                element={
                  <div className="empty-manager-page">
                    <h1>Daily Updates</h1>
                    <p>Daily Updates page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/leave"
                element={
                  <div className="empty-manager-page">
                    <h1>Leave Requests</h1>
                    <p>Leave Requests page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/reports"
                element={
                  <div className="empty-manager-page">
                    <h1>Manager Reports</h1>
                    <p>Reports page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/profile"
                element={
                  <div className="empty-manager-page">
                    <h1>Manager Profile</h1>
                    <p>Profile page coming soon.</p>
                  </div>
                }
              />

              <Route
                path="/manager/settings"
                element={
                  <div className="empty-manager-page">
                    <h1>Manager Settings</h1>
                    <p>Settings page coming soon.</p>
                  </div>
                }
              />

            </Routes>

          </main>

        </div>

      </div>

    );

  }


  /* ======================================================
     EMPLOYEE LAYOUT
  ====================================================== */

  return (

    <div className="app-layout">

      {/* MOBILE BUTTON */}

      <button
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>


      {/* MOBILE OVERLAY */}

      {sidebarOpen && (

        <div
          className="mobile-sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />

      )}


      {/* EMPLOYEE SIDEBAR */}

      <Sidebar />


      {/* EMPLOYEE MAIN */}

      <div className="main-area">

        <Header />

        <main className="page-content">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
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
              path="/tasks"
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