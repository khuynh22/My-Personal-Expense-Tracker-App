import ExpenseDate from "./ExpenseDate";
import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem Value by React');
  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        ChangeTitle
      </button>
    </Card>
  );
}

export default ExpenseItem;
