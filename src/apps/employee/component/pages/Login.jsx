import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLock,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");

    if (!email.trim()) {
      setMessage("Please enter your email or Employee ID.");
      return;
    }

    if (!password.trim()) {
      setMessage("Please enter your password.");
      return;
    }

    const selectedRole =
      role === "manager" ? "manager" : "employee";

    sessionStorage.setItem("userRole", selectedRole);
    localStorage.setItem("userRole", selectedRole);

    sessionStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isLoggedIn", "true");

    sessionStorage.setItem("loggedInUser", email.trim());
    localStorage.setItem("loggedInUser", email.trim());

    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <h2>Welcome Back! 👋</h2>

        <p className="login-subtitle">
          Sign in to continue to your workspace
        </p>

        <form onSubmit={handleLogin}>

          {/* ROLE */}

          <div className="input-group">
            <label>Select Role</label>

            <div className="input-box">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: "100%",
                  height: "44px",
                  border: "none",
                  outline: "none",
                  background: "#fff",
                  color: "#111827",
                  fontSize: "14px",
                }}
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
            <label>Email or Employee ID</label>

            <div className="input-box">

              <FaEnvelope />

              <input
                type="text"
                placeholder="Enter your email or employee ID"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
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
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter your password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="eye-button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>
          </div>


          {/* MESSAGE */}

          {message && (
            <div className="login-message">
              {message}
            </div>
          )}


          {/* LOGIN */}

          <button
            type="submit"
            className="signin-btn"
          >
            <span>Sign In</span>
            <FaArrowRight />
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;