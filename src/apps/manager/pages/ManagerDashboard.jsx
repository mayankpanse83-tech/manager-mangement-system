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

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="manager-dashboard-content">

      {/* TOP STAT CARDS */}
      <div className="manager-stats">

        <div className="manager-stat-card">
          <div className="stat-icon purple">
            <FaUsers />
          </div>
          <div>
            <p>Team Members</p>
            <h2>12</h2>
            <span className="green-text">+1 this month</span>
          </div>
        </div>

        <div className="manager-stat-card">
          <div className="stat-icon green">
            <FaUserCheck />
          </div>
          <div>
            <p>Present Today</p>
            <h2>10</h2>
            <span className="green-text">83% of team</span>
          </div>
        </div>

        <div className="manager-stat-card">
          <div className="stat-icon red">
            <FaUserTimes />
          </div>
          <div>
            <p>Absent</p>
            <h2>1</h2>
            <span className="red-text">Needs review</span>
          </div>
        </div>

        <div className="manager-stat-card">
          <div className="stat-icon orange">
            <FaUmbrellaBeach />
          </div>
          <div>
            <p>On Leave</p>
            <h2>1</h2>
            <span className="orange-text">Today</span>
          </div>
        </div>

        <div className="manager-stat-card">
          <div className="stat-icon blue">
            <FaClock />
          </div>
          <div>
            <p>Late</p>
            <h2>2</h2>
            <span className="blue-text">Today</span>
          </div>
        </div>

      </div>


      {/* FIRST ROW */}
      <div className="manager-grid">

        {/* ATTENTION */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaBell /> Needs Your Attention
            </h3>
            <FaArrowRight />
          </div>

          <div className="attention-row">
            <div className="attention-icon orange">
              <FaCalendarAlt />
            </div>

            <div>
              <strong>2 Leave Requests</strong>
              <small>Waiting for approval</small>
            </div>

            <button>Review</button>
          </div>

          <div className="attention-row">
            <div className="attention-icon red">
              <FaTasks />
            </div>

            <div>
              <strong>1 Overdue Task</strong>
              <small>Rahul - API Integration</small>
            </div>

            <button>View Task</button>
          </div>

          <div className="attention-row">
            <div className="attention-icon blue">
              <FaFileAlt />
            </div>

            <div>
              <strong>3 Daily Updates</strong>
              <small>Waiting for review</small>
            </div>

            <button>Review</button>
          </div>

          <div className="attention-row">
            <div className="attention-icon purple">
              <FaClock />
            </div>

            <div>
              <strong>1 Attendance Issue</strong>
              <small>Late / missing check-out</small>
            </div>

            <button>Review</button>
          </div>

        </div>


        {/* ATTENDANCE */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaCalendarAlt /> Team Attendance (Today)
            </h3>
            <FaArrowRight />
          </div>

          <div className="attendance-box">

            <div className="attendance-circle">
              <div>
                <strong>83%</strong>
                <small>Present Rate</small>
              </div>
            </div>

            <div className="attendance-details">

              <div>
                <span className="dot green-dot"></span>
                Present
                <b>10 (83%)</b>
              </div>

              <div>
                <span className="dot red-dot"></span>
                Absent
                <b>1 (8%)</b>
              </div>

              <div>
                <span className="dot orange-dot"></span>
                On Leave
                <b>1 (8%)</b>
              </div>

              <div>
                <span className="dot blue-dot"></span>
                Late
                <b>2 (16%)</b>
              </div>

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


      {/* SECOND ROW */}
      <div className="manager-grid">

        {/* TASKS */}
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

          <div className="priority-row">
            <span>1</span>
            <b>API Integration</b>
            <small>Rahul Verma</small>
            <em>Overdue</em>
          </div>

          <div className="priority-row">
            <span>2</span>
            <b>Dashboard UI</b>
            <small>Aman Sharma</small>
            <em>Due Today</em>
          </div>

          <div className="priority-row">
            <span>3</span>
            <b>Testing & QA</b>
            <small>Neha Patel</small>
            <em>Due Tomorrow</em>
          </div>

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


        {/* LEAVE */}
        <div className="manager-card">

          <div className="manager-card-title">
            <h3>
              <FaCalendarAlt /> Leave Requests
            </h3>

            <span className="view-all">
              View All →
            </span>
          </div>

          <Leave
            name="Rahul Sharma"
            type="Sick Leave"
            date="18 Aug - 19 Aug"
            days="5 Days"
          />

          <Leave
            name="Priya Singh"
            type="Casual Leave"
            date="20 Aug 2026"
            days="3 Days"
          />

        </div>

      </div>


      {/* THIRD ROW */}
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


        {/* QUICK ACTION */}
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


/* COMPONENTS */

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
        ></div>
      </div>

      <b>{value}</b>

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

      <span className={status === "Pending" ? "pending" : "submitted"}>
        {status}
      </span>

      <button>Review</button>

    </div>
  );
};


const Leave = ({
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
        <small>Available Leave: {days}</small>

        <div>
          <button className="reject">Reject</button>
          <button className="approve">Approve</button>
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