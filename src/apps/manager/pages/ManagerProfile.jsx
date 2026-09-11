import React, { useState } from "react";
import {
  FaBell,
  FaChevronDown,
  FaCamera,
  FaUsers,
  FaCog,
  FaClock,
  FaCheckCircle,
  FaUser,
  FaCalendarAlt,
  FaVenusMars,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaBriefcase,
  FaBuilding,
  FaUserTie,
  FaFilePdf,
  FaDownload,
  FaEllipsisV,
  FaLock,
  FaShieldAlt,
  FaLaptop,
  FaEdit,
  FaUpload,
  FaArrowRight,
  FaHeart,
  FaMapMarkerAlt,
  FaKey,
} from "react-icons/fa";
import "./ManagerProfile.css";

const teamMembers = [
  { name: "Aman Sharma", role: "UI Designer", status: "Working", type: "green", avatar: "AS" },
  { name: "Priya Singh", role: "Developer", status: "Working", type: "green", avatar: "PS" },
  { name: "Rahul Verma", role: "Developer", status: "On Leave", type: "blue", avatar: "RV" },
  { name: "Neha Patel", role: "QA Engineer", status: "Late", type: "orange", avatar: "NP" },
  { name: "Vikram Joshi", role: "UI Designer", status: "Working", type: "green", avatar: "VJ" },
];

const documents = [
  { name: "Resume.pdf", date: "Updated on 12 Mar 2024", size: "2.4 MB" },
  { name: "Joining Letter.pdf", date: "Updated on 15 Mar 2024", size: "1.1 MB" },
  { name: "ID Proof.pdf", date: "Updated on 10 Mar 2024", size: "800 KB" },
];

function InfoRow({ icon, label, value }) {
  return (
    <div className="profile-info-row">
      <span className="profile-row-icon">{icon}</span>
      <span className="profile-row-label">{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ProfileCard({ title, action, children, className = "" }) {
  return (
    <section className={`profile-card ${className}`}>
      <div className="profile-card-head">
        <h2>{title}</h2>
        {action}
      </div>
      {children}
    </section>
  );
}

function StatBox({ icon, label, value, sub, tone }) {
  return (
    <div className="profile-stat-box">
      <div className={`profile-stat-icon ${tone}`}>{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      {sub && <small>{sub}</small>}
    </div>
  );
}

const Profile = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [show2FA, setShow2FA] = useState(false);
  const [showSessions, setShowSessions] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="profile-page">

      {/* PAGE HEADER */}
      <div className="profile-page-header">
        <div>
          <h1>Profile</h1>
          <p>Manage your personal and professional information.</p>
        </div>

        <div className="profile-header-right">
          <button className="profile-bell">
            <FaBell />
            <span>3</span>
          </button>

          <div className="profile-top-user">
            <div className="profile-top-avatar">RV</div>
            <div>
              <strong>Rajat Verma</strong>
              <small>Team Manager</small>
            </div>
            <FaChevronDown />
          </div>
        </div>
      </div>

      {/* TOP PROFILE AREA */}
      <div className="profile-top-grid">

        <section className="profile-hero">
          <div className="profile-hero-left">
            <div className="profile-main-photo">
              <div className="profile-photo-placeholder">RV</div>
              <button
                className="profile-camera"
                onClick={() => setShowUpload(true)}
                title="Change photo"
              >
                <FaCamera />
              </button>
            </div>

            <div className="profile-hero-details">
              <div className="profile-name-line">
                <h2>Rajat Verma</h2>
                <span className="active-badge">
                  <i></i> Active
                </span>
              </div>

              <p className="profile-role">
                Team Manager <span>|</span> Design Department
              </p>

              <p className="profile-meta">
                Employee ID: MGR-001 <span>|</span> Joined: 15 March 2024
              </p>

              <p className="profile-quote">
                “Leading with purpose and growing together.”
              </p>
            </div>
          </div>

          <button className="edit-profile-btn" onClick={() => setShowEdit(true)}>
            <FaEdit /> Edit Profile
          </button>
        </section>

        <div className="profile-stats">
          <StatBox
            icon={<FaUsers />}
            label="Team Size"
            value="12"
            sub="Members"
            tone="blue"
          />

          <StatBox
            icon={<FaCog />}
            label="Department"
            value="Design"
            tone="green"
          />

          <StatBox
            icon={<FaClock />}
            label="Experience"
            value="2.5"
            sub="Years"
            tone="orange"
          />

          <StatBox
            icon={<FaCheckCircle />}
            label="Status"
            value="Active"
            sub="Currently Working"
            tone="green"
          />
        </div>
      </div>

      {/* INFORMATION GRID */}
      <div className="profile-info-grid">

        <ProfileCard
          title="Personal Information"
          action={
            <button className="card-edit" onClick={() => setShowEdit(true)}>
              <FaEdit /> Edit
            </button>
          }
        >
          <div className="info-list">
            <InfoRow icon={<FaUser />} label="Full Name" value="Rajat Verma" />
            <InfoRow icon={<FaCalendarAlt />} label="Date of Birth" value="14 April 1995" />
            <InfoRow icon={<FaVenusMars />} label="Gender" value="Male" />
            <InfoRow icon={<FaEnvelope />} label="Email" value="rajat.verma@company.com" />
            <InfoRow icon={<FaPhone />} label="Phone" value="+91 98765 43210" />
          </div>
        </ProfileCard>

        <ProfileCard title="Professional Information">
          <div className="info-list">
            <InfoRow icon={<FaIdCard />} label="Employee ID" value="MGR-001" />
            <InfoRow icon={<FaUserTie />} label="Designation" value="Team Manager" />
            <InfoRow icon={<FaBuilding />} label="Department" value="Design" />
            <InfoRow icon={<FaCalendarAlt />} label="Joining Date" value="15 March 2024" />
            <InfoRow icon={<FaBriefcase />} label="Employment Type" value="Full Time" />
            <InfoRow icon={<FaUser />} label="Reporting To" value="Admin" />
            <InfoRow icon={<FaUsers />} label="Team Size" value="12 Members" />
          </div>
        </ProfileCard>

        <div className="profile-right-stack">
          <ProfileCard
            title="Contact Information"
            action={
              <button className="card-edit" onClick={() => setShowEdit(true)}>
                <FaEdit /> Edit
              </button>
            }
          >
            <div className="info-list">
              <InfoRow icon={<FaEnvelope />} label="Work Email" value="rajat.verma@company.com" />
              <InfoRow icon={<FaPhone />} label="Phone Number" value="+91 98765 43210" />
              <InfoRow icon={<FaMapMarkerAlt />} label="Address" value="Indore, Madhya Pradesh, India" />
            </div>
          </ProfileCard>

          <ProfileCard
            title="Emergency Contact"
            action={
              <button className="card-edit" onClick={() => setShowEdit(true)}>
                <FaEdit /> Edit
              </button>
            }
          >
            <div className="info-list">
              <InfoRow icon={<FaUser />} label="Name" value="Suresh Verma" />
              <InfoRow icon={<FaHeart />} label="Relationship" value="Father" />
              <InfoRow icon={<FaPhone />} label="Phone" value="+91 98260 12345" />
            </div>
          </ProfileCard>
        </div>
      </div>

      {/* TEAM */}
      <ProfileCard
        title={
          <div>
            <span>My Team</span>
            <small className="title-sub">12 Team Members &nbsp; | &nbsp; Design Team</small>
          </div>
        }
        action={
          <button className="view-team-btn">
            View My Team <FaArrowRight />
          </button>
        }
        className="team-card"
      >
        <div className="team-members">
          {teamMembers.map((member) => (
            <div className="team-member" key={member.name}>
              <div className="team-avatar">{member.avatar}</div>

              <div className="team-member-info">
                <strong>{member.name}</strong>
                <span>{member.role}</span>
                <small className={member.type}>
                  <i></i> {member.status}
                </small>
              </div>
            </div>
          ))}

          <div className="more-members">
            <div>+7</div>
            <span>More<br />Members</span>
          </div>
        </div>
      </ProfileCard>

      {/* BOTTOM GRID */}
      <div className="profile-bottom-grid">

        <ProfileCard
          title="My Documents"
          action={
            <button className="upload-btn" onClick={() => setShowUpload(true)}>
              <FaUpload /> Upload Document
            </button>
          }
        >
          <div className="documents">
            {documents.map((doc) => (
              <div className="document-row" key={doc.name}>
                <div className="pdf-icon">
                  <FaFilePdf />
                </div>

                <div className="document-info">
                  <strong>{doc.name}</strong>
                  <small>{doc.date}</small>
                </div>

                <span className="document-size">PDF • {doc.size}</span>

                <button className="document-download">
                  <FaDownload />
                </button>

                <button className="document-more">
                  <FaEllipsisV />
                </button>
              </div>
            ))}
          </div>
        </ProfileCard>

        <ProfileCard title="Account Security">
          <div className="security-list">

            <div className="security-row">
              <span className="security-icon green">
                <FaLock />
              </span>

              <div>
                <strong>Password</strong>
                <small>Last changed 24 days ago</small>
              </div>

              <button onClick={() => setShowPassword(true)}>
                Change Password
              </button>
            </div>

            <div className="security-row">
              <span className="security-icon green">
                <FaShieldAlt />
              </span>

              <div>
                <strong>Two-Factor Authentication</strong>
                <small className="enabled">Enabled</small>
              </div>

              <button onClick={() => setShow2FA(true)}>
                Manage 2FA
              </button>
            </div>

            <div className="security-row">
              <span className="security-icon purple">
                <FaLaptop />
              </span>

              <div>
                <strong>Active Sessions</strong>
                <small>3 Devices</small>
              </div>

              <button onClick={() => setShowSessions(true)}>
                View Sessions
              </button>
            </div>

          </div>
        </ProfileCard>
      </div>

      {/* MODALS */}
      {showEdit && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="modal-close" onClick={() => setShowEdit(false)}>×</button>
            <h3>Edit Profile</h3>

            <label>Full Name</label>
            <input defaultValue="Rajat Verma" />

            <label>Designation</label>
            <input defaultValue="Team Manager" />

            <label>Department</label>
            <input defaultValue="Design" />

            <button className="modal-save" onClick={() => setShowEdit(false)}>
              Save Changes
            </button>
          </div>
        </div>
      )}

      {showPassword && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="modal-close" onClick={() => setShowPassword(false)}>×</button>
            <h3>Change Password</h3>

            <label>Current Password</label>
            <input type="password" />

            <label>New Password</label>
            <input type="password" />

            <label>Confirm Password</label>
            <input type="password" />

            <button className="modal-save" onClick={() => setShowPassword(false)}>
              Update Password
            </button>
          </div>
        </div>
      )}

      {show2FA && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="modal-close" onClick={() => setShow2FA(false)}>×</button>
            <h3>Two-Factor Authentication</h3>
            <p className="modal-text">
              Two-factor authentication is currently enabled for this account.
            </p>
            <button className="modal-save" onClick={() => setShow2FA(false)}>
              Done
            </button>
          </div>
        </div>
      )}

      {showSessions && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="modal-close" onClick={() => setShowSessions(false)}>×</button>
            <h3>Active Sessions</h3>

            <div className="session-item">
              <FaLaptop />
              <div>
                <strong>Windows PC</strong>
                <small>Current device</small>
              </div>
            </div>

            <div className="session-item">
              <FaLaptop />
              <div>
                <strong>Office Laptop</strong>
                <small>Last active today</small>
              </div>
            </div>

            <div className="session-item">
              <FaLaptop />
              <div>
                <strong>Mobile Device</strong>
                <small>Last active yesterday</small>
              </div>
            </div>
          </div>
        </div>
      )}

      {showUpload && (
        <div className="profile-modal-overlay">
          <div className="profile-modal">
            <button className="modal-close" onClick={() => setShowUpload(false)}>×</button>
            <h3>Upload File</h3>
            <input type="file" />
            <button className="modal-save" onClick={() => setShowUpload(false)}>
              Upload
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Profile;