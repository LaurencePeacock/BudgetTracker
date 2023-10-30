import React from 'react'
import { useState, useEffect } from 'react'
import firestoreGetRecentExpenses from '../Utils/fireStoreGetRecentExpenses'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';



function RecentExpenses() {
    
    const [recentExpenses, setRecentExpenses] = useState([]);
    const [newExpenseTrigger, setNewExpenseTrigger] = useState(false);

    useEffect(()=>{
        const docSnap = firestoreGetRecentExpenses();
        docSnap.then((docs)=>{
        docs.forEach((doc)=>{
            setRecentExpenses((prev)=> ({...prev, [doc.id]: doc.data()}))
            });
        })
    },[])

    console.log(recentExpenses);

    return (
        <>
        <div className="mt-5"> <h3 style={{ textAlign: 'center' }}>Recent Expenses</h3></div>
            <Container>
                <Table striped bordered hover className="mt-3" variant="dark" style={{textAlign:"center"}}>
                    <thead >
                    <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                
            { Object.entries(recentExpenses).map((obj)=>{
                const date = obj[1].timestamp.toDate();
                //console.log(date.toString())
                //console.log(date)
                    return <tr>
                        <td>{obj[1].item}</td>
                        <td>{obj[1].category}</td>
                        <td>{obj[1].price}</td>
                        <td>{date.toLocaleString()}</td> 
                    </tr>
                })
            }
                </tbody>
                </Table>
            </Container>
        </>
    )
}

export default RecentExpenses
