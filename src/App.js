import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "House Rent",
      amount: 700,
      date: new Date(2023, 6, 1),
    },
    { id: "e2", 
      title: "Shopping",
      amount: 200, 
      date: new Date(2023, 6, 1),
    },
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
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title = {expenses[0].title} 
        amount = {expenses[0].amount} 
        date = {expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title = {expenses[1].title} 
        amount = {expenses[1].amount} 
        date = {expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title = {expenses[2].title} 
        amount = {expenses[2].amount} 
        date = {expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem 
        title = {expenses[3].title} 
        amount = {expenses[3].amount}
        date = {expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
