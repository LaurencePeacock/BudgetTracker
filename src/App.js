import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home_page';
import AllExpenses from './Pages/AllExpenses_page'
import AddNewExpense_page from './Pages/AddNewExpense_page';
import CreditCardExpense_page from './Pages/CreditCardExpense_page';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  //get Firestore data and store in useContext



  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route index element={<Home />} />
          <Route path="all-expenses" element={<AllExpenses/>} />
          <Route path="add-new-expense" element={<AddNewExpense_page/>} />
          <Route path="credit-card-expense" element={<CreditCardExpense_page/>} />
          
       
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
