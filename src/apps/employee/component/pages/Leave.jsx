import React, { useMemo, useState } from "react";
import "./Leave.css";

const initialLeaves = [
  {
    id: 1,
    type: "Sick Leave",
    from: "12 Aug 2026",
    to: "14 Aug 2026",
    days: 3,
    submitted: "08 Aug 2026",
    status: "Pending",
    approvedBy: "Rajat Verma",
    reason: "Not feeling well",
  },
  {
    id: 2,
    type: "Casual Leave",
    from: "05 Aug 2026",
    to: "05 Aug 2026",
    days: 1,
    submitted: "04 Aug 2026",
    status: "Approved",
    approvedBy: "Rajat Verma",
    reason: "Personal work",
  },
  {
    id: 3,
    type: "Paid Leave",
    from: "20 Jul 2026",
    to: "21 Jul 2026",
    days: 2,
    submitted: "18 Jul 2026",
    status: "Cancelled",
    approvedBy: "-",
    reason: "Personal work",
  },
  {
    id: 4,
    type: "Casual Leave",
    from: "18 Jul 2026",
    to: "18 Jul 2026",
    days: 1,
    submitted: "10 Jul 2026",
    status: "Rejected",
    approvedBy: "Rajat Verma",
    reason: "Leave rejected",
  },
];

const leaveTypes = [
  {
    name: "Casual Leave",
    max: 8,
    used: 6,
    color: "green",
  },
  {
    name: "Sick Leave",
    max: 6,
    used: 4,
    color: "blue",
  },
  {
    name: "Paid Leave",
    max: 4,
    used: 2,
    color: "purple",
  },
];

function Leave() {
  const [leaves, setLeaves] = useState(initialLeaves);

  const [selectedTab, setSelectedTab] = useState("All");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showDetails, setShowDetails] = useState(null);

  const [form, setForm] = useState({
    type: "Casual Leave",
    from: "",
    to: "",
    reason: "",
  });

  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 7, 1));
  const [selectedDate, setSelectedDate] = useState(null);

  const [page, setPage] = useState(1);

  const rowsPerPage = 4;

  // -----------------------------
  // Calendar
  // -----------------------------

  const monthName = currentMonth.toLocaleString("en-US", {
    month: "long",
  });

  const year = currentMonth.getFullYear();

  const calendarDays = useMemo(() => {
    const firstDay = new Date(year, currentMonth.getMonth(), 1).getDay();

    const totalDays = new Date(
      year,
      currentMonth.getMonth() + 1,
      0
    ).getDate();

    const previousMonthDays = new Date(
      year,
      currentMonth.getMonth(),
      0
    ).getDate();

    const days = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: previousMonthDays - i,
        current: false,
      });
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push({
        day: i,
        current: true,
      });
    }

    while (days.length < 42) {
      days.push({
        day: days.length - totalDays - firstDay + 1,
        current: false,
      });
    }

    return days;
  }, [currentMonth, year]);

  const previousMonth = () => {
    setCurrentMonth(
      new Date(year, currentMonth.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(year, currentMonth.getMonth() + 1, 1)
    );
  };

  const selectCalendarDate = (day, current) => {
    if (!current) return;

    const date = new Date(
      year,
      currentMonth.getMonth(),
      day
    );

    setSelectedDate(date);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    setForm((prev) => ({
      ...prev,
      from: `${yyyy}-${mm}-${dd}`,
    }));
  };

  // -----------------------------
  // Filtering
  // -----------------------------

  const filteredLeaves = useMemo(() => {
    return leaves.filter((leave) => {
      const tabMatch =
        selectedTab === "All" ||
        leave.status === selectedTab;

      const typeMatch =
        typeFilter === "All Types" ||
        leave.type === typeFilter;

      const statusMatch =
        statusFilter === "All Status" ||
        leave.status === statusFilter;

      const searchMatch =
        leave.type.toLowerCase().includes(search.toLowerCase()) ||
        leave.status.toLowerCase().includes(search.toLowerCase()) ||
        leave.from.toLowerCase().includes(search.toLowerCase());

      return (
        tabMatch &&
        typeMatch &&
        statusMatch &&
        searchMatch
      );
    });
  }, [
    leaves,
    selectedTab,
    typeFilter,
    statusFilter,
    search,
  ]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredLeaves.length / rowsPerPage)
  );

  const visibleLeaves = filteredLeaves.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  // -----------------------------
  // Apply Leave
  // -----------------------------

  const handleFormChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const calculateDays = () => {
    if (!form.from || !form.to) return 1;

    const from = new Date(form.from);
    const to = new Date(form.to);

    const difference =
      Math.floor(
        (to - from) / (1000 * 60 * 60 * 24)
      ) + 1;

    return difference > 0 ? difference : 1;
  };

  const submitLeave = (e) => {
    e.preventDefault();

    if (!form.from || !form.to) {
      alert("Please select From and To date.");
      return;
    }

    if (new Date(form.to) < new Date(form.from)) {
      alert("To date cannot be before From date.");
      return;
    }

    const newLeave = {
      id: Date.now(),
      type: form.type,
      from: new Date(form.from).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
      to: new Date(form.to).toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
      days: calculateDays(),
      submitted: new Date().toLocaleDateString(
        "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ),
      status: "Pending",
      approvedBy: "Rajat Verma",
      reason: form.reason || "No reason provided",
    };

    setLeaves([newLeave, ...leaves]);

    setForm({
      type: "Casual Leave",
      from: "",
      to: "",
      reason: "",
    });

    setShowApplyModal(false);
    setSelectedTab("All");
    setPage(1);

    alert("Leave request submitted successfully!");
  };

  // -----------------------------
  // Stats
  // -----------------------------

  const pendingCount = leaves.filter(
    (l) => l.status === "Pending"
  ).length;

  const usedDays = leaves
    .filter(
      (l) =>
        l.status === "Approved" ||
        l.status === "Cancelled"
    )
    .reduce((total, leave) => total + leave.days, 0);

  const availableDays = Math.max(
    0,
    18 - usedDays
  );

  // -----------------------------
  // Reset filters
  // -----------------------------

  const resetFilters = () => {
    setSearch("");
    setTypeFilter("All Types");
    setStatusFilter("All Status");
    setSelectedTab("All");
    setPage(1);
  };

  return (
    <div className="leave-page">

      {/* TOP HEADER */}

      <div className="leave-header">

        <div>
          <h1>Leave Management</h1>
          <p>
            Manage your leave requests, balance and history
          </p>
        </div>

        <div className="header-actions">

          <button
            className="apply-btn"
            onClick={() => setShowApplyModal(true)}
          >
            + Apply Leave
          </button>

          <select className="year-select">
            <option>Year 2026</option>
            <option>Year 2027</option>
            <option>Year 2028</option>
          </select>

          <button className="notification-btn">
            🔔
            <span>3</span>
          </button>

        </div>

      </div>

      {/* STAT CARDS */}

      <div className="leave-stats">

        <div className="stat-card">
          <div className="stat-icon green-icon">✓</div>
          <div>
            <small>Available</small>
            <h2>{availableDays} Days</h2>
            <p>Remaining</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange-icon">▣</div>
          <div>
            <small>Used</small>
            <h2>{String(usedDays).padStart(2, "0")} Days</h2>
            <p>This Year</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon purple-icon">◷</div>
          <div>
            <small>Pending</small>
            <h2>
              {String(pendingCount).padStart(2, "0")} Requests
            </h2>
            <p>Awaiting Approval</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue-icon">◔</div>
          <div>
            <small>Total Quota</small>
            <h2>18 Days</h2>
            <p>Yearly Quota</p>
          </div>
        </div>

      </div>

      {/* MAIN GRID */}

      <div className="leave-main-grid">

        {/* LEFT */}

        <div>

          {/* LEAVE BALANCE */}

          <section className="panel">

            <div className="panel-title">
              <h3>Leave Balance</h3>
              <span>ⓘ</span>
            </div>

            <div className="balance-list">

              {leaveTypes.map((leave) => {

                const percentage =
                  (leave.used / leave.max) * 100;

                return (
                  <div
                    className="balance-item"
                    key={leave.name}
                  >

                    <div className={`balance-icon ${leave.color}`}>
                      ▣
                    </div>

                    <div className="balance-info">

                      <strong>{leave.name}</strong>

                      <small>
                        Maximum {leave.max} Days
                      </small>

                    </div>

                    <div className="balance-bar">
                      <div
                        className={`bar-fill ${leave.color}`}
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>
                    </div>

                    <strong>
                      {leave.used} / {leave.max} Days
                    </strong>

                  </div>
                );
              })}

            </div>

          </section>

          {/* REQUESTS */}

          <section className="panel requests-panel">

            <div className="request-heading">

              <div className="tabs">

                {[
                  "All",
                  "Pending",
                  "Approved",
                  "Rejected",
                  "Cancelled",
                ].map((tab) => (

                  <button
                    key={tab}
                    className={
                      selectedTab === tab
                        ? "tab active"
                        : "tab"
                    }
                    onClick={() => {
                      setSelectedTab(tab);
                      setPage(1);
                    }}
                  >
                    {tab}
                    <span>
                      {tab === "All"
                        ? leaves.length
                        : leaves.filter(
                            (l) => l.status === tab
                          ).length}
                    </span>
                  </button>

                ))}

              </div>

              <button
                className="view-all-btn"
                onClick={resetFilters}
              >
                View All Requests
              </button>

            </div>

            <div className="request-list">

              {visibleLeaves.length === 0 ? (

                <div className="empty-state">
                  No leave requests found.
                </div>

              ) : (

                visibleLeaves.map((leave) => (

                  <div
                    className="request-row"
                    key={leave.id}
                  >

                    <div className="request-type">

                      <div className="request-icon">
                        {leave.type === "Sick Leave"
                          ? "◷"
                          : leave.type === "Casual Leave"
                          ? "✓"
                          : "×"}
                      </div>

                      <div>
                        <strong>{leave.type}</strong>
                        <small>
                          {leave.from} - {leave.to}
                        </small>
                        <small>
                          {leave.days} Days
                        </small>
                      </div>

                    </div>

                    <div className="submitted">
                      <small>Submitted on</small>
                      <strong>{leave.submitted}</strong>
                    </div>

                    <div>
                      <small>Status</small>

                      <span
                        className={`status ${leave.status.toLowerCase()}`}
                      >
                        {leave.status}
                      </span>
                    </div>

                    <div className="approver">
                      <small>Approver</small>
                      <strong>{leave.approvedBy}</strong>
                    </div>

                    <button
                      className="details-btn"
                      onClick={() => setShowDetails(leave)}
                    >
                      View Details
                    </button>

                  </div>

                ))

              )}

            </div>

            {/* PAGINATION */}

            <div className="pagination">

              <button
                disabled={page === 1}
                onClick={() =>
                  setPage((p) => Math.max(1, p - 1))
                }
              >
                ‹
              </button>

              {Array.from(
                { length: totalPages },
                (_, index) => index + 1
              ).map((number) => (

                <button
                  key={number}
                  className={
                    page === number
                      ? "page-number active"
                      : "page-number"
                  }
                  onClick={() => setPage(number)}
                >
                  {number}
                </button>

              ))}

              <button
                disabled={page === totalPages}
                onClick={() =>
                  setPage((p) =>
                    Math.min(totalPages, p + 1)
                  )
                }
              >
                ›
              </button>

            </div>

          </section>

          {/* HISTORY */}

          <section className="panel">

            <div className="history-heading">
              <h3>Leave History</h3>

              <div className="filters">

                <select
                  value={typeFilter}
                  onChange={(e) => {
                    setTypeFilter(e.target.value);
                    setPage(1);
                  }}
                >
                  <option>All Types</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                  <option>Paid Leave</option>
                </select>

                <select
                  value={statusFilter}
                  onChange={(e) => {
                    setStatusFilter(e.target.value);
                    setPage(1);
                  }}
                >
                  <option>All Status</option>
                  <option>Pending</option>
                  <option>Approved</option>
                  <option>Rejected</option>
                  <option>Cancelled</option>
                </select>

                <button
                  className="reset-btn"
                  onClick={resetFilters}
                >
                  Reset
                </button>

                <input
                  type="text"
                  placeholder="Search leave..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                />

              </div>

            </div>

            <div className="history-table-wrapper">

              <table>

                <thead>
                  <tr>
                    <th>Leave Type</th>
                    <th>Duration</th>
                    <th>From - To</th>
                    <th>Submitted On</th>
                    <th>Status</th>
                    <th>Approved By</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>

                  {filteredLeaves.map((leave) => (

                    <tr key={leave.id}>

                      <td>{leave.type}</td>

                      <td>{leave.days} Days</td>

                      <td>
                        {leave.from} - {leave.to}
                      </td>

                      <td>{leave.submitted}</td>

                      <td>
                        <span
                          className={`status ${leave.status.toLowerCase()}`}
                        >
                          {leave.status}
                        </span>
                      </td>

                      <td>{leave.approvedBy}</td>

                      <td>
                        <button
                          className="table-details"
                          onClick={() =>
                            setShowDetails(leave)
                          }
                        >
                          View Details →
                        </button>
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </section>

        </div>

        {/* RIGHT */}

        <div className="right-column">

          {/* TODAY OVERVIEW */}

          <section className="panel">

            <h3>Today's Overview</h3>

            <div className="overview-item">
              <span>🟢 Available</span>
              <strong>{availableDays} Days</strong>
            </div>

            <div className="overview-item">
              <span>🔵 Used</span>
              <strong>{usedDays} Days</strong>
            </div>

            <div className="overview-item">
              <span>🟠 Pending</span>
              <strong>{pendingCount} Request</strong>
            </div>

          </section>

          {/* UPCOMING */}

          <section className="panel">

            <div className="panel-title">
              <h3>Upcoming Leave</h3>

              <button
                className="small-link"
                onClick={() => setSelectedTab("Pending")}
              >
                View All
              </button>
            </div>

            <div className="upcoming-card">

              <div>
                <strong>Sick Leave</strong>
                <p>12 Aug - 14 Aug 2026</p>
                <small>3 Days</small>
              </div>

              <span className="status pending">
                Pending
              </span>

            </div>

          </section>

          {/* CALENDAR */}

          <section className="panel calendar-panel">

            <div className="calendar-heading">

              <h3>Leave Calendar</h3>

              <div>
                <button onClick={previousMonth}>‹</button>

                <strong>
                  {monthName} {year}
                </strong>

                <button onClick={nextMonth}>›</button>
              </div>

            </div>

            <div className="calendar-week">

              {[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((day) => (
                <span key={day}>{day}</span>
              ))}

            </div>

            <div className="calendar-grid">

              {calendarDays.map((item, index) => {

                const date = new Date(
                  year,
                  currentMonth.getMonth(),
                  item.day
                );

                const dateString =
                  date.toDateString();

                const selected =
                  selectedDate &&
                  selectedDate.toDateString() ===
                    dateString;

                const isLeave =
                  item.current &&
                  item.day >= 12 &&
                  item.day <= 14 &&
                  currentMonth.getMonth() === 7 &&
                  year === 2026;

                return (

                  <button
                    key={index}
                    className={`
                      calendar-day
                      ${!item.current ? "muted" : ""}
                      ${selected ? "selected" : ""}
                      ${isLeave ? "leave-day" : ""}
                    `}
                    onClick={() =>
                      selectCalendarDate(
                        item.day,
                        item.current
                      )
                    }
                  >
                    {item.day}
                  </button>

                );
              })}

            </div>

            <div className="calendar-legend">

              <span>
                <i className="present"></i>
                Present
              </span>

              <span>
                <i className="approved-dot"></i>
                Approved Leave
              </span>

              <span>
                <i className="pending-dot"></i>
                Pending Leave
              </span>

              <span>
                <i className="holiday"></i>
                Holiday
              </span>

            </div>

          </section>

          {/* POLICY */}

          <section className="panel policy">

            <div className="policy-icon">
              🛡️
            </div>

            <div>
              <h3>Leave Policy</h3>
              <p>
                View company leave policy,
                rules & guidelines.
              </p>
            </div>

            <button
              onClick={() =>
                alert(
                  "Leave Policy: Please contact your manager for complete company policy."
                )
              }
            >
              →
            </button>

          </section>

          {/* SUPPORT */}

          <section className="support-card">

            <div>
              <h3>Need Help?</h3>

              <p>
                Have questions about leave
                or need assistance?
              </p>

              <button
                onClick={() =>
                  alert(
                    "Support request created. Our team will contact you."
                  )
                }
              >
                ☎ Contact Support
              </button>
            </div>

            <div className="support-image">
              👩‍💻
            </div>

          </section>

        </div>

      </div>

      {/* APPLY LEAVE MODAL */}

      {showApplyModal && (

        <div className="modal-overlay">

          <div className="modal">

            <div className="modal-header">
              <div>
                <h2>Apply Leave</h2>
                <p>Submit a new leave request</p>
              </div>

              <button
                onClick={() => setShowApplyModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={submitLeave}>

              <label>Leave Type</label>

              <select
                name="type"
                value={form.type}
                onChange={handleFormChange}
              >
                <option>Casual Leave</option>
                <option>Sick Leave</option>
                <option>Paid Leave</option>
              </select>

              <div className="date-inputs">

                <div>
                  <label>From Date</label>

                  <input
                    type="date"
                    name="from"
                    value={form.from}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div>
                  <label>To Date</label>

                  <input
                    type="date"
                    name="to"
                    value={form.to}
                    onChange={handleFormChange}
                    required
                  />
                </div>

              </div>

              <label>Reason</label>

              <textarea
                name="reason"
                value={form.reason}
                onChange={handleFormChange}
                placeholder="Enter reason for leave..."
              ></textarea>

              <div className="modal-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() =>
                    setShowApplyModal(false)
                  }
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-btn"
                >
                  Submit Leave
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* DETAILS MODAL */}

      {showDetails && (

        <div className="modal-overlay">

          <div className="modal details-modal">

            <div className="modal-header">

              <div>
                <h2>{showDetails.type}</h2>
                <p>Leave request details</p>
              </div>

              <button
                onClick={() => setShowDetails(null)}
              >
                ×
              </button>

            </div>

            <div className="details-content">

              <div>
                <span>From Date</span>
                <strong>{showDetails.from}</strong>
              </div>

              <div>
                <span>To Date</span>
                <strong>{showDetails.to}</strong>
              </div>

              <div>
                <span>Total Days</span>
                <strong>{showDetails.days} Days</strong>
              </div>

              <div>
                <span>Status</span>

                <span
                  className={`status ${showDetails.status.toLowerCase()}`}
                >
                  {showDetails.status}
                </span>
              </div>

              <div>
                <span>Submitted On</span>
                <strong>
                  {showDetails.submitted}
                </strong>
              </div>

              <div>
                <span>Approved By</span>
                <strong>
                  {showDetails.approvedBy}
                </strong>
              </div>

              <div className="reason-box">
                <span>Reason</span>
                <p>{showDetails.reason}</p>
              </div>

            </div>

            <button
              className="close-details"
              onClick={() => setShowDetails(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Leave;