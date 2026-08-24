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
  const [role, setRole] = useState("employee");
  const navigate = useNavigate();

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

  // Selected role save
  localStorage.setItem("userRole", role);

  // Login status
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("loggedInUser", email.trim());

  // Success message
  setMessage(
    role === "manager"
      ? "Manager login successful!"
      : "Employee login successful!"
  );

  // Direct dashboard redirect
  navigate("/dashboard", { replace: true });
};


  return (
    <div className="login-page">

      {/* =================================================
          LEFT SECTION
      ================================================= */}

      <section className="login-left">

        <div className="left-content">

          {/* LOGO */}

          <div className="brand">

            <div className="brand-logo">
              W
            </div>

            <span>
              WorkForce
            </span>

          </div>


          {/* BADGE */}

          <div className="system-badge">
            Employee Management System
          </div>


          {/* HEADING */}

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


          {/* FEATURES */}

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


          {/* ILLUSTRATION */}

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


          {/* TRUSTED */}

          <div className="trusted">

            <FaShieldAlt />

            <span>
              Trusted by organizations to simplify HR operations
              and empower employees.
            </span>

          </div>

        </div>

      </section>


      {/* =================================================
          RIGHT SECTION
      ================================================= */}

      <section className="login-right">

        {/* LANGUAGE */}

        <div className="language-wrapper">

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="language-select"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>

        </div>


        {/* LOGIN CARD */}

        <div className="login-card">

          {/* LOCK */}

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
            <div className="input-group role-group">
  <label>Select Role</label>

  <div className="input-box role-input-box">

    <select
      className="role-select"
      value={role}
      onChange={(e) => setRole(e.target.value)}
    >
      <option value="employee">Employee</option>
      <option value="manager">Manager</option>
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

              <label>
                Password
              </label>

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
                    setRememberMe(
                      e.target.checked
                    )
                  }
                />

                <span>
                  Remember me
                </span>

              </label>


              <button
                type="button"
                className="forgot-btn"
                onClick={() =>
                  setShowForgot(true)
                }
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
              <span>
                Sign In
              </span>

              <FaArrowRight />
            </button>

          </form>


          {/* OR */}

          <div className="or-divider">

            <span></span>

            <p>or</p>

            <span></span>

          </div>


          {/* SECURE */}

          <div className="secure-box">

            <div className="secure-icon">
              <FaShieldAlt />
            </div>

            <div>

              <strong>
                Secure Access
              </strong>

              <p>
                Your information is safe with us.
                We use industry-standard security
                to protect your data.
              </p>

            </div>

          </div>

        </div>


        {/* HR */}

        <div className="access-help">

          <p>
            Having trouble accessing your account?
          </p>

          <button
            onClick={() =>
              setShowHR(true)
            }
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


      {/* =================================================
          FORGOT PASSWORD MODAL
      ================================================= */}

      {showForgot && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowForgot(false)
          }
        >

          <div
            className="modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowForgot(false)
              }
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


      {/* =================================================
          HR MODAL
      ================================================= */}

      {showHR && (

        <div
          className="modal-overlay"
          onClick={() =>
            setShowHR(false)
          }
        >

          <div
            className="modal-box hr-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setShowHR(false)
              }
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
                <span>
                  hr@company.com
                </span>
              </div>

              <div>
                <strong>Phone</strong>
                <span>
                  +91 98765 00000
                </span>
              </div>

              <div>
                <strong>Working Hours</strong>
                <span>
                  10:00 AM - 6:00 PM
                </span>
              </div>

            </div>


            <button
              className="modal-submit"
              onClick={() =>
                setShowHR(false)
              }
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
   FEATURE COMPONENT
===================================================== */

function Feature({
  icon,
  title,
  text,
}) {
  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}


export default Login;