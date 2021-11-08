import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({data,options}) => {
    return (
        <>
            {
                data ?
                <Pie data={data} options={options} />
                :
                <h4>No records</h4>
            }
            
        </>
    )
}

export default PieChart
