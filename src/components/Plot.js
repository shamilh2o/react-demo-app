import React from "react";
import Button from '@mui/material/Button';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";

import { 
    Legend as RechartLegend, 
    CartesianGrid, 
    Line as RechartLine, 
    LineChart, 
    Tooltip as RechartTooltip, 
    XAxis, 
    YAxis 
} from "recharts";

// Rechart content
const rechart_data = [
    {name: "2017", react: 32, angular: 37, vue: 60},
    {name: "2018", react: 42, angular: 42, vue: 54},
    {name: "2019", react: 51, angular: 41, vue: 54},
    {name: "2020", react: 60, angular: 37, vue: 28},
    {name: "2021", react: 51, angular: 31, vue: 27},
    {name: "2022", react: 95, angular: 44, vue: 49},
]

// Chart JS content
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];
const options = {
    plugins: {
        legend: {
            position: 'bottom',
        }
    }
};
export const data = {
    labels,
    datasets: [
        {
            label: "React",
            data: [32, 42, 51, 60, 51, 95],
            backgroundColor: "#2196F3",
            borderColor: "#2196F3",
        },
        {
            label: "Angular",
            data: [37, 42, 41, 37, 31, 44],
            backgroundColor: "#F44236",
            borderColor: "#F44236",
        },
        {
            label: "Vue",
            data: [60, 54, 54, 28, 27, 49],
            backgroundColor: "#FFCA26",
            borderColor: "#FFCA26",
        },
    ],
}

function Plot() {
    return (
        <>
            {/* chart JS content */}
            <div style={{width: 600, height: 300}}>
                <Button variant="contained">Chart JS Plot</Button>
                <Line options={options} data={data} />
            </div>

            {/* Rechart content */}
            <div>
                <Button variant="contained">Rechart Plot</Button>
                <LineChart width={600} height={300} data={rechart_data}>
                    <RechartLine type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3}/>
                    <RechartLine type="monotone" dataKey="angular" stroke="#F44236" strokeWidth={3}/>
                    <RechartLine type="monotone" dataKey="vue" stroke="#FFCA26" strokeWidth={3}/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <RechartTooltip />
                    <RechartLegend />
                </LineChart>
            </div>
        </>
    );
}

export default Plot;
