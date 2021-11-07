import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarHorizontalChart = ({data,options}) => {
    return (
        <>
            {
                data &&
                <Bar data={data} options={options} height={300} width={300}/>  
            }
        </>
    )
}

export default BarHorizontalChart
