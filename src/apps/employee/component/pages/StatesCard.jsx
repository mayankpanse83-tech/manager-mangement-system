import React from "react";

function StatsCard({
  icon,
  title,
  value,
  subtitle,
  color
}) {
  return (
    <div className="smallCard">

      <div
        className="icon"
        style={{
          background: color + "20",
          color: color,
        }}
      >
        {icon}
      </div>

      <h2>{value}</h2>

      <p>{title}</p>

      <div className="progress">
        <div
          style={{
            width: "75%",
            background: color,
          }}
        ></div>
      </div>

      <small>{subtitle}</small>

    </div>
  );
}

export default StatsCard;