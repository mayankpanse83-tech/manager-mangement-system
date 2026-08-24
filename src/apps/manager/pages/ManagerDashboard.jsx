import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  FaEye,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

import "./ManagerDashboard.css";

const ManagerDashboard = () => {
  const navigate = useNavigate();

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      type: "Sick Leave",
      date: "18 Aug - 19 Aug",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Singh",
      type: "Casual Leave",
      date: "20 Aug 2026",
      status: "Pending",
    },
  ]);

  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleReview = (text, route = null) => {
    if (route) {
      navigate(route);
      return;
    }

    showMessage(text);
  };

  const handleLeaveAction = (id, action) => {
    setLeaveRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                action === "approve"
                  ? "Approved"
                  : "Rejected",
            }
          : item
      )
    );

    showMessage(
      action === "approve"
        ? "Leave request approved successfully."
        : "Leave request rejected."
    );
  };

  return (
    <div className="manager-dashboard-content">

      {/* SUCCESS / ACTION MESSAGE */}
      {message && (
        <div className="dashboard-toast">
          <FaCheck />
          {message}
        </div>
      )}

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
          onClick={() => navigate("/attendance")}
        />

        <StatCard
          icon={<FaUserTimes />}
          iconClass="red"
          title="Absent"
          value="1"
          text="Needs review"
          textClass="red-text"
          onClick={() => navigate("/attendance")}
        />

        <StatCard
          icon={<FaUmbrellaBeach />}
          iconClass="orange"
          title="On Leave"
          value="1"
          text="Today"
          textClass="orange-text"
          onClick={() => navigate("/leave")}
        />

        <StatCard
          icon={<FaClock />}
          iconClass="blue"
          title="Late"
          value="2"
          text="Today"
          textClass="blue-text"
          onClick={() => navigate("/attendance")}
        />

      </div>


      {/* ================= FIRST ROW ================= */}

      <div className="manager-grid">

        {/* NEEDS ATTENTION */}

        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaBell />
              Needs Your Attention
            </h3>

            <button
              className="icon-link"
              onClick={() => navigate("/leave")}
              type="button"
            >
              <FaArrowRight />
            </button>
          </div>


          <AttentionRow
            icon={<FaCalendarAlt />}
            iconClass="orange"
            title="2 Leave Requests"
            subtitle="Waiting for approval"
            button="Review"
            onClick={() => navigate("/leave")}
          />


          <AttentionRow
            icon={<FaTasks />}
            iconClass="red"
            title="1 Overdue Task"
            subtitle="Rahul - API Integration"
            button="View Task"
            onClick={() => navigate("/tasks")}
          />


          <AttentionRow
            icon={<FaFileAlt />}
            iconClass="blue"
            title="3 Daily Updates"
            subtitle="Waiting for review"
            button="Review"
            onClick={() => navigate("/daily-updates")}
          />


          <AttentionRow
            icon={<FaClock />}
            iconClass="purple"
            title="1 Attendance Issue"
            subtitle="Late / missing check-out"
            button="Review"
            onClick={() => navigate("/attendance")}
          />

        </div>


        {/* TEAM ATTENDANCE */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              <FaCalendarAlt />
              Team Attendance (Today)
            </h3>

            <button
              className="icon-link"
              onClick={() => navigate("/attendance")}
              type="button"
            >
              <FaArrowRight />
            </button>

          </div>


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


          <button
            className="bottom-link button-link"
            onClick={() => navigate("/attendance")}
            type="button"
          >
            View Team Attendance
            <FaArrowRight />
          </button>

        </div>


        {/* TEAM STATUS */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              <FaUsers />
              Team Status
            </h3>

            <button
              className="view-all-button"
              onClick={() => navigate("/team")}
              type="button"
            >
              View All →
            </button>

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


          <button
            className="bottom-link button-link"
            onClick={() => navigate("/team")}
            type="button"
          >
            View Team Members
            <FaArrowRight />
          </button>

        </div>

      </div>


      {/* ================= SECOND ROW ================= */}

      <div className="manager-grid">

        {/* TEAM TASKS */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              <FaTasks />
              Team Tasks
            </h3>

            <button
              className="view-all-button"
              onClick={() => navigate("/tasks")}
              type="button"
            >
              View All Tasks →
            </button>

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


          <button
            className="card-action-button"
            onClick={() => navigate("/tasks")}
            type="button"
          >
            Manage Team Tasks
            <FaArrowRight />
          </button>

        </div>


        {/* DAILY UPDATES */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              <FaFileAlt />
              Daily Updates
            </h3>

            <button
              className="view-all-button"
              onClick={() => navigate("/daily-updates")}
              type="button"
            >
              View All →
            </button>

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
            onClick={() =>
              handleReview(
                "Aman Sharma update opened."
              )
            }
          />

          <Update
            name="Priya Singh"
            time="Today, 6:05 PM"
            status="Submitted"
            onClick={() =>
              handleReview(
                "Priya Singh update opened."
              )
            }
          />

          <Update
            name="Rahul Verma"
            time="No update submitted"
            status="Pending"
            onClick={() =>
              navigate("/daily-updates")
            }
          />


          <button
            className="bottom-link button-link"
            onClick={() => navigate("/daily-updates")}
            type="button"
          >
            View All Updates
            <FaArrowRight />
          </button>

        </div>


        {/* LEAVE REQUESTS */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              <FaUmbrellaBeach />
              Leave Requests
            </h3>

            <button
              className="view-all-button"
              onClick={() => navigate("/leave")}
              type="button"
            >
              View All →
            </button>

          </div>


          {leaveRequests.map((request) => (

            <LeaveRequest
              key={request.id}
              {...request}
              onApprove={() =>
                handleLeaveAction(
                  request.id,
                  "approve"
                )
              }
              onReject={() =>
                handleLeaveAction(
                  request.id,
                  "reject"
                )
              }
            />

          ))}

        </div>

      </div>


      {/* ================= THIRD ROW ================= */}

      <div className="manager-grid">

        {/* PERFORMANCE */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              Team Performance (This Month)
            </h3>

            <button
              className="view-all-button"
              onClick={() => navigate("/reports")}
              type="button"
            >
              View Report →
            </button>

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


        {/* RECENT ACTIVITY */}

        <div className="manager-card">

          <div className="manager-card-title">

            <h3>
              Recent Team Activity
            </h3>

            <button
              className="view-all-button"
              onClick={() =>
                handleReview(
                  "Recent activity opened."
                )
              }
              type="button"
            >
              View All →
            </button>

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

            <button
              className="quick-action"
              onClick={() =>
                navigate("/tasks")
              }
              type="button"
            >
              <FaTasks />
              <strong>Create Task</strong>
              <small>Assign new task</small>
            </button>


            <button
              className="quick-action"
              onClick={() =>
                navigate("/team")
              }
              type="button"
            >
              <FaUsers />
              <strong>View Team</strong>
              <small>See all team members</small>
            </button>


            <button
              className="quick-action"
              onClick={() =>
                navigate("/daily-updates")
              }
              type="button"
            >
              <FaFileAlt />
              <strong>Review Updates</strong>
              <small>Review team updates</small>
            </button>


            <button
              className="quick-action"
              onClick={() =>
                navigate("/leave")
              }
              type="button"
            >
              <FaCalendarAlt />
              <strong>Leave Requests</strong>
              <small>Approve or reject</small>
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};


/* =====================================================
   COMPONENTS
===================================================== */

const StatCard = ({
  icon,
  iconClass,
  title,
  value,
  text,
  textClass,
  onClick,
}) => {
  return (
    <button
      className="manager-stat-card clickable-card"
      onClick={onClick}
      type="button"
    >
      <div className={`stat-icon ${iconClass}`}>
        {icon}
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        <span className={textClass}>{text}</span>
      </div>
    </button>
  );
};


const AttentionRow = ({
  icon,
  iconClass,
  title,
  subtitle,
  button,
  onClick,
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

      <button
        type="button"
        onClick={onClick}
      >
        {button}
      </button>

    </div>
  );
};


const AttendanceItem = ({
  dot,
  name,
  value,
}) => {
  return (
    <div>
      <span className={`dot ${dot}`} />
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

      <div
        className={`member-status ${statusClass}`}
      >
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
  onClick,
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

      <button
        type="button"
        onClick={onClick}
      >
        {status === "Pending" ? "Remind" : "Review"}
      </button>

    </div>
  );
};


const LeaveRequest = ({
  name,
  type,
  date,
  status,
  onApprove,
  onReject,
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
        ● {status}
      </span>

      <div className="leave-actions">

        <small>
          Available Leave
        </small>

        {status === "Pending" ? (
          <div>

            <button
              className="reject"
              type="button"
              onClick={onReject}
            >
              <FaTimes />
              Reject
            </button>

            <button
              className="approve"
              type="button"
              onClick={onApprove}
            >
              <FaCheck />
              Approve
            </button>

          </div>
        ) : (
          <span className="request-done">
            {status}
          </span>
        )}

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
    <button
      type="button"
      className="activity-row activity-button"
    >
      <div className="activity-check">
        ✓
      </div>

      <div>
        <strong>{text}</strong>
        <small>{time}</small>
      </div>

    </button>
  );
};


export default ManagerDashboard;