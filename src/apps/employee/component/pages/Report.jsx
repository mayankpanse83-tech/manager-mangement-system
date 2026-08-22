import React, { useState } from "react";
import "./Report.css";
import {
  FaCalendarAlt,
  FaDownload,
  FaUserCheck,
  FaClock,
  FaTasks,
  FaFileAlt,
  FaCalendarTimes,
  FaFilter,
  FaFilePdf,
  FaFileExcel,
  FaArrowUp,
  FaArrowDown,
  FaChevronDown,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";


function Reports() {
  const [dateRange, setDateRange] = useState("This Month");
  const [attendancePeriod, setAttendancePeriod] = useState("Weekly");
  const [workingPeriod, setWorkingPeriod] = useState("This Month");

  const [activeTab, setActiveTab] = useState("All");

  const [reportFormat, setReportFormat] = useState("PDF");
  const [reportPeriod, setReportPeriod] = useState("August 2026");

  const [showFilters, setShowFilters] = useState(false);
  const [showExport, setShowExport] = useState(false);

  const [filterStatus, setFilterStatus] = useState("All");

  /* =========================
     EXPORT REPORT
  ========================= */

  const exportReport = () => {
    const report = `
REPORTS & ANALYTICS
====================

Employee: Mayank Panse
Period: ${dateRange}

Attendance: 96%
Working Hours: 176h 15m
Task Completion: 84%
Daily Updates: 28 / 30
Leave Taken: 2 Days

Overall Performance: 89%

Generated from Employee Management System.
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Reports-Analytics.txt";
    link.click();

    URL.revokeObjectURL(url);

    setShowExport(true);

    setTimeout(() => {
      setShowExport(false);
    }, 2500);
  };

  /* =========================
     GENERATE REPORT
  ========================= */

  const generateReport = () => {
    const report = `
EMPLOYEE REPORT
================

Employee: Mayank Panse
Report Period: ${reportPeriod}
Format: ${reportFormat}

Attendance: 96%
Working Hours: 176h 15m
Task Completion: 84%
Daily Updates: 28 / 30
Leave Taken: 2 Days
Overall Performance: 89%

Report generated successfully.
`;

    const blob = new Blob([report], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download =
      reportPeriod.replaceAll(" ", "-") +
      "-Report." +
      reportFormat.toLowerCase() +
      ".txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  /* =========================
     VIEW TASK REPORT
  ========================= */

  const viewTaskReport = () => {
    setActiveTab("Tasks");

    setTimeout(() => {
      document
        .getElementById("detailed-report")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  /* =========================
     VIEW LEAVE REPORT
  ========================= */

  const viewLeaveReport = () => {
    setActiveTab("Leave");

    setTimeout(() => {
      document
        .getElementById("detailed-report")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };

  /* =========================
     FILTER
  ========================= */

  const applyFilter = () => {
    setShowFilters(false);
  };

  return (
    <div className="reports-page">

      {/* =========================
          SUCCESS TOAST
      ========================= */}

      {showExport && (
        <div className="reports-toast">
          <FaCheckCircle />
          Report exported successfully
          <button onClick={() => setShowExport(false)}>
            <FaTimes />
          </button>
        </div>
      )}

      {/* =========================
          HEADER
      ========================= */}

      <div className="reports-header">

        <div>
          <h1>Reports & Analytics</h1>

          <p>
            Track your performance, productivity and work insights
          </p>
        </div>

        <div className="reports-actions">

          <div className="date-selector">
            <FaCalendarAlt />

            <select
              value={dateRange}
              onChange={(e) =>
                setDateRange(e.target.value)
              }
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
            </select>

            <FaChevronDown />
          </div>

          <button
            className="export-button"
            onClick={exportReport}
          >
            <FaDownload />
            Export Report
          </button>

        </div>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================= */}

      <div className="report-cards">

        <div className="report-card">

          <div className="report-icon purple">
            <FaUserCheck />
          </div>

          <div>
            <span>Attendance</span>
            <h2>96%</h2>
            <small>22 Present Days</small>

            <p className="positive">
              ↑ 4% vs last month
            </p>
          </div>

        </div>

        <div className="report-card">

          <div className="report-icon green">
            <FaClock />
          </div>

          <div>
            <span>Working Hours</span>
            <h2>176h 15m</h2>
            <small>This Month</small>

            <p className="positive">
              ↑ 8h vs last month
            </p>
          </div>

        </div>

        <div className="report-card">

          <div className="report-icon orange">
            <FaTasks />
          </div>

          <div>
            <span>Tasks Completion</span>
            <h2>84%</h2>
            <small>10 / 12 Completed</small>

            <p className="positive">
              ↑ 6% vs last month
            </p>
          </div>

        </div>

        <div className="report-card">

          <div className="report-icon blue">
            <FaFileAlt />
          </div>

          <div>
            <span>Daily Updates</span>
            <h2>28 / 30</h2>
            <small>Submitted</small>

            <p className="positive">
              ↑ 3 vs last month
            </p>
          </div>

        </div>

        <div className="report-card">

          <div className="report-icon red">
            <FaCalendarTimes />
          </div>

          <div>
            <span>Leave Taken</span>
            <h2>2 Days</h2>
            <small>This Month</small>

            <p className="negative">
              ↓ 1 day vs last month
            </p>
          </div>

        </div>

      </div>

      {/* =========================
          FIRST ROW
      ========================= */}

      <div className="analytics-grid">

        {/* Attendance Overview */}

        <div className="analytics-box">

          <div className="box-title">

            <h3>Attendance Overview</h3>

            <select
              value={attendancePeriod}
              onChange={(e) =>
                setAttendancePeriod(e.target.value)
              }
            >
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>

          </div>

          <div className="attendance-chart">

            <div className="chart-labels">
              <span>100%</span>
              <span>90%</span>
              <span>80%</span>
              <span>70%</span>
              <span>60%</span>
            </div>

            <div className="attendance-area">

              <div className="attendance-line">

                <span style={{ left: "5%", top: "28%" }}>
                  92%
                </span>

                <span style={{ left: "25%", top: "15%" }}>
                  95%
                </span>

                <span style={{ left: "45%", top: "35%" }}>
                  90%
                </span>

                <span style={{ left: "65%", top: "10%" }}>
                  97%
                </span>

                <span style={{ left: "88%", top: "16%" }}>
                  96%
                </span>

              </div>

              <div className="attendance-months">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
              </div>

            </div>

            <div className="attendance-status">

              <p>
                <i className="green-dot"></i>
                Present
                <b>22 Days</b>
              </p>

              <p>
                <i className="red-dot"></i>
                Absent
                <b>1 Day</b>
              </p>

              <p>
                <i className="yellow-dot"></i>
                Late
                <b>2 Days</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                Leave
                <b>2 Days</b>
              </p>

              <p>
                <i className="purple-dot"></i>
                Half Day
                <b>0 Day</b>
              </p>

            </div>

          </div>

        </div>

        {/* Working Hours */}

        <div className="analytics-box">

          <div className="box-title">

            <h3>Working Hours</h3>

            <select
              value={workingPeriod}
              onChange={(e) =>
                setWorkingPeriod(e.target.value)
              }
            >
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>

          </div>

          <div className="working-content">

            <div className="working-info">

              <p>
                Average / Day
                <b>8h 02m</b>
              </p>

              <p>
                Total This Month
                <b>176h 15m</b>
              </p>

              <p>
                Expected Hours
                <b>184h</b>
              </p>

              <p>
                Overtime
                <b>4h 15m</b>
              </p>

            </div>

            <div className="working-bars">

              <div>
                <span>Mon</span>
                <i style={{ width: "82%" }}></i>
                <b>8h 20m</b>
              </div>

              <div>
                <span>Tue</span>
                <i style={{ width: "95%" }}></i>
                <b>9h 10m</b>
              </div>

              <div>
                <span>Wed</span>
                <i style={{ width: "80%" }}></i>
                <b>8h 00m</b>
              </div>

              <div>
                <span>Thu</span>
                <i style={{ width: "72%" }}></i>
                <b>7h 30m</b>
              </div>

              <div>
                <span>Fri</span>
                <i style={{ width: "94%" }}></i>
                <b>9h 05m</b>
              </div>

              <div>
                <span>Sat</span>
                <i style={{ width: "0%" }}></i>
                <b>0h 00m</b>
              </div>

              <div>
                <span>Sun</span>
                <i style={{ width: "0%" }}></i>
                <b>0h 00m</b>
              </div>

            </div>

          </div>

        </div>

        {/* Overall Performance */}

        <div className="analytics-box performance-box">

          <h3>Overall Performance</h3>

          <div className="performance-circle">

            <div>
              <strong>89%</strong>
              <span>Overall Score</span>
            </div>

          </div>

          <b>Excellent Performance! 🎉</b>

          <p>
            Your productivity is 8% higher than last month.
          </p>

        </div>

      </div>

      {/* =========================
          SECOND ROW
      ========================= */}

      <div className="analytics-grid second-grid">

        {/* Task Performance */}

        <div className="analytics-box task-box">

          <h3>Task Performance</h3>

          <div className="task-content">

            <div className="task-donut">
              <div>
                <strong>84%</strong>
                <span>Completed</span>
              </div>
            </div>

            <div className="task-list">

              <p>
                <i className="green-dot"></i>
                Completed
                <b>10 (84%)</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                In Progress
                <b>1 (8%)</b>
              </p>

              <p>
                <i className="yellow-dot"></i>
                Pending
                <b>1 (8%)</b>
              </p>

              <p>
                <i className="red-dot"></i>
                Overdue
                <b>0 (0%)</b>
              </p>

            </div>

          </div>

          <button
            className="report-link"
            onClick={viewTaskReport}
          >
            View Task Report →
          </button>

        </div>

        {/* Daily Updates */}

        <div className="analytics-box updates-box">

          <h3>Daily Updates Analytics</h3>

          <div className="update-content">

            <div className="update-circle">

              <strong>93%</strong>
              <span>Submission Rate</span>

            </div>

            <div className="update-counts">

              <p>
                <i className="green-dot"></i>
                Submitted
                <b>28</b>
              </p>

              <p>
                <i className="yellow-dot"></i>
                Missing
                <b>2</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                Approved
                <b>26</b>
              </p>

              <p>
                <i className="purple-dot"></i>
                Pending Review
                <b>2</b>
              </p>

            </div>

          </div>

          <div className="week-dots">

            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (day, index) => (
                <div key={day}>
                  <span>{day}</span>

                  <i className="green-dot"></i>

                  <i
                    className={
                      index === 2
                        ? "yellow-dot"
                        : "green-dot"
                    }
                  ></i>
                </div>
              )
            )}

          </div>

        </div>

        {/* Leave Summary */}

        <div className="analytics-box leave-box">

          <h3>Leave Summary</h3>

          <div className="leave-content">

            <div className="leave-donut">

              <div>
                <strong>2</strong>
                <span>Days</span>
                <small>This Month</small>
              </div>

            </div>

            <div className="leave-list">

              <p>
                <i className="green-dot"></i>
                Casual Leave
                <b>1 Day</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                Sick Leave
                <b>1 Day</b>
              </p>

              <p>
                <i className="yellow-dot"></i>
                Paid Leave
                <b>0 Day</b>
              </p>

              <p>
                <i className="purple-dot"></i>
                Unpaid Leave
                <b>0 Day</b>
              </p>

            </div>

          </div>

          <button
            className="report-link"
            onClick={viewLeaveReport}
          >
            View Leave Report →
          </button>

        </div>

        {/* Monthly Comparison */}

        <div className="analytics-box comparison-box">

          <h3>Monthly Comparison</h3>

          <div className="comparison-head">
            <span></span>
            <span>Last Month</span>
            <span>This Month</span>
          </div>

          <div className="comparison-row">
            <span>Attendance</span>
            <b>92%</b>
            <b>96%</b>
            <i className="up">↑</i>
          </div>

          <div className="comparison-row">
            <span>Task Completion</span>
            <b>78%</b>
            <b>84%</b>
            <i className="up">↑</i>
          </div>

          <div className="comparison-row">
            <span>Daily Updates</span>
            <b>90%</b>
            <b>93%</b>
            <i className="up">↑</i>
          </div>

          <div className="comparison-row">
            <span>Working Hours</span>
            <b>168h</b>
            <b>176h</b>
            <i className="up">↑</i>
          </div>

          <div className="comparison-row">
            <span>Leave Taken</span>
            <b>3 Days</b>
            <b>2 Days</b>
            <i className="down">↓</i>
          </div>

        </div>

      </div>

      {/* =========================
          DETAILED REPORT
      ========================= */}

      <div
        className="analytics-box detailed-report"
        id="detailed-report"
      >

        <div className="detail-header">

          <div className="report-tabs">

            {[
              "All",
              "Attendance",
              "Tasks",
              "Updates",
              "Leave",
            ].map((tab) => (

              <button
                key={tab}
                className={
                  activeTab === tab
                    ? "active-tab"
                    : ""
                }
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>

            ))}

          </div>

          <button
            className="filter-button"
            onClick={() => setShowFilters(true)}
          >
            <FaFilter />
            Filters
          </button>

        </div>

        <div className="detail-table-wrapper">

          <table className="detail-table">

            <thead>
              <tr>
                <th>Metric</th>
                <th>This Month</th>
                <th>Last Month</th>
                <th>Change</th>
                <th>Trend</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Attendance</td>
                <td>96% (22/23 Days)</td>
                <td>92% (21/23 Days)</td>
                <td className="up">↑ 4%</td>
                <td>〰〰〰</td>
              </tr>

              <tr>
                <td>Working Hours</td>
                <td>176h 15m</td>
                <td>168h 10m</td>
                <td className="up">↑ 8h 05m</td>
                <td>〰〰〰</td>
              </tr>

              <tr>
                <td>Task Completion</td>
                <td>84% (10/12)</td>
                <td>78% (7/9)</td>
                <td className="up">↑ 6%</td>
                <td>〰〰〰</td>
              </tr>

              <tr>
                <td>Daily Updates</td>
                <td>28/30 (93%)</td>
                <td>27/30 (90%)</td>
                <td className="up">↑ 3%</td>
                <td>〰〰〰</td>
              </tr>

              <tr>
                <td>Leave Taken</td>
                <td>2 Days</td>
                <td>3 Days</td>
                <td className="down">↓ 1 Day</td>
                <td>〰〰〰</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* =========================
          EXPORT REPORT
      ========================= */}

      <div className="export-box">

        <h3>Export Reports</h3>

        <label>Select Format</label>

        <div className="format-buttons">

          <button
            className={
              reportFormat === "PDF"
                ? "format-active pdf"
                : ""
            }
            onClick={() => setReportFormat("PDF")}
          >
            <FaFilePdf />
            PDF
          </button>

          <button
            className={
              reportFormat === "Excel"
                ? "format-active excel"
                : ""
            }
            onClick={() => setReportFormat("Excel")}
          >
            <FaFileExcel />
            Excel
          </button>

        </div>

        <label>Select Period</label>

        <select
          value={reportPeriod}
          onChange={(e) =>
            setReportPeriod(e.target.value)
          }
          className="report-period"
        >
          <option>August 2026</option>
          <option>July 2026</option>
          <option>June 2026</option>
          <option>May 2026</option>
          <option>2026</option>
        </select>

        <button
          className="generate-button"
          onClick={generateReport}
        >
          <FaDownload />
          Generate Report
        </button>

      </div>

      {/* =========================
          FILTER MODAL
      ========================= */}

      {showFilters && (

        <div
          className="filter-overlay"
          onClick={() => setShowFilters(false)}
        >

          <div
            className="filter-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="filter-header">

              <div>
                <h2>Report Filters</h2>
                <p>Choose filters for your report</p>
              </div>

              <button
                onClick={() => setShowFilters(false)}
              >
                <FaTimes />
              </button>

            </div>

            <div className="filter-body">

              <label>Status</label>

              <select
                value={filterStatus}
                onChange={(e) =>
                  setFilterStatus(e.target.value)
                }
              >
                <option>All</option>
                <option>Present</option>
                <option>Absent</option>
                <option>Leave</option>
                <option>Pending</option>
              </select>

              <label>Report Period</label>

              <select
                value={reportPeriod}
                onChange={(e) =>
                  setReportPeriod(e.target.value)
                }
              >
                <option>August 2026</option>
                <option>July 2026</option>
                <option>June 2026</option>
              </select>

            </div>

            <div className="filter-footer">

              <button
                className="filter-cancel"
                onClick={() => setShowFilters(false)}
              >
                Cancel
              </button>

              <button
                className="filter-apply"
                onClick={applyFilter}
              >
                Apply Filters
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Reports;