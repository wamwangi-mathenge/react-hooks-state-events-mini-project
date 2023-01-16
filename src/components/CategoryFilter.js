import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButton = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null

    return (
      <button
        key={category}
        className={className}
        onAnimationEndCaptureClick={() => onSelectCategory(category)}  
      >
        {category}
      </button>
    )


  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
