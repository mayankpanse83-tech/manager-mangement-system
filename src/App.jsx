import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";


/* =====================================================
   EMPLOYEE IMPORTS
===================================================== */

import EmployeeSidebar from "./apps/employee/component/Sidebar";
import EmployeeHeader from "./apps/employee/component/Header";

import EmployeeDashboard from "./apps/employee/component/pages/EmployeeDashboard";
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
   MANAGER IMPORTS
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
   ROLE BASED LAYOUT
===================================================== */

function RoleBasedLayout() {
  const location = useLocation();

  const [role, setRole] = useState(
    localStorage.getItem("userRole") || "employee"
  );

  const isRootPage = location.pathname === "/";

  const isDashboardPage = location.pathname === "/dashboard";

  useEffect(() => {
    // ROOT URL हमेशा Employee रहेगा
    if (location.pathname === "/") {
      setRole("employee");
      return;
    }

    const savedRole =
      localStorage.getItem("userRole") || "employee";

    setRole(savedRole);
  }, [location.pathname]);


  /* ==========================================
     ROOT URL
     /
     ALWAYS EMPLOYEE
  ========================================== */

  if (isRootPage) {
    return (
      <div className="app-layout">

        <EmployeeSidebar />

        <div className="main-area">

          <main className="page-content">

            <EmployeeDashboard />

          </main>

        </div>

      </div>
    );
  }


  /* ==========================================
     MANAGER
     /dashboard
  ========================================== */

  if (role === "manager" && isDashboardPage) {
    return (
      <div className="manager-layout">

        <ManagerSidebar />

        <div className="manager-main">

          <ManagerHeader />

          <main className="manager-content">

            <ManagerDashboard />

          </main>

        </div>

      </div>
    );
  }


  /* ==========================================
     MANAGER OTHER PAGES
  ========================================== */

  if (role === "manager") {
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

            </Routes>

          </main>

        </div>

      </div>
    );
  }


  /* ==========================================
     EMPLOYEE
  ========================================== */

  return (
    <div className="app-layout">

      <EmployeeSidebar />

      <div className="main-area">

        <EmployeeHeader />

        <main className="page-content">

          <Routes>

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

          </Routes>

        </main>

      </div>

    </div>
  );
}

  /* ===================================================
     MANAGER
  =================================================== */

  if (role === "manager") {
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


              <Route
                path="/dashboard"
                element={<ManagerDashboard />}
              />

              {/* ATTENDANCE */}
              <Route
                path="/attendance"
                element={
                  <ManagerPlaceholder title="Team Attendance" />
                }
              />

              {/* TASKS */}
              <Route
                path="/tasks"
                element={
                  <ManagerPlaceholder title="Team Tasks" />
                }
              />

              {/* DAILY UPDATES */}
              <Route
                path="/daily-updates"
                element={
                  <ManagerPlaceholder title="Daily Updates" />
                }
              />

              {/* LEAVE */}
              <Route
                path="/leave"
                element={
                  <ManagerPlaceholder title="Leave Requests" />
                }
              />

              {/* REPORTS */}
              <Route
                path="/reports"
                element={
                  <ManagerPlaceholder title="Manager Reports" />
                }
              />

              {/* PROFILE */}
              <Route
                path="/profile"
                element={
                  <ManagerPlaceholder title="Manager Profile" />
                }
              />

              {/* SETTINGS */}
              <Route
                path="/settings"
                element={
                  <ManagerPlaceholder title="Manager Settings" />
                }
              />

            </Routes>

          </main>

        </div>
      </div>
    );
  }


  /* ===================================================
     EMPLOYEE
  =================================================== */

  const isEmployeeDashboard =
    location.pathname === "/" ||
    location.pathname === "/dashboard";


  return (
    <div className="app-layout">

      {/* EMPLOYEE SIDEBAR */}
      <EmployeeSidebar />


      {/* EMPLOYEE MAIN */}
      <div className="main-area">

        {/* IMPORTANT:
            Dashboard.jsx me already custom header hai,
            isliye Dashboard par old Header nahi dikhayenge.
        */}

        {!isEmployeeDashboard && (
          <EmployeeHeader />
        )}


        {/* PAGE CONTENT */}
        <main className="page-content">

          <Routes>

            {/* DASHBOARD */}
            <Route
              path="/"
              element={<EmployeeDashboard />}
            />

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

          </Routes>

        </main>

      </div>

    </div>
  );


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

  return <RoleBasedLayout />;
}


export default App;