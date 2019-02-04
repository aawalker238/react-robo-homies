import React from 'react';

const SearchBox = ({ handleInputChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Find homies..."
        name="searchTerm"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
