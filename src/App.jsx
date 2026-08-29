import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import EmployeeDashboard
  from "./apps/employee/component/pages/Dashboard";

import ManagerDashboard
  from "./apps/manager/pages/ManagerDashboard";


function App() {
  return (
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
        path="/manager/dashboard"
        element={<ManagerDashboard />}
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
  );
}

export default App;