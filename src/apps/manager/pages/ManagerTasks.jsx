import React from "react";
import {
  FaHome,
  FaUsers,
  FaClock,
  FaCheckSquare,
  FaRegCalendarAlt,
  FaChartBar,
  FaUser,
  FaCog,
  FaBell,
  FaSearch,
  FaFilter,
  FaDownload,
  FaPlus,
  FaEllipsisV,
  FaChevronDown,
  FaRegCalendar,
  FaCheck,
} from "react-icons/fa";

import "./ManagerTasks.css";

const taskColumns = [
  {
    title: "Pending",
    count: 5,
    type: "pending",
    tasks: [
      {
        title: "Design System Update",
        user: "Neha Patel",
        priority: "Low",
        date: "02 Sep 2026",
      },
      {
        title: "User Flow Documentation",
        user: "Priya Singh",
        priority: "Low",
        date: "03 Sep 2026",
      },
      {
        title: "Content for Homepage",
        user: "Aman Sharma",
        priority: "Medium",
        date: "04 Sep 2026",
      },
      {
        title: "API Documentation",
        user: "Rahul Verma",
        priority: "Low",
        date: "05 Sep 2026",
      },
      {
        title: "Employee Onboarding",
        user: "Anjali Mehta",
        priority: "Low",
        date: "05 Sep 2026",
      },
    ],
  },
  {
    title: "In Progress",
    count: 12,
    type: "progress",
    tasks: [
      {
        title: "Dashboard UI Design",
        user: "Aman Sharma",
        priority: "High",
        date: "Today",
        progress: 70,
      },
      {
        title: "API Integration",
        user: "Rahul Verma",
        priority: "Urgent",
        date: "Today",
        progress: 65,
      },
      {
        title: "Employee Module",
        user: "Priya Singh",
        priority: "High",
        date: "01 Sep 2026",
        progress: 60,
      },
      {
        title: "Testing & Bug Fixing",
        user: "Neha Patel",
        priority: "Medium",
        date: "02 Sep 2026",
        progress: 40,
      },
    ],
  },
  {
    title: "Review",
    count: 4,
    type: "review",
    tasks: [
      {
        title: "Landing Page Design",
        user: "Aman Sharma",
        priority: "Medium",
        date: "Review",
      },
      {
        title: "Database Optimization",
        user: "Vikram Joshi",
        priority: "High",
        date: "Review",
      },
      {
        title: "Mobile Responsive UI",
        user: "Priya Singh",
        priority: "Medium",
        date: "Review",
      },
      {
        title: "Performance Testing",
        user: "Neha Patel",
        priority: "Low",
        date: "Review",
      },
    ],
  },
  {
    title: "Completed",
    count: 21,
    type: "completed",
    tasks: [
      {
        title: "Login & Auth Module",
        user: "Rahul Verma",
        priority: "High",
        date: "Completed on 26 Aug",
      },
      {
        title: "Team Attendance UI",
        user: "Aman Sharma",
        priority: "Medium",
        date: "Completed on 25 Aug",
      },
      {
        title: "Leave Management",
        user: "Priya Singh",
        priority: "Medium",
        date: "Completed on 24 Aug",
      },
      {
        title: "Notification System",
        user: "Neha Patel",
        priority: "Low",
        date: "Completed on 23 Aug",
      },
    ],
  },
];

const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((item) => item[0])
    .join("");

  return <div className="mt-avatar">{initials}</div>;
};

const NavItem = ({ icon, text, active }) => (
  <div className={`mt-nav-item ${active ? "mt-active" : ""}`}>
    {icon}
    <span>{text}</span>
  </div>
);

const StatCard = ({ icon, title, value, text, type }) => (
  <div className="mt-stat-card">
    <div className={`mt-stat-icon ${type}`}>{icon}</div>

    <div>
      <p>{title}</p>
      <h2>{value}</h2>
      <span className={type}>{text}</span>
    </div>
  </div>
);

const Priority = ({ value }) => (
  <div className={`mt-priority ${value.toLowerCase()}`}>
    <span />
    {value}
  </div>
);

const TaskCard = ({ task, type }) => (
  <div className="mt-task-card">
    <h4>{task.title}</h4>

    <div className="mt-task-person">
      <Avatar name={task.user} />
      <span>{task.user}</span>
    </div>

    <div className="mt-task-bottom">
      <Priority value={task.priority} />

      <span className="mt-task-date">
        <FaRegCalendar />
        {task.date}
      </span>
    </div>

    {type === "progress" && (
      <div className="mt-progress-line">
        <span style={{ width: `${task.progress}%` }} />
      </div>
    )}

    {type === "completed" && (
      <div className="mt-completed-info">
        <FaCheck />
        Completed
      </div>
    )}
  </div>
);

function ManagerTasks() {
  return (
    <div className="manager-tasks-app">
      {/* SIDEBAR */}
      <aside className="mt-sidebar">
        <div className="mt-brand">
          <div className="mt-brand-icon">W</div>

          <div>
            <strong>WorkForce</strong>
            <span>Manager Workspace</span>
          </div>
        </div>

        <div className="mt-nav-menu">
          <NavItem icon={<FaHome />} text="Dashboard" />
          <NavItem icon={<FaUsers />} text="My Team" />
          <NavItem icon={<FaClock />} text="Team Attendance" />
          <NavItem icon={<FaCheckSquare />} text="Tasks" active />
          <NavItem icon={<FaRegCalendarAlt />} text="Daily Updates" />
          <NavItem icon={<FaRegCalendarAlt />} text="Leave Requests" />
          <NavItem icon={<FaChartBar />} text="Reports" />

          <div className="mt-divider" />

          <NavItem icon={<FaUser />} text="Profile" />
          <NavItem icon={<FaCog />} text="Settings" />
        </div>

        <div className="mt-help-card">
          <strong>Need Help?</strong>
          <p>Contact admin or send a request.</p>
          <button>Contact Admin</button>
        </div>

        <div className="mt-sidebar-user">
          <Avatar name="Rajat Verma" />

          <div>
            <strong>Rajat Verma</strong>
            <span>Team Manager</span>
          </div>

          <FaChevronDown />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="mt-main-content">
        <header className="mt-top-header">
          <div>
            <h1>Tasks</h1>
            <p>Create, assign and track your team's work.</p>
          </div>

          <div className="mt-header-right">
            <div className="mt-header-search">
              <FaSearch />
              <input
                type="text"
                placeholder="Search tasks, employee or ID..."
              />
            </div>

            <button className="mt-header-button">
              <FaFilter /> Filter
            </button>

            <button className="mt-header-button">
              <FaDownload /> Export <FaChevronDown />
            </button>

            <div className="mt-notification">
              <FaBell />
              <span>3</span>
            </div>

            <Avatar name="Rajat Verma" />

            <div className="mt-header-user">
              <strong>Rajat Verma</strong>
              <span>Team Manager</span>
            </div>
          </div>
        </header>

        {/* STATISTICS */}
        <section className="mt-stats-grid">
          <StatCard
            icon={<FaCheckSquare />}
            title="Total Tasks"
            value="42"
            text="This Month"
            type="purple"
          />

          <StatCard
            icon={<FaRegCalendarAlt />}
            title="Pending"
            value="5"
            text="12% of total"
            type="orange"
          />

          <StatCard
            icon={<FaClock />}
            title="In Progress"
            value="12"
            text="29% of total"
            type="blue"
          />

          <StatCard
            icon={<FaCheck />}
            title="Completed"
            value="24"
            text="57% of total"
            type="green"
          />

          <StatCard
            icon="!"
            title="Overdue"
            value="1"
            text="Needs Action"
            type="red"
          />
        </section>

        {/* TABS */}
        <section className="mt-task-tabs">
          <button className="mt-tab-active">All Tasks</button>
          <button>My Tasks</button>
          <button>Team Tasks</button>
          <button>Pending</button>
          <button>In Progress</button>
          <button>Review</button>
          <button>Completed</button>
          <button>Overdue</button>
        </section>

        {/* FILTERS */}
        <section className="mt-filters-row">
          {[
            "All Employees",
            "All Departments",
            "All Priorities",
            "All Dates",
            "All Status",
          ].map((item) => (
            <button className="mt-filter-box" key={item}>
              {item}
              <FaChevronDown />
            </button>
          ))}

          <button className="mt-clear-filter">Clear Filters</button>
        </section>

        {/* TASK BOARD */}
        <section className="mt-task-board">
          {taskColumns.map((column) => (
            <div className="mt-task-column" key={column.title}>
              <div className="mt-column-header">
                <div>
                  <strong>{column.title}</strong>
                  <span> ({column.count})</span>
                </div>

                <div>
                  <FaPlus />
                  <FaEllipsisV />
                </div>
              </div>

              <div className="mt-column-list">
                {column.tasks.map((task, index) => (
                  <TaskCard
                    key={index}
                    task={task}
                    type={column.type}
                  />
                ))}
              </div>

              <button className="mt-add-task">
                <FaPlus /> Add Task
              </button>
            </div>
          ))}
        </section>

        {/* BOTTOM SECTION */}
        <section className="mt-bottom-grid">
          <div className="mt-bottom-card">
            <div className="mt-section-title">
              <h3>Recent Activity</h3>
              <button>View All</button>
            </div>

            {[
              ["Aman Sharma", "updated progress on Dashboard UI Design", "25 min ago"],
              ["Priya Singh", "submitted Employee Module for review", "1 hour ago"],
              ["Neha Patel", "completed Team Attendance UI", "2 hours ago"],
            ].map(([name, text, time]) => (
              <div className="mt-activity-row" key={name}>
                <Avatar name={name} />
                <p>
                  <strong>{name}</strong> {text}
                </p>
                <span>{time}</span>
              </div>
            ))}
          </div>

          <div className="mt-bottom-card">
            <div className="mt-section-title">
              <h3>Overdue Tasks</h3>
              <button>View All</button>
            </div>

            <div className="mt-overdue-task">
              <Avatar name="Rahul Verma" />

              <div>
                <strong>API Integration</strong>
                <span>Rahul Verma</span>
              </div>

              <b>1 day overdue</b>
            </div>
          </div>
        </section>
      </main>

      {/* RIGHT PANEL */}
      <aside className="mt-right-panel">
        <button className="mt-create-task">
          <FaPlus /> Create Task
        </button>

        <section className="mt-right-card">
          <h3>Task Overview</h3>

          <div className="mt-overview">
            <div className="mt-donut">
              <div>
                <strong>42</strong>
                <span>Tasks</span>
              </div>
            </div>

            <div className="mt-overview-list">
              <p><span className="green-dot" /> Completed <b>24 (57%)</b></p>
              <p><span className="blue-dot" /> In Progress <b>12 (29%)</b></p>
              <p><span className="orange-dot" /> Pending <b>5 (12%)</b></p>
              <p><span className="red-dot" /> Overdue <b>1 (2%)</b></p>
            </div>
          </div>
        </section>

        <section className="mt-right-card">
          <div className="mt-section-title">
            <h3>Team Workload</h3>
            <button>View All</button>
          </div>

          {[
            ["Aman Sharma", 80, "6 Tasks"],
            ["Priya Singh", 68, "5 Tasks"],
            ["Rahul Verma", 75, "5 Tasks"],
            ["Neha Patel", 62, "4 Tasks"],
            ["Vikram Joshi", 42, "3 Tasks"],
          ].map(([name, value, tasks]) => (
            <div className="mt-workload-row" key={name}>
              <Avatar name={name} />
              <span>{name}</span>

              <div className="mt-workload-line">
                <i style={{ width: `${value}%` }} />
              </div>

              <small>{tasks}</small>
            </div>
          ))}
        </section>

        <section className="mt-right-card">
          <div className="mt-section-title">
            <h3>Upcoming Deadlines</h3>
            <button>View All</button>
          </div>

          <div className="mt-deadline">
            <span className="mt-today">Today</span>
            <div>
              <strong>Dashboard UI Design</strong>
              <small>Aman Sharma</small>
            </div>
          </div>

          <div className="mt-deadline">
            <span className="mt-tomorrow">Tomorrow</span>
            <div>
              <strong>API Integration</strong>
              <small>Rahul Verma</small>
            </div>
          </div>

          <div className="mt-deadline">
            <span className="mt-sep">01 Sep</span>
            <div>
              <strong>Employee Module</strong>
              <small>Priya Singh</small>
            </div>
          </div>
        </section>
      </aside>
    </div>
  );
}

export default ManagerTasks;