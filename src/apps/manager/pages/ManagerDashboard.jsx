import React from "react";
import "./ManagerDashboard.css";

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaCalendarAlt,
  FaClock,
  FaTasks,
  FaArrowRight,
  FaBell,
  FaFileAlt,
  FaUmbrellaBeach,
} from "react-icons/fa";

const ManagerDashboard = () => {
  return (
    <div className="manager-dashboard-content">

      {/* ================= TOP STAT CARDS ================= */}
      <div className="manager-stats">

        <StatCard
          icon={<FaUsers />}
          iconClass="purple"
          title="Team Members"
          value="12"
          text="+1 this month"
          textClass="green-text"
        />

        <StatCard
          icon={<FaUserCheck />}
          iconClass="green"
          title="Present Today"
          value="10"
          text="83% of team"
          textClass="green-text"
        />

        <StatCard
          icon={<FaUserTimes />}
          iconClass="red"
          title="Absent"
          value="1"
          text="Needs review"
          textClass="red-text"
        />

        <StatCard
          icon={<FaUmbrellaBeach />}
          iconClass="orange"
          title="On Leave"
          value="1"
          text="Today"
          textClass="orange-text"
        />

        <StatCard
          icon={<FaClock />}
          iconClass="blue"
          title="Late"
          value="2"
          text="Today"
          textClass="blue-text"
        />

      </div>

      {/* ================= FIRST ROW ================= */}
      <div className="manager-grid">

        {/* NEEDS ATTENTION */}
        <div className="manager-card">

          <CardTitle
            icon={<FaBell />}
            title="Needs Your Attention"
          />

          <AttentionRow
            icon={<FaCalendarAlt />}
            iconClass="orange"
            title="2 Leave Requests"
            subtitle="Waiting for approval"
            button="Review"
          />

          <AttentionRow
            icon={<FaTasks />}
            iconClass="red"
            title="1 Overdue Task"
            subtitle="Rahul - API Integration"
            button="View Task"
          />

          <AttentionRow
            icon={<FaFileAlt />}
            iconClass="blue"
            title="3 Daily Updates"
            subtitle="Waiting for review"
            button="Review"
          />

          <AttentionRow
            icon={<FaClock />}
            iconClass="purple"
            title="1 Attendance Issue"
            subtitle="Late / missing check-out"
            button="Review"
          />

        </div>

        {/* ATTENDANCE */}
        <div className="manager-card">

          <CardTitle
            icon={<FaCalendarAlt />}
            title="Team Attendance (Today)"
          />

          <div className="attendance-box">

            <div className="attendance-circle">
              <div>
                <strong>83%</strong>
                <small>Present Rate</small>
              </div>
            </div>

            <div className="attendance-details">

              <AttendanceItem
                dot="green-dot"
                name="Present"
                value="10 (83%)"
              />

              <AttendanceItem
                dot="red-dot"
                name="Absent"
                value="1 (8%)"
              />

              <AttendanceItem
                dot="orange-dot"
                name="On Leave"
                value="1 (8%)"
              />

              <AttendanceItem
                dot="blue-dot"
                name="Late"
                value="2 (16%)"
              />

            </div>

          </div>

          <div className="bottom-link">
            View Team Attendance <FaArrowRight />
          </div>

        </div>

        {/* TEAM STATUS */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaUsers /> Team Status
            </h3>

            <span className="view-all">
              View All →
            </span>
          </div>

          <TeamMember
            name="Aman Sharma"
            role="UI Designer"
            status="Working"
            time="09:12 AM"
            statusClass="working"
          />

          <TeamMember
            name="Priya Singh"
            role="Developer"
            status="Working"
            time="09:05 AM"
            statusClass="working"
          />

          <TeamMember
            name="Rahul Verma"
            role="Developer"
            status="On Leave"
            time="Today"
            statusClass="leave"
          />

          <TeamMember
            name="Neha Patel"
            role="QA Engineer"
            status="Late"
            time="10:12 AM"
            statusClass="late"
          />

          <div className="bottom-link">
            View Team Members <FaArrowRight />
          </div>

        </div>

      </div>

      {/* ================= SECOND ROW ================= */}
      <div className="manager-grid">

        {/* TEAM TASKS */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaTasks /> Team Tasks
            </h3>

            <span className="view-all">
              View All Tasks →
            </span>
          </div>

          <div className="task-area">

            <div className="task-circle">
              <strong>42</strong>
              <span>Total Tasks</span>
            </div>

            <div className="task-bars">

              <Progress
                name="Completed"
                value="24 (57%)"
                width="80%"
                type="green"
              />

              <Progress
                name="In Progress"
                value="12 (29%)"
                width="60%"
                type="blue"
              />

              <Progress
                name="Pending"
                value="5 (12%)"
                width="35%"
                type="orange"
              />

              <Progress
                name="Overdue"
                value="1 (2%)"
                width="15%"
                type="red"
              />

            </div>

          </div>

          <h4 className="priority-title">
            High Priority Tasks
          </h4>

          <PriorityRow
            number="1"
            task="API Integration"
            person="Rahul Verma"
            status="Overdue"
          />

          <PriorityRow
            number="2"
            task="Dashboard UI"
            person="Aman Sharma"
            status="Due Today"
          />

          <PriorityRow
            number="3"
            task="Testing & QA"
            person="Neha Patel"
            status="Due Tomorrow"
          />

        </div>

        {/* DAILY UPDATES */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaFileAlt /> Daily Updates
            </h3>

            <span className="view-all">
              View All →
            </span>
          </div>

          <div className="update-summary">

            <div>
              <strong>9 / 12</strong>
              <span>Submitted</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Pending</span>
            </div>

            <div>
              <strong>7</strong>
              <span>Reviewed</span>
            </div>

          </div>

          <Update
            name="Aman Sharma"
            time="Today, 6:12 PM"
            status="Submitted"
          />

          <Update
            name="Priya Singh"
            time="Today, 6:05 PM"
            status="Submitted"
          />

          <Update
            name="Rahul Verma"
            time="No update submitted"
            status="Pending"
          />

          <div className="bottom-link">
            View All Updates <FaArrowRight />
          </div>

        </div>

        {/* LEAVE REQUESTS */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaCalendarAlt /> Leave Requests
            </h3>

            <span className="view-all">
              View All →
            </span>
          </div>

          <LeaveRequest
            name="Rahul Sharma"
            type="Sick Leave"
            date="18 Aug - 19 Aug"
            days="5 Days"
          />

          <LeaveRequest
            name="Priya Singh"
            type="Casual Leave"
            date="20 Aug 2026"
            days="3 Days"
          />

        </div>

      </div>

      {/* ================= THIRD ROW ================= */}
      <div className="manager-grid">

        {/* PERFORMANCE */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>Team Performance (This Month)</h3>

            <span className="view-all">
              View Report →
            </span>
          </div>

          <div className="performance-grid">

            <Performance
              value="94%"
              title="Attendance"
              change="↑ 6%"
            />

            <Performance
              value="87%"
              title="Task Completion"
              change="↑ 5%"
            />

            <Performance
              value="91%"
              title="Daily Updates"
              change="↑ 7%"
            />

            <Performance
              value="84%"
              title="On-Time Tasks"
              change="↑ 4%"
            />

          </div>

        </div>

        {/* ACTIVITY */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>Recent Team Activity</h3>
          </div>

          <Activity
            text="Aman completed Dashboard UI"
            time="10 minutes ago"
          />

          <Activity
            text="Priya submitted daily update"
            time="25 minutes ago"
          />

          <Activity
            text="Rahul applied for leave"
            time="1 hour ago"
          />

          <Activity
            text="Neha checked in"
            time="2 hours ago"
          />

          <Activity
            text="API Integration completed"
            time="3 hours ago"
          />

        </div>

        {/* QUICK ACTIONS */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>Quick Actions</h3>
          </div>

          <div className="quick-actions">

            <div className="quick-action">
              <FaTasks />
              <strong>Create Task</strong>
              <small>Assign new task</small>
            </div>

            <div className="quick-action">
              <FaUsers />
              <strong>View Team</strong>
              <small>See all team members</small>
            </div>

            <div className="quick-action">
              <FaFileAlt />
              <strong>Review Updates</strong>
              <small>Review team updates</small>
            </div>

            <div className="quick-action">
              <FaCalendarAlt />
              <strong>Leave Requests</strong>
              <small>Approve or reject</small>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};


/* =====================================================
   SMALL COMPONENTS
===================================================== */

const StatCard = ({
  icon,
  iconClass,
  title,
  value,
  text,
  textClass,
}) => {
  return (
    <div className="manager-stat-card">

      <div className={`stat-icon ${iconClass}`}>
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span className={textClass}>{text}</span>
      </div>

    </div>
  );
};


const CardTitle = ({ icon, title }) => {
  return (
    <div className="manager-card-title">
      <h3>
        {icon} {title}
      </h3>

      <FaArrowRight />
    </div>
  );
};


const AttentionRow = ({
  icon,
  iconClass,
  title,
  subtitle,
  button,
}) => {
  return (
    <div className="attention-row">

      <div className={`attention-icon ${iconClass}`}>
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </div>

      <button>{button}</button>

    </div>
  );
};


const AttendanceItem = ({ dot, name, value }) => {
  return (
    <div>
      <span className={`dot ${dot}`}></span>

      {name}

      <b>{value}</b>
    </div>
  );
};


const TeamMember = ({
  name,
  role,
  status,
  time,
  statusClass,
}) => {
  return (
    <div className="team-member">

      <div className="member-avatar">
        {name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div className="member-name">
        <strong>{name}</strong>
        <small>{role}</small>
      </div>

      <div className={`member-status ${statusClass}`}>
        ● {status}
        <small>{time}</small>
      </div>

    </div>
  );
};


const Progress = ({
  name,
  value,
  width,
  type,
}) => {
  return (
    <div className="progress-item">

      <span>{name}</span>

      <div className="progress-track">
        <div
          className={type}
          style={{ width }}
        />
      </div>

      <b>{value}</b>

    </div>
  );
};


const PriorityRow = ({
  number,
  task,
  person,
  status,
}) => {
  return (
    <div className="priority-row">

      <span>{number}</span>

      <b>{task}</b>

      <small>{person}</small>

      <em>{status}</em>

    </div>
  );
};


const Update = ({
  name,
  time,
  status,
}) => {
  return (
    <div className="update-row">

      <div className="update-avatar">
        {name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div>
        <strong>{name}</strong>
        <small>{time}</small>
      </div>

      <span
        className={
          status === "Pending"
            ? "pending"
            : "submitted"
        }
      >
        {status}
      </span>

      <button>Review</button>

    </div>
  );
};


const LeaveRequest = ({
  name,
  type,
  date,
  days,
}) => {
  return (
    <div className="leave-row">

      <div className="leave-avatar">
        {name
          .split(" ")
          .map((x) => x[0])
          .join("")}
      </div>

      <div className="leave-person">
        <strong>{name}</strong>
        <small>{type}</small>
      </div>

      <div className="leave-date">
        {date}
      </div>

      <span className="pending">
        ● Pending
      </span>

      <div className="leave-actions">

        <small>
          Available Leave: {days}
        </small>

        <div>
          <button className="reject">
            Reject
          </button>

          <button className="approve">
            Approve
          </button>
        </div>

      </div>

    </div>
  );
};


const Performance = ({
  value,
  title,
  change,
}) => {
  return (
    <div className="performance-item">

      <div className="performance-icon">
        ✓
      </div>

      <strong>{value}</strong>

      <span>{title}</span>

      <small>{change}</small>

    </div>
  );
};


const Activity = ({
  text,
  time,
}) => {
  return (
    <div className="activity-row">

      <div className="activity-check">
        ✓
      </div>

      <div>
        <strong>{text}</strong>
        <small>{time}</small>
      </div>

    </div>
  );
};

export default ManagerDashboard;