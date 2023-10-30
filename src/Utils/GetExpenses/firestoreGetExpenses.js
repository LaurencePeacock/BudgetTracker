import { collection, query, orderBy, getDocs, limit, where} from 'firebase/firestore';
import { db } from '../firebase' 


    const firestoreGetExpenses = async (collectionReference, orderByParams, limitParams, whereParams) => {
        const collectionRef = collection(db, 'expenses');
        const q = query(collectionRef, orderBy('timestamp','asc'))
        const docSnap = await getDocs(q);
        return docSnap
    }
    

export default firestoreGetExpenses
