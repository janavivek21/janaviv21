import React from 'react';
// import './App.css';
import {Link} from 'react-router-dom';

const Navbar=()=>
{
    return(
        <div classname='navbar-container'>
            <ul className='nav-links'>
               
  <li><a class="active" ><Link className="Login" to={'/'}>LOGIN</Link></a></li>
  <li><a className='active'><Link className="about" to={'/about'}>SIGNIN</Link></a></li>
 
  {/* <li style="float:right"><a class="active" href="./ABOUTTT.html">About</a></li> */}
            </ul>
     
</div>
    );
}

export default Navbar;