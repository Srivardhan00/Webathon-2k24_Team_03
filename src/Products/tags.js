import React from "react";
import "./tags.css";
function TagsComponent({ array }) {
  return (
    <ul className="p-0">
      {array.map((element, index) => (
        <li key={index} className="badge tag">
          {element.charAt(0).toUpperCase() + element.slice(1)}
        </li>
      ))}
    </ul>
  );
}

export default TagsComponent;
