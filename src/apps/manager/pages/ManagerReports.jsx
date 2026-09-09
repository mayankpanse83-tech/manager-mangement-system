import React from "react";
import {
  FaUsers,
  FaCheckCircle,
  FaFileAlt,
  FaClock,
  FaCalendarAlt,
  FaDownload,
  FaBell,
  FaArrowUp,
  FaArrowDown,
  FaLightbulb,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import "./ManagerReports.css";

const employees = [
  ["1", "Anam Sharma", "UI Designer", "98%", "96%", "100%", "94%"],
  ["2", "Priya Singh", "Developer", "96%", "94%", "96%", "91%"],
  ["3", "Neha Patel", "QA Engineer", "92%", "83%", "90%", "87%"],
  ["4", "Rahul Verma", "Developer", "89%", "78%", "85%", "79%"],
  ["5", "Vikram Joshi", "UI Designer", "90%", "82%", "88%", "78%"],
];

const ManagerReports = () => {
  return (
    <div className="manager-reports">

      {/* HEADER */}
      <div className="mr-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>
            Understand your team's performance, productivity and key insights.
          </p>
        </div>

        <div className="mr-header-right">

          <button className="mr-select">
            <FaCalendarAlt />
            01 Sep 2026 – 30 Sep 2026
            <FiChevronDown />
          </button>

          <button className="mr-select">
            All Departments
            <FiChevronDown />
          </button>

          <button className="mr-select">
            All Employees
            <FiChevronDown />
          </button>

          <button className="mr-export">
            <FaDownload />
            Export Report
          </button>

          <div className="mr-notification">
            <FaBell />
            <span>3</span>
          </div>

          <div className="mr-user">
            <div className="mr-avatar">RV</div>

            <div>
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>

            <FiChevronDown />
          </div>

        </div>
      </div>

      {/* STAT CARDS */}
      <div className="mr-stats">

        <div className="mr-stat blue">
          <div className="mr-stat-icon">
            <FaUsers />
          </div>
          <div>
            <span>Attendance Rate</span>
            <h2>94%</h2>
            <small>
              <FaArrowUp /> 3% vs last month
            </small>
          </div>
        </div>

        <div className="mr-stat green">
          <div className="mr-stat-icon">
            <FaCheckCircle />
          </div>
          <div>
            <span>Task Completion</span>
            <h2>87%</h2>
            <small>
              <FaArrowUp /> 5% vs last month
            </small>
          </div>
        </div>

        <div className="mr-stat purple">
          <div className="mr-stat-icon">
            <FaFileAlt />
          </div>
          <div>
            <span>Daily Updates</span>
            <h2>93%</h2>
            <small>
              <FaArrowUp /> 2% vs last month
            </small>
          </div>
        </div>

        <div className="mr-stat orange">
          <div className="mr-stat-icon">
            <FaClock />
          </div>
          <div>
            <span>Avg. Work Hours</span>
            <h2>8h 14m</h2>
            <small>
              <FaArrowUp /> 12m vs last month
            </small>
          </div>
        </div>

        <div className="mr-stat red">
          <div className="mr-stat-icon">
            <FaCalendarAlt />
          </div>
          <div>
            <span>Total Leave Days</span>
            <h2>18 Days</h2>
            <small className="down">
              <FaArrowDown /> 3 days vs last month
            </small>
          </div>
        </div>

      </div>

      {/* TOP REPORT GRID */}
      <div className="mr-grid">

        {/* PERFORMANCE */}
        <div className="mr-card mr-performance">
          <div className="mr-card-title">
            <h3>Team Performance Trends</h3>

            <div className="mr-legend">
              <span><i className="blue-dot"></i>Attendance</span>
              <span><i className="green-dot"></i>Tasks</span>
              <span><i className="purple-dot"></i>Updates</span>
              <span><i className="orange-dot"></i>Leave</span>
            </div>
          </div>

          <div className="mr-chart">

            <div className="mr-y-axis">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            <div className="mr-lines">

              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>
              <div className="horizontal"></div>

              <div className="fake-line attendance"></div>
              <div className="fake-line tasks"></div>
              <div className="fake-line updates"></div>
              <div className="fake-line leave"></div>

            </div>

          </div>

          <div className="mr-dates">
            <span>1 Sep</span>
            <span>5 Sep</span>
            <span>10 Sep</span>
            <span>15 Sep</span>
            <span>20 Sep</span>
            <span>25 Sep</span>
            <span>30 Sep</span>
          </div>
        </div>

        {/* ATTENDANCE */}
        <div className="mr-card">
          <h3>Attendance Overview</h3>

          <div className="mr-donut-row">
            <div className="donut attendance-donut">
              <div>
                <strong>94%</strong>
                <span>Attendance Rate</span>
              </div>
            </div>

            <div className="mr-donut-info">
              <p>
                <i className="green-dot"></i>
                Present
                <b>94%</b>
              </p>

              <p>
                <i className="yellow-dot"></i>
                Late
                <b>4%</b>
              </p>

              <p>
                <i className="red-dot"></i>
                Absent
                <b>2%</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                On Leave
                <b>6%</b>
              </p>
            </div>
          </div>
        </div>

        {/* TASK */}
        <div className="mr-card">
          <div className="task-heading">
            <h3>Task Performance</h3>
            <div>
              <small>Total Tasks</small>
              <strong>84</strong>
            </div>
          </div>

          <div className="mr-donut-row">
            <div className="donut task-donut">
              <div>
                <strong>87%</strong>
                <span>Completion Rate</span>
              </div>
            </div>

            <div className="mr-donut-info">
              <p>
                <i className="green-dot"></i>
                Completed
                <b>73</b>
              </p>

              <p>
                <i className="blue-dot"></i>
                In Progress
                <b>7</b>
              </p>

              <p>
                <i className="orange-dot"></i>
                Overdue
                <b>4</b>
              </p>
            </div>
          </div>
        </div>

        {/* DAILY UPDATES */}
        <div className="mr-card">
          <h3>Daily Updates Report</h3>

          <div className="update-report">

            <div className="update-item">
              <span>Submission Rate</span>
              <b>93%</b>
            </div>

            <div className="update-item">
              <span>Reviewed Rate</span>
              <b>88%</b>
            </div>

            <div className="update-item">
              <span>Missing Updates</span>
              <b>4</b>
            </div>

            <div className="update-item">
              <span>Pending Review</span>
              <b>3</b>
            </div>

          </div>

          <div className="weekly-bars">

            <div>
              <span>95%</span>
              <i style={{ height: "72px" }}></i>
              <small>Mon</small>
            </div>

            <div>
              <span>90%</span>
              <i style={{ height: "65px" }}></i>
              <small>Tue</small>
            </div>

            <div>
              <span>92%</span>
              <i style={{ height: "68px" }}></i>
              <small>Wed</small>
            </div>

            <div>
              <span>97%</span>
              <i style={{ height: "78px" }}></i>
              <small>Thu</small>
            </div>

            <div>
              <span>89%</span>
              <i style={{ height: "63px" }}></i>
              <small>Fri</small>
            </div>

          </div>
        </div>

        {/* LEAVE ANALYTICS */}
        <div className="mr-card">
          <h3>Leave Analytics</h3>

          <div className="leave-report">

            <div className="leave-bars">

              <div>
                <span>8</span>
                <i className="casual"></i>
                <small>Casual</small>
              </div>

              <div>
                <span>5</span>
                <i className="sick"></i>
                <small>Sick</small>
              </div>

              <div>
                <span>4</span>
                <i className="paid"></i>
                <small>Paid</small>
              </div>

              <div>
                <span>1</span>
                <i className="unpaid"></i>
                <small>Unpaid</small>
              </div>

            </div>

            <div className="leave-total">
              <span>Total Leave Days</span>
              <strong>18</strong>
              <small>
                <FaArrowDown /> 3 days
              </small>
              <em>vs last month</em>
            </div>

          </div>
        </div>

        {/* WORKING HOURS */}
        <div className="mr-card">
          <h3>Working Hours</h3>

          <div className="work-top">

            <div>
              <span>Total Team Hours</span>
              <strong>1,842h</strong>
            </div>

            <div>
              <span>Avg. per Month</span>
              <strong>153h 30m</strong>
            </div>

            <div>
              <span>Average per Day</span>
              <strong>8h 14m</strong>
            </div>

          </div>

          <div className="overtime">
            <span>◉ Overtime</span>
            <b>42h</b>
          </div>

          <p className="daily-title">
            Daily Average Hours (This Month)
          </p>

          {[
            ["Mon", "8.1h", 92],
            ["Tue", "8.5h", 97],
            ["Wed", "7.9h", 86],
            ["Thu", "8.2h", 94],
            ["Fri", "8.8h", 100],
          ].map((item) => (
            <div className="hour-row" key={item[0]}>
              <span>{item[0]}</span>

              <div>
                <i style={{ width: `${item[2]}%` }}></i>
              </div>

              <b>{item[1]}</b>
            </div>
          ))}

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mr-bottom">

        {/* EMPLOYEE RANKING */}
        <div className="mr-card ranking-card">

          <h3>Employee Performance Ranking</h3>

          <div className="ranking-table">

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee</th>
                  <th>Department</th>
                  <th>Attendance</th>
                  <th>Tasks</th>
                  <th>Updates</th>
                  <th>Score</th>
                </tr>
              </thead>

              <tbody>
                {employees.map((emp) => (
                  <tr key={emp[0]}>

                    <td>{emp[0]}</td>

                    <td>
                      <div className="table-user">
                        <span>{emp[1].charAt(0)}</span>
                        {emp[1]}
                      </div>
                    </td>

                    <td>{emp[2]}</td>
                    <td className="success-text">{emp[3]}</td>
                    <td className="success-text">{emp[4]}</td>
                    <td className="success-text">{emp[5]}</td>
                    <td><b>{emp[6]}</b></td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>

        {/* INSIGHTS */}
        <div className="mr-card insights-card">

          <div className="insight-heading">
            <h3>
              <FaLightbulb />
              Team Insights
            </h3>

            <button>View All</button>
          </div>

          <div className="insight">
            <span className="green-icon">
              <FaArrowUp />
            </span>
            <p>Attendance improved by 3% this month.</p>
          </div>

          <div className="insight">
            <span className="green-icon">
              <FaArrowUp />
            </span>
            <p>Task completion improved by 5%.</p>
          </div>

          <div className="insight">
            <span className="orange-icon">!</span>
            <p>4 overdue tasks need attention.</p>
          </div>

          <div className="insight">
            <span className="orange-icon">!</span>
            <p>Rahul has 5 late check-ins this month.</p>
          </div>

          <div className="insight">
            <span className="green-icon">✓</span>
            <p>Daily update submission is above 90%.</p>
          </div>

        </div>

        {/* ACTIONS */}
        <div className="mr-card actions-card">

          <h3>Report Actions</h3>

          <div className="action-grid">

            <button>
              <FaFileAlt />
              Attendance Report
            </button>

            <button>
              <FaCheckCircle />
              Task Report
            </button>

            <button>
              <FaFileAlt />
              Daily Updates Report
            </button>

            <button>
              <FaCalendarAlt />
              Leave Report
            </button>

          </div>

          <button className="generate-btn">
            <FaDownload />
            Generate Complete Report
          </button>

        </div>

      </div>

    </div>
  );
};

export default ManagerReports;