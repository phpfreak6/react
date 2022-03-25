import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData }) {
  const initialState = {
    title: "",
    amount: "",
    date: "",
  };

  const [expenseFormState, setExpenseFormState] = useState(initialState);

  const onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setExpenseFormState((previousFormState) => {
      return { ...previousFormState, [name]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let expense_data = {
      ...expenseFormState,
      date: new Date(expenseFormState.date),
    };
    onSaveExpenseData(expense_data);
    setExpenseFormState(initialState);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            name="title"
            type="text"
            value={expenseFormState.title}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            name="amount"
            type="number"
            value={expenseFormState.amount}
            onChange={onChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseFormState.date}
            onChange={onChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
