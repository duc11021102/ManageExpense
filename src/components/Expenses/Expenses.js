import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // truyền giá trị sau khi nhận 
  const filterChangeHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  // lọc các expense theo từng năm
  const filterExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // đưa ra console danh sách các expense của năm đó, (mặc định đang là năm 2020)
  console.log(filterExpense);

  return (
    // tra ve danh sach cac Item
    // đặt giá trị mặc định của ExpensesFilter là filteredYear == 2020
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expense={filterExpense}/>
      <ExpenseList items={filterExpense}/>
    </div>
  );
};

export default Expenses;
