import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountActivation.css";

import {
  FaLock,
  FaCheckCircle,
  FaArrowRight,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";


function AccountActivation() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [message, setMessage] = useState("");

  const handleActivate = (e) => {
    e.preventDefault();

    if (!password) {
      setMessage("Please create a password.");
      return;
    }

    if (password.length < 8) {
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("Account activated successfully!");

    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="activation-page">

      <div className="activation-logo">
        <div className="activation-logo-icon">W</div>

        <div>
          <h2>WorkForce</h2>
          <small>Employee Management System</small>
        </div>
      </div>

      <div className="activation-card">

        {/* Steps */}
        <div className="steps">

          <div className="step active">
            <div>
              <FaCheckCircle />
            </div>
            <span>Verify Invitation</span>
          </div>

          <div className="line"></div>

          <div className="step active">
            <div>
              <FaLock />
            </div>
            <span>Set Password</span>
          </div>

          <div className="line"></div>

          <div className="step">
            <div>
              <FaCheckCircle />
            </div>
            <span>Accept Policies</span>
          </div>

          <div className="line"></div>

          <div className="step">
            <div>
              <FaCheckCircle />
            </div>
            <span>Account Activated</span>
          </div>

        </div>

        <h1>Complete Your Account 👋</h1>

        <p className="subtitle">
          Your employee account is almost ready.
        </p>

        {/* Success Box */}
        <div className="invitation-box">
          <FaCheckCircle />

          <div>
            <strong>Invitation Verified Successfully</strong>
            <p>You're invited to join our organization.</p>
          </div>
        </div>

        {/* Employee Details */}
        <div className="employee-info">

          <div>
            <span>Full Name</span>
            <strong>Mayank Panse</strong>
          </div>

          <div>
            <span>Employee ID</span>
            <strong>EMP-001</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>Design</strong>
          </div>

          <div>
            <span>Designation</span>
            <strong>UI/UX Designer</strong>
          </div>

          <div>
            <span>Email</span>
            <strong>mayank@company.com</strong>
          </div>

        </div>

        <form onSubmit={handleActivate}>

          {/* Password */}
          <label>Create Password</label>

          <div className="activation-input">

            <FaLock />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {/* Confirm Password */}
          <label>Confirm Password</label>

          <div className="activation-input">

            <FaLock />

            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </button>

          </div>

          {message && (
            <div className="activation-message">
              {message}
            </div>
          )}

          <label className="check-row">
            <input type="checkbox" required />
            I agree to the Terms & Conditions
          </label>

          <label className="check-row">
            <input type="checkbox" required />
            I acknowledge the Company Privacy Policy
          </label>

          <button
            type="submit"
            className="activate-btn"
          >
            <FaLock />
            Activate Account
            <FaArrowRight />
          </button>

        </form>

        <div className="already">
          Already activated?

          <button
            onClick={() => navigate("/login")}
          >
            Sign in to your account →
          </button>
        </div>

      </div>

      <div className="activation-footer">
        © 2026 WorkForce EMS. All rights reserved.
      </div>

    </div>
  );
}

export default AccountActivation;