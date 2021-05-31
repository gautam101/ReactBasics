import "./NewExpense.css";
import Form from "./Form";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideForm = () => {
    setShowForm(false);
  };

  const addExpense = (newExpense) => {
    let updatedExpense = {
      id: Math.random(),
      ...newExpense,
    };
    props.updateExpenses(updatedExpense);
  };
  return (
    <div className="new-expense ">
      {!showForm && (
        <button onClick={showFormHandler}>Show Expense Form</button>
      )}
      {showForm && <Form addNewExpense={addExpense} hideForm={hideForm}></Form>}
    </div>
  );
};
export default NewExpense;
