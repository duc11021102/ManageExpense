import React from "react";
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    // chartDataPoints là một array
    const chartDataPoints = [
        {label: "Jan", value : 0},
        {label: "Feb", value : 0},
        {label: "Mar", value : 0},
        {label: "Apr", value : 0},
        {label: "May", value : 0},
        {label: "Jun", value : 0},
        {label: "Jul", value : 0},
        {label: "Aug", value : 0},
        {label: "Sep", value : 0},
        {label: "Oct", value : 0},
        {label: "Nov", value : 0},
        {label: "Dec", value : 0},
    ];

    for (const expense of props.expense){ // chạy qua tất cả các expense, sẽ có các tháng có nhiều hơn 1 expense 
        const expenseMonth = expense.date.getMonth();// các tháng có expense  start at 0 => January = 0    
        chartDataPoints[expenseMonth].value += expense.amount; // tính tổng chi phí của từng tháng 
        console.log(expenseMonth);// hiện thị console các tháng có expense 
    }
    console.log(chartDataPoints);// liệt kê console danh sách các tháng và giá trị expense của từng tháng
    return <Chart dataPoints={chartDataPoints}/>
};

export default ExpensesChart;