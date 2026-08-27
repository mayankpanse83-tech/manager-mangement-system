import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { socket } from "../shared/api/socket";
import { useSoundInit } from "../shared/services/sound/useSoundInit";

import UserAppRoutes from "../apps/user/routes";
import ExpertAppRoutes from "../apps/expert/routes";
import AdminAppRoutes from "../apps/admin/routes";
import ManagerAppRoutes from "../apps/manager/routes";

import { ExpertProvider } from "../shared/context/ExpertContext";
import BottomNavbar from "../shared/components/BottomNavbar/BottomNavbar";
import RouteLoader from "../shared/loaders/RouteLoader";
import RootRedirect from "./RootRedirect";

import NetworkStatus from "../shared/components/NetworkStatus/NetworkStatus";

import ManagerSidebar from "../apps/manager/component/ManagerSidebar";
import ManagerHeader from "../apps/manager/component/ManagerHeader";

export default function AppRouter() {

  useSoundInit();

  const location = useLocation();

  /* =====================================================
     BOTTOM NAVBAR
  ===================================================== */

  const showNavbar =
    location.pathname.startsWith("/user") ||
    location.pathname.startsWith("/expert");


  /* =====================================================
     SOCKET RECONNECT
  ===================================================== */

  useEffect(() => {

    const handleVisibility = () => {

      if (document.visibilityState === "visible") {

        if (!socket.connected) {

          console.log(
            "👁️ Reconnecting socket on tab focus..."
          );

          socket.connect();
        }

      }

    };


    document.addEventListener(
      "visibilitychange",
      handleVisibility
    );


    return () => {

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );

    };

  }, []);


  /* =====================================================
     SOCKET EVENTS
  ===================================================== */

  useEffect(() => {

    const handleConnect = () => {

      console.log(
        "🟢 Socket connected from AppRouter:",
        socket.id
      );

    };


    const handleDisconnect = () => {

      console.log(
        "🔴 Socket disconnected"
      );

    };


    socket.on(
      "connect",
      handleConnect
    );

    socket.on(
      "disconnect",
      handleDisconnect
    );


    return () => {

      socket.off(
        "connect",
        handleConnect
      );

      socket.off(
        "disconnect",
        handleDisconnect
      );

    };

  }, []);


  /* =====================================================
     APP ROUTER
  ===================================================== */

  return (
    <div
      className="app-main-layout"
      style={{
        width: "100%",
        overflowX: "hidden",
        position: "relative",
      }}
    >

      {/* GLOBAL NETWORK STATUS */}

      <NetworkStatus />


      {/* MAIN CONTENT */}

      <div
        className="main-content-wrapper"
        style={{
          paddingBottom: showNavbar
            ? "var(--nav-height, 70px)"
            : "0px",

          width: "100%",
          overflowX: "hidden",
        }}
      >

        <RouteLoader />


        <Routes>

          {/* =================================================
              ROOT
          ================================================= */}

          <Route
            path="/"
            element={<RootRedirect />}
          />


          {/* =================================================
              USER
          ================================================= */}

          <Route
            path="/user/*"
            element={<UserAppRoutes />}
          />


          {/* =================================================
              EXPERT
          ================================================= */}

          <Route
            path="/expert/*"
            element={
              <ExpertProvider>
                <ExpertAppRoutes />
              </ExpertProvider>
            }
          />


          {/* =================================================
              ADMIN
          ================================================= */}

          <Route
            path="/admin/*"
            element={<AdminAppRoutes />}
          />


          {/* =================================================
              MANAGER
          ================================================= */}

          <Route
            path="/manager/*"
            element={
              <ManagerAppRoutes />
            }
          />

        </Routes>

      </div>


      {/* BOTTOM NAVBAR */}

      {showNavbar && (
        <BottomNavbar />
      )}

    </div>
  );
}