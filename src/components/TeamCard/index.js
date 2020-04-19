import React from "react";
import "./style.css";

function TeamCard(props) {
  return (
    <div className="card" onClick={() => props.clickHandler(props.id)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Stadium:</strong> {props.stadium}
          </li>
          <li>
            <strong>World Series Wins:</strong> {props.worldseries}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
