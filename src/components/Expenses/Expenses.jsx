import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

function Expenses({ properties, children }) {
  return (
    <Card className="expenses">
      {children}
      {properties.map((expense) => {
        return <ExpenseItem key={expense.id} properties={expense} />;
      })}
    </Card>
  );
}

export default Expenses;
