import React,{ useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth-context';
import axiosApi from '../../../util/axios';
import LineChart from '../../charts/LineChart';

const ExpenseLastDays = () => {

    const authCtx = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);

    useEffect(() => {

        const getData = async ()=>{

            const resp = await axiosApi(`/expensesReportlastByDate/${authCtx.currentUser.uid}`);
            console.log("dash2 getData rs: ",resp);
            console.log("dash2 getData rs: ",resp.data.expenses);
            
            setData({
                labels: resp.data.expenses.dates,
                datasets: [
                  {
                    label: 'Last 31 Days Expense',
                    data: resp.data.expenses.totals,
                    fill: false,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(255, 99, 132, 0.8)',
                    borderWidth: 4,
                  },
                ],
              });
    
              setOptions({
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              });

        }

        getData();
        

    }, []);

    useEffect(() => {
        console.log("dash2 dataG2",data);
    }, [data]);




    return (
        <LineChart data={data} options={options} />
    )
}

export default ExpenseLastDays
