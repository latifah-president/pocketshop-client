import React from "react";
import "./styles.css";

export const CategoryDropdown = ({ category, handleCategoryChange }) => {
  return (
    <div className="dropdown">
      <select
        name="categories"
        className="dropdown-menu"
        label="categories"
        style={
          category === "all" ? { fontStyle: "italic", color: "grey" } : null
        }
        onChange={handleCategoryChange}
      >
        <option className="dropdown-label" value="none">
          Select a category...
        </option>
        <option className="dropdown-options" value="food">
          Food
        </option>
        <option className="dropdown-options" value="drug">
          Drug
        </option>
        <option className="dropdown-options" value="toiletry">
          Toiletry
        </option>
      </select>
    </div>
  );
};
