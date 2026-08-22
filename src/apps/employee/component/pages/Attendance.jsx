import React, { useEffect, useState, useRef } from "react";
import "./Attendance.css";

function Attendance() {
  const [selectedTopDate, setSelectedTopDate] = useState(
  new Date().toISOString().split("T")[0]
);
const formatTopDate = (date) => {
  return new Date(date + "T00:00:00").toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
  // =========================
  // TODAY
  // =========================

  const today = new Date();

  // =========================
  // CALENDAR STATES
  // =========================

  const [currentMonth, setCurrentMonth] = useState(
    today.getMonth()
  );

  const [currentYear, setCurrentYear] = useState(
    today.getFullYear()
  );

  const [selectedDate, setSelectedDate] = useState(
    today.getDate()
  );

  // =========================
  // ATTENDANCE STATES
  // =========================

  const [checkInTime, setCheckInTime] = useState(
    localStorage.getItem("checkInTime") || ""
  );

  const [checkOutTime, setCheckOutTime] = useState(
    localStorage.getItem("checkOutTime") || ""
  );

  const [workingSeconds, setWorkingSeconds] = useState(
    Number(localStorage.getItem("workingSeconds")) || 0
  );
  const [attendanceSessions, setAttendanceSessions] = useState(
  JSON.parse(localStorage.getItem("attendanceSessions")) || []
);

  // =========================
  // MONTH NAMES
  // =========================

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // =========================
  // DAYS CALCULATION
  // =========================

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  // =========================
  // DATE STATUS
  // =========================

  const getDateStatus = (day) => {
    // August 2026 ke example statuses

    if (
      currentYear === 2026 &&
      currentMonth === 7
    ) {
      if (
        day === 11 ||
        day === 12 ||
        day === 16
      ) {
        return "leave";
      }

      if (day === 6) {
        return "absent";
      }
    }

    return "present";
  };

  // =========================
  // PREVIOUS MONTH
  // =========================

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }

    setSelectedDate(1);
  };

  // =========================
  // NEXT MONTH
  // =========================

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }

    setSelectedDate(1);
  };

  // =========================
  // LIVE WORKING TIMER
  // =========================

  useEffect(() => {
    if (!checkInTime || checkOutTime) {
      return;
    }

    const timer = setInterval(() => {
      const start = new Date(checkInTime).getTime();
      const now = new Date().getTime();

      const seconds = Math.floor(
        (now - start) / 1000
      );

      setWorkingSeconds(seconds);

      localStorage.setItem(
        "workingSeconds",
        seconds
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [checkInTime, checkOutTime]);

  // =========================
  // FORMAT TIME
  // =========================

  const formatTime = (date) => {
    if (!date) {
      return "--:--";
    }

    return new Date(date).toLocaleTimeString(
      "en-IN",
      {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }
    );
  };

  // =========================
  // FORMAT WORKING HOURS
  // =========================

  const formatWorkingTime = (seconds) => {
    const hours = Math.floor(
      seconds / 3600
    );

    const minutes = Math.floor(
      (seconds % 3600) / 60
    );

    const secs = seconds % 60;

    return `${String(hours).padStart(
      2,
      "0"
    )}h ${String(minutes).padStart(
      2,
      "0"
    )}m ${String(secs).padStart(
      2,
      "0"
    )}s`;
  };

  // =========================
// CHECK IN
// =========================

const handleCheckIn = () => {
  if (checkInTime && !checkOutTime) {
    alert("You are already checked in!");
    return;
  }

  const now = new Date().toISOString();

  setCheckInTime(now);
  setCheckOutTime("");
  setWorkingSeconds(0);

  localStorage.setItem("checkInTime", now);
  localStorage.removeItem("checkOutTime");
  localStorage.setItem("workingSeconds", "0");
};


// =========================
// CHECK OUT
// =========================

const handleCheckOut = () => {
  if (!checkInTime || checkOutTime) {
    alert("Please Check In first!");
    return;
  }

  const now = new Date().toISOString();

  const start = new Date(checkInTime).getTime();
  const end = new Date(now).getTime();

  const totalSeconds = Math.floor((end - start) / 1000);

  const newSession = {
    checkIn: checkInTime,
    checkOut: now,
    seconds: totalSeconds,
  };

  const updatedSessions = [
    ...attendanceSessions,
    newSession,
  ];

  setAttendanceSessions(updatedSessions);

  localStorage.setItem(
    "attendanceSessions",
    JSON.stringify(updatedSessions)
  );

  setCheckOutTime(now);
  setWorkingSeconds(totalSeconds);

  localStorage.setItem("checkOutTime", now);
  localStorage.setItem(
    "workingSeconds",
    totalSeconds
  );
};


// =========================
// STATUS
// =========================

const getStatusText = () => {

  if (checkInTime && !checkOutTime) {
    return "Working";
  }

  if (checkInTime && checkOutTime) {
    return "Present";
  }

  return "Not Checked In";
};

  return (
    <div className="attendance-page">

      {/* ================= HEADER ================= */}

      <div className="attendance-header">

        <div>
          <h1>Attendance</h1>

          <p>
            Track your attendance and working hours
          </p>
        </div>

        <div className="header-actions">

          <div className="date-picker-wrapper">

  <button
    className="today-btn"
    onClick={() =>
      document
        .getElementById("attendance-date-picker")
        .showPicker()
    }
  >
    📅 {formatTopDate(selectedTopDate)}
  </button>

  <input
    id="attendance-date-picker"
    type="date"
    value={selectedTopDate}
    onChange={(e) => {
      setSelectedTopDate(e.target.value);
    }}
    className="hidden-date-input"
  />

</div>

          <button className="notification-btn">
            🔔
          </button>

        </div>

      </div>


      {/* ================= CARDS ================= */}

      <div className="attendance-cards">

        {/* STATUS */}

        <div className="attendance-card">

          <div className="card-icon blue">
            🕐
          </div>

          <div>
            <span>Today's Status</span>

            <strong>
              {getStatusText()}
            </strong>

            <small>
              {today.toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </small>
          </div>

        </div>

      


        {/* WORKING HOURS */}

        <div className="attendance-card">

          <div className="card-icon purple">
            ⏱
          </div>

          <div>
            <span>Working Hours</span>

            <strong>
              {formatWorkingTime(
                workingSeconds
              )}
            </strong>

            <small>
              {checkInTime &&
              !checkOutTime
                ? "Timer Running..."
                : "Today's working time"}
            </small>
          </div>

        </div>

      </div>


      {/* ================= CHECK SECTION ================= */}

      <div className="check-section">

        <div>

          <h2>
            Today's Attendance
          </h2>

          <p>

            {!checkInTime &&
              "You have not checked in yet."}

            {checkInTime &&
              !checkOutTime &&
              "You are currently working. Timer is running."}

            {checkInTime &&
              checkOutTime &&
              "Today's attendance has been completed."}

          </p>

        </div>


        <div className="check-buttons">

  <button
    className="check-in"
    onClick={handleCheckIn}
    disabled={!!checkInTime && !checkOutTime}
  >
    ✓ Check In
  </button>

  <button
    className="check-out"
    onClick={handleCheckOut}
    disabled={!checkInTime || !!checkOutTime}
  >
    ↪ Check Out
  </button>

</div>
      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="attendance-grid">


        {/* ================= WEEKLY ================= */}

        <div className="weekly-box">

          <div className="box-header">

            <h2>
              Weekly Working Hours
            </h2>

            <select>
              <option>
                This Week
              </option>

              <option>
                Last Week
              </option>

              <option>
                This Month
              </option>
            </select>

          </div>


          <div className="chart">

            {[
              ["Mon", 70],
              ["Tue", 85],
              ["Wed", 75],
              ["Thu", 92],
              ["Fri", 80],
              ["Sat", 60],
              ["Sun", 0],
            ].map(
              ([day, value]) => (

                <div
                  className="bar-column"
                  key={day}
                >

                  <div className="bar-background">

                    <div
                      className="bar"
                      style={{
                        height: `${value}%`,
                      }}
                    />

                  </div>

                  <span>
                    {day}
                  </span>

                </div>

              )
            )}

          </div>

        </div>


        {/* ================= CALENDAR ================= */}

<div className="calendar-box">

  <div className="calendar-title-row">

    <button
      className="calendar-arrow"
      onClick={previousMonth}
    >
      ‹
    </button>

    <h2>
      {monthNames[currentMonth]} {currentYear}
    </h2>

    <button
      className="calendar-arrow"
      onClick={nextMonth}
    >
      ›
    </button>

  </div>


  <div className="calendar-weekdays">
    <span>Sun</span>
    <span>Mon</span>
    <span>Tue</span>
    <span>Wed</span>
    <span>Thu</span>
    <span>Fri</span>
    <span>Sat</span>
  </div>


  <div className="calendar-grid">

    {/* EMPTY DAYS */}

    {Array.from({ length: firstDay }).map((_, index) => (
      <div
        key={`empty-${index}`}
        className="calendar-empty"
      />
    ))}


    {/* DATES */}

    {Array.from({ length: daysInMonth }).map((_, index) => {

      const day = index + 1;

      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();

      const status = getDateStatus(day);

      return (
        <button
          key={day}
          type="button"
          className={`calendar-date ${status} ${
            selectedDate === day ? "selected" : ""
          } ${isToday ? "today" : ""}`}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </button>
      );
    })}

  </div>


  <div className="calendar-selected">

    Selected Date:

    <strong>
      {selectedDate} {monthNames[currentMonth]} {currentYear}
    </strong>

  </div>


  <div className="calendar-legend">

    <div>
      <span className="dot present"></span>
      Present
    </div>

    <div>
      <span className="dot leave"></span>
      Leave
    </div>

    <div>
      <span className="dot absent"></span>
      Absent
    </div>

  </div>

</div>
</div>


      {/* ================= LOWER GRID ================= */}

      <div className="lower-grid">


        {/* ================= HISTORY ================= */}

        <div className="history-box">

          <div className="box-header">

            <h2>
              Attendance History
            </h2>

            <button className="view-btn">
              View All
            </button>

          </div>


          <table>

            <thead>

              <tr>
                <th>Date</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Hours</th>
                <th>Status</th>
              </tr>

            </thead>


            
              <tbody>
  {attendanceSessions.length > 0 ? (
    attendanceSessions.map((session, index) => (
      <tr key={index}>

        <td>
          {new Date(session.checkIn).toLocaleDateString(
            "en-IN",
            {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }
          )}
        </td>

        <td>
          <strong>
            {formatTime(session.checkIn)}
          </strong>
        </td>

        <td>
          <strong>
            {formatTime(session.checkOut)}
          </strong>
        </td>

        <td>
          {formatWorkingTime(session.seconds)}
        </td>

        <td>
          <span className="status present">
            Present
          </span>
        </td>

      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5">
        No attendance records yet
      </td>
    </tr>
  )}
</tbody>

              

          </table>

        </div>


        {/* ================= TIMELINE ================= */}

        <div className="timeline-box">

          <h2>
            Today's Timeline
          </h2>


          <div className="timeline">

            <div className="timeline-item">

              <span className="timeline-dot green-dot" />

              <div>

                <strong>
                  {formatTime(
                    checkInTime
                  )}
                </strong>

                <p>
                  Checked In
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot blue-dot" />

              <div>

                <strong>
                  01:00 PM
                </strong>

                <p>
                  Lunch Break
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot orange-dot" />

              <div>

                <strong>
                  01:45 PM
                </strong>

                <p>
                  Back to Work
                </p>

              </div>

            </div>


            <div className="timeline-item">

              <span className="timeline-dot red-dot" />

              <div>

                <strong>
                  {formatTime(
                    checkOutTime
                  )}
                </strong>

                <p>
                  Checked Out
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Attendance;