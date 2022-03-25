import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
function NewExpense({ onAddExpense }) {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  const addNewExpenseButtonHandler = (event) => {
    setShowForm(true);
  };

  const onClickCancelHandler = (event) => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={onClickCancelHandler}
        />
      ) : (
        <button onClick={addNewExpenseButtonHandler}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
