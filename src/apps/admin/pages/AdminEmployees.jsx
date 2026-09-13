import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaDownload,
  FaPlus,
  FaBell,
  FaChevronDown,
  FaEllipsisV,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaClock,
  FaTimes,
  FaUser,
  FaCalendarAlt,
  FaBriefcase,
  FaBuilding,
  FaUserTie,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaEye,
  FaUserCog,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./AdminEmployees.css";

const employeesData = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    email: "aman.sharma@company.com",
    department: "Design",
    designation: "UI Designer",
    manager: "Rajat Verma",
    joiningDate: "15 Mar 2024",
    status: "Active",
    lastActive: "Today, 09:24 AM",
    dob: "14 Apr 1995",
    phone: "+91 98765 43210",
    address: "Indore, Madhya Pradesh, India",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    email: "priya.singh@company.com",
    department: "Development",
    designation: "Developer",
    manager: "Neha Sharma",
    joiningDate: "10 Apr 2024",
    status: "Active",
    lastActive: "Today, 10:12 AM",
    dob: "20 Jun 1996",
    phone: "+91 98765 42310",
    address: "Bhopal, Madhya Pradesh, India",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    email: "rahul.verma@company.com",
    department: "Development",
    designation: "Developer",
    manager: "Rajat Verma",
    joiningDate: "22 Apr 2024",
    status: "Active",
    lastActive: "Today, 11:03 AM",
    dob: "18 Aug 1994",
    phone: "+91 98765 41230",
    address: "Indore, Madhya Pradesh, India",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    email: "neha.patel@company.com",
    department: "QA",
    designation: "QA Engineer",
    manager: "Amit Jain",
    joiningDate: "05 May 2024",
    status: "Pending",
    lastActive: "Never",
    dob: "11 Feb 1997",
    phone: "+91 98765 49870",
    address: "Dewas, Madhya Pradesh, India",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    email: "vikram.joshi@company.com",
    department: "Marketing",
    designation: "Marketing Executive",
    manager: "Sneha Kulkarni",
    joiningDate: "12 May 2024",
    status: "Active",
    lastActive: "Today, 08:51 AM",
    dob: "02 Jan 1995",
    phone: "+91 98765 47650",
    address: "Indore, Madhya Pradesh, India",
  },
  {
    id: "EMP-006",
    name: "Kavya Mehta",
    email: "kavya.mehta@company.com",
    department: "Finance",
    designation: "Accountant",
    manager: "Rohit Malhotra",
    joiningDate: "01 Jun 2024",
    status: "Active",
    lastActive: "Today, 09:10 AM",
    dob: "28 Sep 1996",
    phone: "+91 98765 45670",
    address: "Ujjain, Madhya Pradesh, India",
  },
  {
    id: "EMP-007",
    name: "Suresh Nair",
    email: "suresh.nair@company.com",
    department: "HR",
    designation: "HR Executive",
    manager: "Pooja Desai",
    joiningDate: "18 Jun 2024",
    status: "Active",
    lastActive: "Today, 10:45 AM",
    dob: "19 May 1993",
    phone: "+91 98765 43450",
    address: "Indore, Madhya Pradesh, India",
  },
  {
    id: "EMP-008",
    name: "Anjali Tiwari",
    email: "anjali.tiwari@company.com",
    department: "Design",
    designation: "Graphic Designer",
    manager: "Rajat Verma",
    joiningDate: "25 Jun 2024",
    status: "Inactive",
    lastActive: "12 Aug 2024",
    dob: "09 Nov 1995",
    phone: "+91 98765 46780",
    address: "Raipur, Chhattisgarh, India",
  },
  {
    id: "EMP-009",
    name: "Deepak Yadav",
    email: "deepak.yadav@company.com",
    department: "Development",
    designation: "Backend Developer",
    manager: "Neha Sharma",
    joiningDate: "10 Jul 2024",
    status: "Active",
    lastActive: "Today, 11:36 AM",
    dob: "15 Mar 1994",
    phone: "+91 98765 40120",
    address: "Indore, Madhya Pradesh, India",
  },
  {
    id: "EMP-010",
    name: "Pooja Desai",
    email: "pooja.desai@company.com",
    department: "HR",
    designation: "HR Manager",
    manager: "—",
    joiningDate: "15 Jul 2024",
    status: "Active",
    lastActive: "Today, 10:22 AM",
    dob: "21 Jul 1992",
    phone: "+91 98765 47890",
    address: "Indore, Madhya Pradesh, India",
  },
];

const initialEmployees = [
  ...employeesData,
  ...Array.from({ length: 238 }, (_, index) => ({
    id: `EMP-${String(index + 11).padStart(3, "0")}`,
    name: `Employee ${index + 11}`,
    email: `employee${index + 11}@company.com`,
    department: ["Development", "Design", "Marketing", "Finance", "HR", "QA"][
      index % 6
    ],
    designation: ["Developer", "UI Designer", "QA Engineer", "Accountant"][
      index % 4
    ],
    manager: ["Rajat Verma", "Neha Sharma", "Amit Jain", "Pooja Desai"][
      index % 4
    ],
    joiningDate: "2024",
    status:
      index % 17 === 0
        ? "Pending"
        : index % 19 === 0
        ? "Inactive"
        : "Active",
    lastActive: index % 19 === 0 ? "12 Aug 2024" : "Today, 10:20 AM",
    dob: "14 Apr 1995",
    phone: "+91 98765 43210",
    address: "Indore, Madhya Pradesh, India",
  })),
];

const AdminEmployees = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedEmployee, setSelectedEmployee] = useState(initialEmployees[0]);
  const [activeTab, setActiveTab] = useState("All Employees");
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [manager, setManager] = useState("All Managers");
  const [status, setStatus] = useState("All Status");
  const [employmentType, setEmploymentType] =
    useState("All Employment Types");
  const [openMenu, setOpenMenu] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        employee.name.toLowerCase().includes(searchText) ||
        employee.email.toLowerCase().includes(searchText) ||
        employee.id.toLowerCase().includes(searchText);

      const matchesTab =
        activeTab === "All Employees (248)" ||
        (activeTab === "Active (242)" && employee.status === "Active") ||
        (activeTab === "Inactive (6)" && employee.status === "Inactive") ||
        (activeTab === "Pending Activation (4)" &&
          employee.status === "Pending");

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      const matchesManager =
        manager === "All Managers" || employee.manager === manager;

      const matchesStatus =
        status === "All Status" || employee.status === status;

      return (
        matchesSearch &&
        matchesTab &&
        matchesDepartment &&
        matchesManager &&
        matchesStatus &&
        employmentType === "All Employment Types"
      );
    });
  }, [
    employees,
    search,
    activeTab,
    department,
    manager,
    status,
    employmentType,
  ]);

  const activeCount = employees.filter((e) => e.status === "Active").length;
  const inactiveCount = employees.filter(
    (e) => e.status === "Inactive"
  ).length;
  const pendingCount = employees.filter(
    (e) => e.status === "Pending"
  ).length;

  const handleDelete = (employeeId) => {
    setEmployees((prev) =>
      prev.filter((employee) => employee.id !== employeeId)
    );

    if (selectedEmployee?.id === employeeId) {
      setSelectedEmployee(null);
    }

    setOpenMenu(null);
  };

  const resetFilters = () => {
    setDepartment("All Departments");
    setManager("All Managers");
    setStatus("All Status");
    setEmploymentType("All Employment Types");
    setSearch("");
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <div className="admin-employees-page">
      {/* HEADER */}
      <div className="employees-page-header">
        <div>
          <h1>Employees</h1>
          <p>Manage all employees across your organization.</p>
        </div>

        <div className="employees-header-actions">
          <div className="employees-search">
            <FaSearch />
            <input
              type="text"
              placeholder="Search employees, ID, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="employees-filter-btn">
            <FaFilter />
            Filters
          </button>

          <button className="employees-export-btn">
            <FaDownload />
            Export
          </button>

          <button
            className="add-employee-btn"
            onClick={() => setShowAdd(true)}
          >
            <FaPlus />
            Add Employee
          </button>

          <button className="employees-notification">
            <FaBell />
            <span>3</span>
          </button>

          <div className="employees-admin-user">
            <div className="employees-admin-avatar">AU</div>

            <div>
              <strong>Admin User</strong>
              <small>Organization Admin</small>
            </div>

            <FaChevronDown />
          </div>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="employees-stat-grid">
        <div className="employee-stat blue-stat">
          <div className="employee-stat-icon">
            <FaUsers />
          </div>
          <div>
            <span>Total Employees</span>
            <strong>248</strong>
            <small>↑ 12 this month</small>
          </div>
        </div>

        <div className="employee-stat green-stat">
          <div className="employee-stat-icon">
            <FaUserCheck />
          </div>
          <div>
            <span>Active Employees</span>
            <strong>242</strong>
            <small>97.6% of total</small>
          </div>
        </div>

        <div className="employee-stat red-stat">
          <div className="employee-stat-icon">
            <FaUserTimes />
          </div>
          <div>
            <span>Inactive Employees</span>
            <strong>6</strong>
            <small>2.4% of total</small>
          </div>
        </div>

        <div className="employee-stat orange-stat">
          <div className="employee-stat-icon">
            <FaClock />
          </div>
          <div>
            <span>Pending Activation</span>
            <strong>4</strong>
            <small>Invitations sent</small>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="employees-main-layout">
        <div className="employees-list-area">

          {/* TABS */}
          <div className="employee-tabs">
            {[
              "All Employees (248)",
              "Active (242)",
              "Inactive (6)",
              "Pending Activation (4)",
            ].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* FILTERS */}
          <div className="employee-filters">

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
            </select>

            <select
              value={manager}
              onChange={(e) => setManager(e.target.value)}
            >
              <option>All Managers</option>
              <option>Rajat Verma</option>
              <option>Neha Sharma</option>
              <option>Amit Jain</option>
              <option>Pooja Desai</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>

            <select
              value={employmentType}
              onChange={(e) =>
                setEmploymentType(e.target.value)
              }
            >
              <option>All Employment Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </select>

            <button className="joining-date-filter">
              <FaCalendarAlt />
              Joining Date
            </button>

            <button
              className="reset-filter-btn"
              onClick={resetFilters}
            >
              Reset
            </button>
          </div>

          {/* TABLE */}
          <div className="employees-table-card">

            <div className="employees-table-scroll">
              <table className="employees-table">
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
                  {filteredEmployees.slice(0, 10).map((employee) => (
                    <tr
                      key={employee.id}
                      onClick={() => setSelectedEmployee(employee)}
                      className={
                        selectedEmployee?.id === employee.id
                          ? "selected-row"
                          : ""
                      }
                    >
                      <td>
                        <input
                          type="checkbox"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>

                      <td>
                        <div className="employee-table-person">
                          <div className="employee-table-avatar">
                            {getInitials(employee.name)}
                          </div>

                          <div>
                            <strong>{employee.name}</strong>
                            <span>{employee.email}</span>
                          </div>
                        </div>
                      </td>

                      <td>{employee.id}</td>
                      <td>{employee.department}</td>
                      <td>{employee.designation}</td>
                      <td>{employee.manager}</td>
                      <td>{employee.joiningDate}</td>

                      <td>
                        <span
                          className={`employee-status ${employee.status.toLowerCase()}`}
                        >
                          <i></i>
                          {employee.status}
                        </span>
                      </td>

                      <td>{employee.lastActive}</td>

                      <td>
                        <div className="employee-action-menu">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setOpenMenu(
                                openMenu === employee.id
                                  ? null
                                  : employee.id
                              );
                            }}
                          >
                            <FaEllipsisV />
                          </button>

                          {openMenu === employee.id && (
                            <div className="action-dropdown">
                              <button>
                                <FaEye />
                                View
                              </button>

                              <button>
                                <FaEdit />
                                Edit
                              </button>

                              <button>
                                <FaUserCog />
                                Change Manager
                              </button>

                              <button
                                className="danger"
                                onClick={() =>
                                  handleDelete(employee.id)
                                }
                              >
                                <FaTrash />
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINATION */}
            <div className="employee-pagination">
              <span>
                Showing 1 to 10 of 248 employees
              </span>

              <div className="pagination-buttons">
                <button>
                  <FaChevronLeft />
                </button>

                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <span>...</span>
                <button>25</button>

                <button>
                  <FaChevronRight />
                </button>
              </div>

              <div className="rows-per-page">
                Show
                <select>
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                per page
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS PANEL */}
        {selectedEmployee && (
          <aside className="employee-details-panel">

            <div className="employee-details-header">
              <h2>Employee Details</h2>

              <button
                onClick={() => setSelectedEmployee(null)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="selected-employee-profile">
              <div className="selected-employee-avatar">
                {getInitials(selectedEmployee.name)}
              </div>

              <div className="selected-employee-info">
                <h3>{selectedEmployee.name}</h3>
                <p>{selectedEmployee.id}</p>
                <span>
                  {selectedEmployee.designation} •{" "}
                  {selectedEmployee.department}
                </span>
              </div>

              <span
                className={`details-status ${selectedEmployee.status.toLowerCase()}`}
              >
                {selectedEmployee.status}
              </span>
            </div>

            <div className="details-actions">
              <button>
                <FaEye />
                View Full Profile
              </button>

              <button>
                <FaEdit />
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
              <h3>Personal Information</h3>

              <div className="details-info-list">
                <div>
                  <span>Email</span>
                  <strong>{selectedEmployee.email}</strong>
                </div>

                <div>
                  <span>Phone</span>
                  <strong>{selectedEmployee.phone}</strong>
                </div>

                <div>
                  <span>Date of Birth</span>
                  <strong>{selectedEmployee.dob}</strong>
                </div>

                <div>
                  <span>Address</span>
                  <strong>{selectedEmployee.address}</strong>
                </div>
              </div>
            </div>

            {/* EMPLOYMENT */}
            <div className="details-section">
              <h3>Employment Information</h3>

              <div className="details-info-list">
                <div>
                  <span>Department</span>
                  <strong>{selectedEmployee.department}</strong>
                </div>

                <div>
                  <span>Designation</span>
                  <strong>{selectedEmployee.designation}</strong>
                </div>

                <div>
                  <span>Manager</span>
                  <strong>{selectedEmployee.manager}</strong>
                </div>

                <div>
                  <span>Joining Date</span>
                  <strong>{selectedEmployee.joiningDate}</strong>
                </div>

                <div>
                  <span>Employment Type</span>
                  <strong>Full Time</strong>
                </div>
              </div>
            </div>

            {/* ACCOUNT */}
            <div className="details-section">
              <h3>Account Information</h3>

              <div className="details-info-list">
                <div>
                  <span>Status</span>

                  <strong>
                    <span
                      className={`account-active-status ${selectedEmployee.status.toLowerCase()}`}
                    >
                      <i></i>
                      {selectedEmployee.status}
                    </span>
                  </strong>
                </div>

                <div>
                  <span>Last Login</span>
                  <strong>{selectedEmployee.lastActive}</strong>
                </div>

                <div>
                  <span>Invitation Sent</span>
                  <strong>Today</strong>
                </div>

                <div>
                  <span>Account Created</span>
                  <strong>{selectedEmployee.joiningDate}</strong>
                </div>
              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="details-section quick-actions-section">
              <h3>Quick Actions</h3>

              <div className="quick-actions-grid">
                <button>
                  <FaUserTie />
                  Change Manager
                </button>

                <button>
                  <FaBuilding />
                  Change Department
                </button>

                <button>
                  <FaEnvelope />
                  Resend Invitation
                </button>

                <button className="danger-action">
                  <FaTrash />
                  Deactivate Employee
                </button>
              </div>
            </div>

          </aside>
        )}
      </div>

      {/* ADD EMPLOYEE MODAL */}
      {showAdd && (
        <div className="employee-modal-overlay">
          <div className="employee-modal">

            <button
              className="employee-modal-close"
              onClick={() => setShowAdd(false)}
            >
              <FaTimes />
            </button>

            <h2>Add Employee</h2>
            <p>Create a new employee profile.</p>

            <label>Full Name</label>
            <input placeholder="Enter full name" />

            <label>Email</label>
            <input placeholder="Enter email address" />

            <label>Department</label>
            <select>
              <option>Select department</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>HR</option>
            </select>

            <label>Designation</label>
            <input placeholder="Enter designation" />

            <div className="employee-modal-actions">
              <button
                className="cancel-modal-btn"
                onClick={() => setShowAdd(false)}
              >
                Cancel
              </button>

              <button
                className="save-employee-btn"
                onClick={() => setShowAdd(false)}
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEmployees;