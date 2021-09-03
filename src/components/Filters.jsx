import React from "react";
import Filter from "./Filter";

export default function Filters({ genres, setFilters, filters }) {
  return (
    <form style={{display:'flex'}}>
      {genres.map((genre) => (
        <Filter setFilters={setFilters} filters={filters} genre={genre} />
      ))}
    </form>
  );
}
