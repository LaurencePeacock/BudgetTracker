import { updateDoc, serverTimestamp } from "firebase/firestore";


function validateAndbuildFirestoreExpenseObject(docKey, item, price, category, person){
    
    let newExpenseObject;
    if(item == ""){
        alert('please enter an item')
        return newExpenseObject = false;
    }

    if(price <= 0){
        alert('please enter a positive number in the price field')
        return newExpenseObject = false;
    }

    if(person ==""){
        alert('please enter a value for person')
        return newExpenseObject = false;
    }
    if(category==""){
        category = "Food"
    }
    
    //const timestamp = new Date();
    newExpenseObject = {
            id: docKey,
            item: item, 
            price: Number(price), 
            category: category, 
            person: person,
            }
    return newExpenseObject
}

export default validateAndbuildFirestoreExpenseObject