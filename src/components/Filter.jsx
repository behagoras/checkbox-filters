import React from "react";
import { useState } from "react";

export default function Filter({ genre, setFilters, filters }) {
  const [checked, setChecked] = useState(false);
  const toggleFilter = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    setFilters((oldFilters) => {
      if (newChecked === true) {
        return [...oldFilters, genre];
      } else {
        return oldFilters.filter((el) => !el === genre);
      }
    });
  };
  return (
    <div >
      <input
        onChange={toggleFilter}
        checked={checked}
        type={"checkbox"}
        name={"genre"}
        value={genre}
        id={genre}
      />
      <label for={genre}>{genre}</label>
    </div>
  );
}
