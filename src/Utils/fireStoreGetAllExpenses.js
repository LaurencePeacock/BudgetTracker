// import React, { useState } from 'react'
import { collection, query, orderBy, getDocs} from 'firebase/firestore';
import { db } from './firebase.js' 




    const firestoreGetAllExpenses = async () => {
        const collectionRef = collection(db, 'expenses');
        const q = query(collectionRef, orderBy('timestamp','asc'))
        const docSnap = await getDocs(q);
        return docSnap
    }
    
    


export default firestoreGetAllExpenses
