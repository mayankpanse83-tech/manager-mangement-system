import React from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiChevronDown,
  FiBell,
  FiCheckSquare,
  FiFileText,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiPlus,
  FiMoreVertical,
  FiCalendar,
  FiTrendingUp,
  FiList,
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


function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="mt-avatar">
      {initials}
    </div>
  );
}


function Priority({ type }) {
  return (
    <span
      className={`mt-priority ${type.toLowerCase()}`}
    >
      <i />
      {type}
    </span>
  );
}


function TaskCard({ task, type }) {
  return (
    <div className="mt-task-card">

      <h4>{task.title}</h4>

      <div className="mt-task-person">
        <Avatar name={task.name} />
        <span>{task.name}</span>
      </div>

      <div className="mt-task-info">

        <Priority type={task.priority} />

        {type === "review" && (
          <span className="mt-review-text">
            Review
          </span>
        )}

        {type === "pending" && (
          <span className="mt-task-date">
            <FiCalendar />
            {task.date}
          </span>
        )}

      </div>

      {type === "progress" && (
        <>
          <div className="mt-progress-line">
            <span
              style={{
                width: `${task.progress}%`,
              }}
            />
          </div>

          <div className="mt-progress-date">
            {task.date}
          </div>
        </>
      )}

      {type === "completed" && (
        <>
          <div className="mt-completed-date">
            {task.date}
          </div>

          <FiCheckCircle className="mt-completed-check" />
        </>
      )}

    </div>
  );
}


function BoardColumn({
  title,
  count,
  type,
  children,
}) {
  return (
    <div className={`mt-board-column ${type}`}>

      <div className="mt-column-header">

        <div>
          <strong>{title}</strong>
          <span> ({count})</span>
        </div>

        <div className="mt-column-actions">
          <FiPlus />
          <FiMoreVertical />
        </div>

      </div>

      {children}

      <button className="mt-add-task">
        <FiPlus />
        Add Task
      </button>

    </div>
  );
}


function WorkloadRow({
  name,
  tasksCount,
  width,
}) {
  return (
    <div className="mt-workload-row">

      <Avatar name={name} />

      <div className="mt-workload-info">
        <strong>{name}</strong>

        <div className="mt-workload-bar">
          <span
            style={{
              width: `${width}%`,
            }}
          />
        </div>
      </div>

      <small>{tasksCount} Tasks</small>

    </div>
  );
}


function DeadlineRow({
  date,
  title,
  name,
  type,
}) {
  return (
    <div className="mt-deadline-row">

      <span className={`mt-deadline-date ${type}`}>
        {date}
      </span>

      <div>
        <strong>{title}</strong>
        <small>{name}</small>
      </div>

    </div>
  );
}


function ManagerTasks() {
  return (
    <div className="manager-tasks-page">

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="mt-main-area">

        {/* HEADER */}

        <div className="mt-header">

          <div className="mt-heading">
            <h1>Tasks</h1>

            <p>
              Create, assign and track your team's work.
            </p>
          </div>

          <div className="mt-header-tools">

            <div className="mt-search-box">
              <FiSearch />

              <input
                type="text"
                placeholder="Search tasks, employee or ID..."
              />
            </div>

            <button className="mt-tool-btn">
              <FiFilter />
              Filter
            </button>

            <button className="mt-tool-btn">
              <FiDownload />
              Export
              <FiChevronDown />
            </button>

            <div className="mt-notification">
              <FiBell />
              <span>3</span>
            </div>

            <Avatar name="Rajat Verma" />

            <div className="mt-profile-info">
              <strong>Rajat Verma</strong>
              <span>Team Manager</span>
            </div>

            <FiChevronDown className="mt-profile-arrow" />

          </div>

        </div>


        {/* STATS */}

        <div className="mt-stats">

          <div className="mt-stat-card">

            <div className="mt-stat-icon purple">
              <FiCheckSquare />
            </div>

            <div>
              <p>Total Tasks</p>
              <h2>42</h2>
              <span>This Month</span>
            </div>

          </div>


          <div className="mt-stat-card">

            <div className="mt-stat-icon yellow">
              <FiFileText />
            </div>

            <div>
              <p>Pending</p>
              <h2>5</h2>
              <span className="green">12% of total</span>
            </div>

          </div>


          <div className="mt-stat-card">

            <div className="mt-stat-icon blue">
              <FiClock />
            </div>

            <div>
              <p>In Progress</p>
              <h2>12</h2>
              <span className="blue-text">29% of total</span>
            </div>

          </div>


          <div className="mt-stat-card">

            <div className="mt-stat-icon green-bg">
              <FiCheckCircle />
            </div>

            <div>
              <p>Completed</p>
              <h2>24</h2>
              <span className="green">57% of total</span>
            </div>

          </div>


          <div className="mt-stat-card">

            <div className="mt-stat-icon red">
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

        <div className="mt-tabs">

          <button className="active">
            All Tasks
          </button>

          <button>My Tasks</button>

          <button>Team Tasks</button>

          <button>Pending</button>

          <button>In Progress</button>

          <button>Review</button>

          <button>Completed</button>

          <button>Overdue</button>

        </div>


        {/* FILTERS */}

        <div className="mt-filters">

          <div className="mt-filter">
            <small>Employee</small>

            <button>
              All Employees
              <FiChevronDown />
            </button>
          </div>


          <div className="mt-filter">
            <small>Department</small>

            <button>
              All Departments
              <FiChevronDown />
            </button>
          </div>


          <div className="mt-filter">
            <small>Priority</small>

            <button>
              All Priorities
              <FiChevronDown />
            </button>
          </div>


          <div className="mt-filter">
            <small>Due Date</small>

            <button>
              All Dates
              <FiChevronDown />
            </button>
          </div>


          <div className="mt-filter">
            <small>Status</small>

            <button>
              All Status
              <FiChevronDown />
            </button>
          </div>


          <button className="mt-clear-btn">
            Clear Filters
          </button>

        </div>


        {/* TASK BOARD */}

        <div className="mt-task-board">

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

        <div className="mt-bottom-grid">

          <div className="mt-bottom-card">

            <div className="mt-widget-header">
              <h3>Recent Activity</h3>
              <button>View All</button>
            </div>

            <div className="mt-activity-row">
              <Avatar name="Aman Sharma" />

              <p>
                <b>Aman Sharma</b> updated progress on
                Dashboard UI Design
              </p>

              <span>25 min ago</span>
            </div>

            <div className="mt-activity-row">
              <Avatar name="Priya Singh" />

              <p>
                <b>Priya Singh</b> submitted Employee Module
                for review
              </p>

              <span>1 hour ago</span>
            </div>

            <div className="mt-activity-row">
              <Avatar name="Neha Patel" />

              <p>
                <b>Neha Patel</b> completed Team Management
                UI
              </p>

              <span>2 hours ago</span>
            </div>

          </div>


          <div className="mt-bottom-card">

            <div className="mt-widget-header">
              <h3>Overdue Tasks</h3>
              <button>View All</button>
            </div>

            <div className="mt-overdue-task">

              <Avatar name="Rahul Verma" />

              <div>
                <strong>API Integration</strong>
                <span>Rahul Verma</span>
                <small>
                  <FiCalendar />
                  Was due on 27 Aug 2026
                </small>
              </div>

              <b>1 day overdue</b>

            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          RIGHT SIDEBAR
      ================================================= */}

      <aside className="mt-right-panel">

        <button className="mt-create-task">
          <FiPlus />
          Create Task
        </button>


        {/* TASK OVERVIEW */}

        <div className="mt-right-section">

          <h3>Task Overview</h3>

          <div className="mt-overview-content">

            <div className="mt-donut">
              <div className="mt-donut-center">
                <strong>42</strong>
                <span>Total</span>
              </div>
            </div>


            <div className="mt-overview-list">

              <div>
                <span className="dot completed" />
                Completed
                <b>24 (57%)</b>
              </div>

              <div>
                <span className="dot progress-dot" />
                In Progress
                <b>12 (29%)</b>
              </div>

              <div>
                <span className="dot pending-dot" />
                Pending
                <b>5 (12%)</b>
              </div>

              <div>
                <span className="dot overdue-dot" />
                Overdue
                <b>1 (2%)</b>
              </div>

            </div>

          </div>

        </div>


        {/* TEAM WORKLOAD */}

        <div className="mt-right-section">

          <div className="mt-widget-header">
            <h3>Team Workload</h3>
            <button>View All</button>
          </div>

          <WorkloadRow
            name="Aman Sharma"
            tasksCount="6"
            width="100"
          />

          <WorkloadRow
            name="Priya Singh"
            tasksCount="5"
            width="82"
          />

          <WorkloadRow
            name="Rahul Verma"
            tasksCount="5"
            width="82"
          />

          <WorkloadRow
            name="Neha Patel"
            tasksCount="4"
            width="65"
          />

          <WorkloadRow
            name="Vikram Joshi"
            tasksCount="3"
            width="48"
          />

        </div>


        {/* DEADLINES */}

        <div className="mt-right-section mt-deadlines">

          <div className="mt-widget-header">
            <h3>Upcoming Deadlines</h3>
            <button>View All</button>
          </div>

          <DeadlineRow
            date="Today"
            title="Dashboard UI Design"
            name="Aman Sharma"
            type="today"
          />

          <DeadlineRow
            date="Tomorrow"
            title="API Integration"
            name="Rahul Verma"
            type="tomorrow"
          />

          <DeadlineRow
            date="01 Sep"
            title="Employee Module"
            name="Priya Singh"
            type="date"
          />

          <DeadlineRow
            date="02 Sep"
            title="Testing & Bug Fixing"
            name="Neha Patel"
            type="future"
          />

        </div>

      </aside>

    </div>
  );
}


export default ManagerTasks;