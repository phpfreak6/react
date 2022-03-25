import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";
import { useState } from "react";

const App = () => {
  const [expenses, setExpense] = useState([]);

  const [filter_year, setFilterYear] = useState(2022);

  const addExpenseHandler = (expense) => {
    setExpense((previous_state) => [...previous_state, expense]);
  };

  const onChangeFilterValueHandler = (filter_year) => {
    setFilterYear(filter_year);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses properties={expenses} filter_year={filter_year}>
        <ExpensesFilter
          initialValue={filter_year}
          onChangeExpenseFilter={onChangeFilterValueHandler}
        />
      </Expenses>
    </div>
  );
};

export default App;
