import React from 'react';
import { useState, useEffect } from 'react';
import firestoreGetLast7DaysExpenses from '../../../Utils/fireStoreGetLast7DaysExpenses';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function Last7DaysSpendGraph() {


    //get last seven days spend
    // useEffect(()=>{
    //     const docSnap = firestoreGetLast7DaysExpenses();
    //     docSnap.then((docs)=>{
    //         docs.forEach((doc)=>{
    //             console.log('test2')
    //             console.log(doc.data())
    //             });
    //         })
    // },[])

    const data = [ ]
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
    )
}

export default Last7DaysSpendGraph
