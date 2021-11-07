import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({data,options}) => {
    return (
        <>
            {
                data && 
                <Line data={data} options={options} height={300} width={300} />
            }
            
        </>
    )
}

export default LineChart
