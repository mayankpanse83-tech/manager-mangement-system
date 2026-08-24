import React, { useEffect, useState } from "react";
import {
  FaClock,
  FaTasks,
  FaCalendarAlt,
  FaWallet,
  FaChartPie,
  FaArrowRight,
  FaCheckCircle,
  FaExclamationCircle,
  FaFileAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState("");

  useEffect(() => {
    const savedStatus =
      localStorage.getItem("employeeCheckedIn") === "true";

    const savedTime =
      localStorage.getItem("employeeCheckInTime") || "";

    setIsCheckedIn(savedStatus);
    setCheckInTime(savedTime);
  }, []);

  const handleAttendance = () => {
    if (!isCheckedIn) {
      const now = new Date();
      const time = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      localStorage.setItem("employeeCheckedIn", "true");
      localStorage.setItem("employeeCheckInTime", time);

      setIsCheckedIn(true);
      setCheckInTime(time);
    } else {
      localStorage.removeItem("employeeCheckedIn");
      localStorage.removeItem("employeeCheckInTime");

      setIsCheckedIn(false);
      setCheckInTime("");
    }
  };

  return (
    <div className="employee-dashboard">

  {/* ================= TOP HEADER ================= */}

  <div className="employee-dashboard-header">

    <div className="employee-dashboard-title">
      <h1>
        Dashboard <span>Overview</span>
      </h1>
    </div>

    <div className="employee-header-actions">

      <div className="employee-header-search">
        🔍
        <input
          type="text"
          placeholder="Search anything..."
        />
      </div>

      <div className="employee-header-notification">
        🔔
        <span>3</span>
      </div>

      <div className="employee-header-user">
        <div className="employee-user-avatar">
          M
        </div>

        <div>
          <strong>Mayank panse</strong>
          <small>Employee</small>
        </div>
      </div>

    </div>

  </div>


  {/* ================= WELCOME ================= */}

  <section className="dashboard-welcome">

    <div>
      <h2>Good Morning, Mayank!! 👋</h2>

      <p>
        Have a productive day ahead.
      </p>
    </div>

    <div className="welcome-actions">

      <div className="today-date">
        📅

        <span>
          {new Date().toLocaleDateString("en-IN", {
            weekday: "long",
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </span>
      </div>

      <button
        className="dashboard-login-btn"
        onClick={() => {
          window.location.href = "/login";
        }}
      >
        ↪ Login
      </button>

    </div>

  </section>


      {/* ================= TOP CARDS ================= */}

      <section className="employee-top-grid">

        {/* ATTENDANCE */}

        <div className="attendance-action-card">

          <div className="attendance-card-icon">
            <FaClock />
          </div>

          <div className="attendance-card-content">
            <span>Today's Attendance</span>

            <h2>
              {isCheckedIn ? "Working" : "Not Checked In"}
            </h2>

            {isCheckedIn && (
              <p>
                Check-in: {checkInTime}
              </p>
            )}

            <button
              className={
                isCheckedIn
                  ? "checkout-btn"
                  : "checkin-btn"
              }
              onClick={handleAttendance}
            >
              {isCheckedIn ? "Check Out" : "Check In"}
            </button>
          </div>

        </div>


        {/* TASKS */}

        <DashboardCard
          icon={<FaTasks />}
          title="Tasks"
          value="5"
          label="Pending"
          progress="62%"
          color="blue"
          button="View Tasks"
          onClick={() => navigate("/tasks")}
        />


        {/* LEAVE */}

        <DashboardCard
          icon={<FaCalendarAlt />}
          title="Leave"
          value="12"
          label="Pending"
          progress="80%"
          color="green"
          button="View Leave"
          onClick={() => navigate("/leave")}
        />


        {/* SALARY */}

        <DashboardCard
          icon={<FaWallet />}
          title="Salary"
          value="₹35,000"
          label="Paid"
          progress="100%"
          color="purple"
          button="View Payslip"
          onClick={() => navigate("/salary")}
        />


        {/* ATTENDANCE */}

        <DashboardCard
          icon={<FaChartPie />}
          title="Attendance"
          value="96%"
          label="This Month"
          progress="96%"
          color="orange"
          button="View Reports"
          onClick={() => navigate("/reports")}
        />

      </section>


      {/* ================= SECOND ROW ================= */}

      <section className="employee-content-grid">

        {/* TASKS */}

        <div className="employee-panel">

          <div className="panel-header">
            <h2>Today's Tasks</h2>

            <button onClick={() => navigate("/tasks")}>
              View All <FaArrowRight />
            </button>
          </div>

          <TaskItem
            title="Complete Dashboard"
            subtitle="Design and develop employee dashboard"
            status="High"
            progress="72%"
          />

          <TaskItem
            title="API Integration"
            subtitle="Connect dashboard with backend API"
            status="Medium"
            progress="48%"
          />

          <TaskItem
            title="Testing & QA"
            subtitle="Test attendance and leave modules"
            status="Low"
            progress="30%"
          />

        </div>


        {/* DAILY UPDATE */}

        <div className="employee-panel">

          <div className="panel-header">
            <h2>Daily Update</h2>

            <button onClick={() => navigate("/daily-updates")}>
              Edit
            </button>
          </div>

          <UpdateItem
            icon={<FaCheckCircle />}
            text="Completed API Integration"
            type="done"
          />

          <UpdateItem
            icon={<FaExclamationCircle />}
            text="Dashboard Testing"
            type="warning"
          />

          <UpdateItem
            icon={<FaFileAlt />}
            text="Prepare Daily Report"
            type="info"
          />

        </div>


        {/* ATTENDANCE SUMMARY */}

        <div className="employee-panel">

          <div className="panel-header">
            <h2>Attendance Summary</h2>

            <button onClick={() => navigate("/attendance")}>
              View <FaArrowRight />
            </button>
          </div>

          <div className="attendance-summary">

            <div className="attendance-donut">
              <div>
                <strong>96%</strong>
                <span>Attendance</span>
              </div>
            </div>

            <div className="attendance-legend">

              <Legend
                color="green"
                label="Present"
                value="24 Days"
              />

              <Legend
                color="orange"
                label="Late"
                value="1 Day"
              />

              <Legend
                color="red"
                label="Absent"
                value="0 Days"
              />

              <Legend
                color="blue"
                label="Leave"
                value="2 Days"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM ROW ================= */}

      <section className="employee-bottom-grid">

        <div className="mini-info-card">
          <FaTasks />
          <div>
            <strong>5</strong>
            <span>Pending Tasks</span>
          </div>
        </div>

        <div className="mini-info-card">
          <FaCalendarAlt />
          <div>
            <strong>12</strong>
            <span>Leave Balance</span>
          </div>
        </div>

        <div className="mini-info-card">
          <FaClock />
          <div>
            <strong>{isCheckedIn ? checkInTime : "--:--"}</strong>
            <span>Check-in Time</span>
          </div>
        </div>

      </section>

    </div>
  );
};


/* =====================================================
   SMALL COMPONENTS
===================================================== */

const DashboardCard = ({
  icon,
  title,
  value,
  label,
  progress,
  color,
  button,
  onClick,
}) => {
  return (
    <div className="dashboard-stat-card">

      <div className={`dashboard-stat-icon ${color}`}>
        {icon}
      </div>

      <span className="stat-title">
        {title}
      </span>

      <strong className="stat-value">
        {value}
      </strong>

      <span className="stat-label">
        {label}
      </span>

      <div className="stat-progress">
        <div
          className={color}
          style={{ width: progress }}
        />
      </div>

      <button onClick={onClick}>
        {button}
        <FaArrowRight />
      </button>

    </div>
  );
};


const TaskItem = ({
  title,
  subtitle,
  status,
  progress,
}) => {
  return (
    <div className="task-item">

      <div className="task-main">

        <div>
          <strong>{title}</strong>

          <span>{subtitle}</span>
        </div>

        <span className={`task-priority ${status.toLowerCase()}`}>
          {status}
        </span>

      </div>

      <div className="task-progress">
        <div>
          <span style={{ width: progress }} />
        </div>

        <b>{progress}</b>
      </div>

    </div>
  );
};


const UpdateItem = ({
  icon,
  text,
  type,
}) => {
  return (
    <div className="update-item">

      <div className={`update-icon ${type}`}>
        {icon}
      </div>

      <span>{text}</span>

    </div>
  );
};


const Legend = ({
  color,
  label,
  value,
}) => {
  return (
    <div className="legend-item">

      <span className={`legend-dot ${color}`} />

      <span>{label}</span>

      <strong>{value}</strong>

    </div>
  );
};


export default Dashboard;