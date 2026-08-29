import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes>

      <Route
        path="*"
        element={
          <h1 style={{ padding: "40px" }}>
            Router Working
          </h1>
        }
      />

    </Routes>
  );
}