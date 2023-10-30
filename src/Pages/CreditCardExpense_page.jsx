import React from 'react'
import { useState, useEffect } from 'react';
import AddNewExpenseForm from '../Components/AddNewExpenseForm'
import CreditCardDebitCreditCheck from '../Components/CreditCardDebitCreditCheck'
import { useNavigate } from 'react-router-dom';

function CreditCardExpense_page() {
    
    const [creditCardCheck, setCreditCardCheck] = useState();
    const navigate = useNavigate();

    const CreditCardCheckHandler = (account) => {
        setCreditCardCheck(account);
            navigate('/add-new-expense', {state:{account: account}});  
    }
    
    return (
        <>
            <CreditCardDebitCreditCheck CreditCardCheckHandler={CreditCardCheckHandler}/>
            {/* {creditCardCheck ? <AddNewExpenseForm account={'credit_card_spend'}/> : <AddNewExpenseForm account={'credit_card_payingoff'}/> } */}
        </>
    )
}

export default CreditCardExpense_page
