import React, { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const { classes, isLoading, error } = useSelector((state) => state.classes);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="search..." onChange={handleChange} />
    </form>
  );
};

export default SearchBar;
