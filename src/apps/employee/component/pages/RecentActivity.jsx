import React from "react";

function RecentActivity() {

  const activities = [
    {
      title: "Checked In",
      time: "09:15 AM"
    },
    {
      title: "Daily Update Submitted",
      time: "06:20 PM"
    },
    {
      title: "Task Completed",
      time: "05:45 PM"
    },
    {
      title: "Leave Applied",
      time: "Yesterday"
    },
    {
      title: "Salary Credited",
      time: "31 Jul 2026"
    }
  ];

  return (
    <div className="card">

      <div className="cardHead">
        <h3>Recent Activity</h3>
        <a href="/">View All</a>
      </div>

      <div className="activity">

        {
          activities.map((item,index)=>(
            <div key={index} className="activityItem">

              <div>

                <h4>{item.title}</h4>

                <p>{item.time}</p>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );

}

export default RecentActivity;