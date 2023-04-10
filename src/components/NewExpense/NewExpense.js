import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);
    // bat tat form new expense 
    const startEditingHandler = () => {
        setEditing(true);
    }
    console.log(isEditing);
    // tat khung khi an cancel
    const stopEditingHandler = () => {
        setEditing(false);
    }
    
    // ghi nhận thông tin của giá trị mới sau khi thêm 
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData)
    };
    
    // neu isEditing = false thi tra ve nut button New Expense
    // neu isEditing = true thi tra ve form
    return <div className='new-expense'>
       {!isEditing && <button onClick={startEditingHandler}>New Expense</button>} 
       {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
}

export default NewExpense;