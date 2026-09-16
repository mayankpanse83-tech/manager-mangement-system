import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaBell,
  FaChevronDown,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaFileAlt,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
  FaCalendarAlt,
  FaUser,
  FaTasks,
  FaPaperclip,
  FaCommentAlt,
  FaExclamationTriangle,
  FaCircle,
} from "react-icons/fa";

import "./AdminDailyUpdates.css";

const updatesData = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    designation: "UI Designer",
    department: "Design",
    manager: "Rajat Verma",
    tasks: "3 / 4",
    status: "Submitted",
    submittedAt: "06:12 PM",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    designation: "Developer",
    department: "Development",
    manager: "Neha Sharma",
    tasks: "5 / 5",
    status: "Reviewed",
    submittedAt: "06:05 PM",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    designation: "Developer",
    department: "Development",
    manager: "Rajat Verma",
    tasks: "-",
    status: "Missing",
    submittedAt: "-",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    designation: "QA Engineer",
    department: "QA",
    manager: "Amit Jain",
    tasks: "4 / 4",
    status: "Submitted",
    submittedAt: "05:48 PM",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    designation: "Marketing Executive",
    department: "Marketing",
    manager: "Sneha Kulkarni",
    tasks: "2 / 3",
    status: "Pending Review",
    submittedAt: "06:20 PM",
  },
  {
    id: "EMP-006",
    name: "Kavya Mehta",
    designation: "Accountant",
    department: "Finance",
    manager: "Rohit Malhotra",
    tasks: "5 / 5",
    status: "Reviewed",
    submittedAt: "06:15 PM",
  },
  {
    id: "EMP-007",
    name: "Suresh Nair",
    designation: "HR Executive",
    department: "HR",
    manager: "Pooja Desai",
    tasks: "3 / 3",
    status: "Submitted",
    submittedAt: "05:55 PM",
  },
  {
    id: "EMP-008",
    name: "Anjali Tiwari",
    designation: "Graphic Designer",
    department: "Design",
    manager: "Rajat Verma",
    tasks: "2 / 4",
    status: "Missing",
    submittedAt: "-",
  },
];

const departmentData = [
  ["Development", "68", "64", "4", "94%"],
  ["Design", "24", "22", "2", "92%"],
  ["Marketing", "31", "29", "2", "94%"],
  ["QA", "27", "26", "1", "96%"],
  ["Finance", "18", "18", "0", "100%"],
  ["HR", "12", "12", "0", "100%"],
];

const AdminDailyUpdates = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [selectedEmployee, setSelectedEmployee] = useState(updatesData[0]);
  const [period, setPeriod] = useState("Today");
  const [openMenu, setOpenMenu] = useState(null);

  const filteredUpdates = useMemo(() => {
    return updatesData.filter((item) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.department.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All Departments" ||
        item.department === department;

      let matchesTab = true;

      if (activeTab === "Submitted") {
        matchesTab = item.status === "Submitted";
      }

      if (activeTab === "Pending Review") {
        matchesTab = item.status === "Pending Review";
      }

      if (activeTab === "Missing") {
        matchesTab = item.status === "Missing";
      }

      if (activeTab === "Reviewed") {
        matchesTab = item.status === "Reviewed";
      }

      return matchesSearch && matchesDepartment && matchesTab;
    });
  }, [search, department, activeTab]);

  const initials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2);

  return (
    <div className="admin-daily-updates-page">

      {/* ================= HEADER ================= */}

      <div className="adu-header">

        <div>
          <h1>Daily Updates</h1>
          <p>
            Monitor daily work updates and reporting compliance across the
            organization.
          </p>
        </div>

        <div className="adu-header-actions">

          <button className="adu-date-button">
            <FaCalendarAlt />
            Thu, 11 Sep 2026
            <FaChevronDown />
          </button>

          <div className="adu-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search employee, department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="adu-outline-button">
            <FaFilter />
            Filters
          </button>

          <button className="adu-outline-button">
            <FaDownload />
            Export
          </button>

          <button className="adu-notification">
            <FaBell />
            <span>3</span>
          </button>

          <div className="adu-admin-user">
            <div className="adu-admin-avatar">AU</div>

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FaChevronDown />
          </div>

        </div>
      </div>

      {/* ================= STATS ================= */}

      <div className="adu-stat-grid">

        <div className="adu-stat blue">
          <div className="adu-stat-icon">
            <FaUsers />
          </div>
          <div>
            <span>Total Employees</span>
            <strong>248</strong>
            <small>Across organization</small>
          </div>
        </div>

        <div className="adu-stat green">
          <div className="adu-stat-icon">
            <FaCheckCircle />
          </div>
          <div>
            <span>Submitted Today</span>
            <strong>218</strong>
            <small>93% submission rate</small>
          </div>
        </div>

        <div className="adu-stat orange">
          <div className="adu-stat-icon">
            <FaClock />
          </div>
          <div>
            <span>Pending Review</span>
            <strong>21</strong>
            <small>8% of total</small>
          </div>
        </div>

        <div className="adu-stat red">
          <div className="adu-stat-icon">
            <FaExclamationCircle />
          </div>
          <div>
            <span>Missing Updates</span>
            <strong>9</strong>
            <small>Needs attention</small>
          </div>
        </div>

        <div className="adu-stat purple">
          <div className="adu-stat-icon">
            <FaFileAlt />
          </div>
          <div>
            <span>Reviewed</span>
            <strong>204</strong>
            <small>88% of submitted</small>
          </div>
        </div>

      </div>

      {/* ================= MAIN ================= */}

      <div className="adu-main">

        {/* LEFT */}

        <section className="adu-left">

          {/* TABS */}

          <div className="adu-tabs">

            {[
              ["All", "248"],
              ["Submitted", "218"],
              ["Pending Review", "21"],
              ["Missing", "9"],
              ["Reviewed", "204"],
            ].map(([name, count]) => (
              <button
                key={name}
                className={activeTab === name ? "active" : ""}
                onClick={() => setActiveTab(name)}
              >
                {name} ({count})
              </button>
            ))}

          </div>

          {/* PERIODS */}

          <div className="adu-period-row">

            {[
              "Today",
              "Yesterday",
              "This Week",
              "This Month",
              "Custom",
            ].map((item) => (
              <button
                key={item}
                className={period === item ? "active" : ""}
                onClick={() => setPeriod(item)}
              >
                {item}
              </button>
            ))}

            <button>
              <FaCalendarAlt />
            </button>

          </div>

          {/* FILTER */}

          <div className="adu-filter-row">

            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>All Departments</option>
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>QA</option>
              <option>Finance</option>
              <option>HR</option>
            </select>

            <select>
              <option>All Managers</option>
              <option>Rajat Verma</option>
              <option>Neha Sharma</option>
              <option>Amit Jain</option>
              <option>Sneha Kulkarni</option>
            </select>

          </div>

          {/* TABLE */}

          <div className="adu-table-card">

            <div className="adu-table-scroll">

              <table>

                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>EMPLOYEE</th>
                    <th>DEPARTMENT</th>
                    <th>MANAGER</th>
                    <th>TASKS COMPLETED</th>
                    <th>STATUS</th>
                    <th>SUBMITTED AT</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredUpdates.map((employee) => (
                    <tr
                      key={employee.id}
                      className={
                        selectedEmployee?.id === employee.id
                          ? "selected"
                          : ""
                      }
                      onClick={() => setSelectedEmployee(employee)}
                    >

                      <td>
                        <input
                          type="checkbox"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>

                      <td>
                        <div className="adu-person">

                          <div className="adu-avatar">
                            {initials(employee.name)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
                            <span>{employee.designation}</span>
                          </div>

                        </div>
                      </td>

                      <td>{employee.department}</td>
                      <td>{employee.manager}</td>
                      <td>{employee.tasks}</td>

                      <td>
                        <span
                          className={`adu-status ${employee.status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <i></i>
                          {employee.status}
                        </span>
                      </td>

                      <td>{employee.submittedAt}</td>

                      <td>

                        <div className="adu-action">

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(
                                openMenu === employee.id
                                  ? null
                                  : employee.id
                              );
                            }}
                          >
                            <FaEllipsisV />
                          </button>

                          {openMenu === employee.id && (
                            <div className="adu-dropdown">
                              <button>View Update</button>
                              <button>Review Update</button>
                              <button>Send Reminder</button>
                            </div>
                          )}

                        </div>

                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

            {/* FOOTER */}

            <div className="adu-table-footer">

              <span>
                Showing 1 to 8 of 248 employees
              </span>

              <div className="adu-pagination">

                <button>
                  <FaChevronLeft />
                </button>

                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <span>...</span>
                <button>31</button>

                <button>
                  <FaChevronRight />
                </button>

              </div>

              <div className="adu-page-size">
                Show
                <select>
                  <option>8</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                per page
              </div>

            </div>

          </div>

        </section>

        {/* ================= RIGHT DETAILS ================= */}

        {selectedEmployee && (
          <aside className="adu-details">

            <div className="adu-details-header">
              <h2>Daily Update Details</h2>

              <button
                onClick={() => setSelectedEmployee(null)}
              >
                ×
              </button>
            </div>

            <div className="adu-detail-profile">

              <div className="adu-detail-avatar">
                {initials(selectedEmployee.name)}
              </div>

              <div>
                <h3>{selectedEmployee.name}</h3>
                <p>
                  {selectedEmployee.designation} •{" "}
                  {selectedEmployee.id}
                </p>
                <span>
                  <FaCalendarAlt /> 11 Sep 2026 • 06:12 PM
                </span>
              </div>

              <b className="submitted-badge">
                Submitted
              </b>

            </div>

            {/* TABS */}

            <div className="adu-detail-tabs">

              <button className="active">Update</button>
              <button>Tasks (3)</button>
              <button>Attachments (2)</button>
              <button>History</button>

            </div>

            {/* WORK */}

            <div className="adu-detail-section">

              <h3>Today's Work</h3>

              <p>
                Completed responsive dashboard UI and fixed mobile layout
                issues. Worked on improving performance and resolved minor
                UI bugs.
              </p>

            </div>

            {/* COMPLETED */}

            <div className="adu-detail-section">

              <h3>Completed Tasks</h3>

              <div className="check-item">
                <FaCheckCircle />
                <span>Dashboard UI development</span>
              </div>

              <div className="check-item">
                <FaCheckCircle />
                <span>Mobile responsive fixes</span>
              </div>

              <div className="check-item">
                <FaCheckCircle />
                <span>Header alignment issue</span>
              </div>

            </div>

            {/* PENDING */}

            <div className="adu-detail-section">

              <h3>Pending Work</h3>

              <div className="bullet-item">
                <FaCircle />
                <span>Final QA testing and deployment</span>
              </div>

            </div>

            {/* BLOCKERS */}

            <div className="adu-detail-section">

              <h3>Blockers</h3>

              <p className="none-text">None</p>

            </div>

            {/* REVIEWED */}

            <div className="adu-reviewed-box">

              <div className="review-icon">
                <FaCheckCircle />
              </div>

              <div>
                <strong>Reviewed by Rajat Verma</strong>
                <span>11 Sep 2026 • 06:30 PM</span>
              </div>

            </div>

            {/* RECENT */}

            <div className="adu-recent">

              <div className="adu-recent-header">
                <h3>Recent Activity</h3>
                <button>View All</button>
              </div>

              <div>
                <FaCheckCircle className="green" />
                <p>
                  Aman Sharma submitted daily update
                </p>
                <span>2 hours ago</span>
              </div>

              <div>
                <FaCommentAlt className="purple" />
                <p>
                  Priya Singh update reviewed by Neha Sharma
                </p>
                <span>3 hours ago</span>
              </div>

              <div>
                <FaExclamationTriangle className="orange" />
                <p>
                  Vikram Joshi submitted daily update
                </p>
                <span>4 hours ago</span>
              </div>

              <div>
                <FaTimesCircle className="red" />
                <p>
                  Rahul Verma marked as missing
                </p>
                <span>5 hours ago</span>
              </div>

            </div>

          </aside>
        )}

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="adu-bottom-grid">

        {/* DEPARTMENT COMPLIANCE */}

        <section className="adu-bottom-card">

          <div className="adu-bottom-title">
            <h2>Department Compliance</h2>
            <button>View All</button>
          </div>

          <table>

            <thead>
              <tr>
                <th>DEPARTMENT</th>
                <th>EMPLOYEES</th>
                <th>SUBMITTED</th>
                <th>MISSING</th>
                <th>COMPLIANCE</th>
              </tr>
            </thead>

            <tbody>

              {departmentData.map((row) => (
                <tr key={row[0]}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td className="green-text">{row[2]}</td>
                  <td className="red-text">{row[3]}</td>
                  <td>
                    <div className="compliance-cell">
                      <span>{row[4]}</span>
                      <div>
                        <i style={{ width: row[4] }}></i>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </section>

        {/* SUBMISSION TREND */}

        <section className="adu-bottom-card submission-card">

          <div className="adu-bottom-title">
            <h2>Submission Trend</h2>

            <select>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="adu-chart">

            <div className="adu-chart-y">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
            </div>

            <div className="adu-chart-area">

              <div className="adu-chart-line"></div>
              <div className="adu-chart-line"></div>
              <div className="adu-chart-line"></div>
              <div className="adu-chart-line"></div>
              <div className="adu-chart-line"></div>

              <svg viewBox="0 0 450 150" preserveAspectRatio="none">

                <polygon
                  points="20,95 90,65 155,60 220,52 285,55 350,45 420,55 420,150 20,150"
                  fill="rgba(71,120,232,.12)"
                />

                <polyline
                  points="20,95 90,65 155,60 220,52 285,55 350,45 420,55"
                  fill="none"
                  stroke="#4778e8"
                  strokeWidth="3"
                />

                {[20, 90, 155, 220, 285, 350, 420].map(
                  (x, index) => {
                    const points = [95, 65, 60, 52, 55, 45, 55];

                    return (
                      <circle
                        key={x}
                        cx={x}
                        cy={points[index]}
                        r="3.5"
                      />
                    );
                  }
                )}

              </svg>

            </div>

          </div>

          <div className="adu-chart-days">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          <div className="adu-trend-stats">

            <div>
              <strong>93%</strong>
              <span>Avg. Submission</span>
            </div>

            <div>
              <strong>88%</strong>
              <span>Avg. Review</span>
            </div>

            <div>
              <strong>4%</strong>
              <span>Missing Rate</span>
            </div>

          </div>

        </section>

        {/* WORK DISTRIBUTION */}

        <section className="adu-bottom-card distribution-card">

          <div className="adu-bottom-title">
            <h2>Today's Work Distribution</h2>
          </div>

          <div className="distribution-content">

            <div className="distribution-donut">

              <div>
                <strong>218</strong>
                <span>Updates</span>
              </div>

            </div>

            <div className="distribution-list">

              <div>
                <i className="d-blue"></i>
                <span>Development</span>
                <b>42%</b>
              </div>

              <div>
                <i className="d-purple"></i>
                <span>Design</span>
                <b>16%</b>
              </div>

              <div>
                <i className="d-orange"></i>
                <span>Testing</span>
                <b>16%</b>
              </div>

              <div>
                <i className="d-red"></i>
                <span>Meetings</span>
                <b>10%</b>
              </div>

              <div>
                <i className="d-green"></i>
                <span>Documentation</span>
                <b>8%</b>
              </div>

              <div>
                <i className="d-grey"></i>
                <span>Other</span>
                <b>6%</b>
              </div>

            </div>

          </div>

        </section>

      </div>

      {/* ================= LAST ROW ================= */}

      <div className="adu-last-grid">

        <section className="adu-last-card">

          <div className="adu-bottom-title">
            <h2>Manager Review Performance</h2>
            <button>View All</button>
          </div>

          <table>

            <thead>
              <tr>
                <th>MANAGER</th>
                <th>TEAM SIZE</th>
                <th>SUBMITTED</th>
                <th>REVIEWED</th>
                <th>REVIEW RATE</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rajat Verma</td>
                <td>12</td>
                <td>12 (100%)</td>
                <td>11 (92%)</td>
                <td><b>92%</b></td>
              </tr>

              <tr>
                <td>Neha Sharma</td>
                <td>24</td>
                <td>23 (96%)</td>
                <td>21 (88%)</td>
                <td><b>88%</b></td>
              </tr>

              <tr>
                <td>Amit Jain</td>
                <td>18</td>
                <td>17 (94%)</td>
                <td>16 (89%)</td>
                <td><b>89%</b></td>
              </tr>

              <tr>
                <td>Sneha Kulkarni</td>
                <td>15</td>
                <td>15 (100%)</td>
                <td>15 (100%)</td>
                <td><b>100%</b></td>
              </tr>

            </tbody>

          </table>

        </section>

        <section className="adu-last-card">

          <div className="adu-bottom-title">
            <h2>Missing Updates</h2>
            <button>View All</button>
          </div>

          <div className="missing-row">
            <FaExclamationTriangle />
            <div>
              <strong>Rahul Verma</strong>
              <small>Last update: Yesterday</small>
            </div>
            <button>Send Reminder</button>
          </div>

          <div className="missing-row">
            <FaExclamationTriangle />
            <div>
              <strong>Amit Kumar</strong>
              <small>Last update: 2 days ago</small>
            </div>
            <button>Send Reminder</button>
          </div>

          <div className="missing-row">
            <FaExclamationCircle />
            <div>
              <strong>Neha Patel</strong>
              <small>No update submitted</small>
            </div>
            <button>Send Reminder</button>
          </div>

        </section>

        <section className="adu-last-card">

          <div className="adu-bottom-title">
            <h2>Team Blockers</h2>
            <button>View All</button>
          </div>

          <div className="blocker-row">
            <FaExclamationTriangle className="red" />
            <div>
              <strong>API dependency</strong>
              <small>3 employees</small>
            </div>
          </div>

          <div className="blocker-row">
            <FaExclamationTriangle className="orange" />
            <div>
              <strong>Design approval pending</strong>
              <small>2 employees</small>
            </div>
          </div>

          <div className="blocker-row">
            <FaExclamationTriangle className="orange" />
            <div>
              <strong>Testing environment issue</strong>
              <small>1 employee</small>
            </div>
          </div>

          <div className="blocker-row">
            <FaExclamationCircle className="blue-icon" />
            <div>
              <strong>Resource allocation</strong>
              <small>1 employee</small>
            </div>
          </div>

        </section>

      </div>

    </div>
  );
};

export default AdminDailyUpdates;