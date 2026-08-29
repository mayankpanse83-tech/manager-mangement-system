import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import EmployeeRoutes from "../apps/employee/routes";
import ManagerRoutes from "../apps/manager/routes";

import Login from "../apps/employee/component/pages/Login";
import AccountActivation from "../apps/employee/component/pages/AccountActivation";
import ManagerTeam from "../pages/ManagerTeam";


export default function AppRouter() {
  return (
    <Routes>

      {/* ROOT */}
      <Route
        path="/"
        element={
          <Navigate
            to="/employee/dashboard"
            replace
          />
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* ACCOUNT ACTIVATION */}
      <Route
        path="/account-activation"
        element={<AccountActivation />}
      />

      {/* EMPLOYEE */}
      <Route
        path="/employee/*"
        element={<EmployeeRoutes />}
      />

      {/* MANAGER */}
      <Route
        path="/manager/*"
        element={<ManagerRoutes />}
      />

      {/* UNKNOWN */}
      <Route
        path="*"
        element={
          <Navigate
            to="/employee/dashboard"
            replace
          />
        }
      />
      <Route
  path="team"
  element={<ManagerTeam />}
/>

    </Routes>
  );
}