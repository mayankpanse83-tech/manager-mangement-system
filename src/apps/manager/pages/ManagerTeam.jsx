import React, { useState } from "react";
import "./ManagerTeam.css";


const teamMembers = [
  {
    id: "EMP001",
    name: "Aman Sharma",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    time: "09:12 AM",
  },

  {
    id: "EMP002",
    name: "Priya Singh",
    role: "Developer",
    department: "Development",
    status: "Working",
    time: "09:05 AM",
  },

  {
    id: "EMP003",
    name: "Rahul Verma",
    role: "Developer",
    department: "Development",
    status: "On Leave",
    time: "Today",
  },

  {
    id: "EMP004",
    name: "Neha Patel",
    role: "QA Engineer",
    department: "QA",
    status: "Late",
    time: "10:12 AM",
  },

  {
    id: "EMP005",
    name: "Vikram Joshi",
    role: "UI Designer",
    department: "Design",
    status: "Working",
    time: "09:18 AM",
  },
];


function ManagerTeam() {

  const [search, setSearch] = useState("");

  const filteredMembers =
    teamMembers.filter((member) =>
      member.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );


  return (
    <div className="manager-team-page">

      {/* HEADER */}

      <div className="team-page-header">

        <div>

          <h1>
            My Team
          </h1>

          <p>
            Manage and monitor your team members
          </p>

        </div>


        <button
          className="add-member-btn"
          type="button"
          onClick={() =>
            alert("Add Member")
          }
        >
          + Add Member
        </button>

      </div>


      {/* STATS */}

      <div className="team-stat-grid">

        <div className="team-stat-card">
          <span>
            Team Members
          </span>

          <strong>
            12
          </strong>

          <small>
            Total Members
          </small>
        </div>


        <div className="team-stat-card">
          <span>
            Working
          </span>

          <strong>
            10
          </strong>

          <small>
            83% of team
          </small>
        </div>


        <div className="team-stat-card">
          <span>
            On Leave
          </span>

          <strong>
            1
          </strong>

          <small>
            Today
          </small>
        </div>


        <div className="team-stat-card">
          <span>
            Needs Attention
          </span>

          <strong>
            2
          </strong>

          <small>
            Review required
          </small>
        </div>

      </div>


      {/* SEARCH */}

      <div className="team-search-bar">

        <input
          type="text"
          placeholder="Search team member..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select defaultValue="all">

          <option value="all">
            All Departments
          </option>

          <option value="design">
            Design
          </option>

          <option value="development">
            Development
          </option>

          <option value="qa">
            QA
          </option>

        </select>


        <select defaultValue="all">

          <option value="all">
            All Status
          </option>

          <option value="working">
            Working
          </option>

          <option value="leave">
            On Leave
          </option>

          <option value="late">
            Late
          </option>

        </select>

      </div>


      {/* TABLE */}

      <div className="team-table-card">

        <table>

          <thead>

            <tr>
              <th>Employee</th>
              <th>Department</th>
              <th>Status</th>
              <th>Check In</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

          </thead>


          <tbody>

            {filteredMembers.map(
              (member) => (

                <tr key={member.id}>

                  <td>

                    <div className="member-cell">

                      <div className="member-avatar">
                        {member.name
                          .split(" ")
                          .map(
                            (word) =>
                              word[0]
                          )
                          .join("")}
                      </div>


                      <div>

                        <strong>
                          {member.name}
                        </strong>

                        <small>
                          {member.id}
                        </small>

                      </div>

                    </div>

                  </td>


                  <td>
                    {member.department}
                  </td>


                  <td>

                    <span
                      className={
                        "team-status " +
                        member.status
                          .toLowerCase()
                          .replace(" ", "-")
                      }
                    >
                      ● {member.status}
                    </span>

                  </td>


                  <td>
                    {member.time}
                  </td>


                  <td>
                    {member.role}
                  </td>


                  <td>

                    <button
                      className="view-team-btn"
                      type="button"
                      onClick={() =>
                        alert(
                          `${member.name} selected`
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

    </div>
  );
}


export default ManagerTeam;