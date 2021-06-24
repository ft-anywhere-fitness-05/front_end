import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const { push } = useHistory();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="search..." onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
