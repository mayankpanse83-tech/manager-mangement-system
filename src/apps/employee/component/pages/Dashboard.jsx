import React from "react";
import {
  FaListCheck,
  FaCalendarCheck,
  FaWallet,
  FaChartPie,
  FaCheck,
  FaCircleExclamation,
  FaClipboardCheck,
  FaArrowRight,
} from "react-icons/fa6";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">

      {/* ================= HEADER ================= */}
      <header className="dashboard-header">
        <h1>
          Dashboard <span>Overview</span>
        </h1>
      </header>


      {/* ================= MAIN ================= */}
      <main className="dashboard-content">

        {/* ================= WELCOME ================= */}
        <section className="welcome-section">

          <div className="welcome-text">
            <h2>Good Morning, Mayank!!</h2>
            <p>Have a productive day ahead.</p>
          </div>

          <div className="welcome-actions">

            <div className="date-box">
              <span>🗓️</span>
              Saturday, 01 August 2026
            </div>

            <button className="login-btn">
              ↪ Login
            </button>

          </div>

        </section>


        {/* ================= TOP CARDS ================= */}
        <section className="top-cards">

          {/* ATTENDANCE */}
          <div className="attendance-card">

            <div className="attendance-title">
              <h3>Today's Attendance</h3>

              <button>
                Check Out
              </button>
            </div>

            <div className="present-box">
              ✓ Present
            </div>

            <div className="attendance-details">

              <div>
                <span>Check In</span>
                <strong>09:15 AM</strong>
              </div>

              <div>
                <span>Working For</span>
                <strong>03h 20m</strong>
              </div>

              <div>
                <span>Check Out</span>
                <strong>-- : --</strong>
              </div>

            </div>

          </div>


          {/* TASK CARD */}
          <div className="info-card">

            <FaListCheck className="info-icon" />

            <h2>5</h2>

            <p>Pending</p>

            <div className="mini-progress">
              <div className="blue-progress"></div>
            </div>

            <a href="#">
              View Tasks <FaArrowRight />
            </a>

          </div>


          {/* LEAVE CARD */}
          <div className="info-card">

            <FaCalendarCheck className="info-icon" />

            <h2>12</h2>

            <p>Pending</p>

            <div className="mini-progress">
              <div className="green-progress"></div>
            </div>

            <a href="#">
              View Leave <FaArrowRight />
            </a>

          </div>


          {/* SALARY CARD */}
          <div className="info-card">

            <FaWallet className="info-icon" />

            <h2>₹35,000</h2>

            <p>Paid</p>

            <a className="salary-link" href="#">
              View Payslip <FaArrowRight />
            </a>

          </div>


          {/* REPORT CARD */}
          <div className="info-card">

            <FaChartPie className="info-icon" />

            <h2>96%</h2>

            <p>Attendance</p>

            <a className="report-link" href="#">
              View Reports <FaArrowRight />
            </a>

          </div>

        </section>


        {/* ================= SECOND ROW ================= */}
        <section className="second-row">

          {/* TASKS */}
          <div className="dashboard-card tasks-card">

            <div className="card-heading">
              <h3>Today's Tasks</h3>
              <a href="#">View All</a>
            </div>


            <div className="task-item">

              <div className="task-top">
                <h4>Complete Dashboard UI</h4>

                <span className="priority high">
                  High
                </span>
              </div>

              <p>
                Design and develop dashboard page
              </p>

              <div className="task-progress">
                <div style={{ width: "75%" }}></div>
              </div>

            </div>


            <div className="task-item">

              <div className="task-top">
                <h4>API Integration</h4>

                <span className="priority medium">
                  Medium
                </span>
              </div>

              <p>
                Integrate all dashboard APIs
              </p>

              <div className="task-progress">
                <div style={{ width: "42%" }}></div>
              </div>

            </div>


            <div className="task-item">

              <div className="task-top">
                <h4>Team Meeting</h4>

                <span className="priority low">
                  Low
                </span>
              </div>

              <p>
                Project discussion with team
              </p>

            </div>

          </div>


          {/* DAILY UPDATE */}
          <div className="dashboard-card">

            <div className="card-heading">
              <h3>Daily Update</h3>
              <a href="#">Edit</a>
            </div>

            <div className="daily-update">

              <p>
                <FaCheck className="green-icon" />
                Completed API Integration
              </p>

              <p>
                <FaCircleExclamation className="orange-icon" />
                Dashboard Testing
              </p>

              <p>
                <FaClipboardCheck className="blue-icon" />
                Work on Task Module
              </p>

            </div>

          </div>


          {/* ATTENDANCE SUMMARY */}
          <div className="dashboard-card summary-card">

            <div className="card-heading">
              <h3>Attendance Summary</h3>
            </div>

            <div className="attendance-circle">

              <div className="circle-inner">
                <strong>96%</strong>
              </div>

            </div>

            <ul className="attendance-list">
              <li>
                <span className="check-text">✓</span>
                Present : 20
              </li>

              <li>
                <span className="cross-text">✕</span>
                Absent : 1
              </li>
            </ul>

          </div>

        </section>

      </main>

    </div>
  );
};

export default Dashboard;