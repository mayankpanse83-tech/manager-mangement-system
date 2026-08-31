import React, { useMemo, useState } from "react";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaChevronDown,
  FaUsers,
  FaUserCheck,
  FaUmbrellaBeach,
  FaExclamationCircle,
  FaCalendarAlt,
  FaTasks,
  FaFileAlt,
  FaClock,
  FaEnvelope,
  FaPhone,
  FaBriefcase,
  FaFilter,
  FaList,
  FaThLarge,
  FaEllipsisV,
  FaPlus,
  FaCommentAlt,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

import "./ManagerTeam.css";

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    checkIn: "09:12 AM",
    tasks: "4 / 5",
    taskPercent: 80,
    attendance: "98%",
    attendanceText: "Present",
    lastActivity: "10 min ago",
    activity: "Updated task",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    joined: "15 Mar 2025",
    reportingTo: "Rajat Verma",
    email: "aman.sharma@company.com",
    phone: "+91 98765 43210",
    dailyUpdate: "Submitted",
    currentTask: "Dashboard UI",
    performance: {
      completion: "88%",
      attendance: "98%",
      updates: "96%",
      onTime: "85%",
    },
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    department: "Development",
    status: "Working",
    checkIn: "09:05 AM",
    tasks: "5 / 5",
    taskPercent: 100,
    attendance: "96%",
    attendanceText: "Present",
    lastActivity: "25 min ago",
    activity: "Submitted update",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    joined: "20 Feb 2025",
    reportingTo: "Rajat Verma",
    email: "priya.singh@company.com",
    phone: "+91 98765 42310",
    dailyUpdate: "Submitted",
    currentTask: "API Integration",
    performance: {
      completion: "92%",
      attendance: "96%",
      updates: "94%",
      onTime: "90%",
    },
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    department: "Development",
    status: "On Leave",
    checkIn: "Today",
    tasks: "2 / 4",
    taskPercent: 50,
    attendance: "89%",
    attendanceText: "On Leave",
    lastActivity: "Today",
    activity: "Leave applied",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    joined: "05 Jan 2025",
    reportingTo: "Rajat Verma",
    email: "rahul.verma@company.com",
    phone: "+91 98765 42110",
    dailyUpdate: "Pending",
    currentTask: "API Integration",
    performance: {
      completion: "74%",
      attendance: "89%",
      updates: "80%",
      onTime: "72%",
    },
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    department: "QA",
    status: "Late",
    checkIn: "10:12 AM",
    tasks: "3 / 4",
    taskPercent: 75,
    attendance: "92%",
    attendanceText: "Present",
    lastActivity: "15 min ago",
    activity: "Checked in late",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    joined: "18 Apr 2025",
    reportingTo: "Rajat Verma",
    email: "neha.patel@company.com",
    phone: "+91 98765 42990",
    dailyUpdate: "Submitted",
    currentTask: "Testing & QA",
    performance: {
      completion: "86%",
      attendance: "92%",
      updates: "91%",
      onTime: "79%",
    },
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    checkIn: "09:18 AM",
    tasks: "4 / 6",
    taskPercent: 67,
    attendance: "95%",
    attendanceText: "Present",
    lastActivity: "30 min ago",
    activity: "Updated task",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    joined: "02 Mar 2025",
    reportingTo: "Rajat Verma",
    email: "vikram.joshi@company.com",
    phone: "+91 98765 43555",
    dailyUpdate: "Submitted",
    currentTask: "Landing Page",
    performance: {
      completion: "84%",
      attendance: "95%",
      updates: "90%",
      onTime: "83%",
    },
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    department: "Development",
    status: "Late",
    checkIn: "10:20 AM",
    tasks: "2 / 5",
    taskPercent: 40,
    attendance: "90%",
    attendanceText: "Present",
    lastActivity: "Just now",
    activity: "Checked in late",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    joined: "09 Feb 2025",
    reportingTo: "Rajat Verma",
    email: "anjali.mehta@company.com",
    phone: "+91 98765 43444",
    dailyUpdate: "Pending",
    currentTask: "Backend API",
    performance: {
      completion: "81%",
      attendance: "90%",
      updates: "88%",
      onTime: "76%",
    },
  },
];

export default function ManagerTeam() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");
  const [workload, setWorkload] = useState("All Workload");
  const [viewMode, setViewMode] = useState("list");
  const [sortBy, setSortBy] = useState("name");

  const filteredEmployees = useMemo(() => {
    let data = employees.filter((employee) => {
      const text = search.toLowerCase();

      const matchesSearch =
        employee.name.toLowerCase().includes(text) ||
        employee.id.toLowerCase().includes(text);

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      const matchesStatus =
        status === "All Status" ||
        employee.status === status;

      let matchesWorkload = true;

      const completed = Number(employee.tasks.split("/")[0].trim());
      const total = Number(employee.tasks.split("/")[1].trim());
      const percent = total ? (completed / total) * 100 : 0;

      if (workload === "Low") {
        matchesWorkload = percent < 50;
      }

      if (workload === "Medium") {
        matchesWorkload = percent >= 50 && percent < 80;
      }

      if (workload === "High") {
        matchesWorkload = percent >= 80;
      }

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus &&
        matchesWorkload
      );
    });

    if (sortBy === "name") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "attendance") {
      data.sort(
        (a, b) =>
          parseInt(b.attendance) - parseInt(a.attendance)
      );
    }

    return data;
  }, [search, department, status, workload, sortBy]);

  return (
    <div className="manager-team-page">

      {/* =================================================
          TOP HEADER
      ================================================= */}

      <div className="my-team-header">

        <div className="my-team-title">

          <button className="my-team-menu-btn" type="button">
            <FaBars />
          </button>

          <div>
            <h1>My Team</h1>
            <p>Manage and monitor your team members</p>
          </div>

        </div>


        <div className="my-team-header-right">

          <div className="my-team-global-search">
            <FaSearch />

            <input
              type="text"
              placeholder="Search anything..."
            />
          </div>

          <button className="my-team-notification" type="button">
            <FaBell />
            <span>3</span>
          </button>

          <div className="my-team-user">

            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Rajat Verma"
            />

            <div>
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>

            <FaChevronDown />

          </div>

        </div>

      </div>


      {/* =================================================
          STATS
      ================================================= */}

      <div className="my-team-stats">

        <StatCard
          icon={<FaUsers />}
          type="purple"
          title="Team Size"
          value="12"
          footer="Total Members"
        />

        <StatCard
          icon={<FaUserCheck />}
          type="green"
          title="Working"
          value="10"
          footer="83% of team"
        />

        <StatCard
          icon={<FaUmbrellaBeach />}
          type="orange"
          title="On Leave"
          value="1"
          footer="8% of team"
        />

        <StatCard
          icon={<FaExclamationCircle />}
          type="red"
          title="Needs Attention"
          value="2"
          footer="View details →"
        />

      </div>


      {/* =================================================
          SEARCH FILTER BAR
      ================================================= */}

      <div className="my-team-filter-row">

        <div className="my-team-filter-left">

          <div className="my-team-search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search by name or employee ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          <FilterBox
            label="Department"
            value={department}
            onChange={setDepartment}
            options={[
              "All Departments",
              "Design",
              "Development",
              "QA",
            ]}
          />


          <FilterBox
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              "All Status",
              "Working",
              "On Leave",
              "Late",
            ]}
          />


          <FilterBox
            label="Workload"
            value={workload}
            onChange={setWorkload}
            options={[
              "All Workload",
              "Low",
              "Medium",
              "High",
            ]}
          />

        </div>


        <button
          className="assign-task-btn"
          type="button"
          onClick={() => alert("Assign Task")}
        >
          <FaPlus />
          Assign Task
        </button>

      </div>


      {/* =================================================
          LIST / GRID BAR
      ================================================= */}

      <div className="my-team-view-row">

        <div className="view-switch">

          <button
            type="button"
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            <FaList />
            List View
          </button>

          <button
            type="button"
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            <FaThLarge />
            Grid View
          </button>

        </div>


        <div className="sort-filter">

          <span>Sort by:</span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name">Name A-Z</option>
            <option value="attendance">Attendance</option>
          </select>

          <button type="button">
            <FaFilter />
            Filter
          </button>

        </div>

      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="my-team-content">

        {/* TABLE / GRID */}

        <div className="my-team-table-area">

          {viewMode === "list" ? (

            <div className="my-team-table-scroll">

              <table className="my-team-table">

                <thead>

                  <tr>
                    <th>EMPLOYEE</th>
                    <th>DEPARTMENT</th>
                    <th>STATUS</th>
                    <th>TASKS</th>
                    <th>ATTENDANCE</th>
                    <th>LAST ACTIVITY</th>
                    <th>ACTIONS</th>
                  </tr>

                </thead>


                <tbody>

                  {filteredEmployees.map((employee) => (

                    <tr
                      key={employee.id}
                      onClick={() =>
                        setSelectedEmployee(employee)
                      }
                      className={
                        selectedEmployee?.id === employee.id
                          ? "selected"
                          : ""
                      }
                    >

                      <td>

                        <div className="employee-info">

                          <div className="employee-avatar-wrap">

                            <img
                              src={employee.avatar}
                              alt={employee.name}
                            />

                            <span
                              className={`employee-online ${employee.status}`}
                            ></span>

                          </div>


                          <div className="employee-name-area">

                            <strong>
                              {employee.name}
                            </strong>

                            <small>
                              {employee.role}
                            </small>

                            <em>
                              {employee.id}
                            </em>

                          </div>

                        </div>

                      </td>


                      <td>
                        {employee.department}
                      </td>


                      <td>

                        <div
                          className={`employee-status ${employee.status}`}
                        >
                          ● {employee.status}
                        </div>

                        <small className="status-subtext">
                          {employee.status === "On Leave"
                            ? "Sick Leave"
                            : `Checked in ${employee.checkIn}`}
                        </small>

                      </td>


                      <td>

                        <div className="task-number">
                          <strong>{employee.tasks}</strong>
                          <span>{employee.taskPercent}%</span>
                        </div>

                        <div className="task-progress">
                          <span
                            style={{
                              width:
                                `${employee.taskPercent}%`,
                            }}
                            className={employee.status}
                          ></span>
                        </div>

                      </td>


                      <td>

                        <strong className="attendance-number">
                          {employee.attendance}
                        </strong>

                        <small className="attendance-text">
                          {employee.attendanceText}
                        </small>

                      </td>


                      <td>

                        <strong className="activity-time">
                          {employee.lastActivity}
                        </strong>

                        <small className="activity-text">
                          {employee.activity}
                        </small>

                      </td>


                      <td>

                        <button
                          className="table-menu-btn"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEmployee(employee);
                          }}
                        >
                          <FaEllipsisV />
                        </button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="employee-grid-view">

              {filteredEmployees.map((employee) => (

                <button
                  key={employee.id}
                  type="button"
                  className="employee-grid-card"
                  onClick={() => setSelectedEmployee(employee)}
                >

                  <img
                    src={employee.avatar}
                    alt={employee.name}
                  />

                  <strong>
                    {employee.name}
                  </strong>

                  <span>
                    {employee.role}
                  </span>

                  <small>
                    ● {employee.status}
                  </small>

                </button>

              ))}

            </div>

          )}


          {/* PAGINATION */}

          <div className="my-team-pagination">

            <span>
              Showing 1 to 6 of 12 members
            </span>

            <div className="pagination-buttons">

              <button type="button">←</button>
              <button className="active" type="button">1</button>
              <button type="button">2</button>
              <button type="button">→</button>

            </div>

            <div className="show-per-page">
              <span>Show</span>

              <select defaultValue="10">
                <option value="10">10</option>
                <option value="20">20</option>
              </select>

              <span>per page</span>
            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT EMPLOYEE DETAILS
        ================================================= */}

        {selectedEmployee && (

          <aside className="employee-details">

            <div className="details-title">

              <h2>
                Employee Details
              </h2>

              <button
                type="button"
                onClick={() => setSelectedEmployee(null)}
              >
                <FaTimes />
              </button>

            </div>


            <div className="details-profile">

              <div className="details-avatar">

                <img
                  src={selectedEmployee.avatar}
                  alt={selectedEmployee.name}
                />

                <span
                  className={`details-dot ${selectedEmployee.status}`}
                ></span>

              </div>


              <div className="details-name">

                <strong>
                  {selectedEmployee.name}
                </strong>

                <small>
                  {selectedEmployee.role}
                </small>

                <em>
                  {selectedEmployee.id}
                </em>

              </div>


              <span
                className={`details-status ${selectedEmployee.status}`}
              >
                ● {selectedEmployee.status}
              </span>

            </div>


            {/* TABS */}

            <div className="details-tabs">

              <button className="active" type="button">
                Overview
              </button>

              <button type="button">
                Attendance
              </button>

              <button type="button">
                Tasks
              </button>

              <button type="button">
                Updates
              </button>

              <button type="button">
                Leave
              </button>

            </div>


            {/* BASIC DETAILS */}

            <div className="details-block">

              <DetailRow
                icon={<FaBriefcase />}
                label="Department"
                value={selectedEmployee.department}
              />

              <DetailRow
                icon={<FaCalendarAlt />}
                label="Joined On"
                value={selectedEmployee.joined}
              />

              <DetailRow
                icon={<FaUserCheck />}
                label="Reporting To"
                value={selectedEmployee.reportingTo}
              />

              <DetailRow
                icon={<FaEnvelope />}
                label="Email"
                value={selectedEmployee.email}
              />

              <DetailRow
                icon={<FaPhone />}
                label="Phone"
                value={selectedEmployee.phone}
              />

            </div>


            {/* TODAY ACTIVITY */}

            <div className="details-block">

              <h3>
                Today's Activity
              </h3>

              <ActivityRow
                icon={<FaClock />}
                label="Check In"
                value={selectedEmployee.checkIn}
              />

              <ActivityRow
                icon={<FaTasks />}
                label="Tasks Completed"
                value={
                  selectedEmployee.tasks.split("/")[0].trim()
                }
              />

              <ActivityRow
                icon={<FaFileAlt />}
                label="Daily Update"
                value={selectedEmployee.dailyUpdate}
                success={
                  selectedEmployee.dailyUpdate === "Submitted"
                }
              />

              <ActivityRow
                icon={<FaBriefcase />}
                label="Current Task"
                value={selectedEmployee.currentTask}
              />

            </div>


            {/* PERFORMANCE */}

            <div className="details-block">

              <h3>
                Performance <span>(This Month)</span>
              </h3>

              <div className="performance-grid">

                <Performance
                  title="Task Completion"
                  value={
                    selectedEmployee.performance.completion
                  }
                  change="↑ 8%"
                  positive
                />

                <Performance
                  title="Attendance"
                  value={
                    selectedEmployee.performance.attendance
                  }
                  change="↑ 5%"
                  positive
                />

                <Performance
                  title="Updates Submission"
                  value={
                    selectedEmployee.performance.updates
                  }
                  change="↑ 12%"
                  positive
                />

                <Performance
                  title="On-Time Tasks"
                  value={
                    selectedEmployee.performance.onTime
                  }
                  change="↓ 3%"
                />

              </div>

            </div>


            {/* ACTION BUTTONS */}

            <div className="details-actions">

              <button
                className="message-btn"
                type="button"
                onClick={() => alert("Message")}
              >
                <FaCommentAlt />
                Message
              </button>

              <button
                className="profile-btn"
                type="button"
                onClick={() => alert("Full Profile")}
              >
                View Full Profile
                <FaArrowRight />
              </button>

            </div>

          </aside>

        )}

      </div>

    </div>
  );
}


/* =====================================================
   SMALL COMPONENTS
===================================================== */

function StatCard({
  icon,
  type,
  title,
  value,
  footer,
}) {
  return (
    <div className="my-team-stat-card">

      <div className={`stat-icon ${type}`}>
        {icon}
      </div>

      <div className="stat-content">

        <span>{title}</span>

        <strong>{value}</strong>

        <small>{footer}</small>

      </div>

    </div>
  );
}


function FilterBox({
  label,
  value,
  onChange,
  options,
}) {
  return (
    <div className="filter-box">

      <label>
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
}


function DetailRow({
  icon,
  label,
  value,
}) {
  return (
    <div className="detail-row">

      <span className="detail-row-icon">
        {icon}
      </span>

      <span className="detail-row-label">
        {label}
      </span>

      <strong className="detail-row-value">
        {value}
      </strong>

    </div>
  );
}


function ActivityRow({
  icon,
  label,
  value,
  success,
}) {
  return (
    <div className="activity-row">

      <span
        className={
          success
            ? "activity-icon success"
            : "activity-icon"
        }
      >
        {icon}
      </span>

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function Performance({
  title,
  value,
  change,
  positive,
}) {
  return (
    <div className="performance-card">

      <span>
        {title}
      </span>

      <strong>
        {value}
      </strong>

      <small
        className={
          positive
            ? "positive"
            : "negative"
        }
      >
        {change}
      </small>

    </div>
  );
}