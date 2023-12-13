import React from 'react';

const About=()=>
{
    return(
   
        <
    body
        >
        <div className="main-wrap">
          <div className="form-wrap">
            <h1>
              SIGN <span>UP</span>
            </h1>
            <h6>Welcome to Telegram</h6>
            <form className="form">
              <input type="email" name="email" id="email" placeholder="Email" />
              <br />
              <input type="password" name="pass" id="pass" placeholder="Password" />
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

export default Home;