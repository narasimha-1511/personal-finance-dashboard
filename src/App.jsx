import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { GlobalStyles } from "../globalStyles";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import CategoryFilter from "./components/CategoryFilter";
import Summary from "./components/Summary";
import BudgetForm from "./components/BudgetForm";
import BudgetList from "./components/BudgetList";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import SpendingTrendsChart from "./components/SpendingTrendsChart";
import LongTermTrendChart from "./components/LongTermTrendChart";
import ExpenseHeatmap from "./components/ExpenseHeatMap";
import ReportGenerator from "./components/ReportGenerator";

function App() {
  const [theme, setTheme] = useState("light");
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

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("budgets", JSON.stringify(budgets));
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [transactions, budgets, goals]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header toggleTheme={toggleTheme} />
        <main>
          <section className="full-width">
            <Summary
              transactions={transactions}
              budgets={budgets}
              goals={goals}
            />
          </section>
          <section className="forms">
            <TransactionForm
              onAddTransaction={(t) => setTransactions([...transactions, t])}
            />
            <BudgetForm onAddBudget={(b) => setBudgets([...budgets, b])} />
            <GoalForm onAddGoal={(g) => setGoals([...goals, g])} />
          </section>
          <section className="full-width">
            <Dashboard
              transactions={transactions}
              onDeleteTransaction={(id) =>
                setTransactions(transactions.filter((t) => t.id !== id))
              }
            />
          </section>
          <section className="lists">
            <BudgetList
              budgets={budgets}
              transactions={transactions}
              onDeleteBudget={(id) =>
                setBudgets(budgets.filter((b) => b.id !== id))
              }
            />
            <GoalList
              goals={goals}
              onDeleteGoal={(id) => setGoals(goals.filter((g) => g.id !== id))}
              onUpdateGoal={(id, amount) =>
                setGoals(
                  goals.map((g) =>
                    g.id === id
                      ? { ...g, currentAmount: g.currentAmount + amount }
                      : g
                  )
                )
              }
            />
          </section>
          <section className="charts">
            <SpendingTrendsChart transactions={transactions} />
            <ExpenseHeatmap transactions={transactions} />
            <ReportGenerator transactions={transactions} />
            <LongTermTrendChart transactions={transactions} />
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
