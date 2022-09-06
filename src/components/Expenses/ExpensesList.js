import React from "react";

import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = function (props) {
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}    
    </ul>
  );
};

export default ExpensesList;
