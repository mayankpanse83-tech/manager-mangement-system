import { Routes, Route, Navigate } from "react-router-dom";

import ManagerDashboard from "./pages/ManagerDashboard";
import ManagerTeam from "./pages/ManagerTeam";
import ManagerAttendance from "./pages/ManagerAttendance";
import ManagerTasks from "./pages/ManagerTasks";
import ManagerDailyUpdates from "./pages/ManagerDailyUpdates";
import ManagerLeave from "./pages/ManagerLeave";
import ManagerReports from "./pages/ManagerReports";
import ManagerProfile from "./pages/ManagerProfile";
import ManagerSettings from "./pages/ManagerSettings";

export default function ManagerAppRoutes() {
  return (
    <Routes>

      {/* MANAGER DASHBOARD */}
      <Route
        path="dashboard"
        element={<ManagerDashboard />}
      />

      {/* TEAM */}
      <Route
        path="team"
        element={<ManagerTeam />}
      />

      {/* ATTENDANCE */}
      <Route
        path="attendance"
        element={<ManagerAttendance />}
      />

      {/* TASKS */}
      <Route
        path="tasks"
        element={<ManagerTasks />}
      />

      {/* DAILY UPDATES */}
      <Route
        path="daily-updates"
        element={<ManagerDailyUpdates />}
      />

      {/* LEAVE */}
      <Route
        path="leave"
        element={<ManagerLeave />}
      />

      {/* REPORTS */}
      <Route
        path="reports"
        element={<ManagerReports />}
      />

      {/* PROFILE */}
      <Route
        path="profile"
        element={<ManagerProfile />}
      />

      {/* SETTINGS */}
      <Route
        path="settings"
        element={<ManagerSettings />}
      />

      {/* /manager → /manager/dashboard */}
      <Route
        index
        element={
          <Navigate
            to="dashboard"
            replace
          />
        }
      />

      {/* WRONG URL */}
      <Route
        path="*"
        element={
          <Navigate
            to="dashboard"
            replace
          />
        }
      />

    </Routes>
  );
}