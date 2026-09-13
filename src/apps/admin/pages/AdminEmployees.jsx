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
  FiMail,
  FiPhone,
  FiMapPin,
  FiTrash2,
} from "react-icons/fi";
import "./AdminEmployees.css";

const employees = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    email: "aman.sharma@company.com",
    department: "Design",
    designation: "UI Designer",
    manager: "Rajat Verma",
    joining: "15 Mar 2024",
    status: "Active",
    lastActive: "Today, 09:24 AM",
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    email: "priya.singh@company.com",
    department: "Development",
    designation: "Developer",
    manager: "Neha Sharma",
    joining: "10 Apr 2024",
    status: "Active",
    lastActive: "Today, 10:12 AM",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    email: "rahul.verma@company.com",
    department: "Development",
    designation: "Developer",
    manager: "Rajat Verma",
    joining: "22 Apr 2024",
    status: "Active",
    lastActive: "Today, 11:03 AM",
    img: "https://i.pravatar.cc/100?img=11",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    email: "neha.patel@company.com",
    department: "QA",
    designation: "QA Engineer",
    manager: "Amit Jain",
    joining: "05 May 2024",
    status: "Pending",
    lastActive: "Never",
    img: "https://i.pravatar.cc/100?img=44",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    email: "vikram.joshi@company.com",
    department: "Marketing",
    designation: "Marketing Executive",
    manager: "Sneha Kulkarni",
    joining: "12 May 2024",
    status: "Active",
    lastActive: "Today, 08:51 AM",
    img: "https://i.pravatar.cc/100?img=13",
  },
  {
    id: "EMP-006",
    name: "Kavya Mehta",
    email: "kavya.mehta@company.com",
    department: "Finance",
    designation: "Accountant",
    manager: "Rohit Malhotra",
    joining: "01 Jun 2024",
    status: "Active",
    lastActive: "Today, 09:10 AM",
    img: "https://i.pravatar.cc/100?img=45",
  },
  {
    id: "EMP-007",
    name: "Suresh Nair",
    email: "suresh.nair@company.com",
    department: "HR",
    designation: "HR Executive",
    manager: "Pooja Desai",
    joining: "18 Jun 2024",
    status: "Active",
    lastActive: "Today, 10:45 AM",
    img: "https://i.pravatar.cc/100?img=68",
  },
  {
    id: "EMP-008",
    name: "Anjali Tiwari",
    email: "anjali.tiwari@company.com",
    department: "Design",
    designation: "Graphic Designer",
    manager: "Rajat Verma",
    joining: "25 Jun 2024",
    status: "Inactive",
    lastActive: "12 Aug 2024",
    img: "https://i.pravatar.cc/100?img=49",
  },
  {
    id: "EMP-009",
    name: "Deepak Yadav",
    email: "deepak.yadav@company.com",
    department: "Development",
    designation: "Backend Developer",
    manager: "Neha Sharma",
    joining: "10 Jul 2024",
    status: "Active",
    lastActive: "Today, 11:36 AM",
    img: "https://i.pravatar.cc/100?img=51",
  },
  {
    id: "EMP-010",
    name: "Pooja Desai",
    email: "pooja.desai@company.com",
    department: "HR",
    designation: "HR Manager",
    manager: "—",
    joining: "15 Jul 2024",
    status: "Active",
    lastActive: "Today, 10:22 AM",
    img: "https://i.pravatar.cc/100?img=48",
  },
];

const AdminEmployees = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  return (
    <div className="admin-employees">

      {/* HEADER */}
      <div className="admin-emp-header">

        <div className="admin-emp-title">
          <h1>Employees</h1>
          <p>Manage all employees across your organization.</p>
        </div>

        <div className="admin-emp-header-right">

          <div className="admin-emp-search">
            <FiSearch />
            <input
              type="text"
              placeholder="Search employees, ID, email..."
            />
          </div>

          <button className="admin-outline-btn">
            <FiFilter />
            Filters
          </button>

          <button className="admin-outline-btn">
            <FiDownload />
            Export
          </button>

          <button className="admin-add-btn">
            <FiPlus />
            Add Employee
          </button>

          <div className="admin-notification">
            <FiBell />
            <span>3</span>
          </div>

          <div className="admin-user">
            <img src="https://i.pravatar.cc/100?img=12" />

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FiChevronDown />
          </div>

        </div>
      </div>


      {/* STAT CARDS */}
      <div className="admin-stat-grid">

        <div className="admin-stat-card">
          <div className="admin-stat-icon blue">
            <FiUsers />
          </div>

          <div>
            <span>Total Employees</span>
            <h2>248</h2>
            <small className="green">↑ 12 this month</small>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon green">
            <FiUserCheck />
          </div>

          <div>
            <span>Active Employees</span>
            <h2>242</h2>
            <small className="green">97.6% of total</small>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon red">
            <FiUserX />
          </div>

          <div>
            <span>Inactive Employees</span>
            <h2>6</h2>
            <small className="red">2.4% of total</small>
          </div>
        </div>


        <div className="admin-stat-card">
          <div className="admin-stat-icon yellow">
            <FiClock />
          </div>

          <div>
            <span>Pending Activation</span>
            <h2>4</h2>
            <small className="orange">Invitations sent</small>
          </div>
        </div>

      </div>


      {/* MAIN AREA */}
      <div className="admin-emp-main">

        {/* LEFT TABLE */}
        <div className="admin-emp-left">

          {/* TABS */}
          <div className="admin-emp-tabs">

            <button className="active">
              All Employees (248)
            </button>

            <button>
              Active (242)
            </button>

            <button>
              Inactive (6)
            </button>

            <button>
              Pending Activation (4)
            </button>

          </div>


          {/* FILTER BAR */}
          <div className="admin-filter-bar">

            <button>
              All Departments
              <FiChevronDown />
            </button>

            <button>
              All Managers
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

            <button className="joining-date">
              <FiCalendar />
              Joining Date
            </button>

            <button className="reset">
              Reset
            </button>

          </div>


          {/* TABLE */}
          <div className="admin-table-container">

            <table className="admin-employee-table">

              <thead>
                <tr>
                  <th>
                    <input type="checkbox" />
                  </th>
                  <th>EMPLOYEE</th>
                  <th>EMPLOYEE ID</th>
                  <th>DEPARTMENT</th>
                  <th>DESIGNATION</th>
                  <th>MANAGER</th>
                  <th>JOINING DATE</th>
                  <th>STATUS</th>
                  <th>LAST ACTIVE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>


              <tbody>

                {employees.map((employee) => (

                  <tr
                    key={employee.id}
                    onClick={() => setSelectedEmployee(employee)}
                  >

                    <td>
                      <input
                        type="checkbox"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </td>

                    <td>
                      <div className="employee-info">

                        <img src={employee.img} />

                        <div>
                          <strong>{employee.name}</strong>
                          <small>{employee.email}</small>
                        </div>

                      </div>
                    </td>

                    <td>{employee.id}</td>

                    <td>{employee.department}</td>

                    <td>{employee.designation}</td>

                    <td>{employee.manager}</td>

                    <td>{employee.joining}</td>

                    <td>
                      <span
                        className={`status ${employee.status.toLowerCase()}`}
                      >
                        {employee.status}
                      </span>
                    </td>

                    <td>{employee.lastActive}</td>

                    <td>
                      <button
                        className="more-btn"
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


          {/* FOOTER */}
          <div className="admin-table-footer">

            <span>
              Showing 1 to 10 of 248 employees
            </span>

            <div className="pagination">

              <button>‹</button>
              <button className="page-active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <span>...</span>
              <button>25</button>
              <button>›</button>

            </div>

            <div className="per-page">
              Show
              <select>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
              per page
            </div>

          </div>

        </div>


        {/* RIGHT DETAILS PANEL */}
        <div className="employee-details">

          <div className="details-header">

            <h2>Employee Details</h2>

            <button>
              <FiX />
            </button>

          </div>


          <div className="details-profile">

            <img src={selectedEmployee.img} />

            <div>
              <h3>{selectedEmployee.name}</h3>
              <span>{selectedEmployee.id}</span>
              <p>
                {selectedEmployee.designation} •{" "}
                {selectedEmployee.department}
              </p>
            </div>

            <span className="detail-active">
              {selectedEmployee.status}
            </span>

          </div>


          <div className="details-buttons">

            <button>
              <FiEye />
              View Full Profile
            </button>

            <button>
              <FiEdit2 />
              Edit Employee
            </button>

          </div>


          {/* DETAIL TABS */}
          <div className="details-tabs">

            <button className="active">Overview</button>
            <button>Attendance</button>
            <button>Tasks</button>
            <button>Updates</button>
            <button>Leave</button>

          </div>


          {/* PERSONAL */}
          <div className="details-section">

            <h4>Personal Information</h4>

            <div className="detail-row">
              <span>Email</span>
              <strong>{selectedEmployee.email}</strong>
            </div>

            <div className="detail-row">
              <span>Phone</span>
              <strong>+91 98765 43210</strong>
            </div>

            <div className="detail-row">
              <span>Date of Birth</span>
              <strong>14 Apr 1995</strong>
            </div>

            <div className="detail-row">
              <span>Address</span>
              <strong>Indore, Madhya Pradesh, India</strong>
            </div>

          </div>


          {/* EMPLOYMENT */}
          <div className="details-section">

            <h4>Employment Information</h4>

            <div className="detail-row">
              <span>Department</span>
              <strong>{selectedEmployee.department}</strong>
            </div>

            <div className="detail-row">
              <span>Designation</span>
              <strong>{selectedEmployee.designation}</strong>
            </div>

            <div className="detail-row">
              <span>Manager</span>
              <strong>{selectedEmployee.manager}</strong>
            </div>

            <div className="detail-row">
              <span>Joining Date</span>
              <strong>{selectedEmployee.joining}</strong>
            </div>

            <div className="detail-row">
              <span>Employment Type</span>
              <strong>Full Time</strong>
            </div>

          </div>


          {/* ACCOUNT */}
          <div className="details-section">

            <h4>Account Information</h4>

            <div className="detail-row">
              <span>Status</span>
              <strong className="account-status">
                ● {selectedEmployee.status}
              </strong>
            </div>

            <div className="detail-row">
              <span>Last Login</span>
              <strong>{selectedEmployee.lastActive}</strong>
            </div>

            <div className="detail-row">
              <span>Invitation Sent</span>
              <strong>Today</strong>
            </div>

            <div className="detail-row">
              <span>Account Created</span>
              <strong>{selectedEmployee.joining}</strong>
            </div>

          </div>


          {/* QUICK ACTIONS */}
          <div className="quick-actions">

            <h4>Quick Actions</h4>

            <div className="quick-grid">

              <button>
                <FiUsers />
                Change Manager
              </button>

              <button>
                <FiMapPin />
                Change Department
              </button>

              <button>
                <FiMail />
                Resend Invitation
              </button>

              <button className="danger">
                <FiTrash2 />
                Deactivate Employee
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminEmployees;