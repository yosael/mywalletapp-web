import React,{ useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth-context';
import axiosApi from '../../../util/axios';
import PieChart from '../../charts/PieChart';

const ExpenseReport = () => {

    const [expenses, setExpenses] = useState([]);
    const authCtx = useContext(AuthContext);
    const [dataG, setDataG] = useState(null);

    useEffect(() => {        
        const getData = async () => {
            const resp = await axiosApi(`/expensesReport/${authCtx.currentUser.uid}`);
            console.log("dash getData rs: ",resp);
            console.log("dash getData rs: ",resp.data.expenses);
            setExpenses(resp.data.expenses);
            //initData(resp.data.expenses);
            setDataG({
                labels: resp.data.expenses.categories,
                datasets: [
                  {
                    label: 'Expenses',
                    data: resp.data.expenses.totals,
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)',
                      'rgba(200, 100, 60, 0.2)',
                      
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(200, 100, 60, 1)',
                      
                    ],
                    borderWidth: 1,
                  },
                ],
              });
        }
        getData();
        

    }, []);

    useEffect(() => {
        console.log("dash dataG",dataG);
    }, [dataG]);

    /*useEffect(() => {
        initData();
    }, [setExpenses]);*/

    let data = {};
    const labels = [];
    const content = [];

    const initData = (expenses) =>{

        console.log("dash init data");
        expenses.map((item)=> {
            console.log("dash item: ",item);
            labels.push(item.category_name);
            content.push(parseFloat(item.total));
            return;
        });
        console.log("dash labels: ",labels);
        console.log("dash content: ",content);

        data = {
            labels: labels,
            datasets: [
              {
                label: 'Expenses',
                data: content,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  
                ],
                borderWidth: 1,
              },
            ],
          };

          setDataG("updateting data g");

          console.log("dash data",data);
          console.log("dash dataG",dataG);
    }


    

    return (
        <PieChart data={dataG} />
    )
}

export default ExpenseReport
