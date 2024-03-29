import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">Rs.{props.expense.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenseItem;
