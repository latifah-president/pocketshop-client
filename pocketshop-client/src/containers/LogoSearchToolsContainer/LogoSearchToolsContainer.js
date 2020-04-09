import React from "react";

import { SearchBar } from "../../components/SearchBar/SearchBar";
import { CategoryDropdown } from "../../components/CategoryDropdown/CategoryDropdown";

import "./styles.css";

export const LogoSearchToolsContainer = ({
  category,
  handleCategoryChange,
}) => {
  return (
    <div className="grid-cols-8 gap-4">
      <div
        style={{
          gridColumn: "span 2 / span 2",
          backgroundImage:
            "url(https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/52692462_1018395905028239_7366818916456202240_n.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=pTMDztd9Ao0AX_X00OZ&_nc_ht=scontent-dfw5-1.xx&oh=9a8f3b15ad3301b36b863f70ff545ae7&oe=5EAE70C7)",
          backgroundSize: "cover",
          width: "200px",
          height: "200px",
          display: "inline-block",
        }}
      ></div>
      <div className="col-span-3">
        <SearchBar></SearchBar>
      </div>
      <div className="col-span-3">
        <CategoryDropdown
          className="category-dropdown"
          category={category}
          handleCategoryChange={handleCategoryChange}
        ></CategoryDropdown>
      </div>
    </div>
  );
};
