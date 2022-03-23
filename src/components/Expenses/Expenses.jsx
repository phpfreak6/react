import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";

function Expenses({ properties }) {
  return (
    <div className="expenses">
      {properties.map((expense) => {
        return <ExpenseItem properties={expense} />;
      })}
    </div>
  );
}

export default Expenses;
