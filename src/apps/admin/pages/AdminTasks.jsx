import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaBell,
  FaChevronDown,
  FaEllipsisV,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaHourglassHalf,
  FaUsers,
  FaCalendarAlt,
  FaFlag,
  FaPaperclip,
  FaCommentAlt,
  FaUser,
  FaChartLine,
  FaExclamationCircle,
  FaPlus,
  FaThLarge,
  FaList,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./AdminTasks.css";

const taskData = [
  {
    id: "TSK-001",
    title: "Dashboard UI",
    description: "Complete responsive dashboard UI",
    assignee: "Aman Sharma",
    department: "Design",
    manager: "Rajat Verma",
    priority: "High",
    dueDate: "15 Sep 2026",
    progress: 80,
    status: "In Progress",
  },
  {
    id: "TSK-002",
    title: "API Integration",
    description: "Integrate payment API",
    assignee: "Rahul Verma",
    department: "Development",
    manager: "Neha Sharma",
    priority: "Urgent",
    dueDate: "13 Sep 2026",
    progress: 40,
    status: "Overdue",
  },
  {
    id: "TSK-003",
    title: "QA Testing",
    description: "Test new release build",
    assignee: "Neha Patel",
    department: "QA",
    manager: "Amit Jain",
    priority: "Medium",
    dueDate: "17 Sep 2026",
    progress: 70,
    status: "Review",
  },
  {
    id: "TSK-004",
    title: "Documentation",
    description: "Prepare user documentation",
    assignee: "Priya Singh",
    department: "Development",
    manager: "Neha Sharma",
    priority: "Low",
    dueDate: "20 Sep 2026",
    progress: 100,
    status: "Completed",
  },
  {
    id: "TSK-005",
    title: "Marketing Report",
    description: "Monthly campaign report",
    assignee: "Vikram Joshi",
    department: "Marketing",
    manager: "Sneha Kulkarni",
    priority: "High",
    dueDate: "16 Sep 2026",
    progress: 60,
    status: "In Progress",
  },
  {
    id: "TSK-006",
    title: "Finance Audit",
    description: "Q2 financial audit",
    assignee: "Kavya Mehta",
    department: "Finance",
    manager: "Rohit Malhotra",
    priority: "Medium",
    dueDate: "18 Sep 2026",
    progress: 30,
    status: "Pending",
  },
  {
    id: "TSK-007",
    title: "HR Policy Update",
    description: "Update HR guidelines",
    assignee: "Suresh Nair",
    department: "HR",
    manager: "Pooja Desai",
    priority: "Low",
    dueDate: "22 Sep 2026",
    progress: 20,
    status: "Pending",
  },
  {
    id: "TSK-008",
    title: "Operations Review",
    description: "Review operational process",
    assignee: "Anjali Tiwari",
    department: "Operations",
    manager: "Karan Patel",
    priority: "Medium",
    dueDate: "19 Sep 2026",
    progress: 90,
    status: "In Progress",
  },
];

const AdminTasks = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [priority, setPriority] = useState("All Priorities");
  const [view, setView] = useState("List");
  const [selectedTask, setSelectedTask] = useState(taskData[0]);
  const [openMenu, setOpenMenu] = useState(null);

  const filteredTasks = useMemo(() => {
    return taskData.filter((task) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        task.title.toLowerCase().includes(query) ||
        task.assignee.toLowerCase().includes(query) ||
        task.department.toLowerCase().includes(query);

      const matchesDepartment =
        department === "All Departments" ||
        task.department === department;

      const matchesPriority =
        priority === "All Priorities" ||
        task.priority === priority;

      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Pending" && task.status === "Pending") ||
        (activeTab === "In Progress" && task.status === "In Progress") ||
        (activeTab === "Review" && task.status === "Review") ||
        (activeTab === "Completed" && task.status === "Completed") ||
        (activeTab === "Overdue" && task.status === "Overdue");

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesPriority &&
        matchesTab
      );
    });
  }, [search, department, priority, activeTab]);

  const getInitials = (name) =>
    name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2);

  return (
    <div className="admin-tasks-page">

      {/* HEADER */}
      <div className="admin-tasks-header">
        <div>
          <h1>Tasks</h1>
          <p>
            Monitor tasks, workload and productivity across the organization.
          </p>
        </div>

        <div className="admin-tasks-header-actions">
          <div className="admin-tasks-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search tasks, employees, department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="task-header-btn">
            <FaFilter />
            Filters
          </button>

          <button className="task-header-btn">
            <FaDownload />
            Export
          </button>

          <div className="task-view-switch">
            <button
              className={view === "Board" ? "active" : ""}
              onClick={() => setView("Board")}
            >
              <FaThLarge />
              Board
            </button>

            <button
              className={view === "List" ? "active" : ""}
              onClick={() => setView("List")}
            >
              <FaList />
              List
            </button>

            <button
              className={view === "Analytics" ? "active" : ""}
              onClick={() => setView("Analytics")}
            >
              Analytics
            </button>
          </div>

          <button className="task-bell">
            <FaBell />
            <span>3</span>
          </button>

          <div className="task-admin-user">
            <div className="task-admin-avatar">AU</div>
            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>
            <FaChevronDown />
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="task-stat-grid">

        <div className="task-stat-card blue">
          <div className="task-stat-icon">
            <FaClipboardList />
          </div>
          <div>
            <span>Total Tasks</span>
            <strong>1,284</strong>
            <small>This Month</small>
          </div>
        </div>

        <div className="task-stat-card green">
          <div className="task-stat-icon">
            <FaCheckCircle />
          </div>
          <div>
            <span>Completed Tasks</span>
            <strong>984</strong>
            <small>77% completion rate</small>
          </div>
        </div>

        <div className="task-stat-card red">
          <div className="task-stat-icon">
            <FaClock />
          </div>
          <div>
            <span>In Progress</span>
            <strong>210</strong>
            <small>16% of total</small>
          </div>
        </div>

        <div className="task-stat-card orange">
          <div className="task-stat-icon">
            <FaHourglassHalf />
          </div>
          <div>
            <span>Pending</span>
            <strong>62</strong>
            <small>5% of total</small>
          </div>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="admin-tasks-content">

        {/* LEFT */}
        <div className="task-list-area">

          <div className="task-tabs">
            {[
              ["All", "1,284"],
              ["Pending", "62"],
              ["In Progress", "210"],
              ["Review", "28"],
              ["Completed", "984"],
              ["Overdue", "28"],
            ].map(([name, count]) => (
              <button
                key={name}
                className={activeTab === name ? "active" : ""}
                onClick={() => setActiveTab(name)}
              >
                {name} ({count})
              </button>
            ))}
          </div>

          <div className="task-filters">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>All Departments</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>HR</option>
              <option>QA</option>
              <option>Operations</option>
            </select>

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>All Priorities</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Urgent</option>
            </select>

            <button>
              <FaUsers />
              All Assignees
            </button>

            <button>
              <FaCalendarAlt />
              Due Date
            </button>
          </div>

          <div className="task-table-card">
            <div className="task-table-scroll">
              <table>

                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>TASK TITLE</th>
                    <th>ASSIGNED TO</th>
                    <th>DEPARTMENT</th>
                    <th>MANAGER</th>
                    <th>PRIORITY</th>
                    <th>DUE DATE</th>
                    <th>PROGRESS</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredTasks.map((task) => (
                    <tr
                      key={task.id}
                      className={
                        selectedTask?.id === task.id ? "selected" : ""
                      }
                      onClick={() => setSelectedTask(task)}
                    >
                      <td>
                        <input
                          type="checkbox"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>

                      <td>
                        <div className="task-title-cell">
                          <strong>{task.title}</strong>
                          <small>{task.description}</small>
                        </div>
                      </td>

                      <td>
                        <div className="task-assignee">
                          <div className="task-avatar">
                            {getInitials(task.assignee)}
                          </div>
                          <span>{task.assignee}</span>
                        </div>
                      </td>

                      <td>{task.department}</td>
                      <td>{task.manager}</td>

                      <td>
                        <span
                          className={`priority-badge ${task.priority.toLowerCase()}`}
                        >
                          {task.priority}
                        </span>
                      </td>

                      <td>{task.dueDate}</td>

                      <td>
                        <div className="task-progress">
                          <span>{task.progress}%</span>
                          <div>
                            <i style={{ width: `${task.progress}%` }}></i>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span
                          className={`task-status ${task.status
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          <i></i>
                          {task.status}
                        </span>
                      </td>

                      <td>
                        <div className="task-action">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(
                                openMenu === task.id ? null : task.id
                              );
                            }}
                          >
                            <FaEllipsisV />
                          </button>

                          {openMenu === task.id && (
                            <div className="task-dropdown">
                              <button>View Details</button>
                              <button>Edit Task</button>
                              <button>Change Assignee</button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>
            </div>

            <div className="task-footer">
              <span>Showing 1 to 8 of 1,284 tasks</span>

              <div className="task-pagination">
                <button><FaChevronLeft /></button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <span>...</span>
                <button>161</button>
                <button><FaChevronRight /></button>
              </div>

              <div className="task-per-page">
                Show
                <select>
                  <option>8</option>
                  <option>10</option>
                  <option>20</option>
                </select>
                per page
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT DETAILS */}
        {selectedTask && (
          <aside className="task-details-panel">

            <div className="task-details-header">
              <h2>Task Details</h2>
              <button onClick={() => setSelectedTask(null)}>×</button>
            </div>

            <div className="task-detail-top">
              <div className="task-detail-icon">
                <FaClipboardList />
              </div>

              <div>
                <h3>{selectedTask.title}</h3>
                <p>{selectedTask.description}</p>

                <div className="task-detail-badges">
                  <span className="in-progress-badge">
                    <FaClock />
                    {selectedTask.status}
                  </span>

                  <span className="high-priority-badge">
                    <FaFlag />
                    High Priority
                  </span>
                </div>
              </div>
            </div>

            <div className="detail-block">
              <h4>Assigned To</h4>

              <div className="detail-person">
                <div className="detail-avatar">
                  {getInitials(selectedTask.assignee)}
                </div>

                <div>
                  <strong>{selectedTask.assignee}</strong>
                  <span>UI Designer</span>
                </div>
              </div>
            </div>

            <div className="detail-grid">
              <div>
                <span>Department</span>
                <strong>{selectedTask.department}</strong>
              </div>

              <div>
                <span>Manager</span>
                <strong>{selectedTask.manager}</strong>
              </div>

              <div>
                <span>Due Date</span>
                <strong>
                  <FaCalendarAlt />
                  {selectedTask.dueDate}
                </strong>
              </div>

              <div>
                <span>Priority</span>
                <strong>{selectedTask.priority}</strong>
              </div>
            </div>

            <div className="detail-block">
              <div className="detail-progress-title">
                <h4>Progress</h4>
                <strong>{selectedTask.progress}%</strong>
              </div>

              <div className="detail-progress-bar">
                <i style={{ width: `${selectedTask.progress}%` }}></i>
              </div>
            </div>

            <div className="detail-block">
              <h4>Description</h4>
              <p className="description-text">
                Design and implement a responsive dashboard UI with new
                analytics widgets and improved navigation.
              </p>
            </div>

            <div className="detail-block">
              <div className="attachment-heading">
                <h4>Attachments (3)</h4>
                <button>View All</button>
              </div>

              <div className="attachment-list">
                <span><FaPaperclip /> requirements.pdf</span>
                <span><FaPaperclip /> wireframe.fig</span>
                <span><FaPaperclip /> ui-reference.png</span>
              </div>
            </div>

            <div className="detail-tabs">
              <button className="active">Activity</button>
              <button>Comments</button>
              <button>Subtasks</button>
              <button>History</button>
            </div>

            <div className="task-activity">
              <div>
                <span className="activity-green"><FaChartLine /></span>
                <p>
                  <strong>Progress updated to 80%</strong>
                  <small>by Aman Sharma</small>
                </p>
                <time>2 hours ago</time>
              </div>

              <div>
                <span className="activity-purple"><FaCommentAlt /></span>
                <p>
                  <strong>Comment added</strong>
                  <small>by Rajat Verma</small>
                </p>
                <time>5 hours ago</time>
              </div>

              <div>
                <span className="activity-blue"><FaUser /></span>
                <p>
                  <strong>Task assigned to Aman Sharma</strong>
                  <small>by Rajat Verma</small>
                </p>
                <time>3 days ago</time>
              </div>

              <div>
                <span className="activity-grey"><FaPlus /></span>
                <p>
                  <strong>Task created</strong>
                  <small>by Admin User</small>
                </p>
                <time>3 days ago</time>
              </div>
            </div>

            <div className="overdue-list">
              <div className="overdue-heading">
                <h4>Overdue Tasks</h4>
                <button>View All</button>
              </div>

              <div>
                <FaExclamationCircle />
                <p>
                  API Integration
                  <small>Rahul Verma • Development</small>
                </p>
                <span>3 days</span>
              </div>

              <div>
                <FaExclamationCircle />
                <p>
                  Marketing Report
                  <small>Vikram Joshi • Marketing</small>
                </p>
                <span>2 days</span>
              </div>

              <div>
                <FaExclamationCircle />
                <p>
                  Dashboard QA
                  <small>Neha Patel • QA</small>
                </p>
                <span>2 days</span>
              </div>

              <div>
                <FaExclamationCircle />
                <p>
                  Server Migration
                  <small>Karan Patel • Operations</small>
                </p>
                <span>5 days</span>
              </div>
            </div>

          </aside>
        )}
      </div>

      {/* ANALYTICS */}
      <div className="task-analytics">

        <section className="analytics-card">
          <div className="analytics-header">
            <h2>Task Performance by Department</h2>
            <button>View All</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Department</th>
                <th>Total</th>
                <th>Completed</th>
                <th>Overdue</th>
                <th>Completion</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Development</td>
                <td>420</td>
                <td className="green-value">338</td>
                <td className="red-value">12</td>
                <td><b className="completion-pill">80%</b></td>
              </tr>
              <tr>
                <td>Design</td>
                <td>180</td>
                <td className="green-value">151</td>
                <td className="red-value">4</td>
                <td><b className="completion-pill">84%</b></td>
              </tr>
              <tr>
                <td>Marketing</td>
                <td>210</td>
                <td className="green-value">175</td>
                <td className="red-value">5</td>
                <td><b className="completion-pill">83%</b></td>
              </tr>
              <tr>
                <td>QA</td>
                <td>160</td>
                <td className="green-value">142</td>
                <td className="red-value">3</td>
                <td><b className="completion-pill">89%</b></td>
              </tr>
              <tr>
                <td>Finance</td>
                <td>96</td>
                <td className="green-value">81</td>
                <td className="red-value">2</td>
                <td><b className="completion-pill">84%</b></td>
              </tr>
              <tr>
                <td>HR</td>
                <td>72</td>
                <td className="green-value">63</td>
                <td className="red-value">1</td>
                <td><b className="completion-pill">88%</b></td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="analytics-card">
          <div className="analytics-header">
            <h2>Task Completion Trend</h2>
            <select>
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>

          <div className="completion-chart">
            <div className="chart-y">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
            </div>

            <div className="chart-area">
              <div className="chart-grid"></div>
              <div className="chart-grid"></div>
              <div className="chart-grid"></div>
              <div className="chart-grid"></div>
              <div className="chart-grid"></div>

              <svg viewBox="0 0 460 150" preserveAspectRatio="none">
                <polygon
                  points="20,105 150,60 285,58 420,25 420,150 20,150"
                  fill="rgba(71,120,232,.12)"
                />

                <polyline
                  points="20,105 150,60 285,58 420,25"
                  fill="none"
                  stroke="#4778e8"
                  strokeWidth="3"
                />

                <circle cx="20" cy="105" r="4" />
                <circle cx="150" cy="60" r="4" />
                <circle cx="285" cy="58" r="4" />
                <circle cx="420" cy="25" r="4" />
              </svg>
            </div>
          </div>

          <div className="chart-weeks">
            <span>W1</span>
            <span>W2</span>
            <span>W3</span>
            <span>W4</span>
          </div>

          <div className="chart-summary">
            <div>
              <span>Highest</span>
              <strong>92%</strong>
              <small>Week 4</small>
            </div>

            <div>
              <span>Lowest</span>
              <strong>68%</strong>
              <small>Week 1</small>
            </div>

            <div>
              <span>Average</span>
              <strong>87%</strong>
              <small>This Month</small>
            </div>
          </div>
        </section>

        <section className="analytics-card">
          <div className="analytics-header">
            <h2>Task Priority Distribution</h2>
          </div>

          <div className="priority-content">

            <div className="priority-donut">
              <div>
                <strong>1,284</strong>
                <span>Total Tasks</span>
              </div>
            </div>

            <div className="priority-list">
              <div>
                <i className="low"></i>
                <span>Low</span>
                <b>312 (24%)</b>
              </div>

              <div>
                <i className="medium"></i>
                <span>Medium</span>
                <b>574 (45%)</b>
              </div>

              <div>
                <i className="high"></i>
                <span>High</span>
                <b>320 (25%)</b>
              </div>

              <div>
                <i className="urgent"></i>
                <span>Urgent</span>
                <b>78 (6%)</b>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default AdminTasks;