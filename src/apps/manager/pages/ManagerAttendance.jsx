import React, { useMemo, useState } from "react";

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
  FaCalendarAlt,
  FaArrowUp,
  FaEllipsisV,
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

  const [activeTab, setActiveTab] =
    useState("All");

  const [selectedEmployee, setSelectedEmployee] =
    useState(employees[0]);

  const tabs = [
    { label: "All", count: 12 },
    { label: "Working", count: 9 },
    { label: "Late", count: 2 },
    { label: "On Leave", count: 2 },
    { label: "Absent", count: 1 },
  ];


  /* ===================================================
     FILTER DATA
  =================================================== */

  const filteredEmployees = useMemo(() => {

    const query =
      search.trim().toLowerCase();

    return employees.filter((employee) => {

      const searchMatch =
        employee.name
          .toLowerCase()
          .includes(query) ||
        employee.id
          .toLowerCase()
          .includes(query);

      const tabMatch =
        activeTab === "All" ||
        employee.status === activeTab;

      return searchMatch && tabMatch;
    });

  }, [search, activeTab]);


  return (
    <div className="attendance-page">


      {/* =================================================
         HEADER
      ================================================= */}

      <div className="attendance-page-header">

        <div className="attendance-heading">

          <h1>
            Team Attendance
          </h1>

          <p>
            Monitor your team's attendance,
            working hours and daily status.
          </p>

        </div>


        <div className="attendance-header-actions">


          <button
            type="button"
            className="attendance-date-button"
          >

            <FaCalendarAlt />

            <span>
              Today, 29 Aug 2026
            </span>

            <FaChevronDown />

          </button>


          <div className="attendance-header-search">

            <FaSearch />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search employee..."
            />

          </div>


          <button
            type="button"
            className="attendance-header-small-button"
          >
            <FaFilter />
            Filter
          </button>


          <button
            type="button"
            className="attendance-header-small-button"
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

        <StatCard
          type="purple"
          icon={<FaUsers />}
          title="Team Members"
          value="12"
          footer="Total Members"
        />

        <StatCard
          type="green"
          icon={<FaUserCheck />}
          title="Present"
          value="9"
          footer="75% of team"
        />

        <StatCard
          type="red"
          icon={<FaUserTimes />}
          title="Absent"
          value="1"
          footer="8% of team"
        />

        <StatCard
          type="orange"
          icon={<FaUmbrellaBeach />}
          title="On Leave"
          value="2"
          footer="17% of team"
        />

        <StatCard
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
           LEFT CONTENT
        ================================================= */}

        <div className="attendance-left">


          {/* TABS */}

          <div className="attendance-status-tabs">

            {tabs.map((tab) => (

              <button
                key={tab.label}
                type="button"
                className={
                  activeTab === tab.label
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveTab(tab.label)
                }
              >

                <span>
                  {tab.label}
                </span>

                <small>
                  {tab.count}
                </small>

              </button>

            ))}

          </div>


          {/* TABLE */}

          <div className="attendance-table-card">

            <div className="attendance-table-scroll">

              <table>

                <thead>

                  <tr>

                    <th>
                      EMPLOYEE
                    </th>

                    <th>
                      CHECK IN
                    </th>

                    <th>
                      CHECK OUT
                    </th>

                    <th>
                      WORKING HOURS
                    </th>

                    <th>
                      STATUS
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

                  {filteredEmployees.map(
                    (employee) => (

                      <tr
                        key={employee.id}
                        className={
                          selectedEmployee?.id ===
                          employee.id
                            ? "selected"
                            : ""
                        }
                        onClick={() =>
                          setSelectedEmployee(employee)
                        }
                      >

                        {/* Employee */}

                        <td>

                          <div className="attendance-employee">

                            <div
                              className={
                                `attendance-avatar ${employee.status
                                  .toLowerCase()
                                  .replace(
                                    /\s+/g,
                                    "-"
                                  )}`
                              }
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


                        {/* Check In */}

                        <td>

                          <strong
                            className={
                              employee.checkIn === "—"
                                ? "muted"
                                : "green-time"
                            }
                          >
                            {employee.checkIn}
                          </strong>

                        </td>


                        {/* Check Out */}

                        <td>

                          <strong className="normal-time">
                            {employee.checkOut}
                          </strong>

                        </td>


                        {/* Hours */}

                        <td>

                          <strong>
                            {employee.hours}
                          </strong>

                        </td>


                        {/* Status */}

                        <td>

                          <span
                            className={
                              `attendance-status ${employee.status
                                .toLowerCase()
                                .replace(
                                  /\s+/g,
                                  "-"
                                )}`
                            }
                          >
                            ● {employee.status}
                          </span>

                        </td>


                        {/* Activity */}

                        <td>

                          <div className="attendance-activity">

                            <strong>
                              {employee.lastActivity}
                            </strong>

                            <small>
                              {employee.status ===
                              "Working"
                                ? "Updated just now"
                                : employee.status ===
                                  "Present"
                                ? "Checked out"
                                : employee.status ===
                                  "Late"
                                ? "Checked in late"
                                : employee.status ===
                                  "Absent"
                                ? "Today"
                                : "Today"}
                            </small>

                          </div>

                        </td>


                        {/* Action */}

                        <td>

                          <button
                            type="button"
                            className="attendance-action"
                            onClick={(event) => {

                              event.stopPropagation();

                              setSelectedEmployee(
                                employee
                              );

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


            {/* TABLE FOOTER */}

            <div className="attendance-table-footer">

              <span>
                Showing 1 to 8 of 12 members
              </span>

              <div className="attendance-pagination">

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


              <div className="attendance-page-size">

                <span>
                  Show
                </span>

                <select defaultValue="10">

                  <option value="10">
                    10
                  </option>

                  <option value="20">
                    20
                  </option>

                </select>

                <span>
                  per page
                </span>

              </div>

            </div>

          </div>


          {/* =================================================
             BOTTOM INFORMATION
          ================================================= */}

          <div className="attendance-bottom-grid">


            {/* TODAY SUMMARY */}

            <div className="attendance-small-card">

              <h3>
                Today's Summary
              </h3>

              <div className="attendance-summary-content">

                <div className="attendance-donut">

                  <div>
                    <strong>
                      75%
                    </strong>

                    <small>
                      Present Rate
                    </small>
                  </div>

                </div>


                <div className="attendance-legend">

                  <Legend
                    type="green"
                    text="Present"
                    value="9 (75%)"
                  />

                  <Legend
                    type="orange"
                    text="Late"
                    value="2 (17%)"
                  />

                  <Legend
                    type="blue"
                    text="On Leave"
                    value="2 (17%)"
                  />

                  <Legend
                    type="red"
                    text="Absent"
                    value="1 (8%)"
                  />

                </div>

              </div>

            </div>


            {/* AVERAGE HOURS */}

            <div className="attendance-small-card">

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


            {/* ATTENDANCE TREND */}

            <div className="attendance-small-card">

              <h3>
                Attendance Trend
                <span>
                  {" "}(This Month)
                </span>
              </h3>

              <div className="attendance-chart">

                <div className="chart-bars">

                  <span style={{ height: "45%" }}>
                    86%
                  </span>

                  <span style={{ height: "65%" }}>
                    90%
                  </span>

                  <span style={{ height: "80%" }}>
                    93%
                  </span>

                  <span style={{ height: "90%" }}>
                    95%
                  </span>

                </div>

                <div className="chart-bottom">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                </div>

              </div>

            </div>


            {/* NEEDS ATTENTION */}

            <div className="attendance-small-card">

              <h3>
                Needs Attention
              </h3>

              <div className="attention-list">

                <Attention
                  initials="RV"
                  name="Rahul Verma"
                  text="Absent today"
                  badge="No check-in"
                  type="red"
                />

                <Attention
                  initials="NP"
                  name="Neha Patel"
                  text="Checked in at 10:12 AM"
                  badge="48 min late"
                  type="orange"
                />

                <Attention
                  initials="AM"
                  name="Anjali Mehta"
                  text="Checked in at 10:20 AM"
                  badge="56 min late"
                  type="orange"
                />

              </div>

              <button
                type="button"
                className="attendance-view-all"
              >
                View All →
              </button>

            </div>

          </div>

        </div>


        {/* =================================================
           RIGHT DETAILS
        ================================================= */}

        {selectedEmployee && (

          <aside className="attendance-details-panel">


            {/* DETAILS HEADER */}

            <div className="details-header">

              <strong>
                Employee Attendance Details
              </strong>

              <button
                type="button"
                onClick={() =>
                  setSelectedEmployee(null)
                }
              >
                ×
              </button>

            </div>


            {/* PROFILE */}

            <div className="details-profile">

              <div
                className={
                  `details-avatar ${selectedEmployee.status
                    .toLowerCase()
                    .replace(
                      /\s+/g,
                      "-"
                    )}`
                }
              >
                {selectedEmployee.initials}
              </div>


              <div className="details-person">

                <strong>
                  {selectedEmployee.name}
                </strong>

                <small>
                  {selectedEmployee.role} •{" "}
                  {selectedEmployee.id}
                </small>

              </div>


              <span
                className={
                  `details-status ${selectedEmployee.status
                    .toLowerCase()
                    .replace(
                      /\s+/g,
                      "-"
                    )}`
                }
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

              <DetailRow
                label="Check In"
                value={selectedEmployee.checkIn}
                green
              />

              <DetailRow
                label="Check Out"
                value={selectedEmployee.checkOut}
              />

              <DetailRow
                label="Working Hours"
                value={selectedEmployee.hours}
                green
              />

              <DetailRow
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

              <div className="monthly-grid">

                <Month
                  title="Present"
                  value="21 Days"
                  type="green"
                />

                <Month
                  title="Late"
                  value="2 Days"
                  type="orange"
                />

                <Month
                  title="Absent"
                  value="1 Day"
                  type="red"
                />

                <Month
                  title="On Leave"
                  value="2 Days"
                  type="blue"
                />

              </div>

            </div>


            {/* RATE */}

            <div className="details-section">

              <div className="rate-heading">

                <span>
                  Attendance
                </span>

                <strong>
                  95%
                </strong>

              </div>

              <div className="rate-bar">

                <span
                  style={{
                    width: "95%",
                  }}
                />

              </div>

            </div>


            {/* TIMELINE */}

            <div className="details-section">

              <h3>
                Today's Timeline
              </h3>

              <Timeline
                time="09:12 AM"
                text="Checked In"
              />

              <Timeline
                time="09:12 AM"
                text="Work Started"
              />

              <Timeline
                time="01:15 PM"
                text="Break Started"
              />

              <Timeline
                time="01:45 PM"
                text="Break Ended"
              />

              <Timeline
                time="Now"
                text="Working • 8h 12m"
                last
              />

            </div>


            <button
              type="button"
              className="full-attendance-btn"
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
   STAT CARD
===================================================== */

function StatCard({
  icon,
  type,
  title,
  value,
  footer,
}) {
  return (
    <div className="attendance-stat-card">

      <div
        className={
          `attendance-stat-icon ${type}`
        }
      >
        {icon}
      </div>

      <div className="attendance-stat-text">

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
   LEGEND
===================================================== */

function Legend({
  type,
  text,
  value,
}) {
  return (
    <div className="attendance-legend-row">

      <span
        className={`legend-dot ${type}`}
      />

      <span>
        {text}
      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   ATTENTION
===================================================== */

function Attention({
  initials,
  name,
  text,
  badge,
  type,
}) {
  return (
    <div className="attention-item">

      <div
        className={
          `attention-avatar ${type}`
        }
      >
        {initials}
      </div>

      <div className="attention-info">

        <strong>
          {name}
        </strong>

        <small>
          {text}
        </small>

      </div>

      <span
        className={
          `attention-badge ${type}`
        }
      >
        {badge}
      </span>

    </div>
  );
}


/* =====================================================
   DETAIL ROW
===================================================== */

function DetailRow({
  label,
  value,
  green,
}) {
  return (
    <div className="detail-row">

      <span>
        {label}
      </span>

      <strong
        className={
          green
            ? "green-text"
            : ""
        }
      >
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   MONTH
===================================================== */

function Month({
  title,
  value,
  type,
}) {
  return (
    <div
      className={
        `month-card ${type}`
      }
    >

      <span>
        {title}
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

function Timeline({
  time,
  text,
  last,
}) {
  return (
    <div className="timeline-row">

      <span className="timeline-time">
        {time}
      </span>

      <span
        className={
          `timeline-circle ${last ? "last" : ""}`
        }
      />

      <strong>
        {text}
      </strong>

    </div>
  );
}


/* =====================================================
   EXPORT
===================================================== */

export default ManagerAttendance;