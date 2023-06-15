import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    
  }
  return (
    <div className="new-expense">
      <button>Add New Expense</button>
      <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
