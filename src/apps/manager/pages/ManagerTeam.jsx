import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaUsers,
  FaUserCheck,
  FaUmbrellaBeach,
  FaExclamationCircle,
  FaFilter,
  FaList,
  FaThLarge,
  FaEllipsisV,
  FaTimes,
  FaCalendarAlt,
  FaTasks,
  FaFileAlt,
  FaPhone,
  FaEnvelope,
  FaBriefcase,
  FaArrowRight,
  FaCommentAlt,
} from "react-icons/fa";

import "./ManagerTeam.css";


/* =====================================================
   TEAM DATA
===================================================== */

const teamMembers = [
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
      task: "81%",
      attendance: "90%",
      updates: "88%",
      onTime: "76%",
    },
  },
];


/* =====================================================
   MAIN COMPONENT
===================================================== */

function ManagerTeam() {

  const [selectedMember, setSelectedMember] =
    useState(teamMembers[0]);

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All Departments");

  const [status, setStatus] =
    useState("All Status");

  const [view, setView] =
    useState("list");


  /* ===================================================
     FILTER
  =================================================== */

  const filteredMembers = useMemo(() => {

    return teamMembers.filter((member) => {

      const searchValue =
        search.trim().toLowerCase();

      const matchesSearch =
        member.name
          .toLowerCase()
          .includes(searchValue) ||
        member.id
          .toLowerCase()
          .includes(searchValue);

      const matchesDepartment =
        department === "All Departments" ||
        member.department === department;

      const matchesStatus =
        status === "All Status" ||
        member.status === status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });

  }, [search, department, status]);


  return (

    <div className="manager-team-page">


      {/* =================================================
         PAGE TITLE
      ================================================= */}

      <div className="team-page-title">

        <div>

          <h1>
            My Team
          </h1>

          <p>
            Manage and monitor your team members
          </p>

        </div>

      </div>


      {/* =================================================
         STAT CARDS
      ================================================= */}

      <div className="team-stats-grid">

        <TeamStat
          icon={<FaUsers />}
          title="Team Size"
          value="12"
          bottom="Total Members"
          className="purple"
        />

        <TeamStat
          icon={<FaUserCheck />}
          title="Working"
          value="10"
          bottom="83% of team"
          className="green"
        />

        <TeamStat
          icon={<FaUmbrellaBeach />}
          title="On Leave"
          value="1"
          bottom="8% of team"
          className="orange"
        />

        <TeamStat
          icon={<FaExclamationCircle />}
          title="Needs Attention"
          value="2"
          bottom="View details →"
          className="red"
        />

      </div>


      {/* =================================================
         SEARCH / FILTER
      ================================================= */}

      <div className="team-filter-container">

        <div className="team-filter-left">

          <div className="team-search">

            <FaSearch />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search by name or employee ID..."
            />

          </div>


          <select
            className="team-select"
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
            className="team-select"
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
            className="team-select"
            defaultValue="All Workload"
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
          className="assign-task"
          type="button"
          onClick={() =>
            alert("Assign Task")
          }
        >
          <span>+</span>
          Assign Task
        </button>

      </div>


      {/* =================================================
         LIST / GRID
      ================================================= */}

      <div className="team-view-toolbar">

        <div className="team-view-buttons">

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


        <div className="team-sort">

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

            <option>
              Attendance
            </option>

          </select>


          <button type="button">
            <FaFilter />
            Filter
          </button>

        </div>

      </div>


      {/* =================================================
         BODY
      ================================================= */}

      <div className="team-body">

        {/* TABLE */}

        <div className="team-table-area">

          {view === "list" ? (

            <div className="team-table-scroll">

              <table>

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

                  {filteredMembers.map(
                    (member) => (

                      <tr
                        key={member.id}
                        className={
                          selectedMember?.id === member.id
                            ? "selected-row"
                            : ""
                        }
                        onClick={() =>
                          setSelectedMember(member)
                        }
                      >

                        {/* Employee */}

                        <td>

                          <div className="team-employee">

                            <div className="team-avatar">

                              <img
                                src={member.avatar}
                                alt={member.name}
                              />

                              <span
                                className={
                                  member.status
                                    .toLowerCase()
                                    .replace(" ", "-")
                                }
                              />

                            </div>


                            <div className="team-employee-text">

                              <strong>
                                {member.name}
                              </strong>

                              <small>
                                {member.role}
                              </small>

                              <em>
                                {member.id}
                              </em>

                            </div>

                          </div>

                        </td>


                        {/* Department */}

                        <td>
                          {member.department}
                        </td>


                        {/* Status */}

                        <td>

                          <strong
                            className={
                              `status-${member.status
                                .toLowerCase()
                                .replace(" ", "-")}`
                            }
                          >
                            ● {member.status}
                          </strong>

                          <small className="status-time">
                            {member.status === "On Leave"
                              ? "Sick Leave"
                              : `Checked in ${member.checkIn}`}
                          </small>

                        </td>


                        {/* Tasks */}

                        <td>

                          <div className="task-value">

                            <strong>
                              {member.tasks}
                            </strong>

                            <span>
                              {member.taskPercent}%
                            </span>

                          </div>

                          <div className="task-bar">

                            <span
                              className={
                                member.status
                                  .toLowerCase()
                                  .replace(" ", "-")
                              }
                              style={{
                                width:
                                  `${member.taskPercent}%`,
                              }}
                            />

                          </div>

                        </td>


                        {/* Attendance */}

                        <td>

                          <strong>
                            {member.attendance}
                          </strong>

                          <small className="present-text">
                            {member.attendanceText}
                          </small>

                        </td>


                        {/* Activity */}

                        <td>

                          <strong className="activity-main">
                            {member.lastActivity}
                          </strong>

                          <small className="activity-sub">
                            {member.activity}
                          </small>

                        </td>


                        {/* Action */}

                        <td>

                          <button
                            type="button"
                            className="action-button"
                            onClick={(e) => {
                              e.stopPropagation();

                              setSelectedMember(member);
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

            <div className="team-grid">

              {filteredMembers.map(
                (member) => (

                  <button
                    key={member.id}
                    type="button"
                    className="team-grid-card"
                    onClick={() =>
                      setSelectedMember(member)
                    }
                  >

                    <img
                      src={member.avatar}
                      alt={member.name}
                    />

                    <strong>
                      {member.name}
                    </strong>

                    <span>
                      {member.role}
                    </span>

                    <small>
                      ● {member.status}
                    </small>

                  </button>

                )
              )}

            </div>

          )}


          {/* PAGINATION */}

          <div className="team-pagination">

            <span>
              Showing 1 to 6 of 12 members
            </span>

            <div>

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


        {/* =================================================
           EMPLOYEE DETAILS
        ================================================= */}

        {selectedMember && (

          <aside className="team-details">

            <div className="team-details-heading">

              <strong>
                Employee Details
              </strong>

              <button
                type="button"
                onClick={() =>
                  setSelectedMember(null)
                }
              >
                <FaTimes />
              </button>

            </div>


            {/* Profile */}

            <div className="team-profile">

              <div className="team-profile-image">

                <img
                  src={selectedMember.avatar}
                  alt={selectedMember.name}
                />

                <span
                  className={
                    selectedMember.status
                      .toLowerCase()
                      .replace(" ", "-")
                  }
                />

              </div>


              <div className="team-profile-name">

                <strong>
                  {selectedMember.name}
                </strong>

                <small>
                  {selectedMember.role}
                </small>

                <em>
                  {selectedMember.id}
                </em>

              </div>


              <strong
                className={
                  `profile-status status-${selectedMember.status
                    .toLowerCase()
                    .replace(" ", "-")}`
                }
              >
                ● {selectedMember.status}
              </strong>

            </div>


            {/* Tabs */}

            <div className="team-tabs">

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


            {/* Information */}

            <div className="team-detail-section">

              <Detail
                icon={<FaBriefcase />}
                label="Department"
                value={selectedMember.department}
              />

              <Detail
                icon={<FaCalendarAlt />}
                label="Joined On"
                value={selectedMember.joined}
              />

              <Detail
                icon={<FaUserCheck />}
                label="Reporting To"
                value={selectedMember.reportingTo}
              />

              <Detail
                icon={<FaEnvelope />}
                label="Email"
                value={selectedMember.email}
              />

              <Detail
                icon={<FaPhone />}
                label="Phone"
                value={selectedMember.phone}
              />

            </div>


            {/* Today's Activity */}

            <div className="team-detail-section">

              <h3>
                Today's Activity
              </h3>


              <Activity
                icon={<FaCalendarAlt />}
                label="Check In"
                value={selectedMember.checkIn}
              />


              <Activity
                icon={<FaTasks />}
                label="Tasks Completed"
                value={
                  selectedMember.tasks
                    .split("/")[0]
                    .trim()
                }
              />


              <Activity
                icon={<FaFileAlt />}
                label="Daily Update"
                value={selectedMember.dailyUpdate}
              />


              <Activity
                icon={<FaBriefcase />}
                label="Current Task"
                value={selectedMember.currentTask}
              />

            </div>


            {/* Performance */}

            <div className="team-detail-section">

              <h3>
                Performance
                <span>
                  &nbsp;(This Month)
                </span>
              </h3>


              <div className="performance-cards">

                <Performance
                  title="Task Completion"
                  value={
                    selectedMember.performance.task
                  }
                  change="↑ 8%"
                  positive
                />

                <Performance
                  title="Attendance"
                  value={
                    selectedMember.performance.attendance
                  }
                  change="↑ 5%"
                  positive
                />

                <Performance
                  title="Updates Submission"
                  value={
                    selectedMember.performance.updates
                  }
                  change="↑ 12%"
                  positive
                />

                <Performance
                  title="On-Time Tasks"
                  value={
                    selectedMember.performance.onTime
                  }
                  change="↓ 3%"
                />

              </div>

            </div>


            {/* Buttons */}

            <div className="team-detail-actions">

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
   COMPONENTS
===================================================== */

function TeamStat({
  icon,
  title,
  value,
  bottom,
  className,
}) {
  return (
    <div className="team-stat-card">

      <div
        className={`team-stat-icon ${className}`}
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
          {bottom}
        </small>

      </div>

    </div>
  );
}


function Detail({
  icon,
  label,
  value,
}) {
  return (
    <div className="detail-line">

      <span className="detail-icon">
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


function Activity({
  icon,
  label,
  value,
}) {
  return (
    <div className="activity-line">

      <span className="activity-icon">
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
    <div className="performance-item">

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
      <div className="team-page-header">

  <div className="team-page-heading">

    <button
      type="button"
      className="team-menu-button"
    >
      ☰
    </button>

    <div>
      <h1>My Team</h1>
      <p>Manage and monitor your team members</p>
    </div>

  </div>

  <div className="team-page-actions">

    <div className="team-page-search">
      🔍
      <input
        type="text"
        placeholder="Search anything..."
      />
    </div>

    <button
      type="button"
      className="team-notification"
    >
      🔔
      <span>3</span>
    </button>

    <div className="team-manager-profile">

      <div className="team-manager-avatar">
        M
      </div>

      <div>
        <strong>Mayank Panse</strong>
        <small>Team Manager</small>
      </div>

      <span>⌄</span>

    </div>

  </div>

</div>

    </div>
    
  );
}


export default ManagerTeam;