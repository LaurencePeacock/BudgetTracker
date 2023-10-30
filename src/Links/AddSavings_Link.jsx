import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function AddSavings_Link
() {
    
    // const [account, setAccount] = useState('savings')
    // const navigate = useNavigate()
    // const clickHandler = () => {
    //     navigate('add-new-expense', {state: {account: account}})
    // }

    return (
        //<Link onClick={clickHandler()}>Add A New Saving</Link>
        <Link to="/add-new-expense" state={{ account: "savings" }}><Button variant="outline-primary">
  Savings</Button>
</Link>
        )
    

}

export default AddSavings_Link

