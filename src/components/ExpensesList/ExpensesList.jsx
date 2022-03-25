import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ expenses, filter_year }) {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  }

  return (
    <ul>
      {expenses.map((expense) => {
        if (expense.date.getFullYear() === parseInt(filter_year)) {
          return <ExpenseItem key={expense.id} properties={expense} />;
        }
        return false;
      })}
    </ul>
  );
}

export default ExpensesList;
