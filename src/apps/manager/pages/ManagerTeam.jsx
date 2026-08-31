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
  FaList,
  FaThLarge,
  FaFilter,
  FaEllipsisV,
  FaTimes,
  FaBriefcase,
  FaCalendarAlt,
  FaEnvelope,
  FaPhone,
  FaTasks,
  FaFileAlt,
  FaClock,
  FaCommentAlt,
  FaArrowRight,
  FaPlus,
} from "react-icons/fa";

import "./ManagerTeam.css";


/* =====================================================
   DATA
===================================================== */

const teamData = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    checkIn: "09:12 AM",
    tasks: "4 / 5",
    percent: 80,
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
    performance: ["88%", "98%", "96%", "85%"],
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    department: "Development",
    status: "Working",
    checkIn: "09:05 AM",
    tasks: "5 / 5",
    percent: 100,
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
    performance: ["92%", "96%", "94%", "90%"],
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    department: "Development",
    status: "On Leave",
    checkIn: "Today",
    tasks: "2 / 4",
    percent: 50,
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
    performance: ["74%", "89%", "80%", "72%"],
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    department: "QA",
    status: "Late",
    checkIn: "10:12 AM",
    tasks: "3 / 4",
    percent: 75,
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
    performance: ["86%", "92%", "91%", "79%"],
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    checkIn: "09:18 AM",
    tasks: "4 / 6",
    percent: 67,
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
    performance: ["84%", "95%", "90%", "83%"],
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    department: "Development",
    status: "Late",
    checkIn: "10:20 AM",
    tasks: "2 / 5",
    percent: 40,
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
    performance: ["81%", "90%", "88%", "76%"],
  },
];


/* =====================================================
   HELPER
===================================================== */

const cleanStatus = (status) => {
  return status.toLowerCase().replace(/\s+/g, "-");
};


/* =====================================================
   MAIN COMPONENT
===================================================== */

function ManagerTeam() {

  const [selected, setSelected] = useState(teamData[0]);

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All Departments");

  const [status, setStatus] =
    useState("All Status");

  const [workload, setWorkload] =
    useState("All Workload");

  const [view, setView] =
    useState("list");


  /* ===================================================
     FILTER
  =================================================== */

  const filteredData = useMemo(() => {

    return teamData.filter((item) => {

      const query =
        search.trim().toLowerCase();

      const searchMatch =
        item.name
          .toLowerCase()
          .includes(query) ||
        item.id
          .toLowerCase()
          .includes(query);

      const departmentMatch =
        department === "All Departments" ||
        item.department === department;

      const statusMatch =
        status === "All Status" ||
        item.status === status;

      let workloadMatch = true;

      if (workload === "Low") {
        workloadMatch =
          item.percent < 50;
      }

      if (workload === "Medium") {
        workloadMatch =
          item.percent >= 50 &&
          item.percent < 80;
      }

      if (workload === "High") {
        workloadMatch =
          item.percent >= 80;
      }

      return (
        searchMatch &&
        departmentMatch &&
        statusMatch &&
        workloadMatch
      );
    });

  }, [
    search,
    department,
    status,
    workload
  ]);


  /* ===================================================
     UI
  =================================================== */

  return (
    <div className="mt-page">

      {/* HEADER */}

      <div className="mt-header">

        <div className="mt-header-left">

          <button
            type="button"
            className="mt-menu-btn"
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


        <div className="mt-header-right">

          <div className="mt-header-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search anything..."
            />

          </div>


          <button
            type="button"
            className="mt-notification"
          >
            <FaBell />
            <span>3</span>
          </button>


          <div className="mt-user">

            <div className="mt-user-avatar">
              R
            </div>

            <div className="mt-user-text">

              <strong>
                Rajat Verma
              </strong>

              <small>
                Team Manager
              </small>

            </div>

            <FaChevronDown />

          </div>

        </div>

      </div>


      {/* STATS */}

      <div className="mt-stats">

        <Stat
          icon={<FaUsers />}
          type="purple"
          title="Team Size"
          value="12"
          sub="Total Members"
        />

        <Stat
          icon={<FaUserCheck />}
          type="green"
          title="Working"
          value="10"
          sub="83% of team"
        />

        <Stat
          icon={<FaUmbrellaBeach />}
          type="orange"
          title="On Leave"
          value="1"
          sub="8% of team"
        />

        <Stat
          icon={<FaExclamationCircle />}
          type="red"
          title="Needs Attention"
          value="2"
          sub="View details →"
        />

      </div>


      {/* FILTER */}

      <div className="mt-filter">

        <div className="mt-filter-group">

          <div className="mt-search">

            <FaSearch />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by name or employee ID..."
            />

          </div>


          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >
            <option>
              All Departments
            </option>

            <option>
              Design
            </option>

            <option>
              Development
            </option>

            <option>
              QA
            </option>

          </select>


          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>
              All Status
            </option>

            <option>
              Working
            </option>

            <option>
              On Leave
            </option>

            <option>
              Late
            </option>

          </select>


          <select
            value={workload}
            onChange={(e) =>
              setWorkload(e.target.value)
            }
          >
            <option>
              All Workload
            </option>

            <option>
              Low
            </option>

            <option>
              Medium
            </option>

            <option>
              High
            </option>

          </select>

        </div>


        <button
          type="button"
          className="mt-assign"
          onClick={() =>
            alert("Assign Task")
          }
        >
          <FaPlus />
          Assign Task
        </button>

      </div>


      {/* VIEW */}

      <div className="mt-viewbar">

        <div className="mt-view-buttons">

          <button
            type="button"
            className={
              view === "list"
                ? "active"
                : ""
            }
            onClick={() =>
              setView("list")
            }
          >
            <FaList />
            List View
          </button>


          <button
            type="button"
            className={
              view === "grid"
                ? "active"
                : ""
            }
            onClick={() =>
              setView("grid")
            }
          >
            <FaThLarge />
            Grid View
          </button>

        </div>


        <div className="mt-sort">

          <span>
            Sort by:
          </span>

          <select defaultValue="Name A-Z">

            <option>
              Name A-Z
            </option>

            <option>
              Name Z-A
            </option>

          </select>


          <button type="button">

            <FaFilter />

            Filter

          </button>

        </div>

      </div>


      {/* CONTENT */}

      <div className="mt-content">

        <div className="mt-table-area">

          {view === "list" ? (

            <div className="mt-table-scroll">

              <table className="mt-table">

                <thead>

                  <tr>

                    <th>
                      EMPLOYEE
                    </th>

                    <th>
                      DEPARTMENT
                    </th>

                    <th>
                      STATUS
                    </th>

                    <th>
                      TASKS
                    </th>

                    <th>
                      ATTENDANCE
                    </th>

                    <th>
                      LAST ACTIVITY
                    </th>

                    <th>
                      ACTIONS
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {filteredData.map(
                    (item) => (

                      <tr
                        key={item.id}
                        className={
                          selected?.id === item.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelected(item)
                        }
                      >

                        <td>

                          <div className="mt-employee">

                            <div className="mt-photo">

                              <img
                                src={item.avatar}
                                alt={item.name}
                              />

                              <span
                                className={
                                  cleanStatus(
                                    item.status
                                  )
                                }
                              />

                            </div>


                            <div className="mt-employee-text">

                              <strong>
                                {item.name}
                              </strong>

                              <small>
                                {item.role}
                              </small>

                              <em>
                                {item.id}
                              </em>

                            </div>

                          </div>

                        </td>


                        <td>
                          {item.department}
                        </td>


                        <td>

                          <strong
                            className={
                              `mt-status ${cleanStatus(
                                item.status
                              )}`
                            }
                          >
                            ● {item.status}
                          </strong>

                          <small className="mt-status-sub">

                            {item.status === "On Leave"
                              ? "Sick Leave"
                              : `Checked in ${item.checkIn}`}

                          </small>

                        </td>


                        <td>

                          <div className="mt-task-info">

                            <strong>
                              {item.tasks}
                            </strong>

                            <span>
                              {item.percent}%
                            </span>

                          </div>


                          <div className="mt-progress">

                            <span
                              className={
                                cleanStatus(
                                  item.status
                                )
                              }
                              style={{
                                width:
                                  `${item.percent}%`
                              }}
                            />

                          </div>

                        </td>


                        <td>

                          <strong className="mt-attendance">
                            {item.attendance}
                          </strong>

                          <small>
                            {item.attendanceText}
                          </small>

                        </td>


                        <td>

                          <strong className="mt-activity">
                            {item.lastActivity}
                          </strong>

                          <small>
                            {item.activity}
                          </small>

                        </td>


                        <td>

                          <button
                            type="button"
                            className="mt-action"
                            onClick={(e) => {

                              e.stopPropagation();

                              setSelected(item);

                            }}
                          >
                            <FaEllipsisV />
                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          ) : (

            <div className="mt-grid">

              {filteredData.map(
                (item) => (

                  <button
                    type="button"
                    key={item.id}
                    className="mt-grid-card"
                    onClick={() =>
                      setSelected(item)
                    }
                  >

                    <img
                      src={item.avatar}
                      alt={item.name}
                    />

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.role}
                    </span>

                    <small>
                      ● {item.status}
                    </small>

                  </button>

                )
              )}

            </div>

          )}


          {/* PAGINATION */}

          <div className="mt-pagination">

            <span>
              Showing 1 to 6 of 12 members
            </span>


            <div>

              <button type="button">
                ←
              </button>

              <button
                type="button"
                className="active"
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


            <span>

              Show&nbsp;

              <select defaultValue="10">

                <option value="10">
                  10
                </option>

                <option value="20">
                  20
                </option>

              </select>

              &nbsp;per page

            </span>

          </div>

        </div>


        {/* DETAILS */}

        {selected && (

          <aside className="mt-details">

            <div className="mt-details-title">

              <strong>
                Employee Details
              </strong>

              <button
                type="button"
                onClick={() =>
                  setSelected(null)
                }
              >
                <FaTimes />
              </button>

            </div>


            <div className="mt-profile">

              <div className="mt-profile-photo">

                <img
                  src={selected.avatar}
                  alt={selected.name}
                />

                <span
                  className={
                    cleanStatus(selected.status)
                  }
                />

              </div>


              <div className="mt-profile-info">

                <strong>
                  {selected.name}
                </strong>

                <small>
                  {selected.role}
                </small>

                <em>
                  {selected.id}
                </em>

              </div>


              <strong
                className={
                  `mt-profile-status ${cleanStatus(
                    selected.status
                  )}`
                }
              >
                ● {selected.status}
              </strong>

            </div>


            <div className="mt-tabs">

              <button className="active">
                Overview
              </button>

              <button>
                Attendance
              </button>

              <button>
                Tasks
              </button>

              <button>
                Updates
              </button>

              <button>
                Leave
              </button>

            </div>


            <div className="mt-details-section">

              <Detail
                icon={<FaBriefcase />}
                label="Department"
                value={selected.department}
              />

              <Detail
                icon={<FaCalendarAlt />}
                label="Joined On"
                value={selected.joined}
              />

              <Detail
                icon={<FaUserCheck />}
                label="Reporting To"
                value={selected.reportingTo}
              />

              <Detail
                icon={<FaEnvelope />}
                label="Email"
                value={selected.email}
              />

              <Detail
                icon={<FaPhone />}
                label="Phone"
                value={selected.phone}
              />

            </div>


            <div className="mt-details-section">

              <h3>
                Today's Activity
              </h3>

              <Activity
                icon={<FaClock />}
                label="Check In"
                value={selected.checkIn}
              />

              <Activity
                icon={<FaTasks />}
                label="Tasks Completed"
                value={
                  selected.tasks
                    .split("/")[0]
                    .trim()
                }
              />

              <Activity
                icon={<FaFileAlt />}
                label="Daily Update"
                value={selected.dailyUpdate}
              />

              <Activity
                icon={<FaBriefcase />}
                label="Current Task"
                value={selected.currentTask}
              />

            </div>


            <div className="mt-details-section">

              <h3>
                Performance
                <span>
                  {" "}(This Month)
                </span>
              </h3>


              <div className="mt-performance">

                <Performance
                  title="Task Completion"
                  value={selected.performance[0]}
                  change="↑ 8%"
                  positive
                />

                <Performance
                  title="Attendance"
                  value={selected.performance[1]}
                  change="↑ 5%"
                  positive
                />

                <Performance
                  title="Updates Submission"
                  value={selected.performance[2]}
                  change="↑ 12%"
                  positive
                />

                <Performance
                  title="On-Time Tasks"
                  value={selected.performance[3]}
                  change="↓ 3%"
                />

              </div>

            </div>


            <div className="mt-detail-actions">

              <button
                type="button"
                onClick={() =>
                  alert("Message")
                }
              >
                <FaCommentAlt />
                Message
              </button>


              <button
                type="button"
                onClick={() =>
                  alert("Full Profile")
                }
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
   STAT
===================================================== */

function Stat({
  icon,
  type,
  title,
  value,
  sub,
}) {
  return (
    <div className="mt-stat-card">

      <div
        className={`mt-stat-icon ${type}`}
      >
        {icon}
      </div>

      <div>

        <span>
          {title}
        </span>

        <strong>
          {value}
        </strong>

        <small>
          {sub}
        </small>

      </div>

    </div>
  );
}


/* =====================================================
   DETAIL
===================================================== */

function Detail({
  icon,
  label,
  value,
}) {
  return (
    <div className="mt-detail-row">

      <span>
        {icon}
      </span>

      <small>
        {label}
      </small>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   ACTIVITY
===================================================== */

function Activity({
  icon,
  label,
  value,
}) {
  return (
    <div className="mt-activity-row">

      <span>
        {icon}
      </span>

      <small>
        {label}
      </small>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   PERFORMANCE
===================================================== */

function Performance({
  title,
  value,
  change,
  positive,
}) {
  return (
    <div className="mt-performance-card">

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


/* =====================================================
   EXPORT
===================================================== */

export default ManagerTeam;