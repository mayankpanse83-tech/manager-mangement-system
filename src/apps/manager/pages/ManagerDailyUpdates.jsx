import React from "react";
import {
  FiUsers,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiSearch,
  FiFilter,
  FiDownload,
  FiChevronDown,
  FiBell,
  FiMoreVertical,
  FiCalendar,
  FiX,
  FiSend,
  FiCheck,
  FiCircle,
} from "react-icons/fi";

import "./ManagerDailyUpdates.css";

const updates = [
  {
    initials: "AS",
    name: "Aman Sharma",
    role: "UI Designer",
    id: "EMP-001",
    status: "Submitted",
    time: "06:12 PM",
    work: "Completed dashboard responsive UI and fixed mobile layout.",
    review: "Review",
    color: "green",
  },
  {
    initials: "PS",
    name: "Priya Singh",
    role: "Developer",
    id: "EMP-002",
    status: "Reviewed",
    time: "06:05 PM",
    work: "Integrated API and resolved data sync issues.",
    review: "Reviewed",
    color: "blue",
  },
  {
    initials: "RV",
    name: "Rahul Verma",
    role: "Developer",
    id: "EMP-003",
    status: "Pending",
    time: "—",
    work: "—",
    review: "Send Reminder",
    color: "orange",
    missing: true,
  },
  {
    initials: "NP",
    name: "Neha Patel",
    role: "QA Engineer",
    id: "EMP-004",
    status: "Submitted",
    time: "05:48 PM",
    work: "Completed test cases for new modules and reported bugs.",
    review: "Review",
    color: "green",
  },
  {
    initials: "VJ",
    name: "Vikram Joshi",
    role: "UI Designer",
    id: "EMP-005",
    status: "Reviewed",
    time: "05:35 PM",
    work: "Designed reports UI and added required interactions.",
    review: "Reviewed",
    color: "blue",
  },
  {
    initials: "AM",
    name: "Anjali Mehta",
    role: "Developer",
    id: "EMP-006",
    status: "Submitted",
    time: "05:20 PM",
    work: "Worked on user authentication and fixed validations.",
    review: "Review",
    color: "green",
  },
];

function Avatar({ initials }) {
  return <div className="mdu-avatar">{initials}</div>;
}

function Status({ type }) {
  return (
    <span className={`mdu-status ${type.toLowerCase()}`}>
      <i />
      {type}
    </span>
  );
}

function MetricCard({ icon, title, value, text, className }) {
  return (
    <div className="mdu-metric-card">
      <div className={`mdu-metric-icon ${className}`}>{icon}</div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span className={className}>{text}</span>
      </div>
    </div>
  );
}

function DailyUpdateRow({ item }) {
  return (
    <div className="mdu-update-row">
      <div className="mdu-employee">
        <Avatar initials={item.initials} />

        <div>
          <strong>{item.name}</strong>
          <span>{item.role}</span>
          <small>{item.id}</small>
        </div>
      </div>

      <Status type={item.status} />

      <div className="mdu-time">{item.time}</div>

      <div className={`mdu-work ${item.missing ? "missing" : ""}`}>
        {item.work}
      </div>

      <div>
        {item.review === "Reviewed" ? (
          <span className="mdu-reviewed">
            <FiCheckCircle />
            Reviewed
          </span>
        ) : (
          <button
            className={`mdu-review-btn ${
              item.review === "Send Reminder" ? "reminder" : ""
            }`}
          >
            {item.review}
          </button>
        )}
      </div>

      <button className="mdu-more">
        <FiMoreVertical />
      </button>
    </div>
  );
}

function ManagerDailyUpdates() {
  return (
    <div className="manager-daily-updates-page">
      {/* MAIN */}
      <div className="mdu-main">
        {/* HEADER */}
        <div className="mdu-header">
          <div>
            <h1>Daily Updates</h1>
            <p>Review your team's daily work updates and progress.</p>
          </div>

          <div className="mdu-header-tools">
            <button className="mdu-date-button">
              <FiCalendar />
              Today, 02 Sep 2026
              <FiChevronDown />
            </button>

            <div className="mdu-search">
              <FiSearch />
              <input placeholder="Search employee..." />
            </div>

            <button className="mdu-tool-btn">
              <FiFilter />
              Filter
            </button>

            <button className="mdu-tool-btn">
              <FiDownload />
              Export
              <FiChevronDown />
            </button>

            <div className="mdu-notification">
              <FiBell />
              <span>3</span>
            </div>

            <Avatar initials="RV" />

            <div className="mdu-user">
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>

            <FiChevronDown />
          </div>
        </div>

        {/* STATS */}
        <div className="mdu-stats">
          <MetricCard
            icon={<FiUsers />}
            title="Team Members"
            value="12"
            text="Total Members"
            className="purple"
          />

          <MetricCard
            icon={<FiCheckCircle />}
            title="Submitted"
            value="9"
            text="75% submitted"
            className="green"
          />

          <MetricCard
            icon={<FiAlertCircle />}
            title="Pending Review"
            value="2"
            text="Needs your review"
            className="orange"
          />

          <MetricCard
            icon={<FiClock />}
            title="Reviewed"
            value="7"
            text="Today"
            className="blue"
          />

          <MetricCard
            icon={<FiAlertCircle />}
            title="Missing Update"
            value="1"
            text="No update today"
            className="red"
          />
        </div>

        {/* TABS */}
        <div className="mdu-tabs">
          <button className="active">All (12)</button>
          <button>Submitted (9)</button>
          <button>Pending Review (2)</button>
          <button>Missing (1)</button>
          <button>Reviewed (7)</button>
        </div>

        {/* FILTERS */}
        <div className="mdu-filters">
          <div className="mdu-table-search">
            <FiSearch />
            <input placeholder="Search by name or employee ID..." />
          </div>

          <button>
            Department
            <b>All Departments</b>
            <FiChevronDown />
          </button>

          <button>
            Status
            <b>All Status</b>
            <FiChevronDown />
          </button>

          <button>
            Sort by
            <b>Latest Submitted</b>
            <FiChevronDown />
          </button>
        </div>

        {/* TABLE */}
        <div className="mdu-table">
          <div className="mdu-table-head">
            <span>EMPLOYEE</span>
            <span>STATUS</span>
            <span>SUBMITTED AT</span>
            <span>TODAY'S SUMMARY</span>
            <span>REVIEW</span>
            <span>ACTIONS</span>
          </div>

          {updates.map((item, index) => (
            <DailyUpdateRow key={index} item={item} />
          ))}

          <div className="mdu-pagination">
            <span>Showing 1 to 6 of 12 members</span>

            <div>
              <button>‹</button>
              <button className="active">1</button>
              <button>2</button>
              <button>›</button>
            </div>

            <div className="mdu-per-page">
              <button>
                10
                <FiChevronDown />
              </button>
              per page
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mdu-bottom-grid">
          <div className="mdu-widget">
            <div className="mdu-widget-head">
              <h3>Today's Progress Overview</h3>
            </div>

            <div className="mdu-progress-content">
              <div className="mdu-circle">
                <div>
                  <strong>86%</strong>
                  <span>Overall Progress</span>
                </div>
              </div>

              <div className="mdu-progress-list">
                <p><i className="green-dot" /> Completed <b>7</b></p>
                <p><i className="blue-dot" /> In Progress <b>3</b></p>
                <p><i className="orange-dot" /> Blocked <b>2</b></p>
                <p><i className="red-dot" /> Not Started <b>1</b></p>
              </div>
            </div>
          </div>

          <div className="mdu-widget">
            <div className="mdu-widget-head">
              <h3>Submission Trend (This Week)</h3>
            </div>

            <div className="mdu-chart">
              <div className="mdu-chart-line">
                <span style={{ height: "52%" }}>90%</span>
                <span style={{ height: "68%" }}>90%</span>
                <span style={{ height: "56%" }}>85%</span>
                <span style={{ height: "85%" }}>95%</span>
                <span style={{ height: "78%" }}>93%</span>
              </div>

              <div className="mdu-chart-days">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
              </div>

              <div className="mdu-chart-summary">
                <div><span>Review Rate</span><strong>93%</strong></div>
                <div><span>Submission Rate</span><strong>81%</strong></div>
                <div><span>Missed Updates</span><strong className="danger">1</strong></div>
              </div>
            </div>
          </div>

          <div className="mdu-widget mdu-performance">
            <div className="mdu-widget-head">
              <h3>Employee Updates Performance</h3>
              <button>View All</button>
            </div>

            <div className="mdu-performance-head">
              <span>EMPLOYEE</span>
              <span>SUBMISSION RATE</span>
              <span>REVIEW RATE</span>
              <span>ISSUES</span>
            </div>

            {[
              ["Aman Sharma", "100%", "100%", "0"],
              ["Priya Singh", "96%", "90%", "0"],
              ["Neha Patel", "92%", "90%", "0"],
              ["Rahul Verma", "78%", "75%", "1"],
              ["Vikram Joshi", "90%", "85%", "0"],
            ].map((row) => (
              <div className="mdu-performance-row" key={row[0]}>
                <span>{row[0]}</span>
                <b>{row[1]}</b>
                <b>{row[2]}</b>
                <em className={row[3] === "1" ? "issue" : ""}>{row[3]}</em>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <aside className="mdu-right-panel">
        <button className="mdu-close">
          <FiX />
        </button>

        <div className="mdu-person-card">
          <h2>Aman Sharma</h2>
          <span>UI Designer</span>

          <div className="mdu-person-time">
            <div>
              <FiCalendar />
              <small>02 Sep 2026</small>
              <b>Update Date</b>
            </div>

            <div>
              <FiClock />
              <small>06:12 PM</small>
              <b>Submitted At</b>
            </div>
          </div>
        </div>

        <div className="mdu-side-section">
          <h3>Today's Work</h3>
          <p>
            Completed dashboard responsive UI and improved mobile layout.
            Improved performance and optimized images.
          </p>

          <h4>Completed Tasks</h4>

          <div className="mdu-check-list">
            <span><FiCheckCircle /> Dashboard Responsive UI</span>
            <span><FiCheckCircle /> Mobile Layout Fixes</span>
            <span><FiCheckCircle /> Header & Navigation Fixes</span>
          </div>
        </div>

        <div className="mdu-side-section">
          <h4>Pending Work</h4>
          <span className="mdu-pending-item">
            <FiCircle />
            Final QA Testing and cross-browser check
          </span>
        </div>

        <div className="mdu-side-section">
          <h4>Tomorrow's Plan</h4>
          <span className="mdu-plan-item">
            <FiCircle />
            Start Reports UI
          </span>
        </div>

        <div className="mdu-side-section">
          <h4>Blockers</h4>
          <p className="mdu-none">None</p>
        </div>

        <div className="mdu-side-section mdu-attachments">
          <h4>Attachments</h4>
          <div>
            <FiFileText />
            dashboard-final.png
            <FiDownload />
          </div>
        </div>

        <div className="mdu-side-section">
          <h4>Manager Feedback</h4>
          <textarea
            placeholder="Great work! Please complete QA testing before tomorrow's stand-up."
          />
        </div>

        <button className="mdu-mark-reviewed">
          <FiCheck />
          Mark as Reviewed
        </button>

        <div className="mdu-update-history">
          <h3>Update History</h3>
          <div>
            <i />
            <span>Submitted</span>
            <small>06:12 PM</small>
          </div>

          <div>
            <i className="outline" />
            <span>Under Review</span>
            <small>06:20 PM</small>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default ManagerDailyUpdates;