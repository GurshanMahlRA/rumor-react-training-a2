import React from 'react';

interface EmptyProps {
  clearFilters: () => void;
}

const Empty: React.FC<EmptyProps> = ({ clearFilters }) => {
  return (
    <div className="emptyDiv">
      <h1>Nothing Found!</h1>
      <button className="clear-filters" id="btn1" onClick={clearFilters}>Clear Filters</button>
    </div>
  );
};

export default Empty;
