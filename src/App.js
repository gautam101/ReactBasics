import Expenses from "./components/Expesnes/Expenses";
import NewExpense from "./components/NewExpense/NewExpens";
import { useState } from "react";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 40000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 5000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 4500,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenseList, setExpenseList] = useState(expenses);

  const updateExpenses = (newExpense) => {
    setExpenseList((prevExpenseList) => {
      return [newExpense, ...prevExpenseList];
    });
  };

  return (
    <div>
      <NewExpense updateExpenses={updateExpenses}></NewExpense>
      <Expenses expenses={expenseList}></Expenses>
    </div>
  );
};

export default App;
