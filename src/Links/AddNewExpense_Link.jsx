import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function AddNewExpense_Link() {
    
    // const [account, setAccount] = useState('debit')
    // const navigate = useNavigate()
    // const clickHandler = () => {
    //     navigate('add-new-expense', {state: {account: account}})
    // }

    return (
        <Link to={"/add-new-expense"} state={{account: "debit"}}><Button variant="outline-primary">Add New Expense</Button>{' '}</Link>
        )
    

}

export default AddNewExpense_Link
