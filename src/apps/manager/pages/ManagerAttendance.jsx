import React, { useState } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUsers,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaDownload,
  FaChevronDown,
} from "react-icons/fa";

import "./ManagerAttendance.css";

const attendanceData = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    checkIn: "09:12 AM",
    checkOut: "06:10 PM",
    hours: "8h 58m",
    status: "Present",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    department: "Development",
    checkIn: "09:05 AM",
    checkOut: "06:02 PM",
    hours: "8h 57m",
    status: "Present",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    department: "Development",
    checkIn: "--",
    checkOut: "--",
    hours: "--",
    status: "On Leave",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    department: "QA",
    checkIn: "10:12 AM",
    checkOut: "06:20 PM",
    hours: "8h 08m",
    status: "Late",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    department: "Design",
    checkIn: "09:18 AM",
    checkOut: "06:15 PM",
    hours: "8h 57m",
    status: "Present",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    department: "Development",
    checkIn: "10:20 AM",
    checkOut: "06:30 PM",
    hours: "8h 10m",
    status: "Late",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

function ManagerAttendance() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] =
    useState("All Departments");
  const [status, setStatus] =
    useState("All Status");
  const [date, setDate] =
    useState("2026-09-01");

  const filteredData = attendanceData.filter((item) => {
    const searchText = search.toLowerCase();

    const searchMatch =
      item.name.toLowerCase().includes(searchText) ||
      item.id.toLowerCase().includes(searchText);

    const departmentMatch =
      department === "All Departments" ||
      item.department === department;

    const statusMatch =
      status === "All Status" ||
      item.status === status;

    return (
      searchMatch &&
      departmentMatch &&
      statusMatch
    );
  });

  return (
    <div className="attendance-page">

      {/* HEADER */}

      <div className="attendance-header">

        <div>
          <h1>Attendance</h1>
          <p>
            Track and manage your team's attendance
          </p>
        </div>

        <div className="attendance-header-actions">

          <div className="attendance-date">
            <FaCalendarAlt />

            <input
              type="date"
              value={date}
              onChange={(e) =>
                setDate(e.target.value)
              }
            />
          </div>

          <button type="button">
            <FaDownload />
            Export
          </button>

        </div>

      </div>


      {/* SUMMARY */}

      <div className="attendance-summary">

        <SummaryCard
          icon={<FaUsers />}
          title="Total Employees"
          value="12"
          text="Team members"
          type="blue"
        />

        <SummaryCard
          icon={<FaCheckCircle />}
          title="Present Today"
          value="10"
          text="83% attendance"
          type="green"
        />

        <SummaryCard
          icon={<FaClock />}
          title="Late Today"
          value="2"
          text="Needs attention"
          type="orange"
        />

        <SummaryCard
          icon={<FaTimesCircle />}
          title="On Leave"
          value="1"
          text="8% of team"
          type="red"
        />

      </div>


      {/* FILTER */}

      <div className="attendance-filters">

        <div className="attendance-search">

          <FaSearch />

          <input
            type="text"
            placeholder="Search employee name or ID..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>


        <div className="attendance-select">

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >
            <option>All Departments</option>
            <option>Design</option>
            <option>Development</option>
            <option>QA</option>
          </select>

          <FaChevronDown />

        </div>


        <div className="attendance-select">

          <select
            value={status}
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            <option>All Status</option>
            <option>Present</option>
            <option>Late</option>
            <option>On Leave</option>
          </select>

          <FaChevronDown />

        </div>

      </div>


      {/* TABLE */}

      <div className="attendance-card">

        <div className="attendance-card-header">

          <div>
            <h2>Team Attendance</h2>
            <p>
              Daily attendance records
            </p>
          </div>

          <div className="attendance-date-label">
            <FaCalendarAlt />
            {date}
          </div>

        </div>


        <div className="attendance-table-scroll">

          <table>

            <thead>
              <tr>
                <th>EMPLOYEE</th>
                <th>DEPARTMENT</th>
                <th>CHECK IN</th>
                <th>CHECK OUT</th>
                <th>WORKING HOURS</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.map((employee) => (

                <tr key={employee.id}>

                  <td>

                    <div className="attendance-employee">

                      <img
                        src={employee.avatar}
                        alt={employee.name}
                      />

                      <div>
                        <strong>
                          {employee.name}
                        </strong>

                        <small>
                          {employee.role}
                        </small>

                        <em>
                          {employee.id}
                        </em>
                      </div>

                    </div>

                  </td>


                  <td>
                    {employee.department}
                  </td>


                  <td>
                    {employee.checkIn}
                  </td>


                  <td>
                    {employee.checkOut}
                  </td>


                  <td>
                    <strong>
                      {employee.hours}
                    </strong>
                  </td>


                  <td>

                    <span
                      className={`attendance-status ${employee.status
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      ● {employee.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* FOOTER */}

        <div className="attendance-footer">

          <span>
            Showing {filteredData.length} of 12 employees
          </span>

          <div>

            <button type="button">
              ←
            </button>

            <button
              type="button"
              className="active"
            >
              1
            </button>

            <button type="button">
              2
            </button>

            <button type="button">
              →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


/* SUMMARY CARD */

function SummaryCard({
  icon,
  title,
  value,
  text,
  type,
}) {
  return (
    <div className="attendance-summary-card">

      <div
        className={`attendance-summary-icon ${type}`}
      >
        {icon}
      </div>

      <div>

        <span>{title}</span>

        <strong>{value}</strong>

        <small>{text}</small>

      </div>

    </div>
  );
}


export default ManagerAttendance;