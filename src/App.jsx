import React, { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem("budgets");
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem("budgets", JSON.stringify(budgets));
  }, [budgets]);

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

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>
      <Summary transactions={transactions} budgets={budgets} />
      <TransactionForm onAddTransaction={addTransaction} />
      <BudgetForm onAddBudget={addBudget} />
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
    </div>
  );
}

export default App;
