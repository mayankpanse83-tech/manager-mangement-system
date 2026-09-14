import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaBell,
  FaChevronDown,
  FaEllipsisV,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaBriefcase,
  FaClock,
  FaCalendarAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimesCircle,
  FaFileAlt,
  FaCheckCircle,
  FaArrowUp,
  FaExclamationTriangle,
} from "react-icons/fa";
import "./AdminAttendance.css";

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    designation: "UI Designer",
    department: "Design",
    manager: "Rajat Verma",
    checkIn: "09:12 AM",
    checkOut: "-",
    hours: "8h 12m",
    status: "Working",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    designation: "Developer",
    department: "Development",
    manager: "Neha Sharma",
    checkIn: "09:05 AM",
    checkOut: "09:01 PM",
    hours: "8h 56m",
    status: "Present",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    designation: "Developer",
    department: "Development",
    manager: "Rajat Verma",
    checkIn: "-",
    checkOut: "-",
    hours: "-",
    status: "On Leave",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    designation: "QA Engineer",
    department: "QA",
    manager: "Amit Jain",
    checkIn: "10:12 AM",
    checkOut: "06:15 PM",
    hours: "7h 10m",
    status: "Late",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    designation: "Marketing Executive",
    department: "Marketing",
    manager: "Sneha Kulkarni",
    checkIn: "09:08 AM",
    checkOut: "05:55 PM",
    hours: "8h 47m",
    status: "Present",
  },
  {
    id: "EMP-006",
    name: "Kavya Mehta",
    designation: "Accountant",
    department: "Finance",
    manager: "Rohit Malhotra",
    checkIn: "09:21 AM",
    checkOut: "06:02 PM",
    hours: "8h 41m",
    status: "Present",
  },
  {
    id: "EMP-007",
    name: "Suresh Nair",
    designation: "HR Executive",
    department: "HR",
    manager: "Pooja Desai",
    checkIn: "09:03 AM",
    checkOut: "06:10 PM",
    hours: "9h 07m",
    status: "Present",
  },
  {
    id: "EMP-008",
    name: "Anjali Tiwari",
    designation: "Graphic Designer",
    department: "Design",
    manager: "Rajat Verma",
    checkIn: "09:45 AM",
    checkOut: "-",
    hours: "6h 20m",
    status: "Working",
  },
];

const departments = [
  ["Development", "68", "61", "3", "4", "91%"],
  ["Design", "24", "23", "0", "1", "96%"],
  ["Marketing", "31", "27", "2", "2", "88%"],
  ["QA", "27", "25", "1", "1", "93%"],
  ["Finance", "18", "17", "0", "1", "94%"],
  ["HR", "12", "12", "0", "0", "97%"],
];

const calendarDays = [
  { day: 31, muted: true, type: "holiday" },
  { day: 1, type: "present" },
  { day: 2, type: "absent" },
  { day: 3, type: "present" },
  { day: 4, type: "present" },
  { day: 5 },
  { day: 6 },

  { day: 7, type: "present" },
  { day: 8, type: "present" },
  { day: 9, type: "late" },
  { day: 10, type: "present" },
  { day: 11, type: "selected" },
  { day: 12, type: "present" },
  { day: 13 },

  { day: 14, type: "absent" },
  { day: 15, type: "late" },
  { day: 16, type: "present" },
  { day: 17, type: "present" },
  { day: 18, type: "present" },
  { day: 19 },
  { day: 20 },

  { day: 21, type: "present" },
  { day: 22, type: "present" },
  { day: 23 },
  { day: 24, type: "present" },
  { day: 25, type: "present" },
  { day: 26, type: "late" },
  { day: 27 },

  { day: 28, type: "present" },
  { day: 29, type: "present" },
  { day: 30, type: "present" },
  { day: 1, muted: true },
  { day: 2, muted: true },
  { day: 3, muted: true },
  { day: 4, muted: true },
];

const AdminAttendance = () => {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("All");
  const [department, setDepartment] = useState("All Departments");
  const [manager, setManager] = useState("All Managers");
  const [selectedDate, setSelectedDate] = useState(11);
  const [openAction, setOpenAction] = useState(null);
  const [currentMonth, setCurrentMonth] = useState("September 2026");

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const text = search.trim().toLowerCase();

      const searchMatch =
        !text ||
        employee.name.toLowerCase().includes(text) ||
        employee.id.toLowerCase().includes(text) ||
        employee.department.toLowerCase().includes(text);

      const departmentMatch =
        department === "All Departments" ||
        employee.department === department;

      const managerMatch =
        manager === "All Managers" ||
        employee.manager === manager;

      let tabMatch = true;

      if (tab === "Present") {
        tabMatch = ["Present", "Working"].includes(employee.status);
      }

      if (tab === "Late") {
        tabMatch = employee.status === "Late";
      }

      if (tab === "On Leave") {
        tabMatch = employee.status === "On Leave";
      }

      if (tab === "Absent") {
        tabMatch = employee.status === "Absent";
      }

      return (
        searchMatch &&
        departmentMatch &&
        managerMatch &&
        tabMatch
      );
    });
  }, [search, department, manager, tab]);

  const initials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2);

  const previousMonth = () => {
    setCurrentMonth("August 2026");
  };

  const nextMonth = () => {
    setCurrentMonth("October 2026");
  };

  return (
    <div className="admin-attendance-page">

      {/* ================= HEADER ================= */}

      <header className="attendance-header">

        <div className="attendance-title-area">
          <h1>Attendance</h1>
          <p>
            Monitor organization-wide attendance, working hours and
            attendance issues.
          </p>
        </div>

        <div className="attendance-header-actions">

          <button className="attendance-date-btn">
            <FaCalendarAlt />
            Thu, 11 Sep 2026
            <FaChevronDown />
          </button>

          <div className="attendance-search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search employee, department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="outline-btn">
            <FaFilter />
            Filters
          </button>

          <button className="outline-btn">
            <FaDownload />
            Export
          </button>

          <button className="notification-btn">
            <FaBell />
            <span>3</span>
          </button>

          <div className="admin-user-area">
            <div className="admin-user-avatar">
              AU
            </div>

            <div className="admin-user-text">
              <strong>Admin User</strong>
              <span>Organization Admin</span>
            </div>

            <FaChevronDown />
          </div>

        </div>
      </header>

      {/* ================= STAT CARDS ================= */}

      <section className="attendance-stat-grid">

        <div className="attendance-stat-card blue">
          <div className="stat-icon">
            <FaUsers />
          </div>

          <div>
            <span>Total Employees</span>
            <strong>248</strong>
            <small>100% of organization</small>
          </div>
        </div>

        <div className="attendance-stat-card green">
          <div className="stat-icon">
            <FaUserCheck />
          </div>

          <div>
            <span>Present Today</span>
            <strong>221</strong>
            <small>89% attendance</small>
          </div>
        </div>

        <div className="attendance-stat-card red">
          <div className="stat-icon">
            <FaUserTimes />
          </div>

          <div>
            <span>Absent Today</span>
            <strong>13</strong>
            <small>5.2% of total</small>
          </div>
        </div>

        <div className="attendance-stat-card orange">
          <div className="stat-icon">
            <FaBriefcase />
          </div>

          <div>
            <span>On Leave Today</span>
            <strong>14</strong>
            <small>5.6% of total</small>
          </div>
        </div>

        <div className="attendance-stat-card purple">
          <div className="stat-icon">
            <FaClock />
          </div>

          <div>
            <span>Late Today</span>
            <strong>22</strong>
            <small>8.9% of total</small>
          </div>
        </div>

      </section>

      {/* ================= MAIN AREA ================= */}

      <div className="attendance-content-grid">

        {/* LEFT TABLE */}

        <section className="attendance-table-section">

          <div className="attendance-tabs">
            {[
              ["All", "248"],
              ["Present", "221"],
              ["Late", "22"],
              ["On Leave", "14"],
              ["Absent", "13"],
            ].map(([name, count]) => (
              <button
                key={name}
                className={tab === name ? "active" : ""}
                onClick={() => setTab(name)}
              >
                {name} ({count})
              </button>
            ))}
          </div>

          <div className="attendance-filter-row">

            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
            >
              <option>All Departments</option>
              <option>Development</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>QA</option>
              <option>Finance</option>
              <option>HR</option>
            </select>

            <select
              value={manager}
              onChange={(e) =>
                setManager(e.target.value)
              }
            >
              <option>All Managers</option>
              <option>Rajat Verma</option>
              <option>Neha Sharma</option>
              <option>Amit Jain</option>
              <option>Sneha Kulkarni</option>
              <option>Rohit Malhotra</option>
              <option>Pooja Desai</option>
            </select>

            <button className="date-filter-small">
              <FaCalendarAlt />
              Date
            </button>

          </div>

          <div className="attendance-table-card">

            <div className="attendance-table-scroll">

              <table>

                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" />
                    </th>
                    <th>EMPLOYEE</th>
                    <th>EMP ID</th>
                    <th>DEPARTMENT</th>
                    <th>MANAGER</th>
                    <th>CHECK IN</th>
                    <th>CHECK OUT</th>
                    <th>HOURS</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>

                      <td>
                        <input type="checkbox" />
                      </td>

                      <td>
                        <div className="attendance-person">

                          <div className="attendance-avatar">
                            {initials(employee.name)}
                          </div>

                          <div>
                            <strong>
                              {employee.name}
                            </strong>

                            <span>
                              {employee.designation}
                            </span>
                          </div>

                        </div>
                      </td>

                      <td>{employee.id}</td>
                      <td>{employee.department}</td>
                      <td>{employee.manager}</td>
                      <td>{employee.checkIn}</td>
                      <td>{employee.checkOut}</td>
                      <td>{employee.hours}</td>

                      <td>
                        <span
                          className={`attendance-status ${employee.status
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          <i></i>
                          {employee.status}
                        </span>
                      </td>

                      <td>
                        <div className="attendance-action-wrap">

                          <button
                            className="action-dots"
                            onClick={() =>
                              setOpenAction(
                                openAction === employee.id
                                  ? null
                                  : employee.id
                              )
                            }
                          >
                            <FaEllipsisV />
                          </button>

                          {openAction === employee.id && (
                            <div className="action-menu">

                              <button>
                                View Details
                              </button>

                              <button>
                                View Attendance
                              </button>

                              <button>
                                Edit Record
                              </button>

                            </div>
                          )}

                        </div>
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>

            <div className="table-footer">

              <span>
                Showing 1 to {filteredEmployees.length} of 248 employees
              </span>

              <div className="pagination">

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

              <div className="show-page">
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

        {/* RIGHT SIDE */}

        <aside className="attendance-sidebar">

          {/* CALENDAR */}

          <div className="calendar-card">

            <div className="calendar-card-header">

              <h2>Calendar View</h2>

              <div className="calendar-controls">

                <button onClick={previousMonth}>
                  <FaChevronLeft />
                </button>

                <strong>{currentMonth}</strong>

                <button onClick={nextMonth}>
                  <FaChevronRight />
                </button>

                <button className="today-button">
                  Today
                </button>

              </div>

            </div>

            <div className="calendar-weekdays">
              {[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="calendar-grid">

              {calendarDays.map((item, index) => (
                <button
                  key={`${item.day}-${index}`}
                  className={`
                    calendar-cell
                    ${item.muted ? "muted" : ""}
                    ${item.day === selectedDate && !item.muted ? "selected" : ""}
                  `}
                  onClick={() => {
                    if (!item.muted) {
                      setSelectedDate(item.day);
                    }
                  }}
                >

                  <span>{item.day}</span>

                  {item.type === "present" && (
                    <i className="calendar-dot present"></i>
                  )}

                  {item.type === "late" && (
                    <i className="calendar-dot late"></i>
                  )}

                  {item.type === "absent" && (
                    <i className="calendar-dot absent"></i>
                  )}

                  {item.type === "holiday" && (
                    <i className="calendar-dot holiday"></i>
                  )}

                </button>
              ))}

            </div>

            <div className="calendar-legend">

              <span>
                <i className="present"></i>
                Present
              </span>

              <span>
                <i className="late"></i>
                Late
              </span>

              <span>
                <i className="absent"></i>
                Absent
              </span>

              <span>
                <i className="leave"></i>
                Leave
              </span>

              <span>
                <i className="holiday"></i>
                Holiday
              </span>

            </div>

          </div>

          {/* ISSUES */}

          <div className="issues-card">

            <div className="issues-header">
              <h2>Attendance Issues</h2>
              <button>View All</button>
            </div>

            <div className="issue-row">

              <div className="issue-icon red">
                <FaTimesCircle />
              </div>

              <div className="issue-text">
                <strong>Missing Check-in</strong>
                <span>13 employees</span>
              </div>

              <button>Review →</button>

            </div>

            <div className="issue-row">

              <div className="issue-icon orange">
                <FaClock />
              </div>

              <div className="issue-text">
                <strong>Late Check-in</strong>
                <span>22 employees</span>
              </div>

              <button>View →</button>

            </div>

            <div className="issue-row">

              <div className="issue-icon orange">
                <FaClock />
              </div>

              <div className="issue-text">
                <strong>Missing Check-out</strong>
                <span>7 employees</span>
              </div>

              <button>Review →</button>

            </div>

            <div className="issue-row">

              <div className="issue-icon purple">
                <FaFileAlt />
              </div>

              <div className="issue-text">
                <strong>Correction Requests</strong>
                <span>4 pending</span>
              </div>

              <button>Review →</button>

            </div>

          </div>

        </aside>
      </div>

      {/* ================= BOTTOM ANALYTICS ================= */}

      <div className="attendance-bottom">

        {/* DEPARTMENT */}

        <section className="bottom-card department-card">

          <div className="bottom-card-header">
            <h2>Department Attendance</h2>
            <button>View All</button>
          </div>

          <table>

            <thead>
              <tr>
                <th>DEPARTMENT</th>
                <th>EMPLOYEES</th>
                <th>PRESENT</th>
                <th>ABSENT</th>
                <th>LEAVE</th>
                <th>ATTENDANCE</th>
              </tr>
            </thead>

            <tbody>

              {departments.map((row) => (
                <tr key={row[0]}>

                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td className="green-text">{row[2]}</td>
                  <td className="red-text">{row[3]}</td>
                  <td>{row[4]}</td>

                  <td>
                    <div className="dept-progress">

                      <span>{row[5]}</span>

                      <div>
                        <i style={{ width: row[5] }}></i>
                      </div>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>
        </section>

        {/* TREND */}

        <section className="bottom-card trend-card">

          <div className="bottom-card-header">

            <h2>Attendance Trend</h2>

            <select>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>

          </div>

          <div className="trend-graph">

            <div className="trend-values">
              <span>100%</span>
              <span>90%</span>
              <span>80%</span>
              <span>70%</span>
              <span>60%</span>
            </div>

            <div className="trend-area">

              <div className="trend-line"></div>
              <div className="trend-line"></div>
              <div className="trend-line"></div>
              <div className="trend-line"></div>
              <div className="trend-line"></div>

              <svg
                viewBox="0 0 500 160"
                preserveAspectRatio="none"
              >
                <polyline
                  points="20,92 170,52 320,94 470,58"
                  fill="none"
                  stroke="#4b78e8"
                  strokeWidth="3"
                />

                <circle cx="20" cy="92" r="4" />
                <circle cx="170" cy="52" r="4" />
                <circle cx="320" cy="94" r="4" />
                <circle cx="470" cy="58" r="4" />
              </svg>

            </div>

          </div>

          <div className="trend-weeks">
            <span>W1</span>
            <span>W2</span>
            <span>W3</span>
            <span>W4</span>
          </div>

          <div className="trend-summary">

            <div>
              <span>Highest</span>
              <strong>96%</strong>
              <small>Week 2</small>
            </div>

            <div>
              <span>Lowest</span>
              <strong>87%</strong>
              <small>Week 3</small>
            </div>

            <div>
              <span>Average</span>
              <strong>91%</strong>
              <small>This Month</small>
            </div>

          </div>

        </section>

        {/* WORKING HOURS */}

        <section className="bottom-card working-card">

          <div className="bottom-card-header">
            <h2>
              Working Hours
              <small>(This Month)</small>
            </h2>
          </div>

          <div className="working-stat-grid">

            <div>
              <FaClock />
              <span>Total Hours</span>
              <strong>1,842h</strong>
            </div>

            <div>
              <FaUsers />
              <span>Avg. / Employee</span>
              <strong>7h 58m</strong>
            </div>

            <div>
              <FaArrowUp />
              <span>Overtime</span>
              <strong>42h</strong>
            </div>

            <div>
              <FaExclamationTriangle />
              <span>Missing Hours</span>
              <strong>18h</strong>
            </div>

          </div>

          <div className="recent-heading">
            <h3>Recent Attendance Activity</h3>
            <button>View All</button>
          </div>

          <div className="recent-list">

            <div>
              <FaCheckCircle className="recent-green" />
              <p>
                Aman Sharma checked in
                <small>09:12 AM • Design</small>
              </p>
              <span>2 hours ago</span>
            </div>

            <div>
              <FaClock className="recent-orange" />
              <p>
                Neha Patel late check-in
                <small>10:12 AM • QA</small>
              </p>
              <span>3 hours ago</span>
            </div>

            <div>
              <FaTimesCircle className="recent-red" />
              <p>
                Rahul Verma applied for leave
                <small>Full day • Development</small>
              </p>
              <span>5 hours ago</span>
            </div>

            <div>
              <FaCheckCircle className="recent-green" />
              <p>
                Priya Singh checked out
                <small>06:01 PM • Development</small>
              </p>
              <span>7 hours ago</span>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default AdminAttendance;