import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiChevronDown,
  FiBell,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiUsers,
  FiCalendar,
  FiMoreVertical,
  FiArrowLeft,
  FiArrowRight,
  FiFileText,
  FiInfo,
  FiX,
  FiCheck,
} from "react-icons/fi";

import "./ManagerLeaveRequests.css";

const leaveRequests = [
  {
    id: 1,
    name: "Rahul Verma",
    initials: "RV",
    role: "EMP-003 • Developer",
    leaveType: "Sick Leave",
    type: "sick",
    dates: "18 Aug 2026 - 19 Aug 2026",
    duration: "2 Days",
    reason: "Medical appointment",
    status: "Pending",
    submittedDate: "17 Aug 2026",
    submittedTime: "06:24 PM",
  },
  {
    id: 2,
    name: "Neha Patel",
    initials: "NP",
    role: "EMP-004 • QA Engineer",
    leaveType: "Casual Leave",
    type: "casual",
    dates: "22 Aug 2026",
    duration: "1 Day",
    reason: "Family function",
    status: "Pending",
    submittedDate: "16 Aug 2026",
    submittedTime: "11:10 AM",
  },
  {
    id: 3,
    name: "Aman Sharma",
    initials: "AS",
    role: "EMP-001 • UI Designer",
    leaveType: "Paid Leave",
    type: "paid",
    dates: "25 Aug 2026 - 27 Aug 2026",
    duration: "3 Days",
    reason: "Personal work",
    status: "Pending",
    submittedDate: "15 Aug 2026",
    submittedTime: "04:35 PM",
  },
  {
    id: 4,
    name: "Priya Singh",
    initials: "PS",
    role: "EMP-002 • Developer",
    leaveType: "Half Day",
    type: "half",
    dates: "21 Aug 2026",
    duration: "Half Day",
    reason: "Doctor consultation",
    status: "Pending",
    submittedDate: "15 Aug 2026",
    submittedTime: "01:20 PM",
  },
];

function Avatar({ initials, large = false }) {
  return (
    <div className={`ml-avatar ${large ? "ml-avatar-large" : ""}`}>
      {initials}
    </div>
  );
}

function ManagerLeaveRequests() {
  const [selectedRequest, setSelectedRequest] = useState(
    leaveRequests[0]
  );

  const [activeTab, setActiveTab] = useState("Pending (4)");

  const stats = [
    {
      title: "Pending Requests",
      value: "4",
      text: "Needs Action",
      icon: <FiClock />,
      color: "orange",
    },
    {
      title: "Approved",
      value: "18",
      text: "This Year",
      icon: <FiCheckCircle />,
      color: "green",
    },
    {
      title: "Rejected",
      value: "3",
      text: "This Year",
      icon: <FiXCircle />,
      color: "red",
    },
    {
      title: "On Leave Today",
      value: "2",
      text: "Team Members",
      icon: <FiUsers />,
      color: "blue",
    },
    {
      title: "Upcoming Leave",
      value: "5",
      text: "Next 30 Days",
      icon: <FiCalendar />,
      color: "purple",
    },
  ];

  const tabs = [
    "All (26)",
    "Pending (4)",
    "Approved (18)",
    "Rejected (3)",
    "Cancelled (1)",
  ];

  return (
    <div className="manager-leave-page">

      {/* MAIN */}
      <div className="ml-main">

        {/* HEADER */}
        <div className="ml-header">

          <div className="ml-heading">
            <h1>Leave Requests</h1>
            <p>
              Review and manage your team's leave requests.
            </p>
          </div>

          <div className="ml-header-actions">

            <button className="ml-date-btn">
              <FiCalendar />
              <span>01 Aug 2026 - 31 Aug 2026</span>
              <FiChevronDown />
            </button>

            <div className="ml-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search employee..."
              />
            </div>

            <button className="ml-action-btn">
              <FiFilter />
              Filter
            </button>

            <button className="ml-action-btn">
              <FiDownload />
              Export
              <FiChevronDown />
            </button>

            <div className="ml-notification">
              <FiBell />
              <span>3</span>
            </div>

            <Avatar initials="RV" />

            <div className="ml-manager">
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>

            <FiChevronDown className="ml-manager-arrow" />

          </div>

        </div>


        {/* STATS */}
        <div className="ml-stats">

          {stats.map((item, index) => (

            <div className="ml-stat-card" key={index}>

              <div className={`ml-stat-icon ${item.color}`}>
                {item.icon}
              </div>

              <div>
                <p>{item.title}</p>
                <h2>{item.value}</h2>
                <small className={item.color}>
                  {item.text}
                </small>
              </div>

            </div>

          ))}

        </div>


        {/* TABS */}
        <div className="ml-tabs">

          {tabs.map((tab) => (

            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                activeTab === tab ? "active" : ""
              }
            >
              {tab}
            </button>

          ))}

        </div>


        {/* FILTERS */}
        <div className="ml-filters">

          <div className="ml-table-search">
            <FiSearch />

            <input
              placeholder="Search by name or employee ID..."
            />
          </div>


          <button className="ml-select">

            <span>
              <small>Leave Type</small>
              All Types
            </span>

            <FiChevronDown />

          </button>


          <button className="ml-select">

            <span>
              <small>Department</small>
              All Departments
            </span>

            <FiChevronDown />

          </button>


          <button className="ml-select">

            <span>
              <small>Date Range</small>
              Select Date Range
            </span>

            <FiChevronDown />

          </button>


          <button className="ml-clear">
            Clear Filters
          </button>

        </div>


        {/* TABLE */}
        <div className="ml-table-card">

          <div className="ml-table">

            <div className="ml-row ml-table-head">

              <div>
                <input type="checkbox" />
              </div>

              <div>EMPLOYEE</div>
              <div>LEAVE TYPE</div>
              <div>DATES</div>
              <div>DURATION</div>
              <div>REASON</div>
              <div>STATUS</div>
              <div>SUBMITTED ON</div>
              <div>ACTIONS</div>

            </div>


            {leaveRequests.map((request) => (

              <div
                className={`ml-row ml-data-row ${
                  selectedRequest.id === request.id
                    ? "selected"
                    : ""
                }`}
                key={request.id}
              >

                <div>
                  <input type="checkbox" />
                </div>


                <div
                  className="ml-employee"
                  onClick={() =>
                    setSelectedRequest(request)
                  }
                >

                  <Avatar initials={request.initials} />

                  <div>
                    <strong>{request.name}</strong>
                    <small>{request.role}</small>
                  </div>

                </div>


                <div>
                  <span
                    className={`ml-leave-tag ${request.type}`}
                  >
                    {request.leaveType}
                  </span>
                </div>


                <div className="ml-date-text">
                  {request.dates}
                </div>


                <div>{request.duration}</div>


                <div>{request.reason}</div>


                <div>
                  <span className="ml-status pending">
                    {request.status}
                  </span>
                </div>


                <div className="ml-submitted">
                  <span>{request.submittedDate}</span>
                  <small>{request.submittedTime}</small>
                </div>


                <div className="ml-actions">

                  <button
                    onClick={() =>
                      setSelectedRequest(request)
                    }
                  >
                    View
                  </button>

                  <FiMoreVertical />

                </div>

              </div>

            ))}

          </div>


          {/* PAGINATION */}
          <div className="ml-pagination">

            <span>
              Showing 1 to 4 of 4 requests
            </span>

            <div className="ml-page-buttons">

              <button>
                <FiArrowLeft />
              </button>

              <button className="page-active">
                1
              </button>

              <button>
                <FiArrowRight />
              </button>

            </div>


            <div className="ml-per-page">
              Show

              <select defaultValue="10">
                <option value="10">10</option>
              </select>

              per page
            </div>

          </div>

        </div>


        {/* BOTTOM */}
        <div className="ml-bottom-grid">


          {/* CALENDAR */}
          <div className="ml-widget ml-calendar-widget">

            <div className="ml-widget-title">

              <h3>Team Leave Calendar</h3>

              <div className="ml-month-controls">
                <button>
                  <FiArrowLeft />
                </button>

                <strong>August 2026</strong>

                <button>
                  <FiArrowRight />
                </button>
              </div>

            </div>


            <div className="ml-weekdays">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>


            <div className="ml-calendar-grid">

              {[
                "", "", "", "", "", "", 1,
                2, 3, 4, 5, 6, 7, 8,
                9, 10, 11, 12, 13, 14, 15,
                16, 17, 18, 19, 20, 21, 22,
                23, 24, 25, 26, 27, 28, 29,
                30, 31,
              ].map((day, index) => (

                <span
                  key={index}
                  className={
                    [18, 19].includes(day)
                      ? "approved-day"
                      : [21, 25, 26, 27].includes(day)
                      ? "pending-day"
                      : ""
                  }
                >
                  {day}
                </span>

              ))}

            </div>


            <div className="ml-calendar-legend">
              <span>
                <i className="approved-dot" />
                Approved Leave
              </span>

              <span>
                <i className="pending-dot" />
                Pending Leave
              </span>

              <span>
                <i className="holiday-dot" />
                Holiday
              </span>
            </div>

          </div>


          {/* UPCOMING LEAVE */}
          <div className="ml-widget">

            <div className="ml-widget-title">
              <h3>Upcoming Leave (Next 10 Days)</h3>

              <button className="ml-view-all">
                View All
              </button>
            </div>


            <div className="ml-upcoming-list">

              <div className="ml-upcoming-row">

                <Avatar initials="RV" />

                <div>
                  <strong>Rahul Verma</strong>

                  <span className="ml-leave-tag sick">
                    Sick Leave
                  </span>

                  <small>18 Aug - 19 Aug</small>
                </div>

                <b>2 Days</b>

              </div>


              <div className="ml-upcoming-row">

                <Avatar initials="PS" />

                <div>
                  <strong>Priya Singh</strong>

                  <span className="ml-leave-tag casual">
                    Casual Leave
                  </span>

                  <small>20 Aug 2026</small>
                </div>

                <b>1 Day</b>

              </div>


              <div className="ml-upcoming-row">

                <Avatar initials="NP" />

                <div>
                  <strong>Neha Patel</strong>

                  <span className="ml-leave-tag paid">
                    Paid Leave
                  </span>

                  <small>22 Aug 2026</small>
                </div>

                <b>1 Day</b>

              </div>


              <div className="ml-upcoming-row">

                <Avatar initials="AS" />

                <div>
                  <strong>Aman Sharma</strong>

                  <span className="ml-leave-tag sick">
                    Sick Leave
                  </span>

                  <small>25 Aug - 27 Aug</small>
                </div>

                <b>3 Days</b>

              </div>

            </div>

          </div>


          {/* TEAM AVAILABILITY */}
          <div className="ml-widget ml-availability-widget">

            <div className="ml-widget-title">

              <h3>
                Team Availability
                <FiInfo />
              </h3>

            </div>


            <div className="ml-availability-content">

              <div className="ml-donut">

                <div className="ml-donut-center">
                  <strong>12</strong>
                  <span>Team Members</span>
                </div>

              </div>


              <div className="ml-availability-list">

                <div>
                  <span className="green-dot" />
                  Available
                  <b>9</b>
                </div>

                <div>
                  <span className="blue-dot" />
                  On Leave
                  <b>2</b>
                </div>

                <div>
                  <span className="orange-dot" />
                  Late
                  <b>1</b>
                </div>

              </div>

            </div>


            <div className="ml-availability-info">

              <FiInfo />

              <div>
                <strong>
                  2 team members are on leave today.
                </strong>

                <button>
                  View Team Calendar →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* RIGHT PANEL */}
      <aside className="ml-right-panel">

        <div className="ml-detail-header">

          <h2>Leave Request Details</h2>

          <button>
            <FiX />
          </button>

        </div>


        {/* PROFILE */}
        <div className="ml-detail-person">

          <Avatar
            initials={selectedRequest.initials}
            large
          />

          <div>
            <strong>{selectedRequest.name}</strong>
            <span>{selectedRequest.role}</span>
          </div>

          <b>Pending</b>

        </div>


        {/* LEAVE INFO */}
        <div className="ml-detail-section">

          <div className="ml-detail-row">
            <FiCalendar />

            <div>
              <small>Leave Type</small>
              <span>{selectedRequest.leaveType}</span>
            </div>
          </div>


          <div className="ml-detail-row">
            <FiCalendar />

            <div>
              <small>Duration</small>
              <span>
                {selectedRequest.dates}
                {" "}({selectedRequest.duration})
              </span>
            </div>
          </div>


          <div className="ml-detail-row">
            <FiFileText />

            <div>
              <small>Reason</small>
              <span>{selectedRequest.reason}</span>
            </div>
          </div>


          <div className="ml-detail-row">
            <FiCalendar />

            <div>
              <small>Submitted On</small>
              <span>
                {selectedRequest.submittedDate}
                {" - "}
                {selectedRequest.submittedTime}
              </span>
            </div>
          </div>

        </div>


        {/* LEAVE BALANCE */}
        <div className="ml-detail-section">

          <h3>Leave Balance</h3>

          <div className="ml-balance-row">
            <FiCalendar />

            <span>Sick Leave</span>

            <b>5 / 8 Days</b>
          </div>

          <div className="ml-balance-row">
            <FiCalendar />

            <span>After Approval</span>

            <b>3 Days remaining</b>
          </div>

        </div>


        {/* ATTACHMENT */}
        <div className="ml-detail-section">

          <h3>Attachment</h3>

          <div className="ml-attachment">

            <FiFileText />

            <div>
              <strong>medical-document.pdf</strong>
              <small>2.4 MB</small>
            </div>

            <FiDownload />

          </div>

        </div>


        {/* TIMELINE */}
        <div className="ml-detail-section">

          <h3>Request Timeline</h3>

          <div className="ml-timeline">

            <div className="timeline-item done">

              <i />

              <div>
                <strong>Request Submitted</strong>
                <span>
                  17 Aug 2026 • 06:24 PM
                </span>
              </div>

            </div>


            <div className="timeline-item waiting">

              <i />

              <div>
                <strong>Waiting for Manager Approval</strong>
                <span>Current Status</span>
              </div>

            </div>

          </div>

        </div>


        {/* MANAGER ACTION */}
        <div className="ml-manager-action">

          <h3>Manager Action</h3>

          <textarea
            placeholder="Add a comment (optional)..."
          />

          <div className="ml-decision-buttons">

            <button className="ml-reject-btn">
              <FiX />
              Reject
            </button>

            <button className="ml-approve-btn">
              <FiCheck />
              Approve
            </button>

          </div>

        </div>

      </aside>

    </div>
  );
}

export default ManagerLeaveRequests;