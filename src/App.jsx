// App.js
import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import SpendingTrendsChart from "./components/SpendingTrendsChart";
import ExpenseHeatmap from "./components/ExpenseHeatMap";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem("budgets");
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  });

  const [goals, setGoals] = useState(() => {
    const savedGoals = localStorage.getItem("goals");
    return savedGoals ? JSON.parse(savedGoals) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("budgets", JSON.stringify(budgets));
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [transactions, budgets, goals]);

  const addTransaction = (newTransaction) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { ...newTransaction, id: Date.now() },
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((t) => t.id !== id)
    );
  };

  const addBudget = (newBudget) => {
    setBudgets((prevBudgets) => [
      ...prevBudgets,
      { ...newBudget, id: Date.now() },
    ]);
  };

  const deleteBudget = (id) => {
    setBudgets((prevBudgets) => prevBudgets.filter((b) => b.id !== id));
  };

  const addGoal = (newGoal) => {
    setGoals((prevGoals) => [
      ...prevGoals,
      { ...newGoal, id: Date.now(), currentAmount: 0 },
    ]);
  };

  const deleteGoal = (id) => {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  };

  const updateGoal = (id, amount) => {
    setGoals((prevGoals) =>
      prevGoals.map((g) =>
        g.id === id ? { ...g, currentAmount: g.currentAmount + amount } : g
      )
    );
  };

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>
      <Summary transactions={transactions} budgets={budgets} goals={goals} />
      <TransactionForm onAddTransaction={addTransaction} />
      <BudgetForm onAddBudget={addBudget} />
      <GoalForm onAddGoal={addGoal} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Dashboard
        transactions={filteredTransactions}
        onDeleteTransaction={deleteTransaction}
      />
      <BudgetList
        budgets={budgets}
        transactions={transactions}
        onDeleteBudget={deleteBudget}
      />
      <GoalList
        goals={goals}
        onDeleteGoal={deleteGoal}
        onUpdateGoal={updateGoal}
      />
      <SpendingTrendsChart transactions={transactions} />
      <ExpenseHeatmap transactions={transactions} />
    </div>
  );
}

export default App;
