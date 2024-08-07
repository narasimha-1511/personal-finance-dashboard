import React, { useState } from "react";

function GoalItem({ goal, onDelete, onUpdate }) {
  const [amount, setAmount] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(goal.id, parseFloat(amount));
    setAmount("");
  };

  const progress = (goal.currentAmount / goal.targetAmount) * 100;
  const remainingDays = Math.ceil(
    (new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="GoalItem">
      <h3>{goal.description}</h3>
      <p>Target: ${goal.targetAmount.toFixed(2)}</p>
      <p>Current: ${goal.currentAmount.toFixed(2)}</p>
      <p>Target Date: {goal.targetDate}</p>
      <p>Days Remaining: {remainingDays}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${Math.min(progress, 100)}%` }}
        ></div>
      </div>
      <p>{progress.toFixed(2)}% achieved</p>
      <form onSubmit={handleUpdate}>
        <input
          type="number"
          placeholder="Update Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDelete(goal.id)}>Delete Goal</button>
    </div>
  );
}

export default GoalItem;
