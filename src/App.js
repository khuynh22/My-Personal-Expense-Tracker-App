import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses";

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
      <Expense items = {expenses}/>
    </div>
  );
}

export default App;
