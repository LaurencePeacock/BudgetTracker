// import React, { useState } from 'react'
import { collection, query, orderBy, limit, getDocs} from 'firebase/firestore';
import { db } from './firebase.js' 

    
    const firestoreGetRecentExpenses = async () => {
        const collectionRef = collection(db, 'user', 'admin','debit_expense');
        const q = query(collectionRef, limit(5), orderBy('timestamp', 'desc'));
        const docSnap = await getDocs(q);
        return docSnap
    }
    

export default firestoreGetRecentExpenses
//'user','admin','debit_expense'