import ExpenseDate from "./ExpenseDate";
import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
function ExpenseItem(props) {
  let title = props.title;
  const clickHandler = () => {
    title = 'Updated!';
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
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
