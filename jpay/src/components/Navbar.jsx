import React from 'react';
// import './App.css';
 import {Link} from 'react-router-dom';

const Navbar=()=>
{
    return(
        <div>

        <div classname='navbar-container'>
            <ul className='nav-links'>
   <li1><img src="images/jpay-logo.png" className="logo" alt='logo' /></li1>            
  <li1><a class="active" ><Link className="Login" to={'/'}>HOME</Link></a></li1>
  <li1><a class="active" ><Link className="Login" to={'/PaymentPage'}>PAYMENT</Link></a></li1>
  <li><a className='active'><Link className="Login" to={'/Login'}>LOGIN</Link></a></li>
  <li><a className='active'><Link className="Signup" to={'/Signup'}>SIGNIN</Link></a></li>
   <li><a className='active'><Link className='About' to={'/About'}>TERMS</Link></a></li>
   <li><a className='active'><Link className='sec' to={'/Security'}>PRIVACY </Link></a></li>
   <li1><a className='active'><Link className='pro' to={'/Profile'}>PROFILE</Link></a></li1>

 
 
            </ul>
     
</div>

 
        </div>
    );
}

export default Navbar;