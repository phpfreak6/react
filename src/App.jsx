import Expenses from "./components/Expenses/Expenses";

function App() {
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
      <Expenses properties={expenses} />
    </div>
  );
}

export default App;
