import React from "react";
import GoalItem from "./GoalItem";

function GoalList({ goals, onDeleteGoal, onUpdateGoal }) {
  return (
    <div className="GoalList">
      <h2>Financial Goals</h2>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onDelete={onDeleteGoal}
          onUpdate={onUpdateGoal}
        />
      ))}
    </div>
  );
}

export default GoalList;
