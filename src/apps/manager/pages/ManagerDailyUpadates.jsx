import React, { useState } from "react";
import {
  FaUsers,
  FaCalendarCheck,
  FaSearch,
  FaFilter,
  FaDownload,
  FaBell,
  FaChevronDown,
  FaEllipsisV,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaArrowUp,
  FaPaperclip,
} from "react-icons/fa";

import "./ManagerDailyUpadates.css";

const employees = [
  {
    id: 1,
    name: "Aman Sharma",
    role: "UI Designer",
    empId: "EMP-001",
    status: "Submitted",
    submitted: "06:12 PM",
    summary:
      "Completed dashboard responsive UI and fixed mobile layout issues. Improved performance and optimized images.",
    review: "Review",
    avatar: "AS",
    color: "green",
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Developer",
    empId: "EMP-002",
    status: "Reviewed",
    submitted: "06:05 PM",
    summary:
      "Integrated API and resolved data sync issues across employee modules.",
    review: "Reviewed",
    avatar: "PS",
    color: "blue",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Developer",
    empId: "EMP-003",
    status: "Pending",
    submitted: "—",
    summary: "—",
    review: "Send Reminder",
    avatar: "RV",
    color: "orange",
  },
  {
    id: 4,
    name: "Neha Patel",
    role: "QA Engineer",
    empId: "EMP-004",
    status: "Submitted",
    submitted: "05:48 PM",
    summary:
      "Completed test cases for new modules and reported bugs to the development team.",
    review: "Review",
    avatar: "NP",
    color: "green",
  },
  {
    id: 5,
    name: "Vikas Joshi",
    role: "UI Designer",
    empId: "EMP-005",
    status: "Reviewed",
    submitted: "05:35 PM",
    summary:
      "Designed reports UI and added required filters and improved layout.",
    review: "Reviewed",
    avatar: "VJ",
    color: "blue",
  },
  {
    id: 6,
    name: "Anjali Mehta",
    role: "Developer",
    empId: "EMP-006",
    status: "Submitted",
    submitted: "05:20 PM",
    summary:
      "Worked on user authentication and form validation improvements.",
    review: "Review",
    avatar: "AM",
    color: "green",
  },
];

function ManagerDailyUpadates() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.empId.toLowerCase().includes(search.toLowerCase());

    if (activeTab === "All") return matchesSearch;
    if (activeTab === "Submitted")
      return matchesSearch && employee.status === "Submitted";
    if (activeTab === "Pending")
      return matchesSearch && employee.status === "Pending";
    if (activeTab === "Reviewed")
      return matchesSearch && employee.status === "Reviewed";
    if (activeTab === "Missing")
      return matchesSearch && employee.status === "Pending";

    return matchesSearch;
  });

  return (
    <div className="mdu-page">

      {/* MAIN */}
      <main className="mdu-main">

        {/* HEADER */}
        <header className="mdu-header">

          <div className="mdu-title-area">
            <h1>Daily Updates</h1>

            <p>
              Review your team's daily work updates and progress.
            </p>
          </div>

          <div className="mdu-header-actions">

            <button className="mdu-date-btn">
              <FaCalendarCheck />
              Today, 02 Sep 2026
              <FaChevronDown />
            </button>

            <div className="mdu-header-search">
              <FaSearch />

              <input
                placeholder="Search employee..."
              />
            </div>

            <button className="mdu-small-btn">
              <FaFilter />
              Filter
            </button>

            <button className="mdu-small-btn">
              <FaDownload />
              Export
              <FaChevronDown />
            </button>

            <div className="mdu-notification">
              <FaBell />
              <span>3</span>
            </div>

            <div className="mdu-top-user">

              <div className="mdu-top-avatar">
                RV
              </div>

              <div>
                <strong>Rajat Verma</strong>
                <span>Team Manager</span>
              </div>

              <FaChevronDown />

            </div>

          </div>

        </header>


        {/* CONTENT */}
        <div className="mdu-content">

          <section className="mdu-left">

            {/* STATS */}
            <div className="mdu-stats">

              <div className="mdu-stat-card">

                <div className="mdu-stat-icon purple">
                  <FaUsers />
                </div>

                <div>
                  <span>Team Members</span>
                  <strong>12</strong>
                  <small>Total Members</small>
                </div>

              </div>


              <div className="mdu-stat-card">

                <div className="mdu-stat-icon green">
                  <FaCheckCircle />
                </div>

                <div>
                  <span>Submitted</span>
                  <strong>9</strong>
                  <small className="success-text">
                    75% submitted
                  </small>
                </div>

              </div>


              <div className="mdu-stat-card">

                <div className="mdu-stat-icon orange">
                  <FaClock />
                </div>

                <div>
                  <span>Pending Review</span>
                  <strong>2</strong>
                  <small className="warning-text">
                    Needs your review
                  </small>
                </div>

              </div>


              <div className="mdu-stat-card">

                <div className="mdu-stat-icon blue">
                  <FaClock />
                </div>

                <div>
                  <span>Reviewed</span>
                  <strong>7</strong>
                  <small>Today</small>
                </div>

              </div>


              <div className="mdu-stat-card">

                <div className="mdu-stat-icon red">
                  <FaExclamationCircle />
                </div>

                <div>
                  <span>Missing Update</span>
                  <strong>1</strong>
                  <small className="danger-text">
                    No update today
                  </small>
                </div>

              </div>

            </div>


            {/* TABLE PANEL */}
            <div className="mdu-panel">

              <div className="mdu-tabs">

                {[
                  ["All", 12],
                  ["Submitted", 9],
                  ["Pending Review", 2],
                  ["Missing", 1],
                  ["Reviewed", 7],
                ].map(([tab, count]) => {

                  const value =
                    tab === "Pending Review"
                      ? "Pending"
                      : tab;

                  return (
                    <button
                      key={tab}
                      className={
                        activeTab === value
                          ? "tab-active"
                          : ""
                      }
                      onClick={() =>
                        setActiveTab(value)
                      }
                    >
                      {tab} ({count})
                    </button>
                  );
                })}

              </div>


              {/* FILTER */}
              <div className="mdu-filters">

                <div className="mdu-table-search">

                  <FaSearch />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search by name or employee ID..."
                  />

                </div>


                <div className="mdu-select-box">

                  <span>Department</span>
                  <strong>All Departments</strong>
                  <FaChevronDown />

                </div>


                <div className="mdu-select-box">

                  <span>Status</span>
                  <strong>All Status</strong>
                  <FaChevronDown />

                </div>


                <div className="mdu-select-box">

                  <span>Sort by</span>
                  <strong>Latest Submitted</strong>
                  <FaChevronDown />

                </div>

              </div>


              {/* TABLE */}
              <div className="mdu-table-wrap">

                <table className="mdu-table">

                  <thead>
                    <tr>
                      <th>EMPLOYEE</th>
                      <th>STATUS</th>
                      <th>SUBMITTED AT</th>
                      <th>TODAY'S SUMMARY</th>
                      <th>REVIEW</th>
                      <th>ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody>

                    {filteredEmployees.map((employee) => (

                      <tr key={employee.id}>

                        <td>

                          <div className="mdu-employee">

                            <div
                              className={`mdu-avatar ${employee.color}`}
                            >
                              {employee.avatar}
                            </div>

                            <div>
                              <strong>{employee.name}</strong>
                              <span>{employee.role}</span>
                              <small>{employee.empId}</small>
                            </div>

                          </div>

                        </td>


                        <td>

                          <span
                            className={`mdu-status ${employee.status
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {employee.status}
                          </span>

                        </td>


                        <td className="mdu-time">
                          {employee.submitted}
                        </td>


                        <td>

                          <div className="mdu-summary">

                            {employee.summary !== "—" ? (
                              employee.summary
                            ) : (
                              <>
                                <span>—</span>
                                <small>
                                  No update submitted
                                </small>
                              </>
                            )}

                          </div>

                        </td>


                        <td>

                          {employee.review === "Reviewed" ? (

                            <div className="mdu-reviewed">

                              <FaCheckCircle />

                              <div>
                                <strong>
                                  Reviewed
                                </strong>

                                <span>
                                  by You
                                </span>
                              </div>

                            </div>

                          ) : employee.review ===
                            "Send Reminder" ? (

                            <button className="mdu-reminder-btn">
                              Send Reminder
                            </button>

                          ) : (

                            <button className="mdu-review-btn">
                              Review
                            </button>

                          )}

                        </td>


                        <td>

                          <button className="mdu-more-btn">
                            <FaEllipsisV />
                          </button>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>


              {/* PAGINATION */}
              <div className="mdu-pagination">

                <span>
                  Showing 1 to 6 of 12 members
                </span>

                <div className="mdu-pages">

                  <button>‹</button>
                  <button className="page-active">1</button>
                  <button>2</button>
                  <button>›</button>

                </div>

                <div className="mdu-per-page">

                  <span>10</span>
                  <FaChevronDown />
                  <small>per page</small>

                </div>

              </div>

            </div>


            {/* ANALYTICS */}
            <div className="mdu-analytics">

              <div className="mdu-analytics-card">

                <h3>Today's Progress Overview</h3>

                <div className="mdu-progress-content">

                  <div className="mdu-donut">

                    <div>
                      <strong>86%</strong>
                      <span>Overall Progress</span>
                    </div>

                  </div>


                  <div className="mdu-legend">

                    <div>
                      <i className="green-dot"></i>
                      <span>Completed Tasks</span>
                      <strong>27</strong>
                    </div>

                    <div>
                      <i className="blue-dot"></i>
                      <span>In Progress</span>
                      <strong>9</strong>
                    </div>

                    <div>
                      <i className="orange-dot"></i>
                      <span>Blocked</span>
                      <strong>2</strong>
                    </div>

                    <div>
                      <i className="red-dot"></i>
                      <span>Not Started</span>
                      <strong>1</strong>
                    </div>

                  </div>

                </div>

              </div>


              <div className="mdu-analytics-card">

                <h3>Submission Trend (This Week)</h3>

                <div className="mdu-chart">

                  <div className="mdu-chart-line"></div>

                  <span className="mdu-point point-1">
                    90%
                  </span>

                  <span className="mdu-point point-2">
                    92%
                  </span>

                  <span className="mdu-point point-3">
                    95%
                  </span>

                  <span className="mdu-point point-4">
                    93%
                  </span>

                </div>

                <div className="mdu-chart-days">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                </div>


                <div className="mdu-chart-summary">

                  <div>
                    <span>Submission Rate</span>
                    <strong>93%</strong>
                    <small>
                      <FaArrowUp /> 4%
                    </small>
                  </div>

                  <div>
                    <span>Review Rate</span>
                    <strong>81%</strong>
                    <small>
                      <FaArrowUp /> 2%
                    </small>
                  </div>

                  <div>
                    <span>Missing Updates</span>
                    <strong className="danger-text">
                      1
                    </strong>
                  </div>

                </div>

              </div>


              <div className="mdu-analytics-card">

                <div className="mdu-performance-title">
                  <h3>Employee Update Performance</h3>
                  <a>View All</a>
                </div>

                <div className="mdu-performance-head">
                  <span>EMPLOYEE</span>
                  <span>SUBMISSION RATE</span>
                  <span>REVIEW RATE</span>
                  <span>MISSING</span>
                </div>

                {employees.slice(0, 4).map(
                  (employee, index) => (

                    <div
                      className="mdu-performance-row"
                      key={employee.id}
                    >

                      <div className="mdu-performance-user">

                        <div
                          className={`small-avatar ${employee.color}`}
                        >
                          {employee.avatar}
                        </div>

                        <span>
                          {employee.name}
                        </span>

                      </div>

                      <strong>
                        {index === 2
                          ? "78%"
                          : "100%"}
                      </strong>

                      <strong>
                        {index === 0
                          ? "100%"
                          : index === 1
                          ? "94%"
                          : "75%"}
                      </strong>

                      <span
                        className={
                          index === 2
                            ? "missing-count"
                            : ""
                        }
                      >
                        {index === 2 ? "1" : "0"}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          </section>


          {/* RIGHT PANEL */}
          <aside className="mdu-right-panel">

            <div className="mdu-profile-top">

              <div className="mdu-large-avatar">
                AS
              </div>

              <div>

                <h2>Aman Sharma</h2>

                <p>
                  UI Designer • EMP-001
                </p>

              </div>

              <span className="mdu-submitted-badge">
                Submitted
              </span>

            </div>


            <div className="mdu-detail-date">

              <div>
                <FaCalendarCheck />
                <span>02 Sep 2026</span>
              </div>

              <div>
                <FaClock />
                <span>06:12 PM</span>
              </div>

            </div>


            <section className="mdu-detail-section">

              <h3>Today's Work</h3>

              <p>
                Completed dashboard responsive UI
                and fixed mobile layout issues.
                Improved performance and optimized
                images.
              </p>

            </section>


            <section className="mdu-detail-section">

              <h3>Completed Tasks</h3>

              <div className="check-item">
                <FaCheckCircle />
                Dashboard Responsive UI
              </div>

              <div className="check-item">
                <FaCheckCircle />
                Mobile Layout Fixes
              </div>

              <div className="check-item">
                <FaCheckCircle />
                Header & Navigation Fixes
              </div>

            </section>


            <section className="mdu-detail-section">

              <h3>Pending Work</h3>

              <div className="pending-item">
                <FaClock />
                Final QA testing and
                cross-browser check
              </div>

            </section>


            <section className="mdu-detail-section">

              <h3>Tomorrow's Plan</h3>

              <div className="plan-item">
                <span></span>
                Complete QA testing
              </div>

              <div className="plan-item">
                <span></span>
                Start Reports UI
              </div>

            </section>


            <section className="mdu-detail-section">

              <h3>Blockers</h3>

              <div className="no-blocker">
                None
              </div>

            </section>


            <section className="mdu-detail-section">

              <h3>Attachments</h3>

              <div className="attachment-box">

                <div className="attachment-icon">
                  <FaPaperclip />
                </div>

                <div>
                  <strong>
                    dashboard-final.png
                  </strong>

                  <span>
                    2.4 MB
                  </span>
                </div>

                <FaDownload />

              </div>

            </section>


            <section className="mdu-feedback">

              <h3>Manager Feedback</h3>

              <p>
                Great work! Please complete QA
                testing before tomorrow's standup.
              </p>

              <button>
                Mark as Reviewed
              </button>

            </section>


            <section className="mdu-history">

              <h3>Update History</h3>

              <div className="history-item">

                <div className="history-dot green"></div>

                <div>
                  <strong>Submitted</strong>
                  <span>
                    by Aman Sharma
                  </span>
                </div>

                <small>
                  06:12 PM
                </small>

              </div>


              <div className="history-item">

                <div className="history-dot purple"></div>

                <div>
                  <strong>Under Review</strong>
                  <span>
                    by You
                  </span>
                </div>

                <small>
                  06:20 PM
                </small>

              </div>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default ManagerDailyUpadates;