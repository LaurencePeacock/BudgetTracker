import React, { useEffect, useState } from 'react'
import firestoreGetAllSavings from '../../Utils/firestoreGetAllSavings';
import CurrentSavingsGraph from './CurrentSavingsGraph';

function CurrentSavings() {
    
    const [savingsData, setSavingsData] = useState();
    
    useEffect(()=>{
        //get all firestore savings data
        const savingsDocs = firestoreGetAllSavings();
        savingsDocs.then((docs)=>{
            docs.forEach((doc)=>{
               // console.log(doc.data());
                setSavingsData((prev)=>({...prev, [doc.id]: doc.data()}))
            })
            
        })
        
    },[])

    
    
    return (
        <>
            { savingsData ? <CurrentSavingsGraph savingsData={savingsData}/> : <p>loading</p>}
        </>
    )
}

export default CurrentSavings
