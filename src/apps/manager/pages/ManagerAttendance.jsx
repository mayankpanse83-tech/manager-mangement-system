import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUmbrellaBeach,
  FaClock,
  FaChevronDown,
  FaEllipsisV,
  FaArrowUp,
  FaCalendarAlt,
  FaTimes,
} from "react-icons/fa";

import "./ManagerAttendance.css";

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    initials: "AS",
    status: "Working",
    checkIn: "09:12 AM",
    checkOut: "—",
    hours: "8h 12m",
    activity: "Working now",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    initials: "PS",
    status: "Present",
    checkIn: "09:05 AM",
    checkOut: "06:02 PM",
    hours: "8h 57m",
    activity: "Checked out",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    initials: "RV",
    status: "On Leave",
    checkIn: "—",
    checkOut: "—",
    hours: "—",
    activity: "Sick Leave",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    initials: "NP",
    status: "Late",
    checkIn: "10:12 AM",
    checkOut: "—",
    hours: "7h 10m",
    activity: "Working now",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    initials: "VJ",
    status: "Present",
    checkIn: "09:18 AM",
    checkOut: "06:10 PM",
    hours: "8h 52m",
    activity: "Checked out",
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    initials: "AM",
    status: "Late",
    checkIn: "10:20 AM",
    checkOut: "—",
    hours: "6h 45m",
    activity: "Working now",
  },
  {
    id: "EMP-007",
    name: "Karan Malhotra",
    role: "QA Engineer",
    initials: "KM",
    status: "Absent",
    checkIn: "—",
    checkOut: "—",
    hours: "—",
    activity: "No check-in",
  },
  {
    id: "EMP-008",
    name: "Pooja Sharma",
    role: "HR Executive",
    initials: "PS",
    status: "Present",
    checkIn: "09:08 AM",
    checkOut: "06:01 PM",
    hours: "8h 53m",
    activity: "Checked out",
  },
];

function getStatusClass(status) {
  return status.toLowerCase().replace(/\s+/g, "-");
}

function StatCard({ type, icon, title, value, sub }) {
  return (
    <div className="attendance-stat-card">
      <div className={`attendance-stat-icon ${type}`}>
        {icon}
      </div>

      <div className="attendance-stat-content">
        <span>{title}</span>
        <strong>{value}</strong>
        <small>{sub}</small>
      </div>
    </div>
  );
}

function Tab({ label, count, active, onClick }) {
  return (
    <button
      type="button"
      className={active ? "active" : ""}
      onClick={onClick}
    >
      <span>{label}</span>
      <small>{count}</small>
    </button>
  );
}

function Legend({ type, text, value }) {
  return (
    <div className="legend-row">
      <span className={`legend-dot ${type}`} />
      <span>{text}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Attention({ initials, name, detail, badge, type }) {
  return (
    <div className="attention-item">
      <div className={`attention-avatar ${type}`}>
        {initials}
      </div>

      <div className="attention-info">
        <strong>{name}</strong>
        <small>{detail}</small>
      </div>

      <span className={`attention-badge ${type}`}>
        {badge}
      </span>
    </div>
  );
}

function DetailRow({ label, value, green }) {
  return (
    <div className="detail-row">
      <span>{label}</span>
      <strong className={green ? "green-text" : ""}>
        {value}
      </strong>
    </div>
  );
}

function MonthCard({ type, title, value }) {
  return (
    <div className={`month-card ${type}`}>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  );
}

function TimelineRow({ time, text, last }) {
  return (
    <div className="timeline-row">
      <span className="timeline-time">{time}</span>

      <span className={`timeline-marker ${last ? "last" : ""}`} />

      <strong className={last ? "green-text" : ""}>
        {text}
      </strong>
    </div>
  );
}

function ManagerAttendance() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(employees[0]);

  const filteredEmployees = employees.filter((employee) => {
    const q = search.toLowerCase().trim();

    const matchesSearch =
      employee.name.toLowerCase().includes(q) ||
      employee.id.toLowerCase().includes(q);

    const matchesTab =
      activeTab === "All" ||
      employee.status === activeTab;

    return matchesSearch && matchesTab;
  });

  return (
    <div className="attendance-page">

      {/* HEADER */}
      <div className="attendance-page-header">

        <div className="attendance-heading">
          <h1>Team Attendance</h1>

          <p>
            Monitor your team's attendance, working hours
            and daily status.
          </p>
        </div>

        <div className="attendance-page-actions">

          <button
            type="button"
            className="attendance-date"
          >
            <span>Today, 29 Aug 2026</span>
            <FaChevronDown />
          </button>

          <div className="attendance-search-top">
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
            className="attendance-action-btn"
          >
            <FaFilter />
            Filter
          </button>

          <button
            type="button"
            className="attendance-action-btn"
          >
            <FaDownload />
            Export
          </button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="attendance-stats">

        <StatCard
          type="purple"
          icon={<FaUsers />}
          title="Team Members"
          value="12"
          sub="Total Members"
        />

        <StatCard
          type="green"
          icon={<FaUserCheck />}
          title="Present"
          value="9"
          sub="75% of team"
        />

        <StatCard
          type="red"
          icon={<FaUserTimes />}
          title="Absent"
          value="1"
          sub="8% of team"
        />

        <StatCard
          type="orange"
          icon={<FaUmbrellaBeach />}
          title="On Leave"
          value="2"
          sub="17% of team"
        />

        <StatCard
          type="blue"
          icon={<FaClock />}
          title="Late"
          value="2"
          sub="17% of team"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="attendance-layout">

        {/* LEFT SIDE */}
        <div className="attendance-left">

          {/* TABS */}
          <div className="attendance-tabs">

            <Tab
              label="All"
              count="12"
              active={activeTab === "All"}
              onClick={() => setActiveTab("All")}
            />

            <Tab
              label="Working"
              count="9"
              active={activeTab === "Working"}
              onClick={() => setActiveTab("Working")}
            />

            <Tab
              label="Late"
              count="2"
              active={activeTab === "Late"}
              onClick={() => setActiveTab("Late")}
            />

            <Tab
              label="On Leave"
              count="2"
              active={activeTab === "On Leave"}
              onClick={() => setActiveTab("On Leave")}
            />

            <Tab
              label="Absent"
              count="1"
              active={activeTab === "Absent"}
              onClick={() => setActiveTab("Absent")}
            />
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
                  {filteredEmployees.map((employee) => (

                    <tr
                      key={employee.id}
                      className={
                        selected?.id === employee.id
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        setSelected(employee)
                      }
                    >

                      <td>
                        <div className="attendance-employee">

                          <div
                            className={
                              `attendance-avatar ${getStatusClass(
                                employee.status
                              )}`
                            }
                          >
                            {employee.initials}
                          </div>

                          <div className="attendance-employee-info">
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
                        <strong
                          className={
                            employee.checkIn === "—"
                              ? "muted"
                              : "green-value"
                          }
                        >
                          {employee.checkIn}
                        </strong>
                      </td>

                      <td>
                        <strong>
                          {employee.checkOut}
                        </strong>
                      </td>

                      <td>
                        <strong>
                          {employee.hours}
                        </strong>
                      </td>

                      <td>
                        <span
                          className={
                            `attendance-status ${getStatusClass(
                              employee.status
                            )}`
                          }
                        >
                          ● {employee.status}
                        </span>
                      </td>

                      <td>
                        <div className="attendance-last">
                          <strong>
                            {employee.activity}
                          </strong>

                          <small>
                            {employee.status === "Working"
                              ? "Updated just now"
                              : employee.status === "Present"
                              ? "Checked out"
                              : employee.status === "Late"
                              ? "Checked in late"
                              : "Today"}
                          </small>
                        </div>
                      </td>

                      <td>
                        <button
                          type="button"
                          className="attendance-more"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelected(employee);
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

            <div className="attendance-table-footer">

              <span>
                Showing 1 to 8 of 12 members
              </span>

              <div className="attendance-pagination">
                <button>←</button>
                <button className="active">1</button>
                <button>2</button>
                <button>→</button>
              </div>

              <div className="attendance-per-page">
                <span>Show</span>

                <select defaultValue="10">
                  <option value="10">10</option>
                  <option value="20">20</option>
                </select>

                <span>per page</span>
              </div>

            </div>
          </div>

          {/* LOWER CARDS */}
          <div className="attendance-lower-grid">

            {/* SUMMARY */}
            <div className="attendance-small-card">
              <h3>Today's Summary</h3>

              <div className="summary-layout">

                <div className="summary-donut">
                  <div className="summary-donut-inner">
                    <strong>75%</strong>
                    <small>Present Rate</small>
                  </div>
                </div>

                <div className="summary-legend">

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

            {/* AVERAGE */}
            <div className="attendance-small-card">
              <h3>Average Working Hours</h3>

              <div className="average-working">
                <strong>8h 14m</strong>

                <span>
                  <FaArrowUp />
                  5m from yesterday
                </span>
              </div>
            </div>

            {/* TREND */}
            <div className="attendance-small-card">
              <h3>
                Attendance Trend
                <span> (This Month)</span>
              </h3>

              <div className="trend-chart">

                <div className="trend-bars">
                  <div style={{ height: "48%" }}>
                    <span>86%</span>
                  </div>

                  <div style={{ height: "65%" }}>
                    <span>90%</span>
                  </div>

                  <div style={{ height: "78%" }}>
                    <span>93%</span>
                  </div>

                  <div style={{ height: "90%" }}>
                    <span>95%</span>
                  </div>
                </div>

                <div className="trend-labels">
                  <span>W1</span>
                  <span>W2</span>
                  <span>W3</span>
                  <span>W4</span>
                </div>

              </div>
            </div>

            {/* ATTENTION */}
            <div className="attendance-small-card">
              <h3>Needs Attention</h3>

              <div className="attention-list">

                <Attention
                  initials="RV"
                  name="Rahul Verma"
                  detail="Absent today"
                  badge="No check-in"
                  type="red"
                />

                <Attention
                  initials="NP"
                  name="Neha Patel"
                  detail="Checked in at 10:12 AM"
                  badge="48 min late"
                  type="orange"
                />

                <Attention
                  initials="AM"
                  name="Anjali Mehta"
                  detail="Checked in at 10:20 AM"
                  badge="56 min late"
                  type="orange"
                />

              </div>

              <button
                type="button"
                className="attention-view-all"
              >
                View All →
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT DETAILS */}
        {selected && (
          <aside className="attendance-details">

            <div className="details-header">
              <strong>
                Employee Attendance Details
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

            <div className="details-profile">

              <div
                className={
                  `details-avatar ${getStatusClass(
                    selected.status
                  )}`
                }
              >
                {selected.initials}
              </div>

              <div className="details-person">
                <strong>{selected.name}</strong>

                <small>
                  {selected.role} • {selected.id}
                </small>
              </div>

              <span
                className={
                  `details-status ${getStatusClass(
                    selected.status
                  )}`
                }
              >
                {selected.status}
              </span>

            </div>

            <div className="details-tabs">
              <button className="active">
                Overview
              </button>

              <button>Monthly View</button>
              <button>Timeline</button>
              <button>History</button>
            </div>

            <div className="details-section">
              <h3>Today's Attendance</h3>

              <DetailRow
                label="Check In"
                value={selected.checkIn}
                green
              />

              <DetailRow
                label="Check Out"
                value={selected.checkOut}
              />

              <DetailRow
                label="Working Hours"
                value={selected.hours}
                green
              />

              <DetailRow
                label="Status"
                value={selected.status}
                green
              />
            </div>

            <div className="details-section">
              <h3>This Month Overview</h3>

              <div className="month-grid">

                <MonthCard
                  type="green"
                  title="Present"
                  value="21 Days"
                />

                <MonthCard
                  type="orange"
                  title="Late"
                  value="2 Days"
                />

                <MonthCard
                  type="red"
                  title="Absent"
                  value="1 Day"
                />

                <MonthCard
                  type="blue"
                  title="On Leave"
                  value="2 Days"
                />

              </div>
            </div>

            <div className="details-section">

              <div className="attendance-rate">
                <span>Attendance</span>
                <strong>95%</strong>
              </div>

              <div className="attendance-rate-bar">
                <span style={{ width: "95%" }} />
              </div>

            </div>

            <div className="details-section">
              <h3>Today's Timeline</h3>

              <TimelineRow
                time="09:12 AM"
                text="Checked In"
              />

              <TimelineRow
                time="09:18 AM"
                text="Work Started"
              />

              <TimelineRow
                time="01:15 PM"
                text="Break Started"
              />

              <TimelineRow
                time="01:45 PM"
                text="Break Ended"
              />

              <TimelineRow
                time="Now"
                text="Working • 8h 12m"
                last
              />
            </div>

            <button
              type="button"
              className="full-attendance"
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

export default ManagerAttendance;