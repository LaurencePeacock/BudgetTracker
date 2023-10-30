import { collection, query, orderBy, getDocs} from 'firebase/firestore';
import { db } from './firebase.js' 


    const firestoreGetAllSavings = async () => {
        const collectionRef = collection(db, 'user/admin/savings_expense');
        const q = query(collectionRef, orderBy('timestamp','asc'))
        const docSnap = await getDocs(q);
        return docSnap
    }

export default firestoreGetAllSavings