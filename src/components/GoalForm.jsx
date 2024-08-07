import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [targetDate, setTargetDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddGoal({
      description,
      targetAmount: parseFloat(targetAmount),
      targetDate,
      currentAmount: 0,
    });
    setDescription("");
    setTargetAmount("");
    setTargetDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Goal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={targetDate}
        onChange={(e) => setTargetDate(e.target.value)}
        required
      />
      <button type="submit">Set Goal</button>
    </form>
  );
}

export default GoalForm;
