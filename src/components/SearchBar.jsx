import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search classes..."
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
