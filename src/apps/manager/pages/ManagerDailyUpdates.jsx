import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaUserCheck,
  FaTasks,
  FaCalendarAlt,
  FaChartBar,
  FaUser,
  FaCog,
  FaBell,
  FaSearch,
  FaFilter,
  FaDownload,
  FaChevronDown,
  FaEllipsisV,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaTimesCircle,
  FaEye,
  FaPaperclip,
  FaArrowUp,
} from "react-icons/fa";

import "./ManagerDailyUpdates.css";

const employees = [
  {
    name: "Aman Sharma",
    role: "UI Designer",
    id: "EMP-001",
    status: "Submitted",
    time: "06:12 PM",
    summary:
      "Completed dashboard responsive UI and fixed mobile layout issues.",
  },
  {
    name: "Priya Singh",
    role: "Developer",
    id: "EMP-002",
    status: "Reviewed",
    time: "06:05 PM",
    summary: "Integrated API and resolved data sync issues.",
  },
  {
    name: "Rahul Verma",
    role: "Developer",
    id: "EMP-003",
    status: "Pending",
    time: "—",
    summary: "—",
  },
  {
    name: "Neha Patel",
    role: "QA Engineer",
    id: "EMP-004",
    status: "Submitted",
    time: "05:48 PM",
    summary:
      "Completed test cases for new modules and reported bugs.",
  },
  {
    name: "Vikram Joshi",
    role: "UI Designer",
    id: "EMP-005",
    status: "Reviewed",
    time: "05:35 PM",
    summary:
      "Designed reports UI and added required filters.",
  },
  {
    name: "Anjali Mehta",
    role: "Developer",
    id: "EMP-006",
    status: "Submitted",
    time: "05:20 PM",
    summary:
      "Worked on user authentication and form validation.",
  },
];

const navItems = [
  { icon: <FaHome />, text: "Dashboard" },
  { icon: <FaUsers />, text: "My Team" },
  { icon: <FaUserCheck />, text: "Team Attendance" },
  { icon: <FaTasks />, text: "Tasks" },
  { icon: <FaCalendarAlt />, text: "Daily Updates" },
  { icon: <FaCalendarAlt />, text: "Leave Requests" },
  { icon: <FaChartBar />, text: "Reports" },
  { icon: <FaUser />, text: "Profile" },
  { icon: <FaCog />, text: "Settings" },
];

function ManagerDailyUpdates() {
  const [activeNav, setActiveNav] = useState("Daily Updates");
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusClass = (status) => {
    if (status === "Submitted") return "submitted";
    if (status === "Reviewed") return "reviewed";
    if (status === "Pending") return "pending";
    return "";
  };

  return (
    <div className="manager-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="manager-sidebar">

        <div className="sidebar-logo">
          <div className="logo-box">
            <FaUsers />
          </div>

          <div>
            <h2>WorkForce</h2>
            <span>Manager Workspace</span>
          </div>
        </div>

        <div className="sidebar-menu">
          {navItems.map((item) => (
            <div
              key={item.text}
              className={`sidebar-item ${
                activeNav === item.text ? "active" : ""
              }`}
              onClick={() => setActiveNav(item.text)}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        <div className="help-box">
          <h4>Need Help?</h4>
          <p>Contact admin<br />send a request.</p>
          <button>Contact Admin</button>
        </div>

        <div className="manager-profile">
          <div className="manager-avatar">RV</div>

          <div>
            <strong>Raj Verma</strong>
            <small>Team Manager</small>
          </div>

          <FaChevronDown />
        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="manager-main">

        {/* HEADER */}
        <header className="top-header">

          <div className="page-heading">
            <h1>Daily Updates</h1>
            <p>Review your team's daily updates and progress.</p>
          </div>

          <div className="header-actions">

            <button className="date-button">
              <FaCalendarAlt />
              Today, 02 Sep 2026
              <FaChevronDown />
            </button>

            <div className="header-search">
              <FaSearch />
              <input
                type="text"
                placeholder="Search employee..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="header-btn">
              <FaFilter />
              Filter
            </button>

            <button className="header-btn">
              <FaDownload />
              Export
              <FaChevronDown />
            </button>

            <div className="notification">
              <FaBell />
              <span>3</span>
            </div>

            <div className="header-user">
              <div className="user-avatar">RV</div>
              <div>
                <strong>Raj Verma</strong>
                <small>Team Manager</small>
              </div>
            </div>

          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <div className="content-area">

          {/* STAT CARDS */}
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon purple">
                <FaUsers />
              </div>

              <div>
                <span>Team Members</span>
                <h2>12</h2>
                <small>Total Members</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon green">
                <FaCheckCircle />
              </div>

              <div>
                <span>Submitted</span>
                <h2>9</h2>
                <small className="green-text">75% submitted</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon orange">
                <FaClock />
              </div>

              <div>
                <span>Pending Review</span>
                <h2>2</h2>
                <small className="orange-text">Needs your review</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon blue">
                <FaClock />
              </div>

              <div>
                <span>Reviewed</span>
                <h2>7</h2>
                <small>Today</small>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon red">
                <FaExclamationCircle />
              </div>

              <div>
                <span>Missing Update</span>
                <h2>1</h2>
                <small className="red-text">No update today</small>
              </div>
            </div>

          </div>

          {/* ================= TABS ================= */}
          <div className="updates-card">

            <div className="tabs">

              {[
                ["All", 12],
                ["Submitted", 9],
                ["Pending Review", 2],
                ["Missing", 1],
                ["Reviewed", 7],
              ].map(([tab, count]) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "tab-active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab} ({count})
                </button>
              ))}

            </div>

            {/* FILTER ROW */}
            <div className="filter-row">

              <div className="table-search">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search by name or employee ID..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <select>
                <option>All Departments</option>
                <option>Development</option>
                <option>Design</option>
                <option>QA</option>
              </select>

              <select>
                <option>All Status</option>
                <option>Submitted</option>
                <option>Reviewed</option>
                <option>Pending</option>
              </select>

              <select>
                <option>Latest Submitted</option>
                <option>Oldest</option>
              </select>

            </div>

            {/* ================= TABLE ================= */}
            <div className="updates-table">

              <div className="table-header">
                <span>EMPLOYEE</span>
                <span>STATUS</span>
                <span>SUBMITTED AT</span>
                <span>TODAY'S SUMMARY</span>
                <span>REVIEW</span>
                <span>ACTIONS</span>
              </div>

              {filteredEmployees.map((employee) => (

                <div className="table-row" key={employee.id}>

                  <div className="employee-info">
                    <div className="employee-avatar">
                      {employee.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </div>

                    <div>
                      <strong>{employee.name}</strong>
                      <small>{employee.role}</small>
                      <small>{employee.id}</small>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`status ${getStatusClass(
                        employee.status
                      )}`}
                    >
                      <FaCircle />
                      {employee.status}
                    </span>
                  </div>

                  <div className="submitted-time">
                    {employee.time}
                  </div>

                  <div className="summary">
                    {employee.summary}
                  </div>

                  <div>

                    {employee.status === "Reviewed" ? (
                      <span className="reviewed-label">
                        <FaCheckCircle />
                        Reviewed
                        <small>by You</small>
                      </span>
                    ) : employee.status === "Pending" ? (
                      <button className="reminder-btn">
                        Send Reminder
                      </button>
                    ) : (
                      <button className="review-btn">
                        Review
                      </button>
                    )}

                  </div>

                  <div className="action-icon">
                    <FaEllipsisV />
                  </div>

                </div>

              ))}

            </div>

            {/* PAGINATION */}
            <div className="pagination">

              <span>
                Showing 1 to 6 of 12 members
              </span>

              <div className="page-buttons">
                <button>‹</button>
                <button className="page-active">1</button>
                <button>2</button>
                <button>›</button>
              </div>

              <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>

              <span>per page</span>

            </div>

          </div>

          {/* ================= BOTTOM CARDS ================= */}
          <div className="bottom-grid">

            {/* PROGRESS */}
            <div className="bottom-card">

              <h3>Today's Progress Overview</h3>

              <div className="progress-content">

                <div className="progress-circle">
                  <div>
                    <strong>86%</strong>
                    <small>Overall Progress</small>
                  </div>
                </div>

                <div className="progress-list">
                  <p>
                    <span className="dot green-dot"></span>
                    Completed Tasks
                    <b>27</b>
                  </p>

                  <p>
                    <span className="dot orange-dot"></span>
                    In Progress
                    <b>9</b>
                  </p>

                  <p>
                    <span className="dot red-dot"></span>
                    Blocked
                    <b>2</b>
                  </p>

                  <p>
                    <span className="dot gray-dot"></span>
                    Not Started
                    <b>1</b>
                  </p>
                </div>

              </div>

            </div>

            {/* TREND */}
            <div className="bottom-card">

              <h3>
                Submission Trend (This Week)
              </h3>

              <div className="chart">

                <div className="chart-lines">
                  <span>100%</span>
                  <span>90%</span>
                  <span>80%</span>
                  <span>70%</span>
                  <span>60%</span>
                </div>

                <svg
                  viewBox="0 0 420 150"
                  className="line-chart"
                >
                  <polyline
                    points="20,100 100,75 180,82 260,45 340,55 400,35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />

                  <circle cx="20" cy="100" r="4" />
                  <circle cx="100" cy="75" r="4" />
                  <circle cx="180" cy="82" r="4" />
                  <circle cx="260" cy="45" r="4" />
                  <circle cx="340" cy="55" r="4" />
                  <circle cx="400" cy="35" r="4" />
                </svg>

                <div className="chart-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>

              </div>

              <div className="chart-footer">
                <div>
                  <small>Submission Rate</small>
                  <strong>93%</strong>
                </div>

                <div>
                  <small>Review Rate</small>
                  <strong>81%</strong>
                </div>

                <div>
                  <small>Missing Updates</small>
                  <strong className="red-text">1</strong>
                </div>
              </div>

            </div>

            {/* PERFORMANCE */}
            <div className="bottom-card">

              <div className="card-title-row">
                <h3>Employee Update Performance</h3>
                <button>View All</button>
              </div>

              <div className="performance-header">
                <span>EMPLOYEE</span>
                <span>SUBMISSION RATE</span>
                <span>REVIEW RATE</span>
                <span>MISSING</span>
              </div>

              {employees.slice(0, 4).map((employee, index) => (

                <div
                  className="performance-row"
                  key={employee.id}
                >

                  <div className="mini-employee">
                    <div className="mini-avatar">
                      {employee.name[0]}
                    </div>

                    <span>{employee.name}</span>
                  </div>

                  <strong>
                    {100 - index * 4}%
                  </strong>

                  <strong>
                    {100 - index * 6}%
                  </strong>

                  <span>
                    {index === 2 ? (
                      <b className="missing-number">1</b>
                    ) : (
                      "0"
                    )}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

      {/* ================= RIGHT PANEL ================= */}
      <aside className="right-panel">

        <div className="selected-user">

          <div className="large-avatar">AS</div>

          <div>
            <h3>Aman Sharma</h3>
            <p>UI Designer · EMP-001</p>
          </div>

          <span className="submitted-badge">
            Submitted
          </span>

        </div>

        <div className="user-date">
          <span>
            <FaCalendarAlt />
            02 Sep 2026
          </span>

          <span>
            <FaClock />
            06:12 PM
          </span>
        </div>

        <div className="right-section">

          <h4>Today's Work</h4>

          <p className="work-description">
            Completed dashboard responsive UI and fixed
            mobile layout issues. Improved performance and
            optimized images.
          </p>

        </div>

        <div className="right-section">

          <h4>Completed Tasks</h4>

          <ul className="task-list">
            <li>
              <FaCheckCircle />
              Dashboard Responsive UI
            </li>

            <li>
              <FaCheckCircle />
              Mobile Layout Fixes
            </li>

            <li>
              <FaCheckCircle />
              Header & Navigation Fixes
            </li>
          </ul>

        </div>

        <div className="right-section">

          <h4>Pending Work</h4>

          <ul className="pending-list">
            <li>
              Final QA testing and cross-browser check
            </li>
          </ul>

        </div>

        <div className="right-section">

          <h4>Tomorrow's Plan</h4>

          <ul className="tomorrow-list">
            <li>Complete QA testing</li>
            <li>Start Reports UI</li>
          </ul>

        </div>

        <div className="right-section">

          <h4>Blockers</h4>

          <p className="none-blocker">
            None
          </p>

        </div>

        <div className="right-section">

          <h4>Attachments</h4>

          <div className="attachment">

            <FaPaperclip />

            <div>
              <strong>dashboard-final.png</strong>
              <small>2.4 MB</small>
            </div>

            <FaDownload />

          </div>

        </div>

        <div className="right-section feedback">

          <h4>Manager Feedback</h4>

          <p>
            Great work! Please complete QA testing before
            tomorrow's standup.
          </p>

        </div>

        <button className="mark-reviewed">
          <FaCheckCircle />
          Mark as Reviewed
        </button>

        <div className="right-section history">

          <h4>Update History</h4>

          <div className="history-item">
            <FaCheckCircle />
            <div>
              <strong>Submitted</strong>
              <small>by Aman Sharma</small>
            </div>
            <span>06:12 PM</span>
          </div>

          <div className="history-item">
            <FaEye />
            <div>
              <strong>Under Review</strong>
              <small>by You</small>
            </div>
            <span>06:20 PM</span>
          </div>

        </div>

      </aside>

    </div>
  );
}

export default ManagerDailyUpdates;