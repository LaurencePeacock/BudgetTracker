// import React, { useState } from 'react'
import { collection, query, orderBy, limit, getDocs, where} from 'firebase/firestore';
import { db } from './firebase.js' 
import { type } from '@testing-library/user-event/dist/type/index.js';

    const today = new Date();
    today.setHours(0,0,0,0)
    const pastTimestamp = today.setDate(today.getDate());
    //console.log(pastTimestamp)
    //console.log(typeof(pastTimestamp))
    
    

    const firestoreGetLast7DaysExpenses = async () => {
        const collectionRef = collection(db, 'expenses');
        const q = query(collectionRef, orderBy('date','desc'));
        const docSnap = await getDocs(q);
        return docSnap
    }
    

export default firestoreGetLast7DaysExpenses
