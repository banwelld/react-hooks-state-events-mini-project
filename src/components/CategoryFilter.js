import React from "react";

function CategoryFilter({categories, onCatClick}) {

  const categoryButtons = categories.map((category) => <button key={category} name={category} onClick={onCatClick}>{category}</button>);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
