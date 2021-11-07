import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({data,options}) => {
    return (
        <>
            {
                data &&
                <Pie data={data} options={options} />
            }
            
        </>
    )
}

export default PieChart
