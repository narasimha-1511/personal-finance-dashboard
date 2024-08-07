import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      description: "Grocery shopping",
      amount: -50,
      date: "2024-08-07",
      category: "Food",
    },
    {
      id: 2,
      description: "Salary",
      amount: 2000,
      date: "2024-08-01",
      category: "Income",
    },
    {
      id: 3,
      description: "Movie tickets",
      amount: -30,
      date: "2024-08-05",
      category: "Entertainment",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
  };

  const filteredTransactions =
    selectedCategory === "All"
      ? transactions
      : transactions.filter((t) => t.category === selectedCategory);

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>
      <Summary transactions={transactions} />
      <TransactionForm onAddTransaction={addTransaction} />
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Dashboard transactions={filteredTransactions} />
    </div>
  );
}

export default App;
