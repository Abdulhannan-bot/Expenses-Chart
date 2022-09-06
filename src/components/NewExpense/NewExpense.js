import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";

const NewExpense = function (props) {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataHandler = function (enteredExpensedata) {
    const expenseData = {
      ...enteredExpensedata,
      id: Math.random.toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const startEditingHandler = function() {
    setisEditing(true);
  }

  const stopEditing = function() {
    setisEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;
