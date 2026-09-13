import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiPlus,
  FiBell,
  FiChevronDown,
  FiX,
  FiEdit2,
  FiEye,
  FiMoreVertical,
  FiUsers,
  FiUserCheck,
  FiUserX,
  FiClock,
  FiCalendar,
  FiSettings,
  FiTrash2,
  FiActivity,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import "./AdminManagers.css";

const managers = [
  {
    id: "MGR-001",
    name: "Rajat Verma",
    email: "rajat.verma@company.com",
    department: "Design",
    teamSize: 12,
    joining: "15 Mar 2024",
    status: "Active",
    lastActive: "Today, 09:24 AM",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "MGR-002",
    name: "Neha Sharma",
    email: "neha.sharma@company.com",
    department: "Development",
    teamSize: 24,
    joining: "10 Apr 2024",
    status: "Active",
    lastActive: "Today, 10:12 AM",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "MGR-003",
    name: "Amit Jain",
    email: "amit.jain@company.com",
    department: "Marketing",
    teamSize: 18,
    joining: "22 Apr 2024",
    status: "Active",
    lastActive: "Today, 11:03 AM",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: "MGR-004",
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@company.com",
    department: "Finance",
    teamSize: 15,
    joining: "05 May 2024",
    status: "Active",
    lastActive: "Today, 08:41 AM",
    img: "https://i.pravatar.cc/100?img=44",
  },
  {
    id: "MGR-005",
    name: "Vikram Deshmukh",
    email: "vikram.d@company.com",
    department: "HR",
    teamSize: 10,
    joining: "12 May 2024",
    status: "Active",
    lastActive: "Today, 09:18 AM",
    img: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: "MGR-006",
    name: "Pooja Mehta",
    email: "pooja.mehta@company.com",
    department: "QA",
    teamSize: 8,
    joining: "01 Jun 2024",
    status: "Pending",
    lastActive: "Never",
    img: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: "MGR-007",
    name: "Karan Patel",
    email: "karan.patel@company.com",
    department: "Sales",
    teamSize: 11,
    joining: "15 Jun 2024",
    status: "Active",
    lastActive: "Today, 10:55 AM",
    img: "https://i.pravatar.cc/100?img=68",
  },
  {
    id: "MGR-008",
    name: "Anjali Singh",
    email: "anjali.singh@company.com",
    department: "Operations",
    teamSize: 9,
    joining: "25 Jun 2024",
    status: "Active",
    lastActive: "Today, 09:40 AM",
    img: "https://i.pravatar.cc/100?img=49",
  },
];

const AdminManagers = () => {
  const [selectedManager, setSelectedManager] = useState(managers[0]);

  return (
    <div className="admin-managers">

      {/* ================= HEADER ================= */}
      <div className="manager-header">

        <div className="manager-title">
          <h1>Managers</h1>
          <p>
            Manage managers, departments and team assignments.
          </p>
        </div>

        <div className="manager-header-right">

          <div className="manager-search">
            <FiSearch />
            <input
              type="text"
              placeholder="Search managers, ID, email..."
            />
          </div>

          <button className="manager-outline-btn">
            <FiFilter />
            Filters
          </button>

          <button className="manager-outline-btn">
            <FiDownload />
            Export
          </button>

          <button className="manager-add-btn">
            <FiPlus />
            Add Manager
          </button>

          <div className="manager-notification">
            <FiBell />
            <span>3</span>
          </div>

          <div className="manager-admin-user">

            <img src="https://i.pravatar.cc/100?img=12" />

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FiChevronDown />

          </div>

        </div>
      </div>


      {/* ================= STAT CARDS ================= */}
      <div className="manager-stats">

        <div className="manager-stat-card">

          <div className="manager-stat-icon blue">
            <FiUsers />
          </div>

          <div>
            <span>Total Managers</span>
            <h2>18</h2>
            <small className="manager-green">
              ↑ 2 this month
            </small>
          </div>

        </div>


        <div className="manager-stat-card">

          <div className="manager-stat-icon green">
            <FiUserCheck />
          </div>

          <div>
            <span>Active Managers</span>
            <h2>17</h2>
            <small className="manager-green">
              94.4% of total
            </small>
          </div>

        </div>


        <div className="manager-stat-card">

          <div className="manager-stat-icon red">
            <FiUserX />
          </div>

          <div>
            <span>Inactive Managers</span>
            <h2>1</h2>
            <small className="manager-red">
              5.6% of total
            </small>
          </div>

        </div>


        <div className="manager-stat-card">

          <div className="manager-stat-icon yellow">
            <FiClock />
          </div>

          <div>
            <span>Pending Activation</span>
            <h2>2</h2>
            <small className="manager-orange">
              Invitations sent
            </small>
          </div>

        </div>

      </div>


      {/* ================= MAIN ================= */}
      <div className="manager-main">

        {/* LEFT CONTENT */}
        <div className="manager-left">

          {/* TABS */}
          <div className="manager-tabs">

            <button className="active">
              All Managers (18)
            </button>

            <button>
              Active (17)
            </button>

            <button>
              Inactive (1)
            </button>

            <button>
              Pending Activation (2)
            </button>

          </div>


          {/* FILTERS */}
          <div className="manager-filter-bar">

            <button>
              All Departments
              <FiChevronDown />
            </button>

            <button>
              All Status
              <FiChevronDown />
            </button>

            <button>
              All Employment Types
              <FiChevronDown />
            </button>

            <button className="manager-date">
              <FiCalendar />
              Joining Date
            </button>

            <button className="manager-reset">
              Reset
            </button>

          </div>


          {/* TABLE */}
          <div className="manager-table-container">

            <table className="manager-table">

              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>MANAGER</th>
                  <th>MANAGER ID</th>
                  <th>DEPARTMENT</th>
                  <th>TEAM SIZE</th>
                  <th>JOINING DATE</th>
                  <th>STATUS</th>
                  <th>LAST ACTIVE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>

              <tbody>

                {managers.map((manager) => (

                  <tr
                    key={manager.id}
                    onClick={() => setSelectedManager(manager)}
                  >

                    <td>
                      <input
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>

                    <td>

                      <div className="manager-info">

                        <img src={manager.img} />

                        <div>
                          <strong>{manager.name}</strong>
                          <small>{manager.email}</small>
                        </div>

                      </div>

                    </td>

                    <td>{manager.id}</td>

                    <td>{manager.department}</td>

                    <td>{manager.teamSize}</td>

                    <td>{manager.joining}</td>

                    <td>
                      <span
                        className={`manager-status ${manager.status.toLowerCase()}`}
                      >
                        {manager.status}
                      </span>
                    </td>

                    <td>{manager.lastActive}</td>

                    <td>
                      <button
                        className="manager-more"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiMoreVertical />
                      </button>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* TABLE FOOTER */}
          <div className="manager-table-footer">

            <span>
              Showing 1 to 8 of 18 managers
            </span>

            <div className="manager-pagination">

              <button>‹</button>
              <button className="active-page">1</button>
              <button>2</button>
              <button>3</button>
              <button>›</button>

            </div>

            <div className="manager-per-page">
              Show
              <select>
                <option>10</option>
                <option>20</option>
              </select>
              per page
            </div>

          </div>


          {/* ================= BOTTOM CARDS ================= */}
          <div className="manager-bottom">

            {/* Department Chart */}
            <div className="department-card">

              <div className="bottom-title">
                <h3>Managers by Department</h3>
                <button>View Details →</button>
              </div>

              <div className="bar-chart">

                <div className="bar-item">
                  <span>2</span>
                  <div className="bar b1"></div>
                  <small>Design</small>
                </div>

                <div className="bar-item">
                  <span>5</span>
                  <div className="bar b2"></div>
                  <small>Development</small>
                </div>

                <div className="bar-item">
                  <span>3</span>
                  <div className="bar b3"></div>
                  <small>Marketing</small>
                </div>

                <div className="bar-item">
                  <span>2</span>
                  <div className="bar b4"></div>
                  <small>Finance</small>
                </div>

                <div className="bar-item">
                  <span>1</span>
                  <div className="bar b5"></div>
                  <small>HR</small>
                </div>

                <div className="bar-item">
                  <span>2</span>
                  <div className="bar b6"></div>
                  <small>QA</small>
                </div>

                <div className="bar-item">
                  <span>2</span>
                  <div className="bar b7"></div>
                  <small>Sales</small>
                </div>

                <div className="bar-item">
                  <span>1</span>
                  <div className="bar b8"></div>
                  <small>Operations</small>
                </div>

              </div>

            </div>


            {/* Activity */}
            <div className="activity-card">

              <div className="bottom-title">
                <h3>Manager Activity</h3>
                <button>View All</button>
              </div>

              <div className="activity-row">

                <div className="activity-icon blue">
                  <FiUserCheck />
                </div>

                <div>
                  <strong>New manager added</strong>
                  <small>Anjali Singh · Operations</small>
                </div>

                <span>2 days ago</span>

              </div>


              <div className="activity-row">

                <div className="activity-icon green">
                  <FiSettings />
                </div>

                <div>
                  <strong>Department changed</strong>
                  <small>Amit Jain · Marketing</small>
                </div>

                <span>3 days ago</span>

              </div>


              <div className="activity-row">

                <div className="activity-icon red">
                  <FiMail />
                </div>

                <div>
                  <strong>Invitation resent</strong>
                  <small>Pooja Mehta</small>
                </div>

                <span>5 days ago</span>

              </div>


              <div className="activity-row">

                <div className="activity-icon red">
                  <FiUserX />
                </div>

                <div>
                  <strong>Manager deactivated</strong>
                  <small>Rohan Gupta</small>
                </div>

                <span>1 week ago</span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT DETAILS ================= */}
        <div className="manager-details">

          <div className="manager-details-header">

            <h2>Manager Details</h2>

            <button>
              <FiX />
            </button>

          </div>


          {/* PROFILE */}
          <div className="manager-profile">

            <img src={selectedManager.img} />

            <div>
              <h3>{selectedManager.name}</h3>
              <span>Team Manager</span>
              <small>{selectedManager.id}</small>
              <p>◉ {selectedManager.department} Department</p>
            </div>

            <b>{selectedManager.status}</b>

          </div>


          {/* PROFILE BUTTONS */}
          <div className="manager-detail-buttons">

            <button>
              <FiEye />
              View Full Profile
            </button>

            <button>
              <FiEdit2 />
              Edit Manager
            </button>

          </div>


          {/* DETAIL TABS */}
          <div className="manager-detail-tabs">

            <button className="active">Overview</button>
            <button>Team (12)</button>
            <button>Permissions</button>
            <button>Activity</button>

          </div>


          {/* PERSONAL */}
          <div className="manager-detail-section">

            <div className="section-heading">
              <h4>Personal Information</h4>
              <span>
                <FiEdit2 /> Edit
              </span>
            </div>

            <div className="manager-detail-row">
              <span>Email</span>
              <strong>
                rajat.verma@company.com
              </strong>
            </div>

            <div className="manager-detail-row">
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="manager-detail-row">
              <span>Date of Birth</span>
              <strong>14 Apr 1995</strong>
            </div>

            <div className="manager-detail-row">
              <span>Address</span>
              <strong>
                Indore, Madhya Pradesh, India
              </strong>
            </div>

          </div>


          {/* PROFESSIONAL */}
          <div className="manager-detail-section">

            <h4>Professional Information</h4>

            <div className="manager-detail-row">
              <span>Department</span>
              <strong>{selectedManager.department}</strong>
            </div>

            <div className="manager-detail-row">
              <span>Designation</span>
              <strong>Team Manager</strong>
            </div>

            <div className="manager-detail-row">
              <span>Joining Date</span>
              <strong>{selectedManager.joining}</strong>
            </div>

            <div className="manager-detail-row">
              <span>Employment Type</span>
              <strong>Full Time</strong>
            </div>

          </div>


          {/* TEAM PERFORMANCE */}
          <div className="team-performance">

            <div className="performance-title">
              <h4>Team Performance</h4>
              <span>(This Month)</span>
              <button>View Team →</button>
            </div>

            <div className="performance-grid">

              <div>
                <strong>94%</strong>
                <small>Attendance</small>
              </div>

              <div>
                <strong>87%</strong>
                <small>Task Completion</small>
              </div>

              <div>
                <strong>93%</strong>
                <small>Updates</small>
              </div>

              <div>
                <strong>7</strong>
                <small>On Leave</small>
              </div>

            </div>

          </div>


          {/* ACCOUNT */}
          <div className="manager-detail-section">

            <h4>Account Information</h4>

            <div className="manager-detail-row">
              <span>Last Login</span>
              <strong>Today, 09:24 AM</strong>
            </div>

            <div className="manager-detail-row">
              <span>Account Created</span>
              <strong>15 Mar 2024</strong>
            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="manager-quick-actions">

            <h4>Quick Actions</h4>

            <div className="manager-action-grid">

              <button>
                <FiUsers />
                View Team
              </button>

              <button>
                <FiMapPin />
                Change Department
              </button>

              <button>
                <FiSettings />
                Manage Permissions
              </button>

              <button className="danger">
                <FiTrash2 />
                Deactivate Manager
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminManagers;