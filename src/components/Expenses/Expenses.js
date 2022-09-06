import "./Expenses.css";
//import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(`2020`);

  const filterChangeHandler = function (selectedYear) {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpensesList data = {filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
