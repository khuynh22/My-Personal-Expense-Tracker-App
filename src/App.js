import "./App.css";
import Expense from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React from "react";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "House Rent",
      amount: 700,
      date: new Date(2023, 6, 1),
    },
    { id: "e2", title: "Shopping", amount: 200, date: new Date(2023, 6, 1) },
    {
      id: "e3",
      title: "Eat Out",
      amount: 300,
      date: new Date(2023, 6, 1),
    },
    {
      id: "e4",
      title: "Others",
      amount: 200,
      date: new Date(2023, 6, 1),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { items: expenses })
  // );
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
};

export default App;
