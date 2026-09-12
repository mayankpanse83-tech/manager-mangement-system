import React from "react";
import {
  FiCalendar,
  FiSearch,
  FiBell,
  FiUsers,
  FiUserCheck,
  FiGrid,
  FiFileText,
  FiClock,
  FiCheckSquare,
  FiClipboard,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiPlus,
  FiArrowRight,
  FiAlertCircle,
  FiTrendingUp,
  FiUserPlus,
  FiCheckCircle,
} from "react-icons/fi";
import "./AdminDashboard.css";

const stats = [
  { icon: FiUsers, title: "Total Employees", value: "248", change: "↑ 12 this month", type: "blue" },
  { icon: FiUserCheck, title: "Active Managers", value: "18", change: "↑ 2 this month", type: "green" },
  { icon: FiGrid, title: "Departments", value: "12", change: "No change", type: "purple" },
  { icon: FiUserCheck, title: "Present Today", value: "221", change: "89% of total", type: "green" },
  { icon: FiCalendar, title: "On Leave Today", value: "14", change: "6% of total", type: "red" },
  { icon: FiFileText, title: "Pending Leave Requests", value: "14", change: "Needs attention", type: "orange" },
];

const attention = [
  { icon: FiAlertCircle, value: "28", title: "Overdue Tasks", sub: "Across 7 departments", action: "Review Tasks", type: "red" },
  { icon: FiFileText, value: "14", title: "Pending Leave Requests", sub: "Waiting for approval", action: "Review Leave", type: "orange" },
  { icon: FiFileText, value: "9", title: "Missing Daily Updates", sub: "Employees haven't submitted updates", action: "View Updates", type: "yellow" },
  { icon: FiFileText, value: "13", title: "Attendance Issues", sub: "Missing check-in / absence", action: "Review Attendance", type: "orange" },
  { icon: FiAlertCircle, value: "6", title: "Payroll Issues", sub: "Requires attention", action: "Review Payroll", type: "red" },
];

const departments = [
  ["Development", "68", "5", "91%"],
  ["Design", "24", "2", "96%"],
  ["Marketing", "31", "3", "88%"],
  ["QA", "27", "2", "93%"],
  ["Finance", "18", "2", "94%"],
  ["HR", "12", "1", "97%"],
];

const activities = [
  ["New employee added", "Aman Sharma • Design", "15 minutes ago", "blue"],
  ["New manager created", "Neha Sharma • Development", "42 minutes ago", "purple"],
  ["Leave approved", "Rahul Verma • Development", "1 hour ago", "orange"],
  ["Payroll processed", "September 2026", "2 hours ago", "green"],
  ["Daily update submitted", "Daily update submitted", "3 hours ago", "blue"],
];

function AdminDashboard() {
  return (
    <div className="admin-dashboard-page">
      <header className="ad-topbar">
        <div>
          <h1>Good Evening, Admin 👋</h1>
          <p>Here's what's happening across your organization today.</p>
        </div>

        <div className="ad-top-actions">
          <button className="ad-date">
            <FiCalendar /> Thu, 11 Sep 2026
          </button>

          <div className="ad-search">
            <FiSearch />
            <input placeholder="Search anything..." />
          </div>

          <button className="ad-notification">
            <FiBell />
            <span>3</span>
          </button>

          <div className="ad-profile">
            <div className="ad-avatar">AU</div>
            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>
            <span>⌄</span>
          </div>
        </div>
      </header>

      <section className="ad-stats-grid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div className="ad-stat-card" key={item.title}>
              <div className={`ad-stat-icon ${item.type}`}><Icon /></div>
              <div className="ad-stat-info">
                <span>{item.title}</span>
                <strong>{item.value}</strong>
                <small className={item.change.includes("attention") ? "danger" : ""}>{item.change}</small>
              </div>
            </div>
          );
        })}
      </section>

      <section className="ad-attention-row">
        <div className="ad-panel ad-attention-panel">
          <div className="ad-section-title">
            <h2>Needs Attention <b>5</b></h2>
          </div>

          <div className="ad-attention-grid">
            {attention.map((item) => {
              const Icon = item.icon;
              return (
                <div className="ad-attention-card" key={item.title}>
                  <div className={`ad-small-icon ${item.type}`}><Icon /></div>
                  <strong>{item.value}</strong>
                  <h3>{item.title}</h3>
                  <p>{item.sub}</p>
                  <a href="#">{item.action} <FiArrowRight /></a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ad-panel ad-quick">
          <div className="ad-section-title">
            <h2>Quick Actions</h2>
            <FiSettings />
          </div>

          <div className="ad-quick-grid">
            <a href="/admin/employees"><FiPlus /> Add Employee</a>
            <a href="/admin/managers"><FiPlus /> Add Manager</a>
            <a href="/admin/departments"><FiPlus /> Add Department</a>
            <a href="/admin/payroll"><FiDollarSign /> Process Payroll</a>
            <a href="/admin/reports"><FiBarChart2 /> Generate Report</a>
          </div>
        </div>
      </section>

      <section className="ad-main-grid">
        <div className="ad-panel attendance-panel">
          <div className="ad-section-title"><h2>Today's Attendance</h2></div>
          <div className="attendance-content">
            <div className="attendance-donut">
              <div><strong>89%</strong><span>Present Today</span></div>
            </div>
            <div className="legend">
              <p><i className="dot green"></i>Present <b>221</b></p>
              <p><i className="dot red"></i>Absent <b>13</b></p>
              <p><i className="dot blue"></i>On Leave <b>14</b></p>
              <p><i className="dot yellow"></i>Late <b>22</b></p>
            </div>
          </div>
          <button className="view-btn">View Attendance <FiArrowRight /></button>
        </div>

        <div className="ad-panel growth-panel">
          <div className="ad-section-title"><h2>Employee Growth</h2><button>This Year⌄</button></div>
          <div className="fake-chart">
            <div className="chart-y"><span>300</span><span>250</span><span>200</span><span>150</span><span>100</span></div>
            <svg viewBox="0 0 500 145" preserveAspectRatio="none">
              <polyline points="20,110 85,95 150,78 215,68 280,68 345,53 410,47 475,35" fill="none" stroke="#2563eb" strokeWidth="3"/>
              <polyline points="20,110 85,95 150,78 215,68 280,68 345,53 410,47 475,35" fill="none" stroke="#60a5fa" strokeWidth="8" opacity=".12"/>
            </svg>
            <div className="chart-x"><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span></div>
          </div>
          <div className="mini-stats">
            <div><span>Total Employees</span><b>248</b></div>
            <div><span>New This Month</span><b>12</b></div>
            <div><span>New This Year</span><b>47</b></div>
            <div><span>Inactive</span><b>6</b></div>
          </div>
        </div>

        <div className="ad-panel department-panel">
          <div className="ad-section-title"><h2>Department Overview</h2><a href="#">View All</a></div>
          <table>
            <thead><tr><th>DEPARTMENT</th><th>EMPLOYEES</th><th>MANAGERS</th><th>ATTENDANCE</th></tr></thead>
            <tbody>{departments.map((row) => <tr key={row[0]}><td>{row[0]}</td><td>{row[1]}</td><td>{row[2]}</td><td className="attendance-green">{row[3]}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className="ad-main-grid bottom-grid">
        <div className="ad-panel tasks-panel">
          <div className="ad-section-title"><h2>Organization Tasks</h2><a href="#">View All</a></div>
          <div className="task-content">
            <div className="task-donut"><div><strong>1,284</strong><span>Total Tasks</span></div></div>
            <div className="task-legend">
              <p><i className="dot green"></i>Completed <b>984</b></p>
              <p><i className="dot blue"></i>In Progress <b>210</b></p>
              <p><i className="dot yellow"></i>Pending <b>62</b></p>
              <p><i className="dot red"></i>Overdue <b>28</b></p>
            </div>
            <div className="completion"><strong>87%</strong><span>Completion Rate</span><div><i></i></div></div>
          </div>
          <div className="most-overdue"><b>Most Overdue Departments</b><span>Development <em>12</em></span><span>Design <em>6</em></span><span>Marketing <em>5</em></span><span>Finance <em>2</em></span></div>
        </div>

        <div className="ad-panel leave-panel">
          <div className="ad-section-title"><h2>Leave Overview</h2><a href="#">View All</a></div>
          <div className="leave-content">
            <div className="leave-list">
              <p>🔴 Pending Requests <b>14</b></p>
              <p>🟢 On Leave Today <b>14</b></p>
              <p>🟠 Upcoming Leave <b>31</b></p>
              <p>🟣 Approved This Month <b>86</b></p>
            </div>
            <div className="bar-chart">
              <span style={{height:"70%"}}>42<small>Casual</small></span>
              <span style={{height:"45%"}}>27<small>Sick</small></span>
              <span style={{height:"30%"}}>18<small>Paid</small></span>
              <span style={{height:"12%"}}>5<small>Unpaid</small></span>
            </div>
          </div>
        </div>

        <div className="ad-panel payroll-panel">
          <div className="ad-section-title"><h2>Payroll Snapshot</h2><button>September 2026⌄</button></div>
          <div className="payroll-total">₹98.4 L <small>Total Payroll</small></div>
          <div className="payroll-items">
            <div><b>₹94.2 L</b><span>Processed</span></div>
            <div><b>₹4.2 L</b><span>Pending</span></div>
            <div><b>248</b><span>Employees</span></div>
          </div>
          <div className="payroll-status"><span>🟢 232 Processed</span><span>🟡 10 Pending</span><span>🔴 6 Issues</span></div>
          <button className="view-btn">View Payroll <FiArrowRight /></button>
        </div>
      </section>

      <section className="ad-main-grid last-grid">
        <div className="ad-panel daily-panel">
          <div className="ad-section-title"><h2>Daily Updates</h2><a href="#">View All</a></div>
          <div className="daily-stats">
            <div><FiUsers/><b>218</b><span>Submitted</span></div>
            <div><FiFileText/><b>204</b><span>Reviewed</span></div>
            <div><FiClock/><b>21</b><span>Pending</span></div>
            <div><FiAlertCircle/><b>9</b><span>Missing</span></div>
            <div className="submission"><b>93%</b><span>Submission Rate</span><div><i></i></div></div>
          </div>
          <div className="missing"><b>Departments with Missing Updates</b><span>Development <em>4</em></span><span>Design <em>2</em></span><span>Marketing <em>2</em></span><span>QA <em>1</em></span></div>
        </div>

        <div className="ad-panel performance-panel">
          <div className="ad-section-title"><h2>Organization Performance</h2><button>This Month⌄</button></div>
          <div className="performance-content">
            <div className="performance-list">
              <p>◉ Attendance <b>94%</b> <i>↑ 3%</i></p>
              <p>♧ Task Completion <b>87%</b> <i>↑ 5%</i></p>
              <p>◈ Daily Updates <b>93%</b> <i>↑ 2%</i></p>
              <p>◉ On-Time Tasks <b>84%</b> <i>↑ 4%</i></p>
            </div>
            <div className="performance-chart">
              <svg viewBox="0 0 300 120" preserveAspectRatio="none">
                <polyline points="10,80 100,80 190,62 285,62" fill="none" stroke="#2563eb" strokeWidth="2"/>
                <polyline points="10,91 100,91 190,74 285,74" fill="none" stroke="#22c55e" strokeWidth="2"/>
                <polyline points="10,72 100,72 190,56 285,56" fill="none" stroke="#7c3aed" strokeWidth="2"/>
              </svg>
              <div>W1　　W2　　W3　　W4</div>
            </div>
          </div>
        </div>

        <div className="ad-panel activity-panel">
          <div className="ad-section-title"><h2>Recent Activity</h2><a href="#">View All</a></div>
          {activities.map((a, i) => (
            <div className="activity-row" key={i}>
              <span className={`activity-icon ${a[3]}`}><FiCheckCircle /></span>
              <div><b>{a[0]}</b><small>{a[1]}</small></div>
              <time>{a[2]}</time>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
