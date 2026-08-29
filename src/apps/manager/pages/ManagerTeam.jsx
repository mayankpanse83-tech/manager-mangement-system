import React, { useMemo, useState } from "react";
import {
  FaBars,
  FaBell,
  FaSearch,
  FaUsers,
  FaUserCheck,
  FaUmbrellaBeach,
  FaExclamationCircle,
  FaChevronDown,
  FaChevronRight,
  FaTimes,
  FaCalendarAlt,
  FaTasks,
  FaFileAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaFilter,
  FaList,
  FaThLarge,
  FaEllipsisV,
  FaPlus,
  FaCommentAlt,
} from "react-icons/fa";

import "./ManagerTeam.css";

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    statusClass: "working",
    checkIn: "09:12 AM",
    tasks: "4 / 5",
    taskPercent: 80,
    attendance: "98%",
    attendanceText: "Present",
    lastActivity: "10 min ago",
    activityText: "Updated task",
    avatar:
      "https://randomuser.me/api/portraits/men/32.jpg",
    joined: "15 Mar 2025",
    reportingTo: "Rajat Verma",
    email: "aman.sharma@company.com",
    phone: "+91 98765 43210",
    dailyUpdate: "Submitted",
    currentTask: "Dashboard UI",
    performance: {
      task: "88%",
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
    statusClass: "working",
    checkIn: "09:05 AM",
    tasks: "5 / 5",
    taskPercent: 100,
    attendance: "96%",
    attendanceText: "Present",
    lastActivity: "25 min ago",
    activityText: "Submitted update",
    avatar:
      "https://randomuser.me/api/portraits/women/44.jpg",
    joined: "20 Feb 2025",
    reportingTo: "Rajat Verma",
    email: "priya.singh@company.com",
    phone: "+91 98765 42310",
    dailyUpdate: "Submitted",
    currentTask: "API Integration",
    performance: {
      task: "92%",
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
    statusClass: "leave",
    checkIn: "Today",
    tasks: "2 / 4",
    taskPercent: 50,
    attendance: "89%",
    attendanceText: "On Leave",
    lastActivity: "Today",
    activityText: "Leave applied",
    avatar:
      "https://randomuser.me/api/portraits/men/46.jpg",
    joined: "05 Jan 2025",
    reportingTo: "Rajat Verma",
    email: "rahul.verma@company.com",
    phone: "+91 98765 42110",
    dailyUpdate: "Pending",
    currentTask: "API Integration",
    performance: {
      task: "74%",
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
    statusClass: "late",
    checkIn: "10:12 AM",
    tasks: "3 / 4",
    taskPercent: 75,
    attendance: "92%",
    attendanceText: "Present",
    lastActivity: "15 min ago",
    activityText: "Checked in late",
    avatar:
      "https://randomuser.me/api/portraits/women/65.jpg",
    joined: "18 Apr 2025",
    reportingTo: "Rajat Verma",
    email: "neha.patel@company.com",
    phone: "+91 98765 42990",
    dailyUpdate: "Submitted",
    currentTask: "Testing & QA",
    performance: {
      task: "86%",
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
    statusClass: "working",
    checkIn: "09:18 AM",
    tasks: "4 / 6",
    taskPercent: 67,
    attendance: "95%",
    attendanceText: "Present",
    lastActivity: "30 min ago",
    activityText: "Updated task",
    avatar:
      "https://randomuser.me/api/portraits/men/52.jpg",
    joined: "02 Mar 2025",
    reportingTo: "Rajat Verma",
    email: "vikram.joshi@company.com",
    phone: "+91 98765 43555",
    dailyUpdate: "Submitted",
    currentTask: "Landing Page",
    performance: {
      task: "84%",
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
    statusClass: "late",
    checkIn: "10:20 AM",
    tasks: "2 / 5",
    taskPercent: 40,
    attendance: "90%",
    attendanceText: "Present",
    lastActivity: "Just now",
    activityText: "Checked in late",
    avatar:
      "https://randomuser.me/api/portraits/women/50.jpg",
    joined: "09 Feb 2025",
    reportingTo: "Rajat Verma",
    email: "anjali.mehta@company.com",
    phone: "+91 98765 43444",
    dailyUpdate: "Pending",
    currentTask: "Backend API",
    performance: {
      task: "81%",
      attendance: "90%",
      updates: "88%",
      onTime: "76%",
    },
  },
];

const departments = [
  "All Departments",
  "Design",
  "Development",
  "QA",
];

const statuses = [
  "All Status",
  "Working",
  "On Leave",
  "Late",
];

const workloads = [
  "All Workload",
  "Low",
  "Medium",
  "High",
];

export default function ManagerTeam() {
  const [selectedEmployee, setSelectedEmployee] = useState(
    employees[0]
  );

  const [search, setSearch] = useState("");
  const [department, setDepartment] =
    useState("All Departments");
  const [status, setStatus] =
    useState("All Status");
  const [workload, setWorkload] =
    useState("All Workload");

  const [view, setView] = useState("list");
  const [sort, setSort] = useState("name");

  const filteredEmployees = useMemo(() => {
    let result = employees.filter((employee) => {
      const searchMatch =
        employee.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        employee.id
          .toLowerCase()
          .includes(search.toLowerCase());

      const departmentMatch =
        department === "All Departments" ||
        employee.department === department;

      const statusMatch =
        status === "All Status" ||
        employee.status === status;

      let workloadMatch = true;

      if (workload !== "All Workload") {
        const completed = parseInt(
          employee.tasks.split(" / ")[0],
          10
        );
        const total = parseInt(
          employee.tasks.split(" / ")[1],
          10
        );

        const percent = (completed / total) * 100;

        if (workload === "Low") {
          workloadMatch = percent < 50;
        }

        if (workload === "Medium") {
          workloadMatch =
            percent >= 50 && percent < 80;
        }

        if (workload === "High") {
          workloadMatch = percent >= 80;
        }
      }

      return (
        searchMatch &&
        departmentMatch &&
        statusMatch &&
        workloadMatch
      );
    });

    if (sort === "name") {
      result.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sort === "attendance") {
      result.sort(
        (a, b) =>
          parseInt(b.attendance) -
          parseInt(a.attendance)
      );
    }

    return result;
  }, [
    search,
    department,
    status,
    workload,
    sort,
  ]);

  const handleAssignTask = () => {
    alert(
      `Assign task to ${selectedEmployee?.name}`
    );
  };

  const handleMessage = () => {
    alert(
      `Message sent to ${selectedEmployee?.name}`
    );
  };

  const handleViewProfile = () => {
    alert(
      `Full profile opened for ${selectedEmployee?.name}`
    );
  };

  return (
    <div className="manager-team-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="team-header">

        <div className="team-header-left">

          <button
            className="header-menu-btn"
            type="button"
          >
            <FaBars />
          </button>

          <div>
            <h1>My Team</h1>

            <p>
              Manage and monitor your team members
            </p>
          </div>

        </div>


        <div className="team-header-right">

          <div className="header-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search anything..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <button
            className="notification-btn"
            type="button"
          >
            <FaBell />
            <span>3</span>
          </button>


          <div className="header-profile">

            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Manager"
            />

            <div>
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>

            <FaChevronDown />

          </div>

        </div>

      </header>


      {/* =================================================
          STATS
      ================================================= */}

      <section className="team-stats">

        <StatCard
          icon={<FaUsers />}
          iconClass="purple"
          label="Team Size"
          value="12"
          helper="Total Members"
        />

        <StatCard
          icon={<FaUserCheck />}
          iconClass="green"
          label="Working"
          value="10"
          helper="83% of team"
          helperClass="green-text"
        />

        <StatCard
          icon={<FaUmbrellaBeach />}
          iconClass="orange"
          label="On Leave"
          value="1"
          helper="8% of team"
          helperClass="orange-text"
        />

        <StatCard
          icon={<FaExclamationCircle />}
          iconClass="red"
          label="Needs Attention"
          value="2"
          helper="View details →"
          helperClass="red-text"
        />

      </section>


      {/* =================================================
          FILTERS
      ================================================= */}

      <section className="team-toolbar">

        <div className="team-toolbar-left">

          <div className="team-search-box">

            <FaSearch />

            <input
              type="text"
              placeholder="Search by name or employee ID..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <FilterSelect
            label="Department"
            value={department}
            options={departments}
            onChange={setDepartment}
          />


          <FilterSelect
            label="Status"
            value={status}
            options={statuses}
            onChange={setStatus}
          />


          <FilterSelect
            label="Workload"
            value={workload}
            options={workloads}
            onChange={setWorkload}
          />

        </div>


        <button
          className="assign-task-btn"
          onClick={handleAssignTask}
          type="button"
        >
          <FaPlus />
          Assign Task
        </button>

      </section>


      {/* =================================================
          VIEW / SORT BAR
      ================================================= */}

      <section className="list-toolbar">

        <div className="view-switch">

          <button
            className={
              view === "list" ? "active" : ""
            }
            onClick={() => setView("list")}
            type="button"
          >
            <FaList />
            List View
          </button>


          <button
            className={
              view === "grid" ? "active" : ""
            }
            onClick={() => setView("grid")}
            type="button"
          >
            <FaThLarge />
            Grid View
          </button>

        </div>


        <div className="sort-area">

          <span>Sort by:</span>

          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
          >
            <option value="name">Name A-Z</option>
            <option value="attendance">
              Attendance
            </option>
          </select>


          <button
            className="filter-btn"
            type="button"
          >
            <FaFilter />
            Filter
          </button>

        </div>

      </section>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <section className="team-main-section">

        <div
          className={
            view === "grid"
              ? "employee-grid-view"
              : "employee-table-wrapper"
          }
        >

          {view === "list" ? (

            <table className="employee-table">

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

                {filteredEmployees.map(
                  (employee) => (

                    <tr
                      key={employee.id}
                      className={
                        selectedEmployee?.id ===
                        employee.id
                          ? "selected-row"
                          : ""
                      }
                      onClick={() =>
                        setSelectedEmployee(employee)
                      }
                    >

                      {/* EMPLOYEE */}

                      <td>

                        <div className="employee-info">

                          <div className="avatar-wrap">

                            <img
                              src={employee.avatar}
                              alt={employee.name}
                            />

                            <span
                              className={`avatar-status ${employee.statusClass}`}
                            ></span>

                          </div>


                          <div>

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


                      {/* DEPARTMENT */}

                      <td>
                        <span className="department-text">
                          {employee.department}
                        </span>
                      </td>


                      {/* STATUS */}

                      <td>

                        <div
                          className={`employee-status ${employee.statusClass}`}
                        >
                          ● {employee.status}
                        </div>

                        <small className="status-time">
                          {employee.status ===
                          "On Leave"
                            ? "Sick Leave"
                            : `Checked in ${employee.checkIn}`}
                        </small>

                      </td>


                      {/* TASKS */}

                      <td>

                        <div className="task-progress-wrap">

                          <div>
                            <strong>
                              {employee.tasks}
                            </strong>

                            <small>
                              {employee.taskPercent}%
                            </small>
                          </div>

                          <div className="mini-progress">
                            <span
                              className={
                                employee.statusClass ===
                                "leave"
                                  ? "leave-bar"
                                  : employee.statusClass ===
                                    "late"
                                  ? "late-bar"
                                  : "green-bar"
                              }
                              style={{
                                width:
                                  `${employee.taskPercent}%`,
                              }}
                            />
                          </div>

                        </div>

                      </td>


                      {/* ATTENDANCE */}

                      <td>

                        <div className="attendance-value">
                          {employee.attendance}
                        </div>

                        <small className="attendance-label">
                          {employee.attendanceText}
                        </small>

                      </td>


                      {/* LAST ACTIVITY */}

                      <td>

                        <strong className="activity-time">
                          {employee.lastActivity}
                        </strong>

                        <small className="activity-text">
                          {employee.activityText}
                        </small>

                      </td>


                      {/* ACTION */}

                      <td>

                        <button
                          className="row-action"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEmployee(
                              employee
                            );
                          }}
                          type="button"
                        >
                          <FaEllipsisV />
                        </button>

                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          ) : (

            <div className="employee-grid">

              {filteredEmployees.map(
                (employee) => (

                  <button
                    key={employee.id}
                    className="employee-grid-card"
                    onClick={() =>
                      setSelectedEmployee(
                        employee
                      )
                    }
                    type="button"
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
                      {employee.status}
                    </small>

                  </button>

                )
              )}

            </div>

          )}

        </div>


        {/* =================================================
            RIGHT DETAILS PANEL
        ================================================= */}

        {selectedEmployee && (

          <aside className="employee-details-panel">

            <div className="details-header">

              <h2>
                Employee Details
              </h2>

              <button
                type="button"
                onClick={() =>
                  setSelectedEmployee(null)
                }
              >
                <FaTimes />
              </button>

            </div>


            <div className="employee-profile-top">

              <div className="profile-image-wrap">

                <img
                  src={selectedEmployee.avatar}
                  alt={selectedEmployee.name}
                />

                <span
                  className={`profile-status-dot ${selectedEmployee.statusClass}`}
                ></span>

              </div>


              <div className="profile-basic">

                <h3>
                  {selectedEmployee.name}
                </h3>

                <span>
                  {selectedEmployee.role}
                </span>

                <small>
                  {selectedEmployee.id}
                </small>

              </div>


              <div
                className={`profile-working-status ${selectedEmployee.statusClass}`}
              >
                ● {selectedEmployee.status}
              </div>

            </div>


            {/* TABS */}

            <div className="details-tabs">

              <button
                className="active"
                type="button"
              >
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


            {/* GENERAL INFO */}

            <div className="details-section">

              <DetailRow
                icon={<FaBriefcase />}
                label="Department"
                value={
                  selectedEmployee.department
                }
              />

              <DetailRow
                icon={<FaCalendarAlt />}
                label="Joined On"
                value={
                  selectedEmployee.joined
                }
              />

              <DetailRow
                icon={<FaUser />}
                label="Reporting To"
                value={
                  selectedEmployee.reportingTo
                }
              />

              <DetailRow
                icon={<FaEnvelope />}
                label="Email"
                value={
                  selectedEmployee.email
                }
              />

              <DetailRow
                icon={<FaPhone />}
                label="Phone"
                value={
                  selectedEmployee.phone
                }
              />

            </div>


            {/* TODAY ACTIVITY */}

            <div className="details-section">

              <h4>
                Today's Activity
              </h4>


              <ActivityRow
                icon={<FaCheckCircle />}
                label="Check In"
                value={selectedEmployee.checkIn}
                className="success"
              />


              <ActivityRow
                icon={<FaTasks />}
                label="Tasks Completed"
                value={
                  selectedEmployee.tasks.split(
                    " / "
                  )[0]
                }
              />


              <ActivityRow
                icon={<FaFileAlt />}
                label="Daily Update"
                value={
                  selectedEmployee.dailyUpdate
                }
                className={
                  selectedEmployee.dailyUpdate ===
                  "Submitted"
                    ? "success"
                    : "warning"
                }
              />


              <ActivityRow
                icon={<FaBriefcase />}
                label="Current Task"
                value={
                  selectedEmployee.currentTask
                }
                className="orange"
              />

            </div>


            {/* PERFORMANCE */}

            <div className="details-section">

              <h4>
                Performance{" "}
                <span>(This Month)</span>
              </h4>


              <div className="performance-grid">

                <PerformanceCard
                  title="Task Completion"
                  value={
                    selectedEmployee.performance
                      .task
                  }
                  change="↑ 8%"
                  positive
                />

                <PerformanceCard
                  title="Attendance"
                  value={
                    selectedEmployee.performance
                      .attendance
                  }
                  change="↑ 5%"
                  positive
                />

                <PerformanceCard
                  title="Updates Submission"
                  value={
                    selectedEmployee.performance
                      .updates
                  }
                  change="↑ 12%"
                  positive
                />

                <PerformanceCard
                  title="On-Time Tasks"
                  value={
                    selectedEmployee.performance
                      .onTime
                  }
                  change="↓ 3%"
                />

              </div>

            </div>


            {/* ACTIONS */}

            <div className="details-actions">

              <button
                className="message-btn"
                onClick={handleMessage}
                type="button"
              >
                <FaCommentAlt />
                Message
              </button>


              <button
                className="profile-btn"
                onClick={handleViewProfile}
                type="button"
              >
                View Full Profile
                <FaArrowRight />
              </button>

            </div>

          </aside>

        )}

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <div className="team-footer">

        <span>
          Showing 1 to{" "}
          {filteredEmployees.length} of 12 members
        </span>

        <div className="pagination">

          <button type="button">
            ←
          </button>

          <button
            className="active"
            type="button"
          >
            1
          </button>

          <button type="button">
            2
          </button>

          <button type="button">
            →
          </button>

        </div>

        <div className="per-page">
          <span>Show</span>

          <select defaultValue="10">
            <option value="10">10</option>
            <option value="20">20</option>
          </select>

          <span>per page</span>
        </div>

      </div>

    </div>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function StatCard({
  icon,
  iconClass,
  label,
  value,
  helper,
  helperClass = "",
}) {
  return (
    <div className="team-stat-card">

      <div
        className={`team-stat-icon ${iconClass}`}
      >
        {icon}
      </div>

      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small className={helperClass}>
          {helper}
        </small>
      </div>

    </div>
  );
}


function FilterSelect({
  label,
  value,
  options,
  onChange,
}) {
  return (
    <div className="filter-select">

      <label>{label}</label>

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
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

      <FaChevronDown />

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

      <div className="detail-icon">
        {icon}
      </div>

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function ActivityRow({
  icon,
  label,
  value,
  className = "",
}) {
  return (
    <div className="detail-activity-row">

      <div
        className={`activity-icon ${className}`}
      >
        {icon}
      </div>

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


function PerformanceCard({
  title,
  value,
  change,
  positive = false,
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
          positive ? "positive" : "negative"
        }
      >
        {change}
      </small>

    </div>
  );
}