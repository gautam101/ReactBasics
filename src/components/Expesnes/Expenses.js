import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const getYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          getSelectedYear={getYear}
        ></ExpensesFilter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        {filteredExpenses.map((item) => (
          <ExpenseItem key={item.id} expense={item}></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
