import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaChevronDown,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUmbrellaBeach,
  FaClock,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaCircle,
  FaArrowUp,
  FaArrowDown,
  FaCheck,
} from "react-icons/fa";

import "./ManagerAttendance.css";


/* =====================================================
   EMPLOYEE DATA
===================================================== */

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    initials: "AS",
    department: "Design",
    status: "Working",
    checkIn: "09:12 AM",
    checkOut: "—",
    hours: "8h 12m",
    lastActivity: "Working now",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    initials: "PS",
    department: "Development",
    status: "Present",
    checkIn: "09:05 AM",
    checkOut: "06:02 PM",
    hours: "8h 57m",
    lastActivity: "Checked out",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    initials: "RV",
    department: "Development",
    status: "On Leave",
    checkIn: "—",
    checkOut: "—",
    hours: "—",
    lastActivity: "Sick Leave",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    initials: "NP",
    department: "QA",
    status: "Late",
    checkIn: "10:12 AM",
    checkOut: "—",
    hours: "7h 10m",
    lastActivity: "Working now",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    initials: "VJ",
    department: "Design",
    status: "Present",
    checkIn: "09:18 AM",
    checkOut: "06:10 PM",
    hours: "8h 52m",
    lastActivity: "Checked out",
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    initials: "AM",
    department: "Development",
    status: "Late",
    checkIn: "10:20 AM",
    checkOut: "—",
    hours: "6h 45m",
    lastActivity: "Working now",
  },
  {
    id: "EMP-007",
    name: "Karan Malhotra",
    role: "QA Engineer",
    initials: "KM",
    department: "QA",
    status: "Absent",
    checkIn: "—",
    checkOut: "—",
    hours: "—",
    lastActivity: "No check-in",
  },
  {
    id: "EMP-008",
    name: "Pooja Sharma",
    role: "HR Executive",
    initials: "PS",
    department: "HR",
    status: "Present",
    checkIn: "09:08 AM",
    checkOut: "06:01 PM",
    hours: "8h 53m",
    lastActivity: "Checked out",
  },
];


/* =====================================================
   MAIN COMPONENT
===================================================== */

function ManagerAttendance() {

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selectedEmployee, setSelectedEmployee] =
    useState(employees[0]);

  const tabs = [
    { name: "All", count: 12 },
    { name: "Working", count: 9 },
    { name: "Late", count: 2 },
    { name: "On Leave", count: 2 },
    { name: "Absent", count: 1 },
  ];


  /* ===================================================
     FILTER
  =================================================== */

  const filteredEmployees = employees.filter((employee) => {

    const searchValue =
      search.trim().toLowerCase();

    const searchMatch =
      employee.name.toLowerCase().includes(searchValue) ||
      employee.id.toLowerCase().includes(searchValue);

    const tabMatch =
      activeTab === "All" ||
      (activeTab === "Working" &&
        employee.status === "Working") ||
      (activeTab === "Late" &&
        employee.status === "Late") ||
      (activeTab === "On Leave" &&
        employee.status === "On Leave") ||
      (activeTab === "Absent" &&
        employee.status === "Absent");

    return searchMatch && tabMatch;
  });


  return (
    <div className="attendance-page">


      {/* =================================================
         PAGE HEADER
      ================================================= */}

      <div className="attendance-page-header">

        <div>
          <h1>Team Attendance</h1>

          <p>
            Monitor your team's attendance, working hours
            and daily status.
          </p>
        </div>


        <div className="attendance-header-right">

          <button
            type="button"
            className="attendance-today"
          >
            <span>Today, 29 Aug 2026</span>
            <FaChevronDown />
          </button>

          <div className="attendance-top-search">

            <FaSearch />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search employee..."
            />

          </div>

          <button
            type="button"
            className="attendance-header-btn"
          >
            <FaFilter />
            Filter
          </button>

          <button
            type="button"
            className="attendance-header-btn"
          >
            <FaDownload />
            Export
          </button>

        </div>

      </div>


      {/* =================================================
         STAT CARDS
      ================================================= */}

      <div className="attendance-stat-grid">

        <AttendanceStat
          type="purple"
          icon={<FaUsers />}
          title="Team Members"
          value="12"
          footer="Total Members"
        />

        <AttendanceStat
          type="green"
          icon={<FaUserCheck />}
          title="Present"
          value="9"
          footer="75% of team"
        />

        <AttendanceStat
          type="red"
          icon={<FaUserTimes />}
          title="Absent"
          value="1"
          footer="8% of team"
        />

        <AttendanceStat
          type="orange"
          icon={<FaUmbrellaBeach />}
          title="On Leave"
          value="2"
          footer="17% of team"
        />

        <AttendanceStat
          type="blue"
          icon={<FaClock />}
          title="Late"
          value="2"
          footer="17% of team"
        />

      </div>


      {/* =================================================
         MAIN GRID
      ================================================= */}

      <div className="attendance-main-grid">


        {/* =================================================
           LEFT
        ================================================= */}

        <div className="attendance-left-column">


          {/* STATUS TABS */}

          <div className="attendance-tabs">

            {tabs.map((tab) => (

              <button
                key={tab.name}
                type="button"
                className={
                  activeTab === tab.name
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(tab.name)
                }
              >
                <span>
                  {tab.name}
                </span>

                <strong>
                  {tab.count}
                </strong>

              </button>

            ))}

          </div>


          {/* TABLE */}

          <div className="attendance-table-card">

            <div className="attendance-table-scroll">

              <table>

                <thead>

                  <tr>

                    <th>EMPLOYEE</th>
                    <th>CHECK IN</th>
                    <th>CHECK OUT</th>
                    <th>WORKING HOURS</th>
                    <th>STATUS</th>
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
                          selectedEmployee?.id === employee.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedEmployee(employee)
                        }
                      >

                        {/* EMPLOYEE */}

                        <td>

                          <div className="attendance-employee">

                            <div
                              className={`attendance-avatar ${employee.status
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              {employee.initials}
                            </div>

                            <div className="attendance-employee-text">

                              <strong>
                                {employee.name}
                              </strong>

                              <small>
                                {employee.role}
                              </small>

                            </div>

                          </div>

                        </td>


                        {/* CHECK IN */}

                        <td>

                          <strong
                            className={
                              employee.checkIn === "—"
                                ? "muted"
                                : "time-green"
                            }
                          >
                            {employee.checkIn}
                          </strong>

                        </td>


                        {/* CHECK OUT */}

                        <td>

                          <strong
                            className="normal-time"
                          >
                            {employee.checkOut}
                          </strong>

                        </td>


                        {/* HOURS */}

                        <td>

                          <strong>
                            {employee.hours}
                          </strong>

                        </td>


                        {/* STATUS */}

                        <td>

                          <span
                            className={
                              `attendance-status ${employee.status
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`
                            }
                          >
                            ● {employee.status}
                          </span>

                        </td>


                        {/* ACTIVITY */}

                        <td>

                          <div className="last-activity">

                            <span>
                              {employee.status ===
                              "On Leave"
                                ? "Sick Leave"
                                : employee.lastActivity}
                            </span>

                            {employee.status ===
                              "Working" && (
                              <small>
                                Updated just now
                              </small>
                            )}

                            {employee.status ===
                              "Present" && (
                              <small>
                                Checked out
                              </small>
                            )}

                            {employee.status ===
                              "Late" && (
                              <small>
                                Checked in late
                              </small>
                            )}

                            {employee.status ===
                              "Absent" && (
                              <small>
                                Today
                              </small>
                            )}

                          </div>

                        </td>


                        {/* ACTION */}

                        <td>

                          <button
                            type="button"
                            className="attendance-action"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedEmployee(employee);
                            }}
                          >
                            •••
                          </button>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>


            {/* TABLE FOOTER */}

            <div className="attendance-table-footer">

              <span>
                Showing 1 to 8 of 12 members
              </span>

              <div className="attendance-pagination">

                <button>
                  ←
                </button>

                <button className="active">
                  1
                </button>

                <button>
                  2
                </button>

                <button>
                  →
                </button>

              </div>

              <div className="attendance-page-size">
                <select defaultValue="10">
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>

                <span>
                  per page
                </span>
              </div>

            </div>

          </div>


          {/* BOTTOM CARDS */}

          <div className="attendance-bottom-grid">


            {/* Today's Summary */}

            <div className="small-attendance-card">

              <h3>
                Today's Summary
              </h3>

              <div className="summary-donut">

                <div className="donut-circle">
                  <strong>75%</strong>
                  <small>Present Rate</small>
                </div>

                <div className="summary-legend">

                  <span>
                    <i className="dot green"></i>
                    Present
                    <b>9 (75%)</b>
                  </span>

                  <span>
                    <i className="dot orange"></i>
                    Late
                    <b>2 (17%)</b>
                  </span>

                  <span>
                    <i className="dot blue"></i>
                    On Leave
                    <b>2 (17%)</b>
                  </span>

                  <span>
                    <i className="dot red"></i>
                    Absent
                    <b>1 (8%)</b>
                  </span>

                </div>

              </div>

            </div>


            {/* Average Hours */}

            <div className="small-attendance-card">

              <h3>
                Average Working Hours
              </h3>

              <div className="average-hours">
                <strong>
                  8h 14m
                </strong>

                <span>
                  <FaArrowUp />
                  5m from yesterday
                </span>
              </div>

            </div>


            {/* Attendance Trend */}

            <div className="small-attendance-card trend-card">

              <h3>
                Attendance Trend
                <span>
                  (This Month)
                </span>
              </h3>

              <div className="fake-chart">

                <div className="chart-line">
                  <span className="point p1"></span>
                  <span className="point p2"></span>
                  <span className="point p3"></span>
                  <span className="point p4"></span>
                </div>

                <div className="chart-labels">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                </div>

              </div>

            </div>


            {/* Needs Attention */}

            <div className="small-attendance-card">

              <h3>
                Needs Attention
              </h3>

              <div className="attention-list">

                <AttentionItem
                  initials="RV"
                  name="Rahul Verma"
                  text="Absent today"
                  badge="No check-in"
                  type="red"
                />

                <AttentionItem
                  initials="NP"
                  name="Neha Patel"
                  text="Checked in at 10:12 AM"
                  badge="48 min late"
                  type="orange"
                />

                <AttentionItem
                  initials="AM"
                  name="Anjali Mehta"
                  text="Checked in at 10:20 AM"
                  badge="56 min late"
                  type="orange"
                />

              </div>

              <button
                className="view-all-attention"
                type="button"
              >
                View All →
              </button>

            </div>

          </div>

        </div>


        {/* =================================================
           RIGHT DETAILS PANEL
        ================================================= */}

        {selectedEmployee && (

          <aside className="attendance-details">


            {/* HEADER */}

            <div className="attendance-details-header">

              <strong>
                Employee Attendance Details
              </strong>

              <button type="button">
                ×
              </button>

            </div>


            {/* PROFILE */}

            <div className="attendance-details-profile">

              <div
                className={`details-avatar ${selectedEmployee.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {selectedEmployee.initials}
              </div>

              <div>

                <strong>
                  {selectedEmployee.name}
                </strong>

                <small>
                  {selectedEmployee.role} •{" "}
                  {selectedEmployee.id}
                </small>

              </div>

              <span
                className={`details-working ${selectedEmployee.status
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {selectedEmployee.status}
              </span>

            </div>


            {/* TABS */}

            <div className="details-tabs">

              <button className="active">
                Overview
              </button>

              <button>
                Monthly View
              </button>

              <button>
                Timeline
              </button>

              <button>
                History
              </button>

            </div>


            {/* TODAY */}

            <div className="details-section">

              <h3>
                Today's Attendance
              </h3>

              <DetailLine
                label="Check In"
                value={selectedEmployee.checkIn}
                green
              />

              <DetailLine
                label="Check Out"
                value={selectedEmployee.checkOut}
              />

              <DetailLine
                label="Working Hours"
                value={selectedEmployee.hours}
                green
              />

              <DetailLine
                label="Status"
                value={selectedEmployee.status}
                green
              />

            </div>


            {/* MONTHLY */}

            <div className="details-section">

              <h3>
                This Month Overview
              </h3>

              <div className="monthly-cards">

                <MonthCard
                  label="Present"
                  value="21 Days"
                  className="green"
                />

                <MonthCard
                  label="Late"
                  value="2 Days"
                  className="orange"
                />

                <MonthCard
                  label="Absent"
                  value="1 Day"
                  className="red"
                />

                <MonthCard
                  label="On Leave"
                  value="2 Days"
                  className="blue"
                />

              </div>

            </div>


            {/* ATTENDANCE RATE */}

            <div className="details-section">

              <div className="rate-title">

                <span>
                  Attendance
                </span>

                <strong>
                  95%
                </strong>

              </div>

              <div className="attendance-rate-bar">

                <span
                  style={{
                    width: "95%",
                  }}
                />

              </div>

            </div>


            {/* TIMELINE */}

            <div className="details-section timeline-section">

              <h3>
                Today's Timeline
              </h3>

              <TimelineItem
                time="09:12 AM"
                text="Checked In"
                color="blue"
              />

              <TimelineItem
                time="09:12 AM"
                text="Work Started"
                color="blue"
              />

              <TimelineItem
                time="01:15 PM"
                text="Break Started"
                color="blue"
              />

              <TimelineItem
                time="01:45 PM"
                text="Break Ended"
                color="blue"
              />

              <TimelineItem
                time="Now"
                text="Working • 8h 12m"
                color="green"
                last
              />

            </div>


            {/* FULL ATTENDANCE */}

            <button
              className="full-attendance-button"
              type="button"
            >
              View Full Attendance
              <FaCalendarAlt />
            </button>

          </aside>

        )}

      </div>

    </div>
  );
}


/* =====================================================
   STAT
===================================================== */

function AttendanceStat({
  icon,
  type,
  title,
  value,
  footer,
}) {
  return (
    <div className="attendance-stat-card">

      <div
        className={`attendance-stat-icon ${type}`}
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
          {footer}
        </small>

      </div>

    </div>
  );
}


/* =====================================================
   ATTENTION ITEM
===================================================== */

function AttentionItem({
  initials,
  name,
  text,
  badge,
  type,
}) {
  return (
    <div className="attention-item">

      <div className={`attention-avatar ${type}`}>
        {initials}
      </div>

      <div className="attention-text">

        <strong>
          {name}
        </strong>

        <small>
          {text}
        </small>

      </div>

      <span className={`attention-badge ${type}`}>
        {badge}
      </span>

    </div>
  );
}


/* =====================================================
   DETAIL LINE
===================================================== */

function DetailLine({
  label,
  value,
  green,
}) {
  return (
    <div className="detail-line">

      <span>
        {label}
      </span>

      <strong
        className={green ? "green-text" : ""}
      >
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   MONTH CARD
===================================================== */

function MonthCard({
  label,
  value,
  className,
}) {
  return (
    <div className={`month-card ${className}`}>

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   TIMELINE
===================================================== */

function TimelineItem({
  time,
  text,
  color,
  last,
}) {
  return (
    <div className="timeline-item">

      <span className="timeline-time">
        {time}
      </span>

      <div className={`timeline-dot ${color}`}>
        {!last && <span></span>}
      </div>

      <strong>
        {text}
      </strong>

    </div>
  );
}


export default ManagerAttendance;