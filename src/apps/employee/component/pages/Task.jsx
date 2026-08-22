import React, { useState } from "react";
import "./Task.css";

function Tasks() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Dashboard UI Design",
      description: "Design and develop the employee dashboard UI with all required components.",
      priority: "High",
      status: "In Progress",
      progress: 70,
      due: "Today, 06:00 PM",
      assigned: "Rajat Verma",
    },
    {
      id: 2,
      title: "API Integration",
      description: "Integrate dashboard APIs and ensure proper data flow.",
      priority: "Medium",
      status: "In Progress",
      progress: 40,
      due: "Today, 11:59 PM",
      assigned: "Rajat Verma",
    },
    {
      id: 3,
      title: "User Management Module",
      description: "Create add, edit, delete functionality for user management.",
      priority: "Low",
      status: "Pending",
      progress: 0,
      due: "05 Aug 2026",
      assigned: "Rajat Verma",
    },
    {
      id: 4,
      title: "Role & Permission Setup",
      description: "Configure roles and permissions for different modules.",
      priority: "Medium",
      status: "Pending",
      progress: 0,
      due: "07 Aug 2026",
      assigned: "Rajat Verma",
    },
    {
      id: 5,
      title: "Reports Page",
      description: "Design and implement reports and analytics page.",
      priority: "Low",
      status: "Pending",
      progress: 0,
      due: "10 Aug 2026",
      assigned: "Rajat Verma",
    },
    {
      id: 6,
      title: "Employee Profile",
      description: "Create employee profile and personal information section.",
      priority: "Low",
      status: "Completed",
      progress: 100,
      due: "01 Aug 2026",
      assigned: "Rajat Verma",
    },
  ]);

  // Tab filter
  const filteredTasks =
    activeTab === "All"
      ? tasks
      : tasks.filter((task) => task.status === activeTab);

  // View All button
  const visibleTasks = showAll
    ? filteredTasks
    : filteredTasks.slice(0, 2);

  // Complete task
  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "Completed",
              progress: 100,
            }
          : task
      )
    );
  };

  // Add new task
  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Employee Task",
      description: "New task created from Quick Actions.",
      priority: "Medium",
      status: "Pending",
      progress: 0,
      due: "12 Aug 2026",
      assigned: "Mayank Panse",
    };

    setTasks([...tasks, newTask]);
    setActiveTab("All");
    setShowAll(true);
  };

  return (
    <div className="tasks-page">

      {/* Header */}

      <div className="tasks-header">

        <div>
          <h1>My Tasks</h1>
          <p>Track, manage and complete your assigned tasks</p>
        </div>

        <input
          className="task-search"
          type="text"
          placeholder="Search tasks..."
        />

      </div>


      {/* Summary Cards */}

      <div className="task-summary">

        <div className="task-summary-card">
          <span>📋</span>
          <div>
            <p>Total Tasks</p>
            <h2>{tasks.length}</h2>
            <small>All assigned tasks</small>
          </div>
        </div>

        <div className="task-summary-card">
          <span>🕐</span>
          <div>
            <p>Pending</p>
            <h2>
              {tasks.filter((t) => t.status === "Pending").length}
            </h2>
            <small>Tasks to be started</small>
          </div>
        </div>

        <div className="task-summary-card">
          <span>🔄</span>
          <div>
            <p>In Progress</p>
            <h2>
              {tasks.filter((t) => t.status === "In Progress").length}
            </h2>
            <small>Tasks in progress</small>
          </div>
        </div>

        <div className="task-summary-card">
          <span>✅</span>
          <div>
            <p>Completed</p>
            <h2>
              {tasks.filter((t) => t.status === "Completed").length}
            </h2>
            <small>Tasks completed</small>
          </div>
        </div>

        <div className="task-summary-card">
          <span>⚠️</span>
          <div>
            <p>Overdue</p>
            <h2>2</h2>
            <small>Tasks past due</small>
          </div>
        </div>

      </div>


      {/* Tabs */}

      <div className="task-tabs">

        {["All", "Pending", "In Progress", "Completed"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => {
              setActiveTab(tab);
              setShowAll(false);
            }}
          >
            {tab}{" "}
            <span>
              {tab === "All"
                ? tasks.length
                : tasks.filter((t) => t.status === tab).length}
            </span>
          </button>
        ))}

      </div>


      {/* Main Content */}

      <div className="tasks-layout">

        {/* Task List */}

        <div className="task-list-card">

          <div className="section-title">
            <h3>
              {activeTab === "All"
                ? "Today's Tasks"
                : `${activeTab} Tasks`}
            </h3>

            <span>{filteredTasks.length}</span>
          </div>


          {visibleTasks.map((task) => (

            <div className="task-item" key={task.id}>

              <div className="task-icon">
                📋
              </div>

              <div className="task-info">

                <div className="task-title-row">

                  <h4>{task.title}</h4>

                  <span
                    className={`priority ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                </div>

                <p>{task.description}</p>

                <div className="task-meta">
                  📅 Due {task.due}
                  &nbsp;&nbsp;
                  👤 Assigned by {task.assigned}
                </div>

              </div>


              <div className="task-progress">

                <div className="progress-number">
                  {task.progress}%
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${task.progress}%`,
                    }}
                  ></div>
                </div>

                <span
                  className={`task-status ${task.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {task.status}
                </span>

              </div>


              {/* Complete button */}

              {task.status !== "Completed" && (
                <button
                  className="complete-btn"
                  onClick={() => completeTask(task.id)}
                >
                  ✓
                </button>
              )}

            </div>

          ))}


          {/* View All */}

          {filteredTasks.length > 2 && (

            <button
              className="view-all-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less ↑" : "View All Tasks →"}
            </button>

          )}

        </div>


        {/* Right Side */}

        <div className="task-right">


          {/* Task Overview */}

          <div className="overview-card">

            <h3>Task Overview</h3>

            <div className="overview-circle">
              <strong>{tasks.length}</strong>
              <span>Total</span>
            </div>

            <div className="overview-list">

              <p>
                🟠 Pending
                <b>
                  {tasks.filter((t) => t.status === "Pending").length}
                </b>
              </p>

              <p>
                🔵 In Progress
                <b>
                  {tasks.filter((t) => t.status === "In Progress").length}
                </b>
              </p>

              <p>
                🟢 Completed
                <b>
                  {tasks.filter((t) => t.status === "Completed").length}
                </b>
              </p>

            </div>

          </div>


          {/* Upcoming Deadlines */}

          {/* Upcoming Deadlines */}

<div className="deadline-card">

  <div className="deadline-header">
    <h3>Upcoming Deadlines</h3>

    <button
      onClick={() => {
        setActiveTab("All");
        setShowAll(true);
      }}
    >
      View Calendar
    </button>
  </div>

  <div className="deadline-list">

    {/* Task 1 */}
    <div className="deadline-item">

      <div className="deadline-icon purple">
        📋
      </div>

      <div className="deadline-info">
        <h4>Dashboard UI Design</h4>
        <p>Today, 06:00 PM</p>
      </div>

      <span className="deadline-badge today">
        Due Today
      </span>

      <button className="more-btn">
        ⋮
      </button>

    </div>


    {/* Task 2 */}
    <div className="deadline-item">

      <div className="deadline-icon purple">
        📋
      </div>

      <div className="deadline-info">
        <h4>API Integration</h4>
        <p>Today, 11:59 PM</p>
      </div>

      <span className="deadline-badge today">
        Due Today
      </span>

      <button className="more-btn">
        ⋮
      </button>

    </div>


    {/* Task 3 */}
    <div className="deadline-item">

      <div className="deadline-icon orange">
        📅
      </div>

      <div className="deadline-info">
        <h4>User Management Module</h4>
        <p>05 Aug 2026</p>
      </div>

      <span className="deadline-badge days">
        In 2 Days
      </span>

      <button className="more-btn">
        ⋮
      </button>

    </div>


    {/* Task 4 */}
    <div className="deadline-item">

      <div className="deadline-icon green">
        📅
      </div>

      <div className="deadline-info">
        <h4>Role & Permission Setup</h4>
        <p>07 Aug 2026</p>
      </div>

      <span className="deadline-badge days">
        In 4 Days
      </span>

      <button className="more-btn">
        ⋮
      </button>

    </div>


    {/* Task 5 */}
    <div className="deadline-item">

      <div className="deadline-icon blue">
        📊
      </div>

      <div className="deadline-info">
        <h4>Reports Page</h4>
        <p>10 Aug 2026</p>
      </div>

      <span className="deadline-badge week">
        In 7 Days
      </span>

      <button className="more-btn">
        ⋮
      </button>

    </div>

  </div>

</div>

          {/* Quick Actions */}

          <div className="quick-actions">

            <h3>Quick Actions</h3>

            <button onClick={() => setShowAll(true)}>
              ✓ View Completed Tasks
            </button>

            <button onClick={addTask}>
              ＋ Request New Task
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Tasks;