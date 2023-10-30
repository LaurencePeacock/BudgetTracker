import React, { useEffect, useState } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

function CurrentSavingsGraph( {savingsData} ) {
    
    const arr = [];

    const objs = Object.values(savingsData);
    //console.log(objs.length)
    objs.forEach(obj => {
        const date = new Date(obj.timestamp);
        const month = date.toLocaleString('default', { month: 'long' });
        arr.push([month,obj.value])
        //arr.push(obj.value)
    })
    //console.log(arr)
    //loop through all objects
    // for(let key in savingsData){
    //     for(let x in savingsData[key]){
    //         console.log(savingsData[key][x])
    //     }
        
        //console.log(savingsData[key][timestamp])
    //}
    //const savingsArray = Object.entries(savingsData);
    
    //console.log(savingsArray)
    //get month from timestamp
    //add month and value to object
    //if month object exists, add the value
    //turn object into 2D array for graph
    
    return (
        <></>
    )
}

export default CurrentSavingsGraph
