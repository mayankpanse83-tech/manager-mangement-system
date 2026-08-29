import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import EmployeeRoutes from "../apps/employee/routes/index.jsx";
import ManagerRoutes from "../apps/manager/routes/index.jsx";

import Login from "../apps/employee/component/pages/Login";
import AccountActivation from "../apps/employee/component/pages/AccountActivation";


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

    </Routes>
  );
}