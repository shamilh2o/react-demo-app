import React from "react";
import '../../App.css';
import { Legend, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const rechart_data = [
    {name: "2017", react: 32, angular: 37, vue: 60},
    {name: "2018", react: 42, angular: 42, vue: 54},
    {name: "2019", react: 51, angular: 41, vue: 54},
    {name: "2020", react: 60, angular: 37, vue: 28},
    {name: "2021", react: 51, angular: 31, vue: 27},
    {name: "2022", react: 95, angular: 44, vue: 49},
]

function Products() {
    return (
        <>
            <div>
                <LineChart width={600} height={300} data={rechart_data}>
                    <Line type="monotone" dataKey="react" stroke="#2196F3" strokeWidth={3}/>
                    <Line type="monotone" dataKey="angular" stroke="#F44236" strokeWidth={3}/>
                    <Line type="monotone" dataKey="vue" stroke="#FFCA26" strokeWidth={3}/>
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </div>
        </>
    );
}

export default Products;
