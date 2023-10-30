import React from 'react';
import AddNewExpense_Link from '../Links/AddNewExpense_Link';
import AddCreditCardExpenseLink from '../Links/AddNewCreditCardExpense_Link';
import AddSavings_Link from '../Links/AddSavings_Link';
import '../CSS/AddExpenseLinkGroup.css';
import { Container } from 'react-bootstrap';

function AddExpenseLinkGroup() {
    return (
        <Container className='mt-5 add-expense-link-group'> 
            <AddNewExpense_Link />
            <AddCreditCardExpenseLink />
            <AddSavings_Link />
        </Container>
    )
}

export default AddExpenseLinkGroup
