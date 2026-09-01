import React, { useMemo, useState } from "react";

import {
  FaSearch,
  FaCalendarAlt,
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserTimes,
  FaFilter,
  FaChevronDown,
  FaEllipsisV,
} from "react-icons/fa";

import "./ManagerAttendance.css";


/* =====================================================
   ATTENDANCE DATA
===================================================== */

const attendanceData = [
  {
    id: "EMP-001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    status: "Present",
    checkIn: "09:12 AM",
    checkOut: "06:10 PM",
    hours: "8h 58m",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "EMP-002",
    name: "Priya Singh",
    role: "Developer",
    department: "Development",
    status: "Present",
    checkIn: "09:05 AM",
    checkOut: "06:02 PM",
    hours: "8h 57m",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "EMP-003",
    name: "Rahul Verma",
    role: "Developer",
    department: "Development",
    status: "On Leave",
    checkIn: "-",
    checkOut: "-",
    hours: "-",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: "EMP-004",
    name: "Neha Patel",
    role: "QA Engineer",
    department: "QA",
    status: "Late",
    checkIn: "10:12 AM",
    checkOut: "06:20 PM",
    hours: "8h 08m",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "EMP-005",
    name: "Vikram Joshi",
    role: "UI Designer",
    department: "Design",
    status: "Present",
    checkIn: "09:18 AM",
    checkOut: "06:15 PM",
    hours: "8h 57m",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: "EMP-006",
    name: "Anjali Mehta",
    role: "Developer",
    department: "Development",
    status: "Late",
    checkIn: "10:20 AM",
    checkOut: "06:30 PM",
    hours: "8h 10m",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];


/* =====================================================
   STATUS CLASS
===================================================== */

const statusClass = (status) =>
  status.toLowerCase().replace(/\s+/g, "-");


/* =====================================================
   MAIN COMPONENT
===================================================== */

function ManagerAttendance() {

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("All Departments");

  const [status, setStatus] =
    useState("All Status");

  const [selectedDate, setSelectedDate] =
    useState("2026-09-01");


  /* ===================================================
     FILTER
  =================================================== */

  const filteredEmployees = useMemo(() => {

    return attendanceData.filter((employee) => {

      const query =
        search.trim().toLowerCase();

      const searchMatch =
        employee.name.toLowerCase().includes(query) ||
        employee.id.toLowerCase().includes(query);

      const departmentMatch =
        department === "All Departments" ||
        employee.department === department;

      const statusMatch =
        status === "All Status" ||
        employee.status === status;

      return (
        searchMatch &&
        departmentMatch &&
        statusMatch
      );

    });

  }, [search, department, status]);


  return (
    <div className="ma-page">


      {/* =================================================
         PAGE HEADER
      ================================================= */}

      <div className="ma-header">

        <div>

          <h1>
            Attendance
          </h1>

          <p>
            Monitor and manage your team's attendance
          </p>

        </div>


        <div className="ma-header-actions">

          <div className="ma-date-picker">

            <FaCalendarAlt />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) =>
                setSelectedDate(e.target.value)
              }
            />

          </div>


          <button
            type="button"
            className="ma-export-btn"
            onClick={() =>
              alert("Attendance export")
            }
          >
            Export
          </button>

        </div>

      </div>


      {/* =================================================
         SUMMARY CARDS
      ================================================= */}

      <div className="ma-stats">

        <AttendanceStat
          type="blue"
          icon={<FaUsers />}
          title="Total Employees"
          value="12"
          sub="Team members"
        />

        <AttendanceStat
          type="green"
          icon={<FaUserCheck />}
          title="Present Today"
          value="10"
          sub="83% attendance"
        />

        <AttendanceStat
          type="orange"
          icon={<FaUserClock />}
          title="Late Today"
          value="2"
          sub="Needs attention"
        />

        <AttendanceStat
          type="red"
          icon={<FaUserTimes />}
          title="On Leave"
          value="1"
          sub="8% of team"
        />

      </div>


      {/* =================================================
         FILTERS
      ================================================= */}

      <div className="ma-filter-section">

        <div className="ma-search-box">

          <FaSearch />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search employee name or ID..."
          />

        </div>


        <select
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >

          <option>
            All Departments
          </option>

          <option>
            Design
          </option>

          <option>
            Development
          </option>

          <option>
            QA
          </option>

        </select>


        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >

          <option>
            All Status
          </option>

          <option>
            Present
          </option>

          <option>
            Late
          </option>

          <option>
            On Leave
          </option>

        </select>


        <button
          type="button"
          className="ma-filter-btn"
        >
          <FaFilter />
          Filter
        </button>

      </div>


      {/* =================================================
         TABLE
      ================================================= */}

      <div className="ma-table-card">

        <div className="ma-table-title">

          <div>

            <h2>
              Team Attendance
            </h2>

            <p>
              Daily attendance for selected date
            </p>

          </div>

          <button
            type="button"
            className="ma-more-btn"
          >
            <FaEllipsisV />
          </button>

        </div>


        <div className="ma-table-scroll">

          <table className="ma-table">

            <thead>

              <tr>

                <th>
                  EMPLOYEE
                </th>

                <th>
                  DEPARTMENT
                </th>

                <th>
                  STATUS
                </th>

                <th>
                  CHECK IN
                </th>

                <th>
                  CHECK OUT
                </th>

                <th>
                  WORKING HOURS
                </th>

                <th>
                  ACTION
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredEmployees.map(
                (employee) => (

                  <tr
                    key={employee.id}
                  >

                    {/* Employee */}

                    <td>

                      <div className="ma-employee">

                        <div className="ma-avatar">

                          <img
                            src={employee.avatar}
                            alt={employee.name}
                          />

                          <span
                            className={
                              statusClass(
                                employee.status
                              )
                            }
                          />

                        </div>


                        <div className="ma-employee-info">

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


                    {/* Department */}

                    <td>
                      {employee.department}
                    </td>


                    {/* Status */}

                    <td>

                      <strong
                        className={
                          `ma-status ${statusClass(
                            employee.status
                          )}`
                        }
                      >
                        ● {employee.status}
                      </strong>

                      {employee.status === "Late" && (
                        <small className="ma-status-note">
                          Arrived late
                        </small>
                      )}

                    </td>


                    {/* Check in */}

                    <td>

                      <span className="ma-time">
                        {employee.checkIn}
                      </span>

                    </td>


                    {/* Check out */}

                    <td>

                      <span className="ma-time">
                        {employee.checkOut}
                      </span>

                    </td>


                    {/* Hours */}

                    <td>

                      <strong className="ma-hours">
                        {employee.hours}
                      </strong>

                    </td>


                    {/* Action */}

                    <td>

                      <button
                        type="button"
                        className="ma-action-btn"
                        onClick={() =>
                          alert(
                            `${employee.name} attendance`
                          )
                        }
                      >
                        View
                      </button>

                    </td>

                  </tr>

                )
              )}

            </tbody>

          </table>

        </div>


        {/* =================================================
           FOOTER
        ================================================= */}

        <div className="ma-table-footer">

          <span>
            Showing {filteredEmployees.length} of 12 employees
          </span>


          <div className="ma-pagination">

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


/* =====================================================
   STAT COMPONENT
===================================================== */

function AttendanceStat({
  type,
  icon,
  title,
  value,
  sub,
}) {
  return (
    <div className="ma-stat-card">

      <div
        className={`ma-stat-icon ${type}`}
      >
        {icon}
      </div>

      <div>

        <span>
          {title}
        </span>

        <strong>
          {value}
        </strong>

        <small>
          {sub}
        </small>

      </div>

    </div>
  );
}


/* =====================================================
   EXPORT
===================================================== */

export default ManagerAttendance;