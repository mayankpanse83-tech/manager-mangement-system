import React from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiBell,
  FiChevronDown,
  FiPlus,
  FiMoreVertical,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiCheckSquare,
  FiUsers,
  FiFileText,
  FiUmbrella,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiHome,
} from "react-icons/fi";

import "./ManagerTasks.css";

const tasks = {
  pending: [
    {
      title: "Design System Update",
      name: "Neha Patel",
      priority: "Low",
      date: "02 Sep 2026",
    },
    {
      title: "User Flow Documentation",
      name: "Priya Singh",
      priority: "Low",
      date: "03 Sep 2026",
    },
    {
      title: "Content for Homepage",
      name: "Aman Sharma",
      priority: "Medium",
      date: "04 Sep 2026",
    },
    {
      title: "API Documentation",
      name: "Rahul Verma",
      priority: "Low",
      date: "05 Sep 2026",
    },
    {
      title: "Employee Onboarding",
      name: "Anjali Mehta",
      priority: "Low",
      date: "05 Sep 2026",
    },
  ],

  progress: [
    {
      title: "Dashboard UI Design",
      name: "Aman Sharma",
      priority: "High",
      progress: 70,
      date: "Today",
    },
    {
      title: "API Integration",
      name: "Rahul Verma",
      priority: "Urgent",
      progress: 75,
      date: "Today",
    },
    {
      title: "Employee Module",
      name: "Priya Singh",
      priority: "High",
      progress: 65,
      date: "01 Sep 2026",
    },
    {
      title: "Testing & Bug Fixing",
      name: "Neha Patel",
      priority: "Medium",
      progress: 40,
      date: "02 Sep 2026",
    },
  ],

  review: [
    {
      title: "Landing Page Design",
      name: "Aman Sharma",
      priority: "Medium",
    },
    {
      title: "Database Optimization",
      name: "Vikram Joshi",
      priority: "High",
    },
    {
      title: "Mobile Responsive UI",
      name: "Priya Singh",
      priority: "Medium",
    },
    {
      title: "Performance Testing",
      name: "Neha Patel",
      priority: "Low",
    },
  ],

  completed: [
    {
      title: "Login & Auth Module",
      name: "Rahul Verma",
      priority: "High",
      date: "Completed on 26 Aug",
    },
    {
      title: "Team Attendance UI",
      name: "Aman Sharma",
      priority: "Medium",
      date: "Completed on 25 Aug",
    },
    {
      title: "Leave Management",
      name: "Priya Singh",
      priority: "Medium",
      date: "Completed on 24 Aug",
    },
    {
      title: "Notification System",
      name: "Neha Patel",
      priority: "Low",
      date: "Completed on 23 Aug",
    },
  ],
};

const Avatar = ({ name }) => (
  <div className="avatar">
    {name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)}
  </div>
);

const Priority = ({ type }) => (
  <span className={`priority ${type.toLowerCase()}`}>
    <i />
    {type}
  </span>
);

function TaskCard({ task, type }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>

      <div className="task-person">
        <Avatar name={task.name} />
        <span>{task.name}</span>
      </div>

      <div className="task-info">
        <Priority type={task.priority} />

        {type === "review" && (
          <span className="review-text">Review</span>
        )}

        {type === "pending" && (
          <span className="task-date">
            <FiCalendar />
            {task.date}
          </span>
        )}
      </div>

      {type === "progress" && (
        <>
          <div className="progress-line">
            <span style={{ width: `${task.progress}%` }} />
          </div>

          <span className="progress-date">{task.date}</span>
        </>
      )}

      {type === "completed" && (
        <div className="completed-date">
          {task.date}
        </div>
      )}

      {type === "completed" && (
        <FiCheckCircle className="completed-check" />
      )}
    </div>
  );
}

function BoardColumn({ title, count, type, children }) {
  return (
    <div className={`board-column ${type}`}>
      <div className="column-header">
        <div>
          <strong>{title}</strong>
          <span> ({count})</span>
        </div>

        <div className="column-actions">
          <FiPlus />
          <FiMoreVertical />
        </div>
      </div>

      {children}

      <button className="add-task">
        <FiPlus />
        Add Task
      </button>
    </div>
  );
}

function ManagerTasks() {
  return (
    <div className="tasks-page">

      {/* TOP HEADER */}

      <div className="tasks-header">
        <div>
          <h1>Tasks</h1>
          <p>Create, assign and track your team's work.</p>
        </div>

        <div className="header-tools">
          <div className="search-box">
            <FiSearch />
            <input
              type="text"
              placeholder="Search tasks, employee or ID..."
            />
          </div>

          <button className="tool-btn">
            <FiFilter />
            Filter
          </button>

          <button className="tool-btn">
            <FiDownload />
            Export
            <FiChevronDown />
          </button>

          <div className="notification">
            <FiBell />
            <span>3</span>
          </div>

          <Avatar name="Rajat Verma" />

          <div className="header-profile">
            <strong>Rajat Verma</strong>
            <span>Team Manager</span>
          </div>

          <FiChevronDown className="profile-arrow" />
        </div>
      </div>

      {/* STAT CARDS */}

      <div className="task-stats">
        <div className="stat-card">
          <div className="stat-icon purple">
            <FiCheckSquare />
          </div>

          <div>
            <p>Total Tasks</p>
            <h2>42</h2>
            <span>This Month</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon yellow">
            <FiFileText />
          </div>

          <div>
            <p>Pending</p>
            <h2>5</h2>
            <span className="green-text">12% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <FiClock />
          </div>

          <div>
            <p>In Progress</p>
            <h2>12</h2>
            <span className="blue-text">29% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <FiCheckCircle />
          </div>

          <div>
            <p>Completed</p>
            <h2>24</h2>
            <span className="green-text">57% of total</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">
            <FiAlertCircle />
          </div>

          <div>
            <p>Overdue</p>
            <h2>1</h2>
            <span className="red-text">Needs Action</span>
          </div>
        </div>
      </div>

      {/* TABS */}

      <div className="task-tabs">
        <button className="active">All Tasks</button>
        <button>My Tasks</button>
        <button>Team Tasks</button>
        <button>Pending</button>
        <button>In Progress</button>
        <button>Review</button>
        <button>Completed</button>
        <button>Overdue</button>
      </div>

      {/* FILTERS */}

      <div className="task-filters">
        <div className="filter-item">
          <small>Employee</small>
          <button>
            All Employees
            <FiChevronDown />
          </button>
        </div>

        <div className="filter-item">
          <small>Department</small>
          <button>
            All Departments
            <FiChevronDown />
          </button>
        </div>

        <div className="filter-item">
          <small>Priority</small>
          <button>
            All Priorities
            <FiChevronDown />
          </button>
        </div>

        <div className="filter-item">
          <small>Due Date</small>
          <button>
            All Dates
            <FiChevronDown />
          </button>
        </div>

        <div className="filter-item">
          <small>Status</small>
          <button>
            All Status
            <FiChevronDown />
          </button>
        </div>

        <button className="clear-filters">
          Clear Filters
        </button>
      </div>

      {/* TASK BOARD */}

      <div className="task-board">

        <BoardColumn
          title="Pending"
          count="5"
          type="pending"
        >
          {tasks.pending.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              type="pending"
            />
          ))}
        </BoardColumn>

        <BoardColumn
          title="In Progress"
          count="12"
          type="progress"
        >
          {tasks.progress.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              type="progress"
            />
          ))}
        </BoardColumn>

        <BoardColumn
          title="Review"
          count="4"
          type="review"
        >
          {tasks.review.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              type="review"
            />
          ))}
        </BoardColumn>

        <BoardColumn
          title="Completed"
          count="21"
          type="completed"
        >
          {tasks.completed.map((task, index) => (
            <TaskCard
              key={index}
              task={task}
              type="completed"
            />
          ))}
        </BoardColumn>
      </div>

      {/* BOTTOM */}

      <div className="bottom-widgets">

        <div className="bottom-card">
          <div className="widget-header">
            <h3>Recent Activity</h3>
            <button>View All</button>
          </div>

          <div className="activity">
            <Avatar name="Aman Sharma" />
            <p>
              <b>Aman Sharma</b> updated progress on Dashboard UI Design
            </p>
            <span>25 min ago</span>
          </div>

          <div className="activity">
            <Avatar name="Priya Singh" />
            <p>
              <b>Priya Singh</b> submitted Employee Module for review
            </p>
            <span>1 hour ago</span>
          </div>

          <div className="activity">
            <Avatar name="Neha Patel" />
            <p>
              <b>Neha Patel</b> completed Team Attendance UI
            </p>
            <span>2 hours ago</span>
          </div>
        </div>

        <div className="bottom-card">
          <div className="widget-header">
            <h3>Overdue Tasks</h3>
            <button>View All</button>
          </div>

          <div className="overdue-row">
            <Avatar name="Rahul Verma" />

            <div>
              <strong>API Integration</strong>
              <span>Rahul Verma</span>
              <small>Due on 27 Aug 2026</small>
            </div>

            <b>1 day overdue</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerTasks;