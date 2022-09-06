import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";

function ExpenseItems(props) {
  // const expenseDate = new Date(2022, 1, 23).toDateString();
  // const expenseTitle = `Car Insurance`;
  // const expenseAmount = 294.67;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-items__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItems;
