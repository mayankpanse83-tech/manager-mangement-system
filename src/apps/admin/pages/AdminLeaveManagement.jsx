import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaBell,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaUsers,
  FaDatabase,
  FaEllipsisV,
  FaCalendarAlt,
  FaHeart,
  FaUmbrellaBeach,
  FaPlaneDeparture,
  FaFileAlt,
  FaInfoCircle,
  FaSun,
} from "react-icons/fa";

import "./AdminLeaveManagement.css";

const leaveRequests = [
  {
    id: "LR-001",
    employee: "Rahul Verma",
    employeeId: "EMP-003",
    department: "Development",
    manager: "Rajat Verma",
    leaveType: "Sick Leave",
    startDate: "16 Sep",
    endDate: "17 Sep",
    dates: "16 Sep - 17 Sep",
    days: 2,
    status: "Pending",
  },
  {
    id: "LR-002",
    employee: "Priya Singh",
    employeeId: "EMP-002",
    department: "Design",
    manager: "Neha Sharma",
    leaveType: "Casual Leave",
    startDate: "18 Sep",
    endDate: "18 Sep",
    dates: "18 Sep 2026",
    days: 1,
    status: "Pending",
  },
  {
    id: "LR-003",
    employee: "Aman Sharma",
    employeeId: "EMP-001",
    department: "Design",
    manager: "Rajat Verma",
    leaveType: "Paid Leave",
    startDate: "20 Sep",
    endDate: "22 Sep",
    dates: "20 Sep - 22 Sep",
    days: 3,
    status: "Pending",
  },
  {
    id: "LR-004",
    employee: "Neha Patel",
    employeeId: "EMP-004",
    department: "QA",
    manager: "Amit Jain",
    leaveType: "Casual Leave",
    startDate: "12 Sep",
    endDate: "12 Sep",
    dates: "12 Sep 2026",
    days: 1,
    status: "Approved",
  },
  {
    id: "LR-005",
    employee: "Vikram Joshi",
    employeeId: "EMP-005",
    department: "Marketing",
    manager: "Sneha Kulkarni",
    leaveType: "Paid Leave",
    startDate: "25 Sep",
    endDate: "27 Sep",
    dates: "25 Sep - 27 Sep",
    days: 3,
    status: "Approved",
  },
  {
    id: "LR-006",
    employee: "Kavya Mehta",
    employeeId: "EMP-006",
    department: "Finance",
    manager: "Rohit Malhotra",
    leaveType: "Sick Leave",
    startDate: "18 Sep",
    endDate: "18 Sep",
    dates: "18 Sep 2026",
    days: 1,
    status: "Rejected",
  },
  {
    id: "LR-007",
    employee: "Suresh Nair",
    employeeId: "EMP-007",
    department: "HR",
    manager: "Pooja Desai",
    leaveType: "Casual Leave",
    startDate: "20 Sep",
    endDate: "20 Sep",
    dates: "20 Sep 2026",
    days: 1,
    status: "Approved",
  },
  {
    id: "LR-008",
    employee: "Anjali Tiwari",
    employeeId: "EMP-008",
    department: "Development",
    manager: "Neha Sharma",
    leaveType: "Paid Leave",
    startDate: "29 Sep",
    endDate: "30 Sep",
    dates: "29 Sep - 30 Sep",
    days: 2,
    status: "Pending",
  },
];

const departmentLeaveData = [
  ["Development", "68", "7", "3", "85%"],
  ["Design", "24", "1", "1", "92%"],
  ["Marketing", "31", "3", "2", "81%"],
  ["QA", "27", "1", "0", "96%"],
  ["Finance", "18", "1", "0", "94%"],
  ["HR", "12", "0", "0", "100%"],
];

const AdminLeaveManagement = () => {
  const [activeTab, setActiveTab] = useState("All Requests");
  const [search, setSearch] = useState("");
  const [department, setDepartment] =
    useState("All Departments");
  const [selectedRequest, setSelectedRequest] =
    useState(leaveRequests[0]);
  const [month, setMonth] = useState("September 2026");
  const [selectedDay, setSelectedDay] = useState(16);
  const [openMenu, setOpenMenu] = useState(null);

  const filteredRequests = useMemo(() => {
    return leaveRequests.filter((request) => {
      const query = search.trim().toLowerCase();

      const searchMatch =
        !query ||
        request.employee.toLowerCase().includes(query) ||
        request.employeeId.toLowerCase().includes(query) ||
        request.department.toLowerCase().includes(query);

      const departmentMatch =
        department === "All Departments" ||
        request.department === department;

      let tabMatch = true;

      if (activeTab === "Pending") {
        tabMatch = request.status === "Pending";
      }

      if (activeTab === "Approved") {
        tabMatch = request.status === "Approved";
      }

      if (activeTab === "Rejected") {
        tabMatch = request.status === "Rejected";
      }

      if (activeTab === "Cancelled") {
        tabMatch = false;
      }

      return (
        searchMatch &&
        departmentMatch &&
        tabMatch
      );
    });
  }, [search, department, activeTab]);

  const initials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const statusClass = (status) =>
    status.toLowerCase();

  const previousMonth = () => {
    setMonth("August 2026");
    setSelectedDay(16);
  };

  const nextMonth = () => {
    setMonth("October 2026");
    setSelectedDay(16);
  };

  return (
    <div className="admin-leave-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="leave-header">

        <div>
          <h1>Leave Management</h1>

          <p>
            Manage organization-wide leave requests, balances and
            policies.
          </p>
        </div>

        <div className="leave-header-actions">

          <button className="leave-date-btn">
            <FaCalendarAlt />
            <span>01 Sep 2026 - 30 Sep 2026</span>
            <FaChevronDown />
          </button>

          <div className="leave-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search employee, department..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <button className="leave-outline-btn">
            <FaFilter />
            Filters
          </button>

          <button className="leave-outline-btn">
            <FaDownload />
            Export
          </button>

          <button className="leave-notification">
            <FaBell />
            <span>3</span>
          </button>

          <div className="leave-admin-user">

            <div className="leave-admin-avatar">
              AU
            </div>

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FaChevronDown />

          </div>

        </div>
      </header>

      {/* =================================================
          STATS
      ================================================= */}

      <section className="leave-stat-grid">

        <div className="leave-stat pending">
          <div className="leave-stat-icon">
            <FaClock />
          </div>

          <div>
            <span>Pending Requests</span>
            <strong>14</strong>
            <small>Needs action</small>
          </div>
        </div>

        <div className="leave-stat approved">
          <div className="leave-stat-icon">
            <FaCheckCircle />
          </div>

          <div>
            <span>Approved (This Month)</span>
            <strong>86</strong>
            <small>91% approval rate</small>
          </div>
        </div>

        <div className="leave-stat onleave">
          <div className="leave-stat-icon">
            <FaUsers />
          </div>

          <div>
            <span>On Leave Today</span>
            <strong>14</strong>
            <small>5.6% of total employees</small>
          </div>
        </div>

        <div className="leave-stat rejected">
          <div className="leave-stat-icon">
            <FaTimesCircle />
          </div>

          <div>
            <span>Rejected (This Month)</span>
            <strong>9</strong>
            <small>9% of total</small>
          </div>
        </div>

        <div className="leave-stat balance">
          <div className="leave-stat-icon">
            <FaDatabase />
          </div>

          <div>
            <span>Total Leave Balance</span>
            <strong>1,284</strong>
            <small>Available days</small>
          </div>
        </div>

      </section>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="leave-main">

        {/* LEFT CONTENT */}

        <section className="leave-left">

          {/* TABS */}

          <div className="leave-tabs">

            {[
              ["All Requests", "109"],
              ["Pending", "14"],
              ["Approved", "86"],
              ["Rejected", "9"],
              ["Cancelled", "0"],
            ].map(([name, count]) => (
              <button
                key={name}
                className={
                  activeTab === name
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(name)
                }
              >
                {name} ({count})
              </button>
            ))}

          </div>

          {/* TABLE */}

          <div className="leave-table-card">

            <div className="leave-table-scroll">

              <table>

                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>

                    <th>EMPLOYEE</th>
                    <th>DEPARTMENT</th>
                    <th>MANAGER</th>
                    <th>LEAVE TYPE</th>
                    <th>DATES</th>
                    <th>DAYS</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredRequests.map(
                    (request) => (
                      <tr
                        key={request.id}
                        className={
                          selectedRequest?.id ===
                          request.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedRequest(
                            request
                          )
                        }
                      >

                        <td>
                          <input
                            type="checkbox"
                            onClick={(e) =>
                              e.stopPropagation()
                            }
                          />
                        </td>

                        <td>

                          <div className="leave-person">

                            <div className="leave-avatar">
                              {initials(
                                request.employee
                              )}
                            </div>

                            <div>
                              <strong>
                                {request.employee}
                              </strong>

                              <span>
                                {request.employeeId}
                              </span>
                            </div>

                          </div>

                        </td>

                        <td>
                          {request.department}
                        </td>

                        <td>
                          {request.manager}
                        </td>

                        <td>

                          <span
                            className={`leave-type-badge ${request.leaveType
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {request.leaveType}
                          </span>

                        </td>

                        <td>
                          {request.dates}
                        </td>

                        <td>
                          {request.days}
                        </td>

                        <td>

                          <span
                            className={`leave-status ${statusClass(
                              request.status
                            )}`}
                          >
                            <i></i>
                            {request.status}
                          </span>

                        </td>

                        <td>

                          <div className="leave-action">

                            <button
                              onClick={(e) => {
                                e.stopPropagation();

                                setOpenMenu(
                                  openMenu ===
                                    request.id
                                    ? null
                                    : request.id
                                );
                              }}
                            >
                              <FaEllipsisV />
                            </button>

                            {openMenu ===
                              request.id && (
                              <div className="leave-dropdown">

                                <button>
                                  View Request
                                </button>

                                <button>
                                  Approve
                                </button>

                                <button>
                                  Reject
                                </button>

                              </div>
                            )}

                          </div>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>

            {/* TABLE FOOTER */}

            <div className="leave-table-footer">

              <span>
                Showing 1 to 8 of 109 requests
              </span>

              <div className="leave-pagination">

                <button>
                  <FaChevronLeft />
                </button>

                <button className="active">
                  1
                </button>

                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>

                <span>...</span>

                <button>14</button>

                <button>
                  <FaChevronRight />
                </button>

              </div>

              <div className="leave-page-size">

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

          {/* ============================
              LOWER LEFT ANALYTICS
          ============================ */}

          <div className="leave-lower-grid">

            {/* DEPARTMENT IMPACT */}

            <section className="leave-lower-card">

              <div className="leave-card-title">
                <h2>Department Leave Impact</h2>
                <button>View All</button>
              </div>

              <table>

                <thead>
                  <tr>
                    <th>DEPARTMENT</th>
                    <th>EMPLOYEES</th>
                    <th>ON LEAVE</th>
                    <th>PENDING</th>
                    <th>AVAILABILITY</th>
                  </tr>
                </thead>

                <tbody>

                  {departmentLeaveData.map(
                    (row) => (
                      <tr key={row[0]}>

                        <td>{row[0]}</td>
                        <td>{row[1]}</td>

                        <td className="leave-red">
                          {row[2]}
                        </td>

                        <td>{row[3]}</td>

                        <td>

                          <div className="availability">

                            <span>
                              {row[4]}
                            </span>

                            <div>
                              <i
                                style={{
                                  width: row[4],
                                }}
                              ></i>
                            </div>

                          </div>

                        </td>

                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </section>

            {/* LEAVE TYPES */}

            <section className="leave-lower-card">

              <div className="leave-card-title">
                <h2>Leave Type Distribution</h2>
              </div>

              <div className="leave-type-content">

                <div className="leave-donut">

                  <div>
                    <strong>109</strong>
                    <span>Total Requests</span>
                  </div>

                </div>

                <div className="leave-type-list">

                  <div>
                    <i className="paid"></i>
                    <span>Paid Leave</span>
                    <b>38 (35%)</b>
                  </div>

                  <div>
                    <i className="casual"></i>
                    <span>Casual Leave</span>
                    <b>32 (29%)</b>
                  </div>

                  <div>
                    <i className="sick"></i>
                    <span>Sick Leave</span>
                    <b>24 (22%)</b>
                  </div>

                  <div>
                    <i className="unpaid"></i>
                    <span>Unpaid Leave</span>
                    <b>8 (7%)</b>
                  </div>

                  <div>
                    <i className="other"></i>
                    <span>Others</span>
                    <b>7 (6%)</b>
                  </div>

                </div>

              </div>

            </section>

            {/* SUBMISSION TREND */}

            <section className="leave-lower-card">

              <div className="leave-card-title">

                <h2>Submission Trend</h2>

                <select>
                  <option>This Month</option>
                  <option>Last Month</option>
                </select>

              </div>

              <div className="leave-trend">

                <div className="leave-trend-y">
                  <span>100</span>
                  <span>80</span>
                  <span>60</span>
                  <span>40</span>
                  <span>20</span>
                </div>

                <div className="leave-trend-area">

                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>

                  <svg
                    viewBox="0 0 450 150"
                    preserveAspectRatio="none"
                  >

                    <polygon
                      points="20,105 130,82 240,70 350,55 425,25 425,150 20,150"
                      fill="rgba(66,106,226,.10)"
                    />

                    <polyline
                      points="20,105 130,82 240,70 350,55 425,25"
                      fill="none"
                      stroke="#4778e8"
                      strokeWidth="3"
                    />

                    <circle
                      cx="20"
                      cy="105"
                      r="3"
                    />

                    <circle
                      cx="130"
                      cy="82"
                      r="3"
                    />

                    <circle
                      cx="240"
                      cy="70"
                      r="3"
                    />

                    <circle
                      cx="350"
                      cy="55"
                      r="3"
                    />

                    <circle
                      cx="425"
                      cy="25"
                      r="3"
                    />

                  </svg>

                </div>

              </div>

              <div className="leave-trend-bottom">

                <div>
                  <strong>93%</strong>
                  <span>Avg. Submission</span>
                </div>

                <div>
                  <strong>4%</strong>
                  <span>Missing Rate</span>
                </div>

                <div>
                  <strong>6h 24m</strong>
                  <span>Avg. Approval Time</span>
                </div>

              </div>

            </section>

          </div>

          {/* ============================
              POLICIES / RECENT ACTIVITY
          ============================ */}

          <div className="leave-policy-grid">

            <section className="leave-policy-card">

              <div className="leave-card-title">

                <div>
                  <h2>Leave Policies</h2>
                  <p>
                    Manage leave types, allocation and approval rules.
                  </p>
                </div>

                <button>
                  Manage Policies
                  <FaChevronDown />
                </button>

              </div>

              <div className="policy-items">

                <div>
                  <FaSun />
                  <strong>Casual Leave</strong>
                  <span>8 Days / Year</span>
                </div>

                <div>
                  <FaHeart />
                  <strong>Sick Leave</strong>
                  <span>6 Days / Year</span>
                </div>

                <div>
                  <FaUmbrellaBeach />
                  <strong>Paid Leave</strong>
                  <span>12 Days / Year</span>
                </div>

                <div>
                  <FaPlaneDeparture />
                  <strong>Unpaid Leave</strong>
                  <span>No Fixed Limit</span>
                </div>

              </div>

            </section>

            <section className="leave-recent-card">

              <div className="leave-card-title">
                <h2>Recent Leave Activity</h2>
                <button>View All</button>
              </div>

              <div className="recent-leave-row">
                <FaCheckCircle className="green-icon" />
                <p>
                  Priya Singh's leave request approved by Neha Sharma
                </p>
                <span>2 hours ago</span>
              </div>

              <div className="recent-leave-row">
                <FaCheckCircle className="green-icon" />
                <p>
                  Aman Sharma's leave request submitted
                </p>
                <span>4 hours ago</span>
              </div>

              <div className="recent-leave-row">
                <FaTimesCircle className="red-icon" />
                <p>
                  Kavya Mehta's leave request rejected
                </p>
                <span>6 hours ago</span>
              </div>

              <div className="recent-leave-row">
                <FaInfoCircle className="blue-icon" />
                <p>
                  Neha Patel's leave balance updated
                </p>
                <span>1 day ago</span>
              </div>

            </section>

          </div>

        </section>

        {/* =================================================
            RIGHT SIDEBAR
        ================================================= */}

        <aside className="leave-right">

          {/* CALENDAR */}

          <div className="leave-calendar-card">

            <div className="leave-calendar-header">

              <button onClick={previousMonth}>
                <FaChevronLeft />
              </button>

              <h2>{month}</h2>

              <button onClick={nextMonth}>
                <FaChevronRight />
              </button>

              <button className="leave-today">
                Today
              </button>

            </div>

            <div className="leave-weekdays">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            <div className="leave-calendar-grid">

              {[
                31,
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12, 13,
                14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27,
                28, 29, 30, 1, 2, 3, 4,
              ].map((day, index) => {

                const muted =
                  index === 0 ||
                  index >= 31;

                return (
                  <button
                    key={`${day}-${index}`}
                    className={`
                      leave-calendar-day
                      ${muted ? "muted" : ""}
                      ${
                        day === selectedDay &&
                        !muted
                          ? "selected"
                          : ""
                      }
                    `}
                    onClick={() => {
                      if (!muted) {
                        setSelectedDay(day);
                      }
                    }}
                  >

                    <span>{day}</span>

                    {!muted &&
                      index % 6 === 0 && (
                        <i className="working-dot"></i>
                      )}

                    {!muted &&
                      index % 8 === 0 && (
                        <i className="pending-dot"></i>
                      )}

                  </button>
                );
              })}

            </div>

            <div className="leave-calendar-legend">

              <span>
                <i className="working"></i>
                Working
              </span>

              <span>
                <i className="approved"></i>
                Approved Leave
              </span>

              <span>
                <i className="pending"></i>
                Pending
              </span>

              <span>
                <i className="holiday"></i>
                Holiday
              </span>

            </div>

          </div>

          {/* ON LEAVE TODAY */}

          <div className="today-leave-card">

            <div className="right-card-title">
              <h2>On Leave Today (14)</h2>
              <button>View All</button>
            </div>

            {[
              ["Neha Kapoor", "Design • Paid Leave"],
              ["Rahul Mehta", "Development • Sick Leave"],
              ["Pooja Desai", "HR • Casual Leave"],
              ["Amit Jain", "QA • Paid Leave"],
            ].map(([name, info]) => (
              <div className="today-leave-row" key={name}>

                <div className="today-avatar">
                  {initials(name)}
                </div>

                <div>
                  <strong>{name}</strong>
                  <span>{info}</span>
                </div>

                <b>Today</b>

              </div>
            ))}

          </div>

          {/* UPCOMING */}

          <div className="upcoming-leave-card">

            <div className="right-card-title">
              <h2>Upcoming Leave</h2>
              <button>View All</button>
            </div>

            <div className="upcoming-row">
              <div className="upcoming-date blue-date">
                <strong>16</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Rahul Verma</strong>
                <span>Sick Leave • 2 Days</span>
              </div>
            </div>

            <div className="upcoming-row">
              <div className="upcoming-date blue-date">
                <strong>18</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Priya Singh</strong>
                <span>Casual Leave • 1 Day</span>
              </div>
            </div>

            <div className="upcoming-row">
              <div className="upcoming-date green-date">
                <strong>20</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Aman Sharma</strong>
                <span>Paid Leave • 3 Days</span>
              </div>
            </div>

            <div className="upcoming-row">
              <div className="upcoming-date red-date">
                <strong>22</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Neha Patel</strong>
                <span>Sick Leave • 1 Day</span>
              </div>
            </div>

          </div>

        </aside>

      </div>
    </div>
  );
};

export default AdminLeaveManagement;