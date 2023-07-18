import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
// import { Transition, CSSTransition } from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);
  // bat tat form new expense
  const startEditingHandler = () => {
    setEditing(true);
  };
  // tat khung khi an cancel
  const stopEditingHandler = () => {
    setEditing(false);
  };

  // ghi nhận thông tin của giá trị mới sau khi thêm
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  // neu isEditing = false thi tra ve nut button New Expense
  // neu isEditing = true thi tra ve form
  const animationTiming = {
    enter: 400,
    exit : 1000
  }
  return (
    <div className="new-expense">
      {/* {!isEditing && <button onClick={startEditingHandler}>New Expense</button>} */}
      {/* {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>} */}
      <CSSTransition
        in={!isEditing}
        classNames={{
          enter: "",
          enterActive: "FormOpen",
          exit: "",
          exitActive: "FormClosed",
        }}
        timeout={animationTiming}
        mountOnEnter
        unmountOnExit
      >
        {(state) => <button onClick={startEditingHandler}>New Expense</button>}
      </CSSTransition>



      <CSSTransition
        classNames={{
          enter: "",
          enterActive: "FormOpen",
          exit: "",
          exitActive: "FormClosed",
        }}
        in={isEditing}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </CSSTransition>
    </div>
  );
};

export default NewExpense;
