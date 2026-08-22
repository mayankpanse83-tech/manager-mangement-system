import React, { useState, useEffect, useRef } from "react";
import "./DailyUpdates.css";

import {
  FaCheckCircle,
  FaClock,
  FaChartLine,
  FaExclamationCircle,
  FaCalendarAlt,
  FaPaperPlane,
  FaSave,
  FaPlus,
  FaTrash,
  FaPaperclip,
  FaTimes,
  FaChevronRight,
  FaFire,
  FaFileAlt,
  FaUserCircle,
} from "react-icons/fa";

function DailyUpdates() {

  /* ================= STATES ================= */

  const editorRef = useRef(null);

const formatText = (command, value = null) => {
  editorRef.current?.focus();
  document.execCommand(command, false, value);
};

const addLink = () => {
  const url = prompt("Enter URL:");

  if (url) {
    formatText("createLink", url);
  }
};
  const [summary, setSummary] = useState("");
  const [selectedDate, setSelectedDate] = useState(
  new Date("2026-08-09")
);

const [showCalendar, setShowCalendar] = useState(false);

  const [completedTasks, setCompletedTasks] = useState([
    "Dashboard UI design completed",
    "Attendance module testing",
    "Fixed bug in leave application",
  ]);

  const [pendingTasks, setPendingTasks] = useState([
    "Reports module UI",
    "API integration with backend",
  ]);

  const [tomorrowPlan, setTomorrowPlan] = useState(
    "• Complete Reports module UI\n• Integrate Reports APIs\n• Perform module testing"
  );

  const [issues, setIssues] = useState(
    "• Waiting for Reports API\n• Need clarification on data structure\n• No other blockers"
  );

  const [attachments, setAttachments] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  /* Popup states */

  const [popup, setPopup] = useState({
    show: false,
    title: "",
    message: "",
    type: "success",
  });

  const [taskPopup, setTaskPopup] = useState({
    show: false,
    type: "",
  });

  const [taskInput, setTaskInput] = useState("");

  /* ================= POPUP ================= */

  const showPopup = (title, message, type = "success") => {
    setPopup({
      show: true,
      title,
      message,
      type,
    });
  };

  const closePopup = () => {
    setPopup({
      show: false,
      title: "",
      message: "",
      type: "success",
    });
  };

  /* ================= ADD TASK ================= */

  const openTaskPopup = (type) => {
    setTaskInput("");
    setTaskPopup({
      show: true,
      type,
    });
  };

  const closeTaskPopup = () => {
    setTaskPopup({
      show: false,
      type: "",
    });
    setTaskInput("");
  };

  const addTask = () => {

    if (taskInput.trim() === "") {
      showPopup(
        "Task Required",
        "Please enter a task first.",
        "error"
      );
      return;
    }

    if (taskPopup.type === "completed") {

      setCompletedTasks([
        ...completedTasks,
        taskInput.trim(),
      ]);

      showPopup(
        "Task Added",
        "Completed task added successfully."
      );

    } else {

      setPendingTasks([
        ...pendingTasks,
        taskInput.trim(),
      ]);

      showPopup(
        "Task Added",
        "Pending task added successfully."
      );
    }

    closeTaskPopup();
  };

  /* ================= DELETE TASK ================= */

  const deleteCompletedTask = (index) => {

    setCompletedTasks(
      completedTasks.filter((_, i) => i !== index)
    );

    showPopup(
      "Task Deleted",
      "Completed task has been removed."
    );
  };

  const deletePendingTask = (index) => {

    setPendingTasks(
      pendingTasks.filter((_, i) => i !== index)
    );

    showPopup(
      "Task Deleted",
      "Pending task has been removed."
    );
  };

  /* ================= FILE UPLOAD ================= */

  const handleFiles = (e) => {

    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    setAttachments([
      ...attachments,
      ...files,
    ]);

    showPopup(
      "File Added",
      `${files.length} file(s) added successfully.`
    );

    e.target.value = "";
  };

  /* ================= REMOVE FILE ================= */

  const removeAttachment = (index) => {

    setAttachments(
      attachments.filter((_, i) => i !== index)
    );

    showPopup(
      "File Removed",
      "Attachment removed successfully."
    );
  };

  /* ================= SAVE DRAFT ================= */

  const handleSaveDraft = () => {

    showPopup(
      "Draft Saved",
      "Your daily update has been saved as a draft."
    );
  };

  /* ================= SUBMIT UPDATE ================= */

  const handleSubmitUpdate = () => {

    if (summary.trim() === "") {

      showPopup(
        "Summary Required",
        "Please write today's work summary before submitting.",
        "error"
      );

      return;
    }

    setSubmitted(true);

    showPopup(
      "Update Submitted",
      "Your daily update has been submitted successfully."
    );
  };

  /* ================= VIEW ALL ================= */

  const handleViewAll = () => {

    showPopup(
      "Recent Submissions",
      "07 Aug 2026 - Submitted\n06 Aug 2026 - Submitted\n05 Aug 2026 - Draft\n04 Aug 2026 - Submitted"
    );
  };

  /* ================= RENDER ================= */

  return (
    <div className="daily-page">

      {/* ================= HEADER ================= */}

      <div className="daily-header">

        <div>
          <h1>Daily Updates</h1>

          <p>
            Submit your daily work progress and keep your manager updated
          </p>
        </div>

       <div className="date-picker-wrapper">

  <button
    className="daily-date"
    onClick={() => setShowCalendar(!showCalendar)}
  >
    <FaCalendarAlt />

    <span>
      {selectedDate.toLocaleDateString("en-GB", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })}
    </span>

    <span className="date-arrow">
      ˅
    </span>
  </button>


  {showCalendar && (
    <div className="calendar-popup">

      <div className="calendar-popup-header">

        <button
          onClick={(e) => {
            e.stopPropagation();

            const date = new Date(selectedDate);
            date.setMonth(date.getMonth() - 1);
            setSelectedDate(date);
          }}
        >
          ‹
        </button>

        <strong>
          {selectedDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </strong>

        <button
          onClick={(e) => {
            e.stopPropagation();

            const date = new Date(selectedDate);
            date.setMonth(date.getMonth() + 1);
            setSelectedDate(date);
          }}
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


      <div className="calendar-days">

        {Array.from(
          {
            length: new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth(),
              1
            ).getDay(),
          },
          (_, index) => (
            <span key={"empty-" + index}></span>
          )
        )}


        {Array.from(
          {
            length: new Date(
              selectedDate.getFullYear(),
              selectedDate.getMonth() + 1,
              0
            ).getDate(),
          },
          (_, index) => {

            const day = index + 1;

            const isSelected =
              day === selectedDate.getDate();

            return (
              <button
                key={day}
                className={
                  isSelected
                    ? "calendar-selected"
                    : ""
                }
                onClick={(e) => {
                  e.stopPropagation();

                  const newDate = new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    day
                  );

                  setSelectedDate(newDate);
                  setShowCalendar(false);
                }}
              >
                {day}
              </button>
            );
          }
        )}

      </div>

    </div>
  )}

</div>
      </div>


      {/* ================= TOP STATS ================= */}

      <div className="daily-stats">

        {/* Completed */}

        <div className="daily-stat-card">

          <div className="stat-icon green">
            <FaCheckCircle />
          </div>

          <div>

            <p>Completed Tasks</p>

            <h2>
              {completedTasks.length + 3}
            </h2>

            <small>
              ↑ 2 from yesterday
            </small>

          </div>

        </div>


        {/* Pending */}

        <div className="daily-stat-card">

          <div className="stat-icon orange">
            <FaClock />
          </div>

          <div>

            <p>Pending Tasks</p>

            <h2>
              {pendingTasks.length}
            </h2>

            <small>
              ↓ 1 from yesterday
            </small>

          </div>

        </div>


        {/* Working Hours */}

        <div className="daily-stat-card">

          <div className="stat-icon purple">
            <FaClock />
          </div>

          <div>

            <p>Working Hours</p>

            <h2>
              8h 15m
            </h2>

            <small>
              ↑ 45m from yesterday
            </small>

          </div>

        </div>


        {/* Progress */}

        <div className="daily-stat-card">

          <div className="stat-icon blue">
            <FaChartLine />
          </div>

          <div className="progress-stat">

            <p>Today's Progress</p>

            <h2>
              80%
            </h2>

            <div className="small-progress">

              <div
                style={{
                  width: "80%",
                }}
              ></div>

            </div>

          </div>

        </div>


        {/* Status */}

        <div className="daily-stat-card status-card">

          <div className="stat-icon red">
            <FaExclamationCircle />
          </div>

          <div>

            <p>Status</p>

            <h2
              className={
                submitted
                  ? "submitted-text"
                  : ""
              }
            >
              {submitted
                ? "Submitted"
                : "Not Submitted"}
            </h2>

            <small>
              {submitted
                ? "Just submitted"
                : "Last submitted: Yesterday"}
            </small>

          </div>

        </div>

      </div>


      {/* ================= MAIN LAYOUT ================= */}

      <div className="daily-layout">

        {/* ================= LEFT SIDE ================= */}

        <div className="daily-main">


          {/* ================= WORK SUMMARY ================= */}

          <div className="daily-card summary-editor">

            <div className="section-heading">

              <div className="section-number purple-bg">
                1.
              </div>

              <div>

                <h3>
                  Today's Work Summary
                </h3>

                <p>
                  Briefly describe what you worked on today
                </p>

              </div>

            </div>

<div className="editor-toolbar">

  {/* Text Style */}
  <select
    onChange={(e) => {
      formatText("formatBlock", e.target.value);
    }}
  >
    <option value="p">Normal</option>
    <option value="h2">Heading</option>
    <option value="h3">Sub Heading</option>
  </select>

  {/* Bold */}
  <button
    type="button"
    title="Bold"
    onClick={() => formatText("bold")}
  >
    <b>B</b>
  </button>

  {/* Italic */}
  <button
    type="button"
    title="Italic"
    onClick={() => formatText("italic")}
  >
    <i>I</i>
  </button>

  {/* Underline */}
  <button
    type="button"
    title="Underline"
    onClick={() => formatText("underline")}
  >
    <u>U</u>
  </button>

  <span className="toolbar-divider"></span>

  {/* Align Left */}
  <button
    type="button"
    title="Align Left"
    onClick={() => formatText("justifyLeft")}
  >
    ☰
  </button>

  {/* Bullet List */}
  <button
    type="button"
    title="Bullet List"
    onClick={() => formatText("insertUnorderedList")}
  >
    ☷
  </button>

  {/* Number List */}
  <button
    type="button"
    title="Number List"
    onClick={() => formatText("insertOrderedList")}
  >
    ≡
  </button>

  {/* Link */}
  <button
    type="button"
    title="Add Link"
    onClick={addLink}
  >
    🔗
  </button>

</div>


{/* Work Summary Editor */}

<div
  ref={editorRef}
  className="work-editor"
  contentEditable="true"
  suppressContentEditableWarning={true}
  data-placeholder="Write your work summary here..."
  onInput={(e) => {
    setSummary(e.currentTarget.innerHTML);
  }}
></div>

<div className="character-count">
  {editorRef.current?.innerText?.length || 0} / 1000
</div>

          </div>


          {/* ================= COMPLETED + PENDING ================= */}

          <div className="task-columns">


            {/* COMPLETED */}

            <div className="daily-card task-box">

              <div className="task-box-header">

                <div className="section-heading">

                  <div className="section-number green-bg">
                    2.
                  </div>

                  <div>

                    <h3>
                      Completed Tasks
                    </h3>

                    <p>
                      Tasks you have completed today
                    </p>

                  </div>

                </div>


                <button
                  className="add-task-btn"
                  onClick={() =>
                    openTaskPopup("completed")
                  }
                >
                  <FaPlus />
                  Add Task
                </button>

              </div>


              <div className="task-list">

                {completedTasks.map(
                  (task, index) => (

                    <div
                      className="update-task completed-task"
                      key={index}
                    >

                      <FaCheckCircle />

                      <span>
                        {task}
                      </span>

                      <button
                        onClick={() =>
                          deleteCompletedTask(index)
                        }
                      >
                        <FaTrash />
                      </button>

                    </div>

                  )
                )}

              </div>


              <button
                className="add-another"
                onClick={() =>
                  openTaskPopup("completed")
                }
              >

                <FaPlus />

                Add another completed task

              </button>

            </div>


            {/* PENDING */}

            <div className="daily-card task-box">

              <div className="task-box-header">

                <div className="section-heading">

                  <div className="section-number red-bg">
                    3.
                  </div>

                  <div>

                    <h3>
                      Pending Tasks
                    </h3>

                    <p>
                      Tasks that are still in progress
                    </p>

                  </div>

                </div>


                <button
                  className="add-task-btn orange-btn"
                  onClick={() =>
                    openTaskPopup("pending")
                  }
                >

                  <FaPlus />

                  Add Task

                </button>

              </div>


              <div className="task-list">

                {pendingTasks.map(
                  (task, index) => (

                    <div
                      className="update-task pending-task"
                      key={index}
                    >

                      <span className="empty-circle"></span>

                      <span>
                        {task}
                      </span>

                      <button
                        onClick={() =>
                          deletePendingTask(index)
                        }
                      >

                        <FaTrash />

                      </button>

                    </div>

                  )
                )}

              </div>


              <button
                className="add-another pending-add"
                onClick={() =>
                  openTaskPopup("pending")
                }
              >

                <FaPlus />

                Add another pending task

              </button>

            </div>

          </div>


          {/* ================= TOMORROW + ISSUES ================= */}

          <div className="task-columns">


            {/* TOMORROW */}

            <div className="daily-card text-box">

              <div className="section-heading">

                <div className="section-number purple-bg">
                  4.
                </div>

                <div>

                  <h3>
                    Tomorrow's Plan
                  </h3>

                  <p>
                    What are your plans for tomorrow?
                  </p>

                </div>

              </div>


              <textarea
                value={tomorrowPlan}
                onChange={(e) =>
                  setTomorrowPlan(e.target.value)
                }
                maxLength={500}
              />

              <small className="text-limit">

                {tomorrowPlan.length} / 500

              </small>

            </div>


            {/* ISSUES */}

            <div className="daily-card text-box">

              <div className="section-heading">

                <div className="section-number red-bg">
                  5.
                </div>

                <div>

                  <h3>
                    Issues / Blockers
                  </h3>

                  <p>
                    Are you facing any issues or blockers?
                  </p>

                </div>

              </div>


              <textarea
                value={issues}
                onChange={(e) =>
                  setIssues(e.target.value)
                }
                maxLength={500}
              />

              <small className="text-limit">

                {issues.length} / 500

              </small>

            </div>

          </div>


          {/* ================= ATTACHMENTS ================= */}

          <div className="daily-card attachment-card">

            <div className="section-heading">

              <div className="section-number blue-bg">
                6.
              </div>

              <div>

                <h3>
                  Attachments <span>(Optional)</span>
                </h3>

                <p>
                  Add screenshots, documents or any other files
                </p>

              </div>

            </div>


            <label className="upload-box">

              <FaPaperclip />

              <div>

                <strong>
                  Drag & drop files here or click to upload
                </strong>

                <p>
                  JPG, PNG, PDF, DOC, ZIP (Max. 10MB)
                </p>

              </div>


              <input
                type="file"
                multiple
                onChange={handleFiles}
              />

            </label>


            {/* FILE LIST */}

            {attachments.length > 0 && (

              <div className="uploaded-files">

                {attachments.map(
                  (file, index) => (

                    <div
                      className="uploaded-file"
                      key={index}
                    >

                      <FaFileAlt />

                      <div>

                        <strong>
                          {file.name}
                        </strong>

                        <small>
                          {(file.size / 1024 / 1024).toFixed(1)}
                          {" "}MB
                        </small>

                      </div>

                      <button
                        onClick={() =>
                          removeAttachment(index)
                        }
                      >

                        <FaTimes />

                      </button>

                    </div>

                  )
                )}

              </div>

            )}

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="submit-area">

            <button
              className="save-btn"
              onClick={handleSaveDraft}
            >

              <FaSave />

              Save Draft

            </button>


            <button
              className="submit-btn"
              onClick={handleSubmitUpdate}
            >

              <FaPaperPlane />

              Submit Daily Update

            </button>

          </div>


          <p className="submit-note">

            Your update will be visible to your manager

          </p>

        </div>


        {/* ================= RIGHT SIDEBAR ================= */}

        <div className="daily-sidebar">


          {/* PROGRESS */}

          <div className="daily-card progress-card">

            <h3>
              Today's Progress
            </h3>


            <div className="progress-circle">

              <div>

                <strong>
                  80%
                </strong>

              </div>

            </div>


            <div className="progress-legend">

              <p>

                <span className="legend-dot green-dot"></span>

                Completed

                <b>
                  6
                </b>

              </p>


              <p>

                <span className="legend-dot blue-dot"></span>

                In Progress

                <b>
                  2
                </b>

              </p>


              <p>

                <span className="legend-dot red-dot"></span>

                Not Started

                <b>
                  1
                </b>

              </p>

            </div>


            <div className="great-progress">

              Great Progress!

            </div>


            <p className="keep-text">

              Keep up the good work! 🚀

            </p>

          </div>


          {/* STREAK */}

          <div className="daily-card streak-card">

            <h3>
              Your Streak
            </h3>

            <div className="streak-content">

              <FaFire />

              <div>

                <strong>
                  12 Days
                </strong>

                <p>
                  Keep your streak alive!
                </p>

              </div>

            </div>

          </div>


          {/* RECENT SUBMISSIONS */}

          <div className="daily-card submissions-card">

            <div className="side-card-header">

              <h3>
                Recent Submissions
              </h3>

              <button
                onClick={handleViewAll}
              >
                View All
              </button>

            </div>


            <div
              className="submission-item"
              onClick={() =>
                showPopup(
                  "Submission",
                  "07 Aug 2026 submission was submitted successfully."
                )
              }
            >

              <FaFileAlt />

              <div>

                <strong>
                  07 Aug 2026
                </strong>

                <span>
                  Submitted
                </span>

              </div>

              <small>
                08:45 PM
              </small>

              <FaChevronRight />

            </div>


            <div
              className="submission-item"
              onClick={() =>
                showPopup(
                  "Submission",
                  "06 Aug 2026 submission was submitted successfully."
                )
              }
            >

              <FaFileAlt />

              <div>

                <strong>
                  06 Aug 2026
                </strong>

                <span>
                  Submitted
                </span>

              </div>

              <small>
                09:10 PM
              </small>

              <FaChevronRight />

            </div>


            <div
              className="submission-item"
              onClick={() =>
                showPopup(
                  "Draft",
                  "05 Aug 2026 submission is saved as draft."
                )
              }
            >

              <FaFileAlt />

              <div>

                <strong>
                  05 Aug 2026
                </strong>

                <span className="draft-status">
                  Draft
                </span>

              </div>

              <small>
                08:30 PM
              </small>

              <FaChevronRight />

            </div>


            <div
              className="submission-item"
              onClick={() =>
                showPopup(
                  "Submission",
                  "04 Aug 2026 submission was submitted successfully."
                )
              }
            >

              <FaFileAlt />

              <div>

                <strong>
                  04 Aug 2026
                </strong>

                <span>
                  Submitted
                </span>

              </div>

              <small>
                09:05 PM
              </small>

              <FaChevronRight />

            </div>

          </div>


          {/* MANAGER FEEDBACK */}

          <div className="daily-card feedback-card">

            <div className="side-card-header">

              <h3>
                Manager's Feedback
              </h3>

              <span className="approved">
                ✓ Approved
              </span>

            </div>


            <p className="feedback-text">

              Great work on the dashboard!
              Keep focusing on completing
              the pending tasks.

            </p>


            <div className="manager">

              <div className="manager-avatar">

                <FaUserCircle />

              </div>

              <div>

                <strong>
                  Rajat Verma
                </strong>

                <span>
                  Manager
                </span>

              </div>

              <small>
                07 Aug 2026, 09:15 PM
              </small>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CUSTOM POPUP
      ===================================================== */}

      {popup.show && (

        <div
          className="custom-popup-overlay"
          onClick={closePopup}
        >

          <div
            className="custom-popup"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="popup-close"
              onClick={closePopup}
            >
              <FaTimes />
            </button>


            <div
              className={
                popup.type === "error"
                  ? "popup-icon error-popup"
                  : "popup-icon success-popup"
              }
            >

              {popup.type === "error"
                ? "!"
                : "✓"}

            </div>


            <h2>
              {popup.title}
            </h2>


            <p>
              {popup.message}
            </p>


            <button
              className="popup-ok-btn"
              onClick={closePopup}
            >
              OK
            </button>

          </div>

        </div>

      )}


      {/* =====================================================
          ADD TASK POPUP
      ===================================================== */}

      {taskPopup.show && (

        <div
          className="custom-popup-overlay"
          onClick={closeTaskPopup}
        >

          <div
            className="task-popup"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="popup-close"
              onClick={closeTaskPopup}
            >
              <FaTimes />
            </button>


            <h2>
              {taskPopup.type === "completed"
                ? "Add Completed Task"
                : "Add Pending Task"}
            </h2>


            <p>
              Enter your task below
            </p>


            <input
              type="text"
              value={taskInput}
              onChange={(e) =>
                setTaskInput(e.target.value)
              }
              placeholder="Enter task name..."
              autoFocus
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
            />


            <div className="task-popup-buttons">

              <button
                className="cancel-popup-btn"
                onClick={closeTaskPopup}
              >
                Cancel
              </button>


              <button
                className="add-popup-btn"
                onClick={addTask}
              >
                <FaPlus />
                Add Task
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default DailyUpdates;