import { doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js' 


const fireStoreWriteNewExpense = async (account, docKey, newExpenseObject) => {
     try{
        await setDoc(doc(db, `user/admin/${account}_expense`, docKey), newExpenseObject);
        const docRef = doc(db, `user/admin/${account}_expense`, docKey);
        const updateTimestamp = await updateDoc(docRef, {
            timestamp: serverTimestamp()
        });
     } catch(err){
        console.log(err.message)
     }
    
     //console.log('new expense written to firestore');
    
}

export default fireStoreWriteNewExpense;