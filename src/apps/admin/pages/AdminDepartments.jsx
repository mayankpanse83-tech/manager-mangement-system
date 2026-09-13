import React, { useState } from "react";
import {
  FiSearch,
  FiFilter,
  FiDownload,
  FiPlus,
  FiBell,
  FiGrid,
  FiList,
  FiChevronDown,
  FiMoreVertical,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
  FiArchive,
  FiUser,
  FiShield,
  FiSettings,
  FiBookOpen,
  FiPieChart,
  FiActivity,
  FiEdit3,
  FiMail,
  FiClock,
  FiFileText,
  FiTrendingUp,
} from "react-icons/fi";

import "./AdminDepartments.css";


/* =====================================================
   DEPARTMENT DATA
===================================================== */

const departments = [
  {
    name: "Design",
    subtitle: "UI / UX & Creative",
    employees: 24,
    managers: 2,
    attendance: 96,
    manager: "Rajat Verma",
    role: "Team Manager",
    icon: "palette",
    type: "creative",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Development",
    subtitle: "Software Development",
    employees: 68,
    managers: 5,
    attendance: 91,
    manager: "Neha Sharma",
    role: "Team Manager",
    icon: "code",
    type: "development",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Marketing",
    subtitle: "Branding & Growth",
    employees: 31,
    managers: 3,
    attendance: 88,
    manager: "Amit Jain",
    role: "Team Manager",
    icon: "marketing",
    type: "marketing",
    image: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "QA",
    subtitle: "Quality Assurance",
    employees: 27,
    managers: 2,
    attendance: 93,
    manager: "Sneha Kulkarni",
    role: "QA Manager",
    icon: "qa",
    type: "qa",
    image: "https://i.pravatar.cc/100?img=44",
  },
  {
    name: "Finance",
    subtitle: "Finance & Accounts",
    employees: 18,
    managers: 2,
    attendance: 94,
    manager: "Rohit Malhotra",
    role: "Finance Manager",
    icon: "finance",
    type: "finance",
    image: "https://i.pravatar.cc/100?img=13",
  },
  {
    name: "HR",
    subtitle: "Human Resources",
    employees: 12,
    managers: 1,
    attendance: 97,
    manager: "Pooja Desai",
    role: "HR Manager",
    icon: "hr",
    type: "hr",
    image: "https://i.pravatar.cc/100?img=45",
  },
  {
    name: "Sales",
    subtitle: "Sales & Business",
    employees: 16,
    managers: 2,
    attendance: 89,
    manager: "Karan Patel",
    role: "Sales Manager",
    icon: "sales",
    type: "sales",
    image: "https://i.pravatar.cc/100?img=68",
  },
  {
    name: "Operations",
    subtitle: "Operations & Support",
    employees: 22,
    managers: 2,
    attendance: 92,
    manager: "Anjali Singh",
    role: "Operations Manager",
    icon: "operations",
    type: "operations",
    image: "https://i.pravatar.cc/100?img=49",
  },
  {
    name: "Administration",
    subtitle: "Admin & Facilities",
    employees: 10,
    managers: 1,
    attendance: 95,
    manager: "Vikram Joshi",
    role: "Admin Manager",
    icon: "admin",
    type: "admin",
    image: "https://i.pravatar.cc/100?img=33",
  },
];


/* =====================================================
   ACTIVITY DATA
===================================================== */

const activities = [
  {
    icon: "user",
    title: "New department created",
    text: "Operations department added",
    time: "2 days ago",
  },
  {
    icon: "edit",
    title: "Department head changed",
    text: "Karan Patel is now head of Sales",
    time: "4 days ago",
  },
  {
    icon: "file",
    title: "Department updated",
    text: "Marketing department details updated",
    time: "1 week ago",
  },
  {
    icon: "mail",
    title: "Department archived",
    text: "Research department archived",
    time: "2 weeks ago",
  },
];


/* =====================================================
   ICON COMPONENT
===================================================== */

function DepartmentIcon({ type }) {
  const icons = {
    palette: "🎨",
    code: "</>",
    marketing: "📣",
    qa: "♢",
    finance: "▣",
    hr: "♙",
    sales: "▥",
    operations: "⚙",
    admin: "▣",
  };

  return (
    <span className={`department-icon icon-${type}`}>
      {icons[type] || "●"}
    </span>
  );
}


/* =====================================================
   DEPARTMENT CARD
===================================================== */

function DepartmentCard({ department }) {
  return (
    <div className="department-card">

      <div className="department-card-top">

        <div className="department-title-area">

          <DepartmentIcon type={department.type} />

          <div>
            <h3>{department.name}</h3>

            <p>
              {department.subtitle}
            </p>
          </div>

        </div>

        <button className="department-more">
          <FiMoreVertical />
        </button>

      </div>


      <div className="department-stats">

        <div className="department-stat">

          <FiUser />

          <div>
            <strong>
              {department.employees}
            </strong>

            <span>
              Employees
            </span>
          </div>

        </div>


        <div className="department-stat">

          <FiBriefcase />

          <div>
            <strong>
              {department.managers}
            </strong>

            <span>
              Managers
            </span>
          </div>

        </div>


        <div className="department-attendance">

          <strong>
            {department.attendance}%
          </strong>

          <span>
            Attendance
          </span>

          <div className="attendance-track">

            <div
              className={`attendance-fill attendance-${department.type}`}
              style={{
                width: `${department.attendance}%`,
              }}
            />

          </div>

        </div>

      </div>


      <div className="department-manager">

        <img
          src={department.image}
          alt={department.manager}
        />

        <div className="manager-info">

          <strong>
            {department.manager}
          </strong>

          <span>
            {department.role}
          </span>

        </div>

      </div>


      <button className="view-department">
        View Department
        <span>→</span>
      </button>

    </div>
  );
}


/* =====================================================
   MAIN COMPONENT
===================================================== */

function AdminDepartments() {

  const [view, setView] = useState("grid");

  const [search, setSearch] = useState("");

  const filteredDepartments =
    departments.filter((department) =>
      department.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (
    <div className="admin-departments-page">


      {/* =================================================
         HEADER
      ================================================= */}

      <header className="departments-header">

        <div className="departments-heading">

          <h1>
            Departments
          </h1>

          <p>
            Organize teams, managers and employees across your organization.
          </p>

        </div>


        <div className="departments-actions">

          <div className="department-search">

            <FiSearch />

            <input
              type="text"
              placeholder="Search departments..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <button className="top-action-btn">
            <FiFilter />
            Filters
          </button>


          <button className="top-action-btn">
            <FiDownload />
            Export
          </button>


          <button className="add-department-btn">
            <FiPlus />
            Add Department
          </button>


          <button className="notification-btn">

            <FiBell />

            <span>
              3
            </span>

          </button>


          <div className="admin-profile">

            <div className="admin-avatar">
              AU
            </div>

            <div className="admin-profile-text">

              <strong>
                Admin User
              </strong>

              <span>
                Organization Admin
              </span>

            </div>

            <FiChevronDown />

          </div>

        </div>

      </header>


      {/* =================================================
         STAT CARDS
      ================================================= */}

      <section className="department-summary">

        <div className="summary-card">

          <div className="summary-icon purple">
            <FiBriefcase />
          </div>

          <div className="summary-content">

            <span>
              Total Departments
            </span>

            <strong>
              12
            </strong>

            <small className="positive">
              ↑ 2 this year
            </small>

          </div>

        </div>


        <div className="summary-card">

          <div className="summary-icon green">
            <FiCheckCircle />
          </div>

          <div className="summary-content">

            <span>
              Active Departments
            </span>

            <strong>
              11
            </strong>

            <small className="positive">
              91.7% of total
            </small>

          </div>

        </div>


        <div className="summary-card">

          <div className="summary-icon red">
            <FiArchive />
          </div>

          <div className="summary-content">

            <span>
              Archived Departments
            </span>

            <strong>
              1
            </strong>

            <small className="negative">
              8.3% of total
            </small>

          </div>

        </div>


        <div className="summary-card">

          <div className="summary-icon blue">
            <FiUsers />
          </div>

          <div className="summary-content">

            <span>
              Total Employees
            </span>

            <strong>
              248
            </strong>

            <small>
              Across all departments
            </small>

          </div>

        </div>


        <div className="summary-card">

          <div className="summary-icon orange">
            <FiUser />
          </div>

          <div className="summary-content">

            <span>
              Department Managers
            </span>

            <strong>
              18
            </strong>

            <small className="positive">
              Active managers
            </small>

          </div>

        </div>

      </section>


      {/* =================================================
         CONTENT AREA
      ================================================= */}

      <section className="departments-body">


        {/* LEFT SIDE */}

        <div className="departments-main">


          {/* TABS + VIEW */}

          <div className="department-tabs-row">

            <div className="department-tabs">

              <button className="department-tab active">
                Department Overview
              </button>

              <button className="department-tab">
                Department List
              </button>

              <button className="department-tab">
                Organization Structure
              </button>

            </div>


            <div className="view-buttons">

              <button
                className={
                  view === "grid"
                    ? "view-btn active"
                    : "view-btn"
                }
                onClick={() =>
                  setView("grid")
                }
              >
                <FiGrid />
                Grid View
              </button>


              <button
                className={
                  view === "list"
                    ? "view-btn active"
                    : "view-btn"
                }
                onClick={() =>
                  setView("list")
                }
              >
                <FiList />
                List View
              </button>

            </div>

          </div>


          {/* DEPARTMENT CARDS */}

          <div
            className={
              view === "grid"
                ? "departments-grid"
                : "departments-list"
            }
          >

            {filteredDepartments.map(
              (department) => (

                <DepartmentCard
                  key={department.name}
                  department={department}
                />

              )
            )}

          </div>

        </div>


        {/* =================================================
           RIGHT INSIGHTS
        ================================================= */}

        <aside className="department-insights">


          {/* INSIGHTS HEADER */}

          <div className="insight-heading">

            <h2>
              Department Insights
            </h2>

            <button>
              This Month
              <FiChevronDown />
            </button>

          </div>


          {/* BAR CHART */}

          <div className="insight-chart">

            <div className="chart-y-axis">

              <span>80</span>
              <span>60</span>
              <span>40</span>
              <span>20</span>
              <span>0</span>

            </div>


            <div className="bar-chart">

              {[
                ["Design", 24],
                ["Development", 68],
                ["Marketing", 31],
                ["QA", 27],
                ["Finance", 18],
                ["HR", 12],
              ].map(([name, value]) => (

                <div
                  className="bar-column"
                  key={name}
                >

                  <div
                    className="bar"
                    style={{
                      height: `${value * 2.05}px`,
                    }}
                  >
                    <span>
                      {value}
                    </span>
                  </div>

                  <small>
                    {name}
                  </small>

                </div>

              ))}

            </div>

          </div>


          {/* DISTRIBUTION */}

          <div className="distribution-section">

            <h2>
              Department Distribution
            </h2>

            <div className="distribution-content">

              <div className="donut-chart">

                <div className="donut-center">

                  <strong>
                    248
                  </strong>

                  <span>
                    Employees
                  </span>

                </div>

              </div>


              <div className="distribution-legend">

                <div>
                  <i className="legend-blue" />
                  <span>Development</span>
                  <strong>27.4%</strong>
                </div>

                <div>
                  <i className="legend-red" />
                  <span>Design</span>
                  <strong>9.7%</strong>
                </div>

                <div>
                  <i className="legend-orange" />
                  <span>Marketing</span>
                  <strong>12.5%</strong>
                </div>

                <div>
                  <i className="legend-purple" />
                  <span>QA</span>
                  <strong>10.9%</strong>
                </div>

                <div>
                  <i className="legend-green" />
                  <span>Finance</span>
                  <strong>7.3%</strong>
                </div>

                <div>
                  <i className="legend-pink" />
                  <span>HR</span>
                  <strong>4.8%</strong>
                </div>

                <div>
                  <i className="legend-gray" />
                  <span>Others</span>
                  <strong>27.4%</strong>
                </div>

              </div>

            </div>

          </div>


          {/* RECENT ACTIVITY */}

          <div className="recent-activity">

            <div className="activity-heading">

              <h2>
                Recent Activity
              </h2>

              <button>
                View All
              </button>

            </div>


            <div className="activity-list">

              {activities.map(
                (activity, index) => (

                  <div
                    className="activity-item"
                    key={index}
                  >

                    <div
                      className={`activity-icon activity-${activity.icon}`}
                    >

                      {activity.icon === "user" && (
                        <FiUser />
                      )}

                      {activity.icon === "edit" && (
                        <FiEdit3 />
                      )}

                      {activity.icon === "file" && (
                        <FiFileText />
                      )}

                      {activity.icon === "mail" && (
                        <FiMail />
                      )}

                    </div>


                    <div className="activity-text">

                      <strong>
                        {activity.title}
                      </strong>

                      <span>
                        {activity.text}
                      </span>

                    </div>


                    <time>
                      {activity.time}
                    </time>

                  </div>

                )
              )}

            </div>

          </div>

        </aside>

      </section>

    </div>
  );
}


export default AdminDepartments;