import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log("Logging in App Component", expense);
  };

  const expenses = [
    {
      id: "e1",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e2",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e3",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: "e4",
      date: new Date(2021, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
  ];

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses properties={expenses}>
        <ExpensesFilter />
      </Expenses>
    </div>
  );
};

export default App;
