import React,{ useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth-context';
import axiosApi from '../../../util/axios';
import DoughnutChart from '../../charts/DoughnutChart';
import PieChart from '../../charts/PieChart';

const ExpenseReport = () => {

    const [expenses, setExpenses] = useState([]);
    const authCtx = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);

    useEffect(() => {        
        const getData = async () => {
            const resp = await axiosApi(`/expensesReport/${authCtx.currentUser.uid}`);
            console.log("dash getData rs: ",resp);
            console.log("dash getData rs: ",resp.data.expenses);
            setExpenses(resp.data.expenses);
            //initData(resp.data.expenses);
            setData({
                labels: resp.data.expenses.categories,
                datasets: [
                  {
                    label: 'Expenses',
                    data: resp.data.expenses.totals,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.8)',
                      'rgba(54, 162, 235, 0.8)',
                      'rgba(255, 206, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(153, 102, 255, 0.8)',
                      'rgba(255, 159, 64, 0.8)',
                      'rgba(200, 100, 60, 0.8)',
                      
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(200, 100, 60, 1)',
                      
                    ],
                    borderWidth: 1,
                  },
                ],
              });

            setOptions({
                plugins: {
                    legend: {
                      display: false
                    }
                },
                tooltips: {
                    callbacks: {
                       label: function(tooltipItem) {
                              return tooltipItem.yLabel;
                       }
                    }
                }
            });
        }
        getData();
        

    }, []);

    useEffect(() => {
        console.log("dash data",data);
    }, [data]);


    return (
        <PieChart data={data} options={options} />
    )
}

export default ExpenseReport
