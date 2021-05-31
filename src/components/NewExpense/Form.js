import "./Form.css";
import { useState } from "react";

const Form = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [newDate, setNewDate] = useState("");

  const titleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const dateChange = (event) => {
    setNewDate(event.target.value);
  };

  const amountChange = (event) => {
    setNewAmount(event.target.value);
  };
  const resetForm = () => {
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };
  const submitExpense = (event) => {
    event.preventDefault();
    const newExpense = {
      title: newTitle,
      amount: +newAmount,
      date: new Date(newDate),
    };
    props.addNewExpense(newExpense);
    resetForm();
  };
  const cancelHandler = () => {
    props.hideForm();
  };

  return (
    <form onSubmit={submitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChange} typd="text" value={newTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChange}
            type="number"
            min="1"
            step="10"
            value={newAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-1"
            max="2022-12-31"
            value={newDate}
            onChange={dateChange}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );
};

export default Form;
