import React from 'react'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function AddCreditCardExpenseLink({ clickHandler }) {
    
    
    return (
        <Link to="/credit-card-expense"><Button variant="outline-primary">Add Credit Card Expense</Button></Link>
        )
    

}

export default AddCreditCardExpenseLink
