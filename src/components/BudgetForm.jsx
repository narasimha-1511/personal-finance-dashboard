import React, { useState } from "react";

function BudgetForm({ onAddBudget }) {
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBudget({ category, limit: parseFloat(limit) });
    setCategory("");
    setLimit("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Budget Limit"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        required
      />
      <button type="submit">Set Budget</button>
    </form>
  );
}

export default BudgetForm;
