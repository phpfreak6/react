import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
function NewExpense({ onAddExpense }) {
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    let expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
