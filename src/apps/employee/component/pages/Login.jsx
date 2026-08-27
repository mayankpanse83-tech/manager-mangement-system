import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaHeadset,
  FaTimes,
} from "react-icons/fa";

import "./Login.css";


function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("employee");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const [showForgot, setShowForgot] = useState(false);
  const [showHR, setShowHR] = useState(false);

  const [language, setLanguage] = useState("English");


  /* =====================================================
     LOGIN
  ===================================================== */

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter your email or employee ID.");
      return;
    }

    if (!password.trim()) {
      setMessage("Please enter your password.");
      return;
    }

    /* REMOVE OLD ROLE */
    sessionStorage.removeItem("userRole");
    localStorage.removeItem("userRole");

    /* SAVE SELECTED ROLE */
    const selectedRole =
      role === "manager" ? "manager" : "employee";

    sessionStorage.setItem("userRole", selectedRole);
    localStorage.setItem("userRole", selectedRole);

    /* LOGIN STATUS */
    sessionStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isLoggedIn", "true");

    sessionStorage.setItem("loggedInUser", email.trim());
    localStorage.setItem("loggedInUser", email.trim());

    setMessage(
      selectedRole === "manager"
        ? "Manager login successful!"
        : "Employee login successful!"
    );

    /* GO TO SAME DASHBOARD URL */
    setTimeout(() => {
      window.location.replace("/dashboard");
    }, 300);
  };


  /* =====================================================
     UI
  ===================================================== */

  return (
    <div className="login-page">

      {/* ================= LEFT ================= */}

      <section className="login-left">

        <div className="left-content">

          <div className="brand">
            <div className="brand-logo">W</div>
            <span>WorkForce</span>
          </div>

          <div className="system-badge">
            Employee Management System
          </div>

          <h1>
            Manage your people.
            <br />
            Empower your <span>workforce.</span>
          </h1>

          <p className="description">
            A smarter workspace for attendance, tasks, leave,
            <br />
            payroll and performance management.
          </p>

          <div className="features">

            <Feature
              icon={<FaShieldAlt />}
              title="Secure & Private"
              text="Your data is encrypted and always protected"
            />

            <Feature
              icon={<FaUsers />}
              title="One Centralized Workspace"
              text="Everything your team needs, in one place"
            />

            <Feature
              icon={<FaChartLine />}
              title="Built for Modern Teams"
              text="Powerful tools to boost productivity"
            />

          </div>

          <div className="illustration">

            <div className="chart-card">
              <div className="chart-circle"></div>

              <div className="chart-lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="person person-one">
              <div className="head"></div>
              <div className="body"></div>
            </div>

            <div className="person person-two">
              <div className="head"></div>
              <div className="body"></div>
            </div>

            <div className="person person-three">
              <div className="head"></div>
              <div className="body"></div>
            </div>

            <div className="desk"></div>

            <div className="laptop laptop-one"></div>
            <div className="laptop laptop-two"></div>

          </div>

          <div className="trusted">
            <FaShieldAlt />

            <span>
              Trusted by organizations to simplify HR operations
              and empower employees.
            </span>
          </div>

        </div>

      </section>


      {/* ================= RIGHT ================= */}

      <section className="login-right">

        <div className="language-wrapper">

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-select"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>

        </div>


        <div className="login-card">

          <div className="lock-circle">
            <FaLock />
          </div>

          <h2>
            Welcome Back! 👋
          </h2>

          <p className="login-subtitle">
            Sign in to continue to your workspace
          </p>


          <form onSubmit={handleLogin}>

            {/* ROLE */}

            <div className="input-group">

              <label>Select Role</label>

              <div className="input-box role-input-box">

                <select
                  className="role-select"
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value)
                  }
                >

                  <option value="employee">
                    Employee
                  </option>

                  <option value="manager">
                    Manager
                  </option>

                </select>

              </div>
            </div>


            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email or Employee ID
              </label>

              <div className="input-box">

                <FaEnvelope />

                <input
                  type="text"
                  placeholder="Enter your email or employee ID"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  autoComplete="username"
                />

              </div>
            </div>


            {/* PASSWORD */}

            <div className="input-group">

              <label>Password</label>

              <div className="input-box">

                <FaLock />

                <input
                  type={
                    passwordVisible
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="eye-button"
                  onClick={() =>
                    setPasswordVisible(
                      !passwordVisible
                    )
                  }
                >
                  {passwordVisible ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>
            </div>


            {/* OPTIONS */}

            <div className="login-options">

              <label className="remember">

                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) =>
                    setRememberMe(e.target.checked)
                  }
                />

                <span>Remember me</span>

              </label>


              <button
                type="button"
                className="forgot-btn"
                onClick={() => setShowForgot(true)}
              >
                Forgot password?
              </button>

            </div>


            {/* MESSAGE */}

            {message && (
              <div className="login-message">
                {message}
              </div>
            )}


            {/* SIGN IN */}

            <button
              type="submit"
              className="signin-btn"
            >
              <span>Sign In</span>
              <FaArrowRight />
            </button>

          </form>


          {/* OR */}

          <div className="or-divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>


          {/* SECURE ACCESS */}

          <div className="secure-box">

            <div className="secure-icon">
              <FaShieldAlt />
            </div>

            <div>

              <strong>Secure Access</strong>

              <p>
                Your information is safe with us.
                We use industry-standard security
                to protect your data.
              </p>

            </div>

          </div>

        </div>


        {/* CONTACT HR */}

        <div className="access-help">

          <p>
            Having trouble accessing your account?
          </p>

          <button
            type="button"
            onClick={() => setShowHR(true)}
          >
            <FaHeadset />
            Contact HR
          </button>

        </div>


        {/* FOOTER */}

        <div className="login-footer">
          © 2026 WorkForce EMS. All rights reserved.
        </div>

      </section>


      {/* ================= FORGOT PASSWORD ================= */}

      {showForgot && (
        <div
          className="modal-overlay"
          onClick={() => setShowForgot(false)}
        >

          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={() => setShowForgot(false)}
            >
              <FaTimes />
            </button>

            <div className="modal-icon">
              <FaLock />
            </div>

            <h2>
              Forgot Password?
            </h2>

            <p>
              Enter your registered email address
              or employee ID and HR will help
              you reset your password.
            </p>

            <input
              className="modal-input"
              placeholder="Email or Employee ID"
            />

            <button
              type="button"
              className="modal-submit"
              onClick={() => {
                setShowForgot(false);

                setMessage(
                  "Password reset request submitted successfully."
                );
              }}
            >
              Send Reset Request
            </button>

          </div>

        </div>
      )}


      {/* ================= HR ================= */}

      {showHR && (
        <div
          className="modal-overlay"
          onClick={() => setShowHR(false)}
        >

          <div
            className="modal-box hr-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="modal-close"
              onClick={() => setShowHR(false)}
            >
              <FaTimes />
            </button>

            <div className="modal-icon">
              <FaHeadset />
            </div>

            <h2>
              Contact HR
            </h2>

            <p>
              Our HR team can help you with
              account access and password issues.
            </p>

            <div className="hr-details">

              <div>
                <strong>Email</strong>
                <span>hr@company.com</span>
              </div>

              <div>
                <strong>Phone</strong>
                <span>+91 98765 00000</span>
              </div>

              <div>
                <strong>Working Hours</strong>
                <span>10:00 AM - 6:00 PM</span>
              </div>

            </div>

            <button
              type="button"
              className="modal-submit"
              onClick={() => setShowHR(false)}
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}


/* =====================================================
   FEATURE
===================================================== */

function Feature({ icon, title, text }) {
  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>

    </div>
  );
}


export default Login;