import React from 'react'
import { useEffect } from 'react';
import NavBar from '../Components/NavBar';
import AllExpenses from '../Components/AllExpenses';
import RecentExpenses from '../Components/RecentExpenses';
import AddNewExpense_Link from '../Links/AddNewExpense_Link';
import AddCreditCardExpenseLink from '../Links/AddNewCreditCardExpense_Link';
import AddExpenseLinkGroup from '../Components/AddExpenseLinkGroup';
import CurrentDebitTotal from '../Components/Homepage_Graphs/CurrentDebitTotalGraph';
import CurrentSavings from '../Components/Homepage_Graphs/CurrentSavings';
import Last7DaysSpendGraph from '../Components/Homepage_Graphs/Graphs/last7DaysSpendGraph';
import firestoreGetExpenses from '../Utils/GetExpenses/firestoreGetExpenses';




function Home_page() {




    return (
        <>
        <NavBar />
        {<RecentExpenses /> ? <RecentExpenses /> : <p>loading</p>}
        <AddExpenseLinkGroup />
        <CurrentDebitTotal />
        <CurrentSavings />
        <Last7DaysSpendGraph/>

       
        </>
    )
}

export default Home_page
