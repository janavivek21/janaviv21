import React from 'react';


import './App.css';
import { Link, Route,Routes } from 'react-router-dom';



import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Security from './components/Security';
import Profile from './components/Profile';
import TransactionHistoryPage from './components/transaction-history';
import UPIForm from './components/UPIform';
import CardForm from './components/CardForm';
import PaymentPage from './components/PaymentPage';
import EnterAmountPage from './components/EnterAmountPage';
function App() {

  return (
    <div>
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Signup' element={<Signup/>}/>
        <Route exact path='/PaymentPage' element={<PaymentPage/>}/>
        <Route exact path='/About' element={<About/>}/>
        <Route exact path='/Security' element={<Security/>}/>
        <Route exact path='/Profile' element={<Profile/>}/>
        <Route exact path='/transaction-history' element={<TransactionHistoryPage/>}/>
        <Route exact path='/CardForm' element={<CardForm/>}/>
        <Route exact path='/UPIform' element={<UPIForm/>}/>
        <Route exact path='/EnterAmountPage' element={<EnterAmountPage/>}/>
      </Routes>
      {/* <footer/> */}
    </div>

   
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>Account</h4>
            <a ><Link className='pro' to={'/Profile'}>Profile</Link>
                
            </a>
            <a href="/healthplan">
                <p></p>
            </a>
            <a href="/individual">
                <p></p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Join</h4>
            <a ><Link className="Signup" to={'/Signup'}><p>Sign in</p></Link>
                
            </a>
            <a><Link className="Login" to={'/Login'}><p>Login</p></Link>
                
            </a>
            <a href="/individual">
                <p>STV</p>
                </a>
    </div><div className="sb__footer-links_div">
            <h4>Company</h4>
            <a ><Link className='About' to={'/About'}><p>Terms & Conditions</p></Link>
               
            </a>
            <a ><Link className='About' to={'/Security'}><p>Privacy policy</p></Link>
               
            </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Help ?</h4>
            <a href="/about">
                <p>AboutUS</p>
            </a>
            <a href="/press">
                <p>FAQ's</p>
            </a>
            <a href="/career">
                <p>Customer Care</p>
                </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4></h4>
            
          </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        <p>@{new Date().getFullYear()} CodeInn. All right reserved.</p>
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        <a href="/cookie"><div><p>Cookie  Declaration</p></div></a>
    </div>
</div>
        </div>
        </div>
      
    
    </div>
  );
}

export default App;