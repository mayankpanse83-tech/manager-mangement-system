import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

import ManagerDashboard
  from "./apps/manager/pages/ManagerDashboard";

function App() {
  return (
    <Routes>

      <Route
        path="/manager/dashboard"
        element={<ManagerDashboard />}
      />

      <Route
        path="*"
        element={
          <div style={{ padding: "40px" }}>
            <h1>Employee Management System</h1>
          </div>
        }
      />

    </Routes>
  );
}

export default App;