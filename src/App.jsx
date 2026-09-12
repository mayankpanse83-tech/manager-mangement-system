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

import ManagerDailyUpadates
  from "./apps/manager/pages/ManagerDailyUpadates";

import ManagerLeaveRequests
  from "./apps/manager/pages/ManagerLeaveRequests";

import ManagerReports from "./apps/manager/pages/ManagerReports";

import ManagerProfile from "./apps/manager/pages/ManagerProfile";

/* =====================================================
   ADMIN
===================================================== */

import AdminDashboard from "./apps/admin/pages/AdminDashboard";

/* =====================================================
   APP CSS
===================================================== */

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

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
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
              path="/dashboard"
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

  /*
    In pages par ManagerHeader nahi dikhana hai
    kyunki in pages ka apna design/header hai.
  */

  const hideManagerHeader =
    location.pathname === "/manager/team" ||
    location.pathname === "/manager/attendance" ||
    location.pathname === "/manager/tasks" ||
    location.pathname === "/manager/daily-updates" ||
    location.pathname === "/manager/leave" ||
    location.pathname === "/manager/reports" ||
    location.pathname === "/manager/profile";


  return (
    <div className="manager-layout">

      <ManagerSidebar />

      <div className="manager-main">

        {!hideManagerHeader && (
          <ManagerHeader />
        )}

        <main className="manager-content">

          <Routes>

            {/* =========================================
               MANAGER ROOT
            ========================================= */}

            <Route
              path="/manager"
              element={
                <Navigate
                  to="/manager/dashboard"
                  replace
                />
              }
            />


            {/* =========================================
               DASHBOARD
            ========================================= */}

            <Route
              path="/manager/dashboard"
              element={<ManagerDashboard />}
            />


            {/* =========================================
               MY TEAM
            ========================================= */}

            <Route
              path="/manager/team"
              element={<ManagerTeam />}
            />


            {/* =========================================
               TEAM ATTENDANCE
            ========================================= */}

            <Route
              path="/manager/attendance"
              element={<ManagerAttendance />}
            />


            {/* =========================================
               MANAGER TASKS
            ========================================= */}

            <Route
              path="/manager/tasks"
              element={<ManagerTasks />}
            />


            {/* =========================================
               DAILY UPDATES
            ========================================= */}

            <Route
              path="/manager/daily-updates"
              element={<ManagerDailyUpadates />}
            />


            {/* =========================================
               LEAVE REQUESTS
            ========================================= */}

            <Route
              path="/manager/leave"
              element={<ManagerLeaveRequests />}
            />


            {/* =========================================
               REPORTS
            ========================================= */}

            <Route
              path="/manager/reports"
              element={<ManagerReports />}
            />


            {/* =========================================
               PROFILE
            ========================================= */}

            <Route
              path="/manager/profile"
              element={<ManagerProfile />}
            />


            {/* =========================================
               SETTINGS
            ========================================= */}

            <Route
              path="/manager/settings"
              element={
                <ManagerPlaceholder
                  title="Manager Settings"
                />
              }
            />

            {/* =========================================
               UNKNOWN MANAGER URL
            ========================================= */}

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
   ADMIN LAYOUT
===================================================== */

function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminSidebar />

      <div className="admin-main">
        <main className="admin-content">
          <Routes>

            <Route
              path="/admin"
              element={
                <Navigate
                  to="/admin/dashboard"
                  replace
                />
              }
            />

            <Route
              path="/admin/dashboard"
              element={<AdminDashboard />}
            />

            <Route
              path="/admin/employees"
              element={<div>Employees</div>}
            />

            <Route
              path="/admin/managers"
              element={<div>Managers</div>}
            />

            <Route
              path="/admin/departments"
              element={<div>Departments</div>}
            />

            <Route
              path="/admin/attendance"
              element={<div>Attendance</div>}
            />

            <Route
              path="/admin/tasks"
              element={<div>Tasks</div>}
            />

            <Route
              path="/admin/daily-updates"
              element={<div>Daily Updates</div>}
            />

            <Route
              path="/admin/leave"
              element={<div>Leave Management</div>}
            />

            <Route
              path="/admin/payroll"
              element={<div>Payroll</div>}
            />

            <Route
              path="/admin/reports"
              element={<div>Reports</div>}
            />

            <Route
              path="/admin/settings"
              element={<div>Settings</div>}
            />

            <Route
              path="*"
              element={
                <Navigate
                  to="/admin/dashboard"
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


  /* ================================================
     AUTH PAGE
  ================================================ */

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/account-activation";


  if (isAuthPage) {
    return <AuthLayout />;
  }


  /* ================================================
     MANAGER PAGE
  ================================================ */

  const isManagerPage =
    location.pathname === "/manager" ||
    location.pathname.startsWith("/manager/");


  if (isManagerPage) {
    return <ManagerLayout />;
  }


  /* ================================================
     EMPLOYEE PAGE
  ================================================ */

  return <EmployeeLayout />;
}


/* ================================================
     ADMIN PAGE
  ================================================ */

const isAdminPage =
  location.pathname === "/admin" ||
  location.pathname.startsWith("/admin/");

if (isAdminPage) {
  return <AdminLayout />;
}


export default App;