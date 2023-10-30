import React from 'react'
import  { useEffect, useState, useId } from 'react'
import validateAndbuildFirestoreExpenseObject from '../Utils/validateAndbuildFirestoreExpenseObject';
import fireStoreWriteNewExpense from '../Utils/fireStoreWriteNewExpense';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';



function AddNewExpenseForm() {

    const location = useLocation();
    const { account } = location.state 
    console.log(account)
    if(account.includes('credit')){
        const credit_check = account.split('_');
        console.log(credit_check[1]+credit_check[2])
    }
   

    const [item, setItem] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [person, setPerson] = useState('');
    
    const id = useId();
    const randomNumber = Math.floor(Math.random()*1000)
    const docKey = id + randomNumber;

    const navigate = useNavigate();

    const expenseClickHandler =  (e) => {
        e.preventDefault();
        const newExpenseObject = validateAndbuildFirestoreExpenseObject( docKey, item, price, category, person )
        console.log('nex expense created');
        console.log(newExpenseObject);
        if(newExpenseObject){
            try{
                fireStoreWriteNewExpense(account, docKey,  newExpenseObject)

            } catch(err){
                console.log(err.message)
            }
            //console.log(newExpenseObject)
            //navigate("/")
         }
      }

    return (

        <div>
        <form action="#">
                    <label htmlFor='item'>Item</label>
                    <input type="text" id="item" onChange={(e)=>{
                        const value = e.target.value;
                        setItem(value)
                    }}/>
                    <br></br>
                    <label htmlFor='price'>Price</label>
                    <input type="number" id="price" onChange={(e)=>{
                        const value = e.target.value;
                        setPrice(value)
                    }}/>
                    <br></br>

                    <label htmlFor='category'>Category</label>

                    <select id="category" 
                        placeholder="Select Option"
                        onChange={(e)=>{
                        const value = e.target.value;
                        setCategory(value)
                    }}>
                        <option value="Food" >Food</option>
                        <option value="Pub">Pub</option>
                        <option value="Allotment">Allotment</option>
                        <option value="Garage">Garage</option>
                        <option value="Books">Books</option>
                        <option value="Alpkit">Alpkit</option>
                        <option value="Other">Other</option>
                    </select>
                    <br></br>

                    <input type="radio" id="katia" value="Katia" name="person" onChange={(e)=>{
                        const value = e.target.value;
                        setPerson(value)
                    }} />
                    <label htmlFor="person">Katia</label>
                    <input type="radio" id="laurence" value="Laurence" name="person" onChange={(e)=>{
                        const value = e.target.value;
                        setPerson(value)
                    }}/>
                    <label htmlFor="person">Laurence</label>
                    <br></br>

                    <button onClick={expenseClickHandler}>Submit Expense</button>

                </form>
                <Link to="/"><Button className="home_button mt-3" variant="outline-primary" >Back Home</Button></Link>
                </div>
            
    )
    }


export default AddNewExpenseForm
