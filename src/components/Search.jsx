import React from "react";
import { useState } from "react";
function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearchChange(value);
  };

  return (
    <div className="">
      <input
        className="input"
        placeholder="Search for a movie"
        type="text"
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
