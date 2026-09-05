import React, { useState } from "react";
import {
  FaHome,
  FaUsers,
  FaCalendarCheck,
  FaTasks,
  FaClipboardList,
  FaUmbrellaBeach,
  FaFileAlt,
  FaUser,
  FaCog,
  FaBell,
  FaSearch,
  FaFilter,
  FaDownload,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaCheck,
  FaClock,
  FaExclamationCircle,
  FaCalendarAlt,
  FaEllipsisV,
  FaInfoCircle,
  FaPaperclip,
  FaUserClock,
} from "react-icons/fa";

import "./ManagerLeaveRequests.css";

const leaveRequests = [
  {
    id: 1,
    name: "Rahul Verma",
    role: "Developer",
    empId: "EMP-003",
    initials: "RV",
    avatarClass: "orange-avatar",
    leaveType: "Sick Leave",
    dates: ["18 Aug 2026", "19 Aug 2026"],
    duration: "2 Days",
    reason: "Medical appointment",
    status: "Pending",
    submitted: "17 Aug 2026",
    time: "06:24 PM",
  },
  {
    id: 2,
    name: "Neha Patel",
    role: "QA Engineer",
    empId: "EMP-004",
    initials: "NP",
    avatarClass: "dark-avatar",
    leaveType: "Casual Leave",
    dates: ["22 Aug 2026"],
    duration: "1 Day",
    reason: "Family function",
    status: "Pending",
    submitted: "16 Aug 2026",
    time: "11:10 AM",
  },
  {
    id: 3,
    name: "Aman Sharma",
    role: "UI Designer",
    empId: "EMP-001",
    initials: "AS",
    avatarClass: "green-avatar",
    leaveType: "Paid Leave",
    dates: ["25 Aug 2026", "27 Aug 2026"],
    duration: "3 Days",
    reason: "Personal work",
    status: "Pending",
    submitted: "15 Aug 2026",
    time: "04:35 PM",
  },
  {
    id: 4,
    name: "Priya Singh",
    role: "Developer",
    empId: "EMP-002",
    initials: "PS",
    avatarClass: "brown-avatar",
    leaveType: "Half Day",
    dates: ["21 Aug 2026"],
    duration: "Half Day",
    reason: "Doctor consultation",
    status: "Pending",
    submitted: "15 Aug 2026",
    time: "01:20 PM",
  },
];

function ManagerLeaveRequests() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(leaveRequests[0]);

  const filteredRequests = leaveRequests.filter((request) => {
    const matchesSearch =
      request.name.toLowerCase().includes(search.toLowerCase()) ||
      request.empId.toLowerCase().includes(search.toLowerCase());

    if (activeTab === "All") return matchesSearch;

    if (activeTab === "Pending")
      return matchesSearch && request.status === "Pending";

    if (activeTab === "Approved")
      return matchesSearch && request.status === "Approved";

    if (activeTab === "Rejected")
      return matchesSearch && request.status === "Rejected";

    return matchesSearch;
  });

  return (
    <div className="mlr-page">

      {/* =================================================
          SIDEBAR
      ================================================= */}

      <aside className="mlr-sidebar">

        <div className="mlr-brand">
          <div className="mlr-logo">W</div>

          <div>
            <h2>WorkForce</h2>
            <span>Manager Workspace</span>
          </div>
        </div>

        <nav className="mlr-nav">

          <a href="/manager/dashboard">
            <FaHome />
            <span>Dashboard</span>
          </a>

          <a href="/manager/team">
            <FaUsers />
            <span>My Team</span>
          </a>

          <a href="/manager/attendance">
            <FaCalendarCheck />
            <span>Team Attendance</span>
          </a>

          <a href="/manager/tasks">
            <FaTasks />
            <span>Tasks</span>
          </a>

          <a href="/manager/daily-updates">
            <FaClipboardList />
            <span>Daily Updates</span>
          </a>

          <a
            href="/manager/leave"
            className="active"
          >
            <FaUmbrellaBeach />
            <span>Leave Requests</span>
          </a>

          <a href="/manager/reports">
            <FaFileAlt />
            <span>Reports</span>
          </a>

        </nav>

        <div className="mlr-sidebar-bottom">

          <a href="/manager/profile">
            <FaUser />
            <span>Profile</span>
          </a>

          <a href="/manager/settings">
            <FaCog />
            <span>Settings</span>
          </a>

        </div>

        <div className="mlr-help-box">

          <div>
            <strong>Need Help?</strong>

            <span>
              Contact admin or
              <br />
              send a request.
            </span>
          </div>

          <div className="mlr-help-icon">?</div>

          <button>
            Contact Admin
          </button>

        </div>

        <div className="mlr-user">

          <div className="mlr-user-avatar">
            RV
          </div>

          <div>
            <strong>Rajat Verma</strong>
            <span>Team Manager</span>
          </div>

          <FaChevronDown />

        </div>

      </aside>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="mlr-main">

        {/* HEADER */}

        <header className="mlr-header">

          <div>
            <h1>Leave Requests</h1>

            <p>
              Review and manage your team's leave requests.
            </p>
          </div>


          <div className="mlr-header-actions">

            <button className="mlr-date-btn">
              <FaCalendarAlt />
              01 Aug 2026 – 31 Aug 2026
              <FaChevronDown />
            </button>

            <div className="mlr-search-top">

              <FaSearch />

              <input
                placeholder="Search employee..."
              />

            </div>

            <button className="mlr-action-btn">
              <FaFilter />
              Filter
            </button>

            <button className="mlr-action-btn">
              <FaDownload />
              Export
              <FaChevronDown />
            </button>

            <div className="mlr-notification">
              <FaBell />
              <span>3</span>
            </div>

            <div className="mlr-header-user">

              <div className="mlr-header-avatar">
                RV
              </div>

              <div>
                <strong>Rajat Verma</strong>
                <small>Team Manager</small>
              </div>

              <FaChevronDown />

            </div>

          </div>

        </header>


        {/* CONTENT */}

        <div className="mlr-content">

          <section className="mlr-left">

            {/* =================================================
                STATS
            ================================================= */}

            <div className="mlr-stats">

              <div className="mlr-stat-card">

                <div className="mlr-stat-icon orange">
                  <FaClock />
                </div>

                <div>
                  <span>Pending Requests</span>
                  <strong>4</strong>
                  <small className="orange-text">
                    Needs Action
                  </small>
                </div>

              </div>


              <div className="mlr-stat-card">

                <div className="mlr-stat-icon green">
                  <FaCheck />
                </div>

                <div>
                  <span>Approved</span>
                  <strong>18</strong>
                  <small className="green-text">
                    This Year
                  </small>
                </div>

              </div>


              <div className="mlr-stat-card">

                <div className="mlr-stat-icon red">
                  <FaTimes />
                </div>

                <div>
                  <span>Rejected</span>
                  <strong>3</strong>
                  <small className="red-text">
                    This Year
                  </small>
                </div>

              </div>


              <div className="mlr-stat-card">

                <div className="mlr-stat-icon blue">
                  <FaUsers />
                </div>

                <div>
                  <span>On Leave Today</span>
                  <strong>2</strong>
                  <small>
                    Team Members
                  </small>
                </div>

              </div>


              <div className="mlr-stat-card">

                <div className="mlr-stat-icon purple">
                  <FaCalendarAlt />
                </div>

                <div>
                  <span>Upcoming Leave</span>
                  <strong>5</strong>
                  <small>
                    Next 30 Days
                  </small>
                </div>

              </div>

            </div>


            {/* =================================================
                REQUEST TABLE
            ================================================= */}

            <div className="mlr-panel">

              <div className="mlr-tabs">

                {[
                  ["All", 26],
                  ["Pending", 4],
                  ["Approved", 18],
                  ["Rejected", 3],
                  ["Cancelled", 1],
                ].map(([tab, count]) => (

                  <button
                    key={tab}
                    className={
                      activeTab === tab
                        ? "active"
                        : ""
                    }
                    onClick={() =>
                      setActiveTab(tab)
                    }
                  >
                    {tab} ({count})
                  </button>

                ))}

              </div>


              {/* FILTERS */}

              <div className="mlr-filters">

                <div className="mlr-search-box">

                  <FaSearch />

                  <input
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search by name or employee ID..."
                  />

                </div>

                <div className="mlr-select">

                  <span>Leave Type</span>
                  <strong>All Types</strong>

                  <FaChevronDown />

                </div>

                <div className="mlr-select">

                  <span>Department</span>
                  <strong>All Departments</strong>

                  <FaChevronDown />

                </div>

                <div className="mlr-select">

                  <span>Date Range</span>
                  <strong>Select Date Range</strong>

                  <FaChevronDown />

                </div>

                <button className="mlr-clear">
                  Clear Filters
                </button>

              </div>


              {/* TABLE */}

              <div className="mlr-table-scroll">

                <table className="mlr-table">

                  <thead>

                    <tr>
                      <th></th>
                      <th>EMPLOYEE</th>
                      <th>LEAVE TYPE</th>
                      <th>DATES</th>
                      <th>DURATION</th>
                      <th>REASON</th>
                      <th>STATUS</th>
                      <th>SUBMITTED ON</th>
                      <th>ACTIONS</th>
                    </tr>

                  </thead>

                  <tbody>

                    {filteredRequests.map((request) => (

                      <tr
                        key={request.id}
                        onClick={() =>
                          setSelectedRequest(request)
                        }
                        className={
                          selectedRequest.id === request.id
                            ? "selected-row"
                            : ""
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

                          <div className="mlr-employee">

                            <div
                              className={`mlr-avatar ${request.avatarClass}`}
                            >
                              {request.initials}
                            </div>

                            <div>
                              <strong>
                                {request.name}
                              </strong>

                              <small>
                                {request.empId} • {request.role}
                              </small>
                            </div>

                          </div>

                        </td>


                        <td>

                          <span
                            className={`mlr-leave-type ${request.leaveType
                              .toLowerCase()
                              .replace(" ", "-")}`}
                          >
                            {request.leaveType}
                          </span>

                        </td>


                        <td>

                          <div className="mlr-dates">

                            <span>
                              {request.dates[0]}
                            </span>

                            {request.dates[1] && (
                              <span>
                                {request.dates[1]}
                              </span>
                            )}

                          </div>

                        </td>


                        <td>
                          {request.duration}
                        </td>


                        <td>
                          {request.reason}
                        </td>


                        <td>

                          <span className="mlr-status pending">
                            {request.status}
                          </span>

                        </td>


                        <td>

                          <div className="mlr-submitted">

                            <span>
                              {request.submitted}
                            </span>

                            <small>
                              {request.time}
                            </small>

                          </div>

                        </td>


                        <td>

                          <div className="mlr-row-actions">

                            <button className="mlr-view-btn">
                              View
                            </button>

                            <button className="mlr-more">
                              <FaEllipsisV />
                            </button>

                          </div>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>


              {/* PAGINATION */}

              <div className="mlr-pagination">

                <span>
                  Showing 1 to 4 of 4 requests
                </span>

                <div>
                  <button>‹</button>
                  <button className="active">
                    1
                  </button>
                  <button>›</button>
                </div>

                <div className="mlr-per-page">
                  Show
                  <select>
                    <option>10</option>
                  </select>
                  per page
                </div>

              </div>

            </div>


            {/* =================================================
                LOWER CARDS
            ================================================= */}

            <div className="mlr-bottom-grid">

              {/* CALENDAR */}

              <div className="mlr-bottom-card">

                <div className="mlr-card-header">

                  <h3>
                    Team Leave Calendar
                  </h3>

                  <div>
                    <button>
                      <FaChevronLeft />
                    </button>

                    <strong>
                      August 2026
                    </strong>

                    <button>
                      <FaChevronRight />
                    </button>
                  </div>

                </div>


                <div className="mlr-calendar">

                  <div className="calendar-weekdays">
                    <span>Sun</span>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                  </div>

                  <div className="calendar-days">

                    {[
                      "", "", "", "", "", "",
                      1, 2, 3, 4, 5, 6, 7,
                      8, 9, 10, 11, 12, 13, 14,
                      15, 16, 17, 18, 19, 20, 21,
                      22, 23, 24, 25, 26, 27, 28,
                      29, 30, 31,
                    ].map((day, index) => (

                      <div
                        key={index}
                        className={
                          `calendar-day ${
                            day === 18 ||
                            day === 19
                              ? "pending-day"
                              : ""
                          } ${
                            day === 27
                              ? "approved-day"
                              : ""
                          }`
                        }
                      >
                        {day}
                      </div>

                    ))}

                  </div>

                </div>


                <div className="calendar-legend">

                  <span>
                    <i className="approved-dot"></i>
                    Approved Leave
                  </span>

                  <span>
                    <i className="pending-dot"></i>
                    Pending Leave
                  </span>

                  <span>
                    <i className="holiday-dot"></i>
                    Holiday
                  </span>

                </div>

              </div>


              {/* UPCOMING */}

              <div className="mlr-bottom-card">

                <div className="mlr-card-header">

                  <h3>
                    Upcoming Leave
                  </h3>

                  <button>
                    View All
                  </button>

                </div>


                <div className="mlr-upcoming">

                  <Upcoming
                    initials="RV"
                    color="orange-avatar"
                    name="Rahul Verma"
                    type="Sick Leave"
                    date="18 Aug – 19 Aug"
                    days="2 Days"
                  />

                  <Upcoming
                    initials="PS"
                    color="dark-avatar"
                    name="Priya Singh"
                    type="Casual Leave"
                    date="20 Aug"
                    days="1 Day"
                  />

                  <Upcoming
                    initials="NP"
                    color="green-avatar"
                    name="Neha Patel"
                    type="Paid Leave"
                    date="22 Aug"
                    days="1 Day"
                  />

                  <Upcoming
                    initials="AS"
                    color="brown-avatar"
                    name="Aman Sharma"
                    type="Sick Leave"
                    date="25 Aug – 27 Aug"
                    days="3 Days"
                  />

                </div>

              </div>


              {/* AVAILABILITY */}

              <div className="mlr-bottom-card">

                <div className="mlr-card-header">

                  <h3>
                    Team Availability
                    <FaInfoCircle />
                  </h3>

                </div>


                <div className="mlr-availability">

                  <div className="availability-donut">

                    <div>
                      <strong>12</strong>
                      <span>Team Members</span>
                    </div>

                  </div>


                  <div className="availability-list">

                    <div>
                      <i className="available"></i>
                      <span>Available</span>
                      <strong>9</strong>
                    </div>

                    <div>
                      <i className="onleave"></i>
                      <span>On Leave</span>
                      <strong>2</strong>
                    </div>

                    <div>
                      <i className="late"></i>
                      <span>Late</span>
                      <strong>1</strong>
                    </div>

                  </div>

                </div>


                <div className="availability-note">
                  <FaInfoCircle />
                  2 team members are on leave today.
                  <span>View Team Calendar →</span>
                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              RIGHT DETAILS
          ================================================= */}

          <aside className="mlr-details">

            <div className="mlr-details-header">

              <h2>
                Leave Request Details
              </h2>

              <button>
                <FaTimes />
              </button>

            </div>


            <div className="mlr-details-profile">

              <div className="mlr-details-avatar">
                {selectedRequest.initials}
              </div>

              <div>

                <strong>
                  {selectedRequest.name}
                </strong>

                <span>
                  {selectedRequest.empId} • {selectedRequest.role}
                </span>

              </div>

              <span className="mlr-details-status">
                Pending
              </span>

            </div>


            <section className="mlr-details-section">

              <h3>Leave Information</h3>

              <DetailItem
                icon={<FaCalendarAlt />}
                label="Leave Type"
                value={selectedRequest.leaveType}
                highlight
              />

              <DetailItem
                icon={<FaCalendarAlt />}
                label="Duration"
                value="18 Aug 2026 – 19 Aug 2026 (2 Days)"
              />

              <DetailItem
                icon={<FaClipboardList />}
                label="Reason"
                value={selectedRequest.reason}
              />

              <DetailItem
                icon={<FaClock />}
                label="Submitted On"
                value="17 Aug 2026 • 06:24 PM"
              />

            </section>


            <section className="mlr-details-section">

              <h3>Leave Balance</h3>

              <DetailItem
                icon={<FaUmbrellaBeach />}
                label="Sick Leave"
                value="5 / 8"
              />

              <DetailItem
                icon={<FaCheck />}
                label="After Approval"
                value="3 Days remaining"
              />

            </section>


            <section className="mlr-details-section">

              <h3>Attachment</h3>

              <div className="mlr-attachment">

                <div className="attachment-icon">
                  <FaPaperclip />
                </div>

                <div>
                  <strong>
                    medical-document.pdf
                  </strong>

                  <small>
                    2.4 MB
                  </small>
                </div>

                <FaDownload />

              </div>

            </section>


            <section className="mlr-details-section">

              <h3>Request Timeline</h3>

              <TimelineItem
                color="green"
                title="Request Submitted"
                text="17 Aug 2026 • 06:24 PM"
              />

              <TimelineItem
                color="purple"
                title="Waiting for Manager Approval"
                text="Current Status"
              />

            </section>


            <section className="mlr-manager-action">

              <h3>Manager Action</h3>

              <textarea
                placeholder="Add a comment (optional)..."
              ></textarea>

              <div className="mlr-approval-buttons">

                <button className="reject">
                  <FaTimes />
                  Reject
                </button>

                <button className="approve">
                  <FaCheck />
                  Approve
                </button>

              </div>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}


/* =====================================================
   COMPONENTS
===================================================== */

function Upcoming({
  initials,
  color,
  name,
  type,
  date,
  days,
}) {
  return (
    <div className="upcoming-item">

      <div className={`upcoming-avatar ${color}`}>
        {initials}
      </div>

      <div className="upcoming-info">

        <strong>{name}</strong>

        <span>{type}</span>

        <small>{date}</small>

      </div>

      <strong className="upcoming-days">
        {days}
      </strong>

    </div>
  );
}


function DetailItem({
  icon,
  label,
  value,
  highlight = false,
}) {
  return (
    <div className="detail-item">

      <div className="detail-item-icon">
        {icon}
      </div>

      <span>
        {label}
      </span>

      <strong
        className={
          highlight
            ? "highlight-value"
            : ""
        }
      >
        {value}
      </strong>

    </div>
  );
}


function TimelineItem({
  color,
  title,
  text,
}) {
  return (
    <div className="timeline-item">

      <div className={`timeline-dot ${color}`}>
        {color === "green" ? (
          <FaCheck />
        ) : (
          <FaClock />
        )}
      </div>

      <div>
        <strong>{title}</strong>
        <span>{text}</span>
      </div>

    </div>
  );
}

export default ManagerLeaveRequests;