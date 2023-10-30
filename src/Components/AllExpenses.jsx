import React, { useEffect, useState } from 'react'
import { collection, query, orderBy, getDocs} from 'firebase/firestore';
import { db } from '../Utils/firebase' 
import firestoreGetAllExpenses from '../Utils/fireStoreGetAllExpenses.js'

function AllExpenses() {
    
    const [expenses, setExpenses] = useState()

    useEffect(()=>{
        const doc = firestoreGetAllExpenses();
        doc.then((docs)=>{
        docs.forEach((doc)=>{
            setExpenses((prev)=> ({...prev, [doc.id]: doc.data()}))
            console.log(doc.data());
        });
    })
    },[])

    return (
        <></>    
    )
}

export default AllExpenses