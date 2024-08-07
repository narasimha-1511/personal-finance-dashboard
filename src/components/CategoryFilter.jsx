import React from 'react';

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  const categories = ['All', 'Food', 'Entertainment', 'Income', 'Bills'];

  return (
    <div>
      <label htmlFor="category-select">Filter by category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default CategoryFilter;
