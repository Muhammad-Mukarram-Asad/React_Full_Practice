import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./lists.css";

function LineItem({element,handleChange,handleDelete}) {
  return (
    <li className="item">
      <input
        onChange={() => handleChange(element.id)}
        type="checkbox"
        checked={element.checked}
      />

      <label
        style={element.checked ? { textDecoration: "underline" } : null}
        onClick={() => handleChange(element.id)}
      >
        {element.text}
      </label>

      <FaTrashAlt
        onClick={() => handleDelete(element.id)}
        role="button"
        tabIndex={0}
        id="delete_btn"
        aria-label={`Delete ${element.element}`}
      />
    </li>
  );
}

export default LineItem;
