import React, { useState } from "react";

import {
  FaBell,
  FaUser,
  FaCalendarAlt,
  FaBriefcase,
  FaStar,
  FaUsers,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaHeart,
  FaTint,
  FaIdCard,
  FaFilePdf,
  FaEye,
  FaDownload,
  FaShieldAlt,
  FaLock,
  FaKey,
  FaDesktop,
  FaHeadset,
  FaTimes,
  FaEdit,
  FaCheckCircle,
  FaCamera,
  FaMobileAlt,
  FaLaptop,
  FaToggleOn,
} from "react-icons/fa";

import "./Profile.css";

function Profile() {

  /* ================= STATES ================= */

  const [showEdit, setShowEdit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSessions, setShowSessions] = useState(false);
  const [showHR, setShowHR] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [showDevices, setShowDevices] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);

  const [selectedDocument, setSelectedDocument] = useState(null);

  const [message, setMessage] = useState("");

  const [profile, setProfile] = useState({
    name: "Mayank Panse",
    email: "Mayank@company.com",
    phone: "+91 7067467077",
    address: "Narkhed, Betul, Madhya Pradesh - 460661",
  });

  const [sessions, setSessions] = useState([
    {
      id: 1,
      device: "Windows • Chrome",
      detail: "Current device",
      current: true,
    },
    {
      id: 2,
      device: "Android • Chrome",
      detail: "2 hours ago",
      current: false,
    },
    {
      id: 3,
      device: "Windows • Edge",
      detail: "Yesterday",
      current: false,
    },
  ]);

  /* ================= DOCUMENTS ================= */

  const documents = [
    {
      name: "Aadhaar Card",
      type: "Verified",
      icon: <FaIdCard />,
    },
    {
      name: "PAN Card",
      type: "Verified",
      icon: <FaIdCard />,
    },
    {
      name: "Resume",
      type: "PDF • 245 KB",
      icon: <FaFilePdf />,
    },
    {
      name: "Joining Letter",
      type: "PDF • 189 KB",
      icon: <FaFilePdf />,
    },
    {
      name: "Offer Letter",
      type: "PDF • 210 KB",
      icon: <FaFilePdf />,
    },
  ];

  /* ================= FUNCTIONS ================= */

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const downloadDocument = (name) => {

    const text = `
Employee Management System

Document: ${name}
Employee Name: ${profile.name}
Employee ID: EMP-001
Department: Design
Designation: UI/UX Designer
`;

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = `${name}.txt`;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);

    URL.revokeObjectURL(url);

    showMessage(`${name} downloaded successfully`);
  };

  const logoutSession = (id) => {

    setSessions((oldSessions) =>
      oldSessions.filter((session) => session.id !== id)
    );

    showMessage("Session logged out successfully");
  };

  const saveProfile = (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);

    setProfile({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
    });

    setShowEdit(false);

    showMessage("Profile updated successfully");
  };

  /* ================= UI ================= */

  return (
    <div className="profile-page">

      {/* ================= HEADER ================= */}

      <div className="profile-header">

        <div>
          <h1>My Profile</h1>

          <p>
            View and manage your personal and professional information
          </p>
        </div>

        <div className="header-right">

          {/* Notification */}

          <button
            className="notification"
            onClick={() => setShowNotifications(true)}
          >
            <FaBell />
            <span>3</span>
          </button>

          {/* Mini User */}

          <div className="mini-user">

            <div className="mini-avatar">
              M
            </div>

            <div>
              <strong>{profile.name}</strong>
              <small>UI/UX Designer</small>
            </div>

          </div>

          {/* Edit */}

          <button
            className="edit-profile-btn"
            onClick={() => setShowEdit(true)}
          >
            <FaEdit />
            Edit Profile
          </button>

        </div>

      </div>

      {/* ================= PROFILE BANNER ================= */}

      <section className="profile-banner">

        <div className="profile-photo-area">

          <div className="profile-photo">
            M
          </div>

          <button
            className="camera-btn"
            onClick={() => setShowCamera(true)}
          >
            <FaCamera />
          </button>

        </div>

        <div className="profile-main-info">

          <div className="name-row">

            <h2>{profile.name}</h2>

            <span className="active-badge">
              <FaCheckCircle />
              Active
            </span>

          </div>

          <h3>UI/UX Designer</h3>

          <div className="info-grid">

            <div>
              <FaIdCard />

              <span>
                <strong>EMP-001</strong>
                <small>Employee ID</small>
              </span>
            </div>

            <div>
              <FaCalendarAlt />

              <span>
                <strong>15 March 2025</strong>
                <small>Date of Joining</small>
              </span>
            </div>

            <div>
              <FaUsers />

              <span>
                <strong>Design</strong>
                <small>Department</small>
              </span>
            </div>

            <div>
              <FaEnvelope />

              <span>
                <strong>{profile.email}</strong>
              </span>
            </div>

            <div>
              <FaPhone />

              <span>
                <strong>{profile.phone}</strong>
              </span>
            </div>

            <div>
              <FaMapMarkerAlt />

              <span>
                <strong>Betul, Madhya Pradesh</strong>
              </span>
            </div>

          </div>

        </div>

        {/* Profile Stats */}

        <div className="profile-stats">

          <div>
            <FaCalendarAlt />

            <span>
              <strong>1 Y 5 M</strong>
              <small>Total Experience</small>
            </span>
          </div>

          <div>
            <FaStar />

            <span>
              <strong>Excellent</strong>
              <small>Performance</small>
            </span>
          </div>

          <div>
            <FaUsers />

            <span>
              <strong>Rajat Verma</strong>
              <small>Reporting Manager</small>
            </span>
          </div>

        </div>

      </section>

      {/* ================= CARDS ================= */}

      <div className="cards-grid">

        {/* Personal */}

        <ProfileCard
          title="Personal Information"
          icon={<FaUser />}
        >

          <InfoRow
            icon={<FaUser />}
            label="Full Name"
            value={profile.name}
          />

          <InfoRow
            icon={<FaCalendarAlt />}
            label="Date of Birth"
            value="08 June 2011"
          />

          <InfoRow
            icon={<FaUser />}
            label="Gender"
            value="Male"
          />

          <InfoRow
            icon={<FaMapMarkerAlt />}
            label="Nationality"
            value="Indian"
          />

          <InfoRow
            icon={<FaHeart />}
            label="Marital Status"
            value="Single"
          />

          <InfoRow
            icon={<FaTint />}
            label="Blood Group"
            value="O+"
          />

        </ProfileCard>

        {/* Employment */}

        <ProfileCard
          title="Employment Information"
          icon={<FaBriefcase />}
        >

          <InfoRow
            label="Employee ID"
            value="EMP-001"
          />

          <InfoRow
            label="Department"
            value="Design"
          />

          <InfoRow
            label="Designation"
            value="UI/UX Designer"
          />

          <InfoRow
            label="Manager"
            value="Rajat Verma"
          />

          <InfoRow
            label="Joining Date"
            value="15 March 2025"
          />

          <InfoRow
            label="Employment Type"
            value="Full Time"
          />

          <div className="info-row">

            <span>Status</span>

            <b className="green-text">
              Active
            </b>

          </div>

        </ProfileCard>

        {/* Contact */}

        <ProfileCard
          title="Contact Information"
          icon={<FaPhone />}
        >

          <InfoRow
            icon={<FaEnvelope />}
            label="Email"
            value={profile.email}
          />

          <InfoRow
            icon={<FaPhone />}
            label="Phone Number"
            value={profile.phone}
          />

          <InfoRow
            icon={<FaPhone />}
            label="Alternate Phone"
            value="+91 9584331534"
          />

          <InfoRow
            icon={<FaMapMarkerAlt />}
            label="Address"
            value={profile.address}
          />

        </ProfileCard>

        {/* Emergency */}

        <ProfileCard
          title="Emergency Contact"
          icon={<FaUsers />}
        >

          <InfoRow
            label="Contact Name"
            value="Ramesh Panse"
          />

          <InfoRow
            label="Relationship"
            value="Father"
          />

          <InfoRow
            label="Phone Number"
            value="+91 9584331534"
          />

          <InfoRow
            label="Address"
            value="Narkhed, Betul, Madhya Pradesh"
          />

        </ProfileCard>

        {/* Documents */}

        <ProfileCard
          title="Documents"
          icon={<FaFilePdf />}
          wide
        >

          <div className="documents">

            {documents.map((doc, index) => (

              <div
                className="document-row"
                key={index}
              >

                <div className="document-name">

                  <span className="document-icon">
                    {doc.icon}
                  </span>

                  <strong>
                    {doc.name}
                  </strong>

                </div>

                <span
                  className={
                    doc.type === "Verified"
                      ? "verified"
                      : "document-size"
                  }
                >
                  {doc.type}
                </span>

                <button
                  className="small-btn"
                  onClick={() =>
                    setSelectedDocument(doc.name)
                  }
                >
                  <FaEye />
                  View
                </button>

                <button
                  className="download-btn"
                  onClick={() =>
                    downloadDocument(doc.name)
                  }
                >
                  <FaDownload />
                </button>

              </div>

            ))}

          </div>

          <button
            className="view-documents"
            onClick={() => setShowDocuments(true)}
          >
            View All Documents →
          </button>

        </ProfileCard>

        {/* Security */}

        <ProfileCard
          title="Account Security"
          icon={<FaShieldAlt />}
        >

          <InfoRow
            label="Password"
            value="Last changed 30 days ago"
          />

          <div className="security-row">

            <span>
              <FaKey />
              Two-Factor Authentication
            </span>

            <button
              className="enabled"
              onClick={() => setShowTwoFA(true)}
            >
              Enabled
            </button>

          </div>

          <div className="security-row">

            <span>
              <FaDesktop />
              Login Sessions
            </span>

            <button
              onClick={() => setShowSessions(true)}
            >
              {sessions.length} Active Sessions →
            </button>

          </div>

          <div className="security-row">

            <span>
              Email Notifications
            </span>

            <button
              className="enabled"
              onClick={() =>
                showMessage("Email notifications are enabled")
              }
            >
              Enabled
            </button>

          </div>

          <div className="security-row">

            <span>
              Device Management
            </span>

            <button
              onClick={() => setShowDevices(true)}
            >
              2 Trusted Devices →
            </button>

          </div>

          <div className="security-buttons">

            <button
              onClick={() => setShowPassword(true)}
            >
              <FaLock />
              Change Password
            </button>

            <button
              onClick={() => setShowSessions(true)}
            >
              <FaDesktop />
              Manage Sessions
            </button>

          </div>

        </ProfileCard>

      </div>

      {/* ================= HELP ================= */}

      <div className="help-box">

        <div>

          <h3>
            Need to update something?
          </h3>

          <p>
            If any of your information is incorrect or needs
            to be updated, please contact your HR department.
          </p>

        </div>

        <button
          onClick={() => setShowHR(true)}
        >
          <FaHeadset />
          Contact HR
        </button>

      </div>

      {/* ================= SUCCESS MESSAGE ================= */}

      {message && (
        <div className="success-toast">
          <FaCheckCircle />
          {message}
        </div>
      )}

      {/* ================= EDIT PROFILE ================= */}

      {showEdit && (

        <Modal
          title="Edit Profile"
          close={() => setShowEdit(false)}
        >

          <form onSubmit={saveProfile}>

            <div className="form-group">
              <label>Full Name</label>

              <input
                name="name"
                defaultValue={profile.name}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>

              <input
                name="email"
                type="email"
                defaultValue={profile.email}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                name="phone"
                defaultValue={profile.phone}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>

              <textarea
                name="address"
                defaultValue={profile.address}
                required
              />
            </div>

            <button
              className="modal-primary"
              type="submit"
            >
              <FaCheckCircle />
              Save Changes
            </button>

          </form>

        </Modal>

      )}

      {/* ================= PASSWORD ================= */}

      {showPassword && (

        <Modal
          title="Change Password"
          close={() => setShowPassword(false)}
        >

          <div className="form-group">
            <label>Current Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>New Password</label>
            <input type="password" />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" />
          </div>

          <button
            className="modal-primary"
            onClick={() => {
              setShowPassword(false);
              showMessage("Password changed successfully");
            }}
          >
            <FaLock />
            Change Password
          </button>

        </Modal>

      )}

      {/* ================= SESSIONS ================= */}

      {showSessions && (

        <Modal
          title="Active Sessions"
          close={() => setShowSessions(false)}
        >

          {sessions.length === 0 ? (

            <p>No active sessions.</p>

          ) : (

            sessions.map((session) => (

              <div
                className="session"
                key={session.id}
              >

                <FaDesktop />

                <div>

                  <strong>
                    {session.device}
                  </strong>

                  <small>
                    {session.detail}
                  </small>

                </div>

                {session.current ? (

                  <b className="enabled">
                    Active
                  </b>

                ) : (

                  <button
                    onClick={() =>
                      logoutSession(session.id)
                    }
                  >
                    Logout
                  </button>

                )}

              </div>

            ))

          )}

        </Modal>

      )}

      {/* ================= HR ================= */}

      {showHR && (

        <Modal
          title="Contact HR"
          close={() => setShowHR(false)}
        >

          <div className="hr-info">

            <h3>
              HR Department
            </h3>

            <p>
              Email: hr@company.com
            </p>

            <p>
              Phone: +91 98765 00000
            </p>

            <p>
              Working Hours: 10:00 AM - 6:00 PM
            </p>

          </div>

          <button
            className="modal-primary"
            onClick={() => setShowHR(false)}
          >
            Close
          </button>

        </Modal>

      )}

      {/* ================= DOCUMENT ================= */}

      {selectedDocument && (

        <Modal
          title={selectedDocument}
          close={() => setSelectedDocument(null)}
        >

          <div className="document-preview">

            <FaFilePdf />

            <h3>
              {selectedDocument}
            </h3>

            <p>
              Employee: {profile.name}
            </p>

            <p>
              Employee ID: EMP-001
            </p>

            <button
              className="modal-primary"
              onClick={() =>
                downloadDocument(selectedDocument)
              }
            >
              <FaDownload />
              Download
            </button>

          </div>

        </Modal>

      )}

      {/* ================= ALL DOCUMENTS ================= */}

      {showDocuments && (

        <Modal
          title="All Documents"
          close={() => setShowDocuments(false)}
        >

          {documents.map((doc, index) => (

            <div
              className="session"
              key={index}
            >

              {doc.icon}

              <div>
                <strong>
                  {doc.name}
                </strong>

                <small>
                  {doc.type}
                </small>
              </div>

              <button
                onClick={() =>
                  setSelectedDocument(doc.name)
                }
              >
                View
              </button>

            </div>

          ))}

        </Modal>

      )}

      {/* ================= CAMERA ================= */}

      {showCamera && (

        <Modal
          title="Profile Photo"
          close={() => setShowCamera(false)}
        >

          <div className="camera-preview">

            <div className="large-avatar">
              M
            </div>

            <h3>
              Mayank Panse
            </h3>

            <p>
              Profile photo options
            </p>

            <button
              className="modal-primary"
              onClick={() => {
                setShowCamera(false);
                showMessage("Camera option selected");
              }}
            >
              <FaCamera />
              Choose Photo
            </button>

          </div>

        </Modal>

      )}

      {/* ================= NOTIFICATIONS ================= */}

      {showNotifications && (

        <Modal
          title="Notifications"
          close={() => setShowNotifications(false)}
        >

          <div className="notification-item">
            <FaCheckCircle />
            <div>
              <strong>
                Profile verified
              </strong>
              <small>
                Your profile information is up to date.
              </small>
            </div>
          </div>

          <div className="notification-item">
            <FaCalendarAlt />
            <div>
              <strong>
                Attendance reminder
              </strong>
              <small>
                Don't forget to mark your attendance.
              </small>
            </div>
          </div>

          <div className="notification-item">
            <FaFilePdf />
            <div>
              <strong>
                New document available
              </strong>
              <small>
                Your joining letter is available.
              </small>
            </div>
          </div>

        </Modal>

      )}

      {/* ================= TWO FACTOR ================= */}

      {showTwoFA && (

        <Modal
          title="Two-Factor Authentication"
          close={() => setShowTwoFA(false)}
        >

          <div className="security-modal">

            <FaShieldAlt />

            <h3>
              Two-Factor Authentication
            </h3>

            <p>
              Your account is protected with
              two-factor authentication.
            </p>

            <button
              className="modal-primary"
              onClick={() => {
                setShowTwoFA(false);
                showMessage("2FA settings saved");
              }}
            >
              <FaToggleOn />
              Keep Enabled
            </button>

          </div>

        </Modal>

      )}

      {/* ================= DEVICES ================= */}

      {showDevices && (

        <Modal
          title="Trusted Devices"
          close={() => setShowDevices(false)}
        >

          <div className="session">

            <FaLaptop />

            <div>
              <strong>
                Windows Laptop
              </strong>

              <small>
                Trusted device
              </small>
            </div>

            <b className="enabled">
              Trusted
            </b>

          </div>

          <div className="session">

            <FaMobileAlt />

            <div>
              <strong>
                Android Phone
              </strong>

              <small>
                Trusted device
              </small>
            </div>

            <b className="enabled">
              Trusted
            </b>

          </div>

        </Modal>

      )}

    </div>
  );
}


/* =====================================================
   PROFILE CARD
===================================================== */

function ProfileCard({
  title,
  icon,
  children,
  wide,
}) {

  return (

    <section
      className={`profile-card ${
        wide ? "wide-card" : ""
      }`}
    >

      <div className="card-title">

        <span>
          {icon}
        </span>

        <h3>
          {title}
        </h3>

      </div>

      {children}

    </section>
  );
}


/* =====================================================
   INFO ROW
===================================================== */

function InfoRow({
  icon,
  label,
  value,
}) {

  return (

    <div className="info-row">

      <span className="info-label">

        {icon && (
          <span className="row-icon">
            {icon}
          </span>
        )}

        {label}

      </span>

      <strong>
        {value}
      </strong>

    </div>
  );
}


/* =====================================================
   MODAL
===================================================== */

function Modal({
  title,
  close,
  children,
}) {

  return (

    <div
      className="modal-overlay"
      onClick={close}
    >

      <div
        className="modal-box"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <h2>
            {title}
          </h2>

          <button
            onClick={close}
          >
            <FaTimes />
          </button>

        </div>

        <div className="modal-body">
          {children}
        </div>

      </div>

    </div>
  );
}

export default Profile;