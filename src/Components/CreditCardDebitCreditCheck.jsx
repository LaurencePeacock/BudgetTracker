import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CreditCardDebitCreditCheck({ CreditCardCheckHandler }) {

    

    return (
        <>
            <div>Are you paying with or paying off the credit card?</div>
            {/* <button onClick={()=>{CreditCardCheckHandler('credit')}}>Paying With</button> */}
            {/* <button onClick={()=>{CreditCardCheckHandler('credit_card_payingoff')}}>Paying Off</button> */}
            <Link to={"/add-new-expense"} state={{account: "credit_paying_with"}} style={{display: 'block'}}>Paying With</Link>
            <Link to={"/add-new-expense"} state={{account: "credit_paying_off"}}>Paying Off</Link>
        </>
    )
}

export default CreditCardDebitCreditCheck
