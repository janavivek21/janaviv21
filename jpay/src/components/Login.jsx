import React from 'react';

function login() {
    return (
    
        <body>
          <div className="main-wrap">
            <div className="form-wrap">
              <h1>
                 <span>Login</span>
              </h1>
              <h6>Hi There...!</h6>
              <form className="form">
                <input type="email" name="email" id="email" placeholder="Email" />
                <br />
                <input type="password" name="pass" id="pass" placeholder="Password" />
                <br />
                <input type="checkbox" name="accept" id="accept" />i accept all tearms & conditions
                <br />
              
                <center>
               
                    <button type="submit" className="form-btn">
                      LOGIN
                    </button>
  
                </center>
              </form>
             
              
            </div>
          </div>
        </body>
  
    );
  }
  
  export default login;