import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    // You would typically handle the search logic here
    // For example, making an API call to fetch search results
    console.log("Searching for:", searchTerm);
    event.preventDefault();
  };

  return (
    <div className="flex items-start justify-start my-4">
      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center border-none rounded-xl relative overflow-hidden"
      >
        <button type="submit" className="absolute top-1 left-1">
          <MagnifyingGlassIcon className="h-7 w-7 text-gray-400" />
        </button>
        <input
          type="text"
          className="pr-4 pl-10 py-2 w-64 outline-none bg-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default SearchBar;
