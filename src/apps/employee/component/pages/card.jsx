import React from "react";

function Card({
  title,
  children,
  link = "View All"
}) {
  return (
    <div className="card">

      <div className="cardHead">

        <h3>{title}</h3>

        <a href="/">{link}</a>

      </div>

      {children}

    </div>
  );
}

export default Card;