import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses({ properties, children, filter_year }) {
  return (
    <Card className="expenses">
      {children}
      <ExpensesChart expenses={properties} />
      <ExpensesList
        expenses={properties}
        filter_year={filter_year}
      ></ExpensesList>
    </Card>
  );
}

export default Expenses;
