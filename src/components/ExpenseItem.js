import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>June 4th 2023</div>
      <div className="expense-item__description">
        <h2>House rent</h2>
        <div className = "expense-item__price">$700</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
