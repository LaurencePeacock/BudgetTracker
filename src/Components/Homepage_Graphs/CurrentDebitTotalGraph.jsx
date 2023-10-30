import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function CurrentDebitTotal() {
   
    const data = [
        {
          name: "Jan",
          TeamPB_Savings: 100
        },
        {
          name: "Feb",
          TeamPB_Savings: 200
        },
        {
          name: "Mar",
          TeamPB_Savings: 350
        },
        {
          name: "Apr",
          TeamPB_Savings: 400
        },
        {
          name: "May",
          TeamPB_Savings: 560
        },
        {
          name: "Jun",
          TeamPB_Savings: 700
        },
        {
          name: "July",
          TeamPB_Savings: 890
        }
      ];
      

      return (
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TeamPB_Savings"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      );
}

export default CurrentDebitTotal
