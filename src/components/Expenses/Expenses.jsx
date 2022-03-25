import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

function Expenses({ properties, children, filter_year }) {
  return (
    <Card className="expenses">
      {children}
      {properties.map((expense) => {
        if (expense.date.getFullYear() === parseInt(filter_year)) {
          return <ExpenseItem key={expense.id} properties={expense} />;
        }
        return false;
      })}
    </Card>
  );
}

export default Expenses;
