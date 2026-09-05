import React, { useState } from "react";

import {
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
  FaCalendarAlt,
  FaEllipsisV,
  FaInfoCircle,
  FaPaperclip,
  FaClipboardList,
  FaUmbrellaBeach,
  FaUsers,
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

  const [selectedRequest, setSelectedRequest] = useState(
    leaveRequests[0]
  );


  const filteredRequests = leaveRequests.filter((request) => {

    const matchesSearch =
      request.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      request.empId
        .toLowerCase()
        .includes(search.toLowerCase());


    if (activeTab === "All") {
      return matchesSearch;
    }

    if (activeTab === "Pending") {
      return (
        matchesSearch &&
        request.status === "Pending"
      );
    }

    if (activeTab === "Approved") {
      return (
        matchesSearch &&
        request.status === "Approved"
      );
    }

    if (activeTab === "Rejected") {
      return (
        matchesSearch &&
        request.status === "Rejected"
      );
    }

    return matchesSearch;
  });


  return (
    <div className="mlr-page">

      {/* =====================================================
          MAIN PAGE
      ===================================================== */}

      <main className="mlr-main">


        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mlr-header">

          <div className="mlr-heading">

            <h1>
              Leave Requests
            </h1>

            <p>
              Review and manage your team's leave requests.
            </p>

          </div>


          <div className="mlr-header-actions">


            <button className="mlr-date-btn">

              <FaCalendarAlt />

              <span>
                01 Aug 2026 – 31 Aug 2026
              </span>

              <FaChevronDown />

            </button>


            <div className="mlr-search-top">

              <FaSearch />

              <input
                type="text"
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

              <span>
                3
              </span>

            </div>


            <div className="mlr-header-user">

              <div className="mlr-header-avatar">
                RV
              </div>

              <div>

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

        </header>



        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="mlr-content">


          {/* =================================================
              LEFT
          ================================================= */}

          <section className="mlr-left">


            {/* =================================================
                STAT CARDS
            ================================================= */}

            <div className="mlr-stats">


              <StatCard
                icon={<FaClock />}
                iconClass="orange"
                title="Pending Requests"
                value="4"
                subtitle="Needs Action"
                subtitleClass="orange-text"
              />


              <StatCard
                icon={<FaCheck />}
                iconClass="green"
                title="Approved"
                value="18"
                subtitle="This Year"
                subtitleClass="green-text"
              />


              <StatCard
                icon={<FaTimes />}
                iconClass="red"
                title="Rejected"
                value="3"
                subtitle="This Year"
                subtitleClass="red-text"
              />


              <StatCard
                icon={<FaUsers />}
                iconClass="blue"
                title="On Leave Today"
                value="2"
                subtitle="Team Members"
              />


              <StatCard
                icon={<FaCalendarAlt />}
                iconClass="purple"
                title="Upcoming Leave"
                value="5"
                subtitle="Next 30 Days"
              />


            </div>



            {/* =================================================
                REQUEST PANEL
            ================================================= */}

            <div className="mlr-panel">


              {/* TABS */}

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
                    type="button"
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



              {/* FILTER ROW */}

              <div className="mlr-filters">


                <div className="mlr-search-box">

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


                <FilterSelect
                  label="Leave Type"
                  value="All Types"
                />


                <FilterSelect
                  label="Department"
                  value="All Departments"
                />


                <FilterSelect
                  label="Date Range"
                  value="Select Date Range"
                />


                <button
                  type="button"
                  className="mlr-clear"
                  onClick={() => {
                    setSearch("");
                    setActiveTab("All");
                  }}
                >
                  Clear Filters
                </button>

              </div>



              {/* TABLE */}

              <div className="mlr-table-scroll">

                <table className="mlr-table">

                  <thead>

                    <tr>

                      <th></th>

                      <th>
                        EMPLOYEE
                      </th>

                      <th>
                        LEAVE TYPE
                      </th>

                      <th>
                        DATES
                      </th>

                      <th>
                        DURATION
                      </th>

                      <th>
                        REASON
                      </th>

                      <th>
                        STATUS
                      </th>

                      <th>
                        SUBMITTED ON
                      </th>

                      <th>
                        ACTIONS
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredRequests.length === 0 ? (

                      <tr>

                        <td
                          colSpan="9"
                          className="mlr-empty"
                        >
                          No leave requests found.
                        </td>

                      </tr>

                    ) : (

                      filteredRequests.map(
                        (request) => (

                          <tr
                            key={request.id}
                            className={
                              selectedRequest.id ===
                              request.id
                                ? "selected-row"
                                : ""
                            }
                            onClick={() =>
                              setSelectedRequest(request)
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
                                    {request.empId}
                                    {" • "}
                                    {request.role}
                                  </small>

                                </div>

                              </div>

                            </td>


                            <td>

                              <span
                                className={`mlr-leave-type ${request.leaveType
                                  .toLowerCase()
                                  .replaceAll(" ", "-")}`}
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

                                <button
                                  type="button"
                                  className="mlr-view-btn"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedRequest(
                                      request
                                    );
                                  }}
                                >
                                  View
                                </button>


                                <button
                                  type="button"
                                  className="mlr-more"
                                  onClick={(e) =>
                                    e.stopPropagation()
                                  }
                                >
                                  <FaEllipsisV />
                                </button>

                              </div>

                            </td>

                          </tr>

                        )
                      )

                    )}

                  </tbody>

                </table>

              </div>



              {/* PAGINATION */}

              <div className="mlr-pagination">

                <span>
                  Showing 1 to{" "}
                  {filteredRequests.length}{" "}
                  of {filteredRequests.length} requests
                </span>


                <div className="mlr-page-buttons">

                  <button type="button">
                    ‹
                  </button>

                  <button
                    type="button"
                    className="active"
                  >
                    1
                  </button>

                  <button type="button">
                    ›
                  </button>

                </div>


                <div className="mlr-per-page">

                  Show

                  <select defaultValue="10">

                    <option value="10">
                      10
                    </option>

                    <option value="20">
                      20
                    </option>

                  </select>

                  per page

                </div>

              </div>

            </div>



            {/* =================================================
                BOTTOM CARDS
            ================================================= */}

            <div className="mlr-bottom-grid">


              {/* CALENDAR */}

              <div className="mlr-bottom-card">

                <div className="mlr-card-header">

                  <h3>
                    Team Leave Calendar
                  </h3>


                  <div className="mlr-calendar-controls">

                    <button type="button">
                      <FaChevronLeft />
                    </button>

                    <strong>
                      August 2026
                    </strong>

                    <button type="button">
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
                      "",
                      "",
                      "",
                      "",
                      "",
                      "",
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                      21,
                      22,
                      23,
                      24,
                      25,
                      26,
                      27,
                      28,
                      29,
                      30,
                      31,
                    ].map((day, index) => (

                      <div
                        key={index}
                        className={`calendar-day ${
                          day === 18 ||
                          day === 19
                            ? "pending-day"
                            : ""
                        } ${
                          day === 27
                            ? "approved-day"
                            : ""
                        }`}
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

                  <button type="button">
                    View All
                  </button>

                </div>


                <div className="mlr-upcoming">

                  <UpcomingItem
                    initials="RV"
                    color="orange-avatar"
                    name="Rahul Verma"
                    type="Sick Leave"
                    date="18 Aug – 19 Aug"
                    days="2 Days"
                  />

                  <UpcomingItem
                    initials="PS"
                    color="dark-avatar"
                    name="Priya Singh"
                    type="Casual Leave"
                    date="20 Aug"
                    days="1 Day"
                  />

                  <UpcomingItem
                    initials="NP"
                    color="green-avatar"
                    name="Neha Patel"
                    type="Paid Leave"
                    date="22 Aug"
                    days="1 Day"
                  />

                  <UpcomingItem
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

                      <strong>
                        12
                      </strong>

                      <span>
                        Team Members
                      </span>

                    </div>

                  </div>


                  <div className="availability-list">

                    <div>

                      <i className="available"></i>

                      <span>
                        Available
                      </span>

                      <strong>
                        9
                      </strong>

                    </div>


                    <div>

                      <i className="onleave"></i>

                      <span>
                        On Leave
                      </span>

                      <strong>
                        2
                      </strong>

                    </div>


                    <div>

                      <i className="late"></i>

                      <span>
                        Late
                      </span>

                      <strong>
                        1
                      </strong>

                    </div>

                  </div>

                </div>


                <div className="availability-note">

                  <FaInfoCircle />

                  2 team members are on leave today.

                  <span>
                    View Team Calendar →
                  </span>

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

              <button type="button">
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
                  {selectedRequest.empId}
                  {" • "}
                  {selectedRequest.role}
                </span>

              </div>


              <span className="mlr-details-status">
                Pending
              </span>

            </div>



            {/* LEAVE INFORMATION */}

            <section className="mlr-details-section">

              <h3>
                Leave Information
              </h3>


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



            {/* LEAVE BALANCE */}

            <section className="mlr-details-section">

              <h3>
                Leave Balance
              </h3>


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



            {/* ATTACHMENT */}

            <section className="mlr-details-section">

              <h3>
                Attachment
              </h3>


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



            {/* TIMELINE */}

            <section className="mlr-details-section">

              <h3>
                Request Timeline
              </h3>


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



            {/* MANAGER ACTION */}

            <section className="mlr-manager-action">

              <h3>
                Manager Action
              </h3>


              <textarea
                placeholder="Add a comment (optional)..."
              />


              <div className="mlr-approval-buttons">

                <button
                  type="button"
                  className="reject"
                >
                  <FaTimes />
                  Reject
                </button>


                <button
                  type="button"
                  className="approve"
                >
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
   STAT CARD
===================================================== */

function StatCard({
  icon,
  iconClass,
  title,
  value,
  subtitle,
  subtitleClass = "",
}) {
  return (
    <div className="mlr-stat-card">

      <div
        className={`mlr-stat-icon ${iconClass}`}
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

        <small className={subtitleClass}>
          {subtitle}
        </small>

      </div>

    </div>
  );
}


/* =====================================================
   FILTER SELECT
===================================================== */

function FilterSelect({
  label,
  value,
}) {
  return (
    <div className="mlr-select">

      <span>
        {label}
      </span>

      <strong>
        {value}
      </strong>

      <FaChevronDown />

    </div>
  );
}


/* =====================================================
   UPCOMING ITEM
===================================================== */

function UpcomingItem({
  initials,
  color,
  name,
  type,
  date,
  days,
}) {
  return (
    <div className="upcoming-item">

      <div
        className={`upcoming-avatar ${color}`}
      >
        {initials}
      </div>


      <div className="upcoming-info">

        <strong>
          {name}
        </strong>

        <span>
          {type}
        </span>

        <small>
          {date}
        </small>

      </div>


      <strong className="upcoming-days">
        {days}
      </strong>

    </div>
  );
}


/* =====================================================
   DETAIL ITEM
===================================================== */

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


/* =====================================================
   TIMELINE ITEM
===================================================== */

function TimelineItem({
  color,
  title,
  text,
}) {
  return (
    <div className="timeline-item">

      <div
        className={`timeline-dot ${color}`}
      >

        {color === "green" ? (
          <FaCheck />
        ) : (
          <FaClock />
        )}

      </div>


      <div>

        <strong>
          {title}
        </strong>

        <span>
          {text}
        </span>

      </div>

    </div>
  );
}


export default ManagerLeaveRequests;