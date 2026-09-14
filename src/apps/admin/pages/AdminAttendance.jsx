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
  FaCalendarAlt,
  FaBriefcase,
  FaClock,
  FaExclamationCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaFileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import "./AdminAttendance.css";

const employeeData = [
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

const departmentData = [
  ["Development", "68", "61", "3", "4", "91%"],
  ["Design", "24", "23", "0", "1", "96%"],
  ["Marketing", "31", "27", "2", "2", "88%"],
  ["QA", "27", "25", "1", "1", "93%"],
  ["Finance", "18", "17", "0", "1", "94%"],
  ["HR", "12", "12", "0", "0", "97%"],
];

const AdminAttendance = () => {
  const [employees] = useState(employeeData);
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [manager, setManager] = useState("All Managers");
  const [selectedDate, setSelectedDate] = useState(11);
  const [month, setMonth] = useState("September 2026");
  const [openMenu, setOpenMenu] = useState(null);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchValue = search.trim().toLowerCase();

      const matchesSearch =
        !searchValue ||
        employee.name.toLowerCase().includes(searchValue) ||
        employee.id.toLowerCase().includes(searchValue) ||
        employee.department.toLowerCase().includes(searchValue);

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      const matchesManager =
        manager === "All Managers" ||
        employee.manager === manager;

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Present" &&
          ["Present", "Working"].includes(employee.status)) ||
        (activeTab === "Late" && employee.status === "Late") ||
        (activeTab === "On Leave" && employee.status === "On Leave") ||
        (activeTab === "Absent" && employee.status === "Absent");

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesManager &&
        matchesTab
      );
    });
  }, [employees, search, department, manager, activeTab]);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((item) => item[0])
      .join("")
      .slice(0, 2);

  const statusClass = (status) => {
    return status.toLowerCase().replace(/\s+/g, "-");
  };

  const changeMonth = (direction) => {
    setMonth(
      direction === "next"
        ? "October 2026"
        : "August 2026"
    );
  };

  return (
    <div className="admin-attendance-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="attendance-header">

        <div>
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

          <div className="attendance-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search employee, department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="attendance-filter-btn">
            <FaFilter />
            Filters
          </button>

          <button className="attendance-export-btn">
            <FaDownload />
            Export
          </button>

          <button className="attendance-notification">
            <FaBell />
            <span>3</span>
          </button>

          <div className="attendance-admin-user">
            <div className="admin-user-avatar">AU</div>

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FaChevronDown />
          </div>

        </div>
      </div>

      {/* =================================================
          STAT CARDS
      ================================================= */}

      <div className="attendance-stat-grid">

        <div className="attendance-stat blue">
          <div className="attendance-stat-icon">
            <FaUsers />
          </div>

          <div>
            <span>Total Employees</span>
            <strong>248</strong>
            <small>100% of organization</small>
          </div>
        </div>

        <div className="attendance-stat green">
          <div className="attendance-stat-icon">
            <FaUserCheck />
          </div>

          <div>
            <span>Present Today</span>
            <strong>221</strong>
            <small>89% attendance</small>
          </div>
        </div>

        <div className="attendance-stat red">
          <div className="attendance-stat-icon">
            <FaUserTimes />
          </div>

          <div>
            <span>Absent Today</span>
            <strong>13</strong>
            <small>5.2% of total</small>
          </div>
        </div>

        <div className="attendance-stat orange">
          <div className="attendance-stat-icon">
            <FaBriefcase />
          </div>

          <div>
            <span>On Leave Today</span>
            <strong>14</strong>
            <small>5.6% of total</small>
          </div>
        </div>

        <div className="attendance-stat purple">
          <div className="attendance-stat-icon">
            <FaClock />
          </div>

          <div>
            <span>Late Today</span>
            <strong>22</strong>
            <small>8.9% of total</small>
          </div>
        </div>

      </div>

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="attendance-main-grid">

        {/* =================================================
            TABLE AREA
        ================================================= */}

        <div className="attendance-list">

          {/* TABS */}

          <div className="attendance-tabs">
            {[
              ["All", "248"],
              ["Present", "221"],
              ["Late", "22"],
              ["On Leave", "14"],
              ["Absent", "13"],
            ].map(([label, count]) => (
              <button
                key={label}
                className={
                  activeTab === label ? "active" : ""
                }
                onClick={() => setActiveTab(label)}
              >
                {label} ({count})
              </button>
            ))}
          </div>

          {/* FILTER ROW */}

          <div className="attendance-filters">

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

            <button className="attendance-filter-date">
              <FaCalendarAlt />
              Date
            </button>

          </div>

          {/* TABLE */}

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
                            {getInitials(employee.name)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
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
                          className={`attendance-status ${statusClass(
                            employee.status
                          )}`}
                        >
                          <i></i>
                          {employee.status}
                        </span>
                      </td>

                      <td>

                        <div className="attendance-actions">

                          <button
                            onClick={() =>
                              setOpenMenu(
                                openMenu === employee.id
                                  ? null
                                  : employee.id
                              )
                            }
                          >
                            <FaEllipsisV />
                          </button>

                          {openMenu === employee.id && (
                            <div className="attendance-action-menu">

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

            {/* PAGINATION */}

            <div className="attendance-pagination">

              <span>
                Showing 1 to 8 of 248 employees
              </span>

              <div className="pagination-pages">

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

              <span className="show-count">
                Show
                <select>
                  <option>8</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                per page
              </span>

            </div>

          </div>
        </div>

        {/* =================================================
            CALENDAR + ISSUES
        ================================================= */}

        <aside className="attendance-right">

          {/* CALENDAR */}

          <div className="attendance-side-card">

            <div className="calendar-header">

              <h2>Calendar View</h2>

              <div>
                <button onClick={() => changeMonth("prev")}>
                  <FaChevronLeft />
                </button>

                <strong>{month}</strong>

                <button onClick={() => changeMonth("next")}>
                  <FaChevronRight />
                </button>

                <button className="today-btn">
                  Today
                </button>
              </div>

            </div>

            <div className="calendar-week">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>

            <div className="calendar-days">

              {[
                31,
                1, 2, 3, 4, 5, 6,
                7, 8, 9, 10, 11, 12, 13,
                14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27,
                28, 29, 30, 1, 2, 3, 4,
              ].map((day, index) => {

                const actualDay =
                  index === 0 ? 31 : day;

                return (
                  <button
                    key={`${day}-${index}`}
                    className={`
                      calendar-day
                      ${selectedDate === actualDay ? "selected" : ""}
                      ${
                        index < 1
                          ? "muted"
                          : ""
                      }
                    `}
                    onClick={() =>
                      setSelectedDate(actualDay)
                    }
                  >
                    <span>{day}</span>

                    {index % 7 === 0 && (
                      <i className="present-dot"></i>
                    )}

                    {index % 9 === 0 && (
                      <i className="late-dot"></i>
                    )}
                  </button>
                );
              })}

            </div>

            <div className="calendar-legend">

              <span>
                <i className="present-dot"></i>
                Present
              </span>

              <span>
                <i className="late-dot"></i>
                Late
              </span>

              <span>
                <i className="absent-dot"></i>
                Absent
              </span>

              <span>
                <i className="leave-dot"></i>
                Leave
              </span>

              <span>
                <i className="holiday-dot"></i>
                Holiday
              </span>

            </div>

          </div>

          {/* ISSUES */}

          <div className="attendance-side-card issues-card">

            <div className="side-card-title">
              <h2>Attendance Issues</h2>
              <button>View All</button>
            </div>

            <div className="issue-item">

              <span className="issue-icon red">
                <FaTimesCircle />
              </span>

              <div>
                <strong>Missing Check-in</strong>
                <small>13 employees</small>
              </div>

              <button>Review →</button>

            </div>

            <div className="issue-item">

              <span className="issue-icon orange">
                <FaClock />
              </span>

              <div>
                <strong>Late Check-in</strong>
                <small>22 employees</small>
              </div>

              <button>View →</button>

            </div>

            <div className="issue-item">

              <span className="issue-icon orange">
                <FaClock />
              </span>

              <div>
                <strong>Missing Check-out</strong>
                <small>7 employees</small>
              </div>

              <button>Review →</button>

            </div>

            <div className="issue-item">

              <span className="issue-icon purple">
                <FaFileAlt />
              </span>

              <div>
                <strong>Correction Requests</strong>
                <small>4 pending</small>
              </div>

              <button>Review →</button>

            </div>

          </div>

        </aside>
      </div>

      {/* =================================================
          BOTTOM ANALYTICS
      ================================================= */}

      <div className="attendance-bottom-grid">

        {/* DEPARTMENT */}

        <div className="attendance-bottom-card">

          <div className="bottom-card-title">
            <h2>Department Attendance</h2>
            <button>View All</button>
          </div>

          <table className="department-table">

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

              {departmentData.map((row) => (
                <tr key={row[0]}>

                  <td>{row[0]}</td>
                  <td>{row[1]}</td>

                  <td className="green-number">
                    {row[2]}
                  </td>

                  <td className="red-number">
                    {row[3]}
                  </td>

                  <td>{row[4]}</td>

                  <td>
                    <div className="department-progress">

                      <span>{row[5]}</span>

                      <div>
                        <i
                          style={{
                            width: row[5],
                          }}
                        ></i>
                      </div>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* TREND */}

        <div className="attendance-bottom-card">

          <div className="bottom-card-title">
            <h2>Attendance Trend</h2>

            <select>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="trend-chart">

            <div className="trend-y">
              <span>100%</span>
              <span>90%</span>
              <span>80%</span>
              <span>70%</span>
              <span>60%</span>
            </div>

            <div className="trend-area">

              <div className="trend-grid-line"></div>
              <div className="trend-grid-line"></div>
              <div className="trend-grid-line"></div>
              <div className="trend-grid-line"></div>
              <div className="trend-grid-line"></div>

              <svg
                viewBox="0 0 500 160"
                preserveAspectRatio="none"
              >
                <polyline
                  points="20,95 155,58 285,94 420,62"
                  fill="none"
                  stroke="#4778ec"
                  strokeWidth="3"
                />

                <circle cx="20" cy="95" r="4" />
                <circle cx="155" cy="58" r="4" />
                <circle cx="285" cy="94" r="4" />
                <circle cx="420" cy="62" r="4" />
              </svg>

            </div>

          </div>

          <div className="trend-weeks">
            <span>W1</span>
            <span>W2</span>
            <span>W3</span>
            <span>W4</span>
          </div>

          <div className="trend-stats">

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

        </div>

        {/* WORKING HOURS + ACTIVITY */}

        <div className="attendance-bottom-card working-summary">

          <div className="bottom-card-title">
            <h2>
              Working Hours
              <span>(This Month)</span>
            </h2>
          </div>

          <div className="working-stats">

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
              <FaExclamationCircle />
              <span>Missing Hours</span>
              <strong>18h</strong>
            </div>

          </div>

          <div className="recent-title">
            <h3>Recent Attendance Activity</h3>
            <button>View All</button>
          </div>

          <div className="recent-activity">

            <div>
              <span className="activity-dot green">
                <FaCheckCircle />
              </span>

              <p>
                Aman Sharma checked in
                <small>09:12 AM • Design</small>
              </p>

              <time>2 hours ago</time>
            </div>

            <div>
              <span className="activity-dot orange">
                <FaClock />
              </span>

              <p>
                Neha Patel late check-in
                <small>10:12 AM • QA</small>
              </p>

              <time>3 hours ago</time>
            </div>

            <div>
              <span className="activity-dot red">
                <FaTimesCircle />
              </span>

              <p>
                Rahul Verma applied for leave
                <small>Full day • Development</small>
              </p>

              <time>5 hours ago</time>
            </div>

            <div>
              <span className="activity-dot green">
                <FaCheckCircle />
              </span>

              <p>
                Priya Singh checked out
                <small>06:01 PM • Development</small>
              </p>

              <time>7 hours ago</time>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminAttendance;