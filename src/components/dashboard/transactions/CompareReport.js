import React, { useState,useEffect,useContext } from 'react';
import AuthContext from '../../../context/auth-context';
import axiosApi from '../../../util/axios';
import BarHorizontalChart from '../../charts/BarHorizontalChart';

const CompareReport = () => {

    const authCtx = useContext(AuthContext);
    const [data, setData] = useState(null);
    const [options, setOptions] = useState(null);

    useEffect(() => {

        const getData = async () => {
            const resp = await axiosApi(`/transactionsCompareReport/${authCtx.currentUser.uid}`);
            console.log("dash3: ",resp);
            setData({
                labels: resp.data.transactions.types,
                datasets: [
                  {
                    label: 'Incomes vs Expenses',
                    data: resp.data.transactions.totals,
                    backgroundColor: [
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                      'rgba(75, 192, 192, 1)',
                      'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              });

            setOptions({
                indexAxis: 'y',
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each horizontal bar to be 2px wide
                elements: {
                  bar: {
                    borderWidth: 2,
                  },
                },
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                  title: {
                    display: true,
                    text: 'Incomes vs Expenses Last 31 Days',
                  },
                },
              });
        }

        getData();
        
    }, [])

    return (
        <BarHorizontalChart data={data} options={options} />
    )
}

export default CompareReport
