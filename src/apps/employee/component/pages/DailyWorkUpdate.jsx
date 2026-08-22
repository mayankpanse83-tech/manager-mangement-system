function DailyWorkUpdate() {
  const styles = {
    container: {
      marginLeft: "250px",
      marginTop: "70px",
      padding: "30px",
      backgroundColor: "#f1f5f9",
      minHeight: "100vh",
    },

    heading: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#1e293b",
      marginBottom: "25px",
    },

    section: {
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "25px",
    },

    title: {
      color: "#2563eb",
      marginBottom: "20px",
      fontSize: "22px",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
      color: "#334155",
    },

    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      marginBottom: "15px",
      fontSize: "15px",
      outline: "none",
    },

    textarea: {
      width: "100%",
      height: "100px",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      marginBottom: "15px",
      resize: "none",
      fontSize: "15px",
      outline: "none",
    },

    button: {
      backgroundColor: "#2563eb",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Daily Work Update</h1>

      {/* Today's Work */}
      <div style={styles.section}>
        <h2 style={styles.title}>Today's Work</h2>

        <label style={styles.label}>Project Name</label>
        <input
          type="text"
          placeholder="Enter Project Name"
          style={styles.input}
        />

        <label style={styles.label}>Task Completed</label>
        <textarea
          placeholder="Describe completed task"
          style={styles.textarea}
        ></textarea>

        <label style={styles.label}>Hours Spent</label>
        <input
          type="number"
          placeholder="Hours"
          style={styles.input}
        />

        <label style={styles.label}>Percentage Completed</label>
        <input
          type="number"
          placeholder="0 - 100%"
          style={styles.input}
        />
      </div>

      {/* Tomorrow Plan */}
      <div style={styles.section}>
        <h2 style={styles.title}>Tomorrow Plan</h2>

        <label style={styles.label}>Tomorrow's Plan</label>
        <textarea
          placeholder="What will you do tomorrow?"
          style={styles.textarea}
        ></textarea>
      </div>

      {/* Blockers */}
      <div style={styles.section}>
        <h2 style={styles.title}>Blockers</h2>

        <label style={styles.label}>Any Issues?</label>
        <textarea
          placeholder="Mention any issues..."
          style={styles.textarea}
        ></textarea>

        <label style={styles.label}>Need Help?</label>
        <textarea
          placeholder="What help do you need?"
          style={styles.textarea}
        ></textarea>
      </div>

      <button style={styles.button}>
        Submit Daily Report
      </button>
    </div>
  );
}

export default DailyWorkUpdate;