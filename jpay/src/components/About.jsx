import React from 'react';

function About() {
    return (
    
        <body>
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
                <input
                  type="password"
                  name="cpass"
                  id="cpass"
                  placeholder="Confirm Password"
                />
                <br />
                <input type="number" name="Ages" id="Ages" placeholder="Age" />
                <br />
                <input type="date" name="DOB" id="DOB" placeholder="Date of Birth" />
                <br />
                <input type="number" name="phno" id="phno" placeholder="Phone Number" />
                <center>
               
                    <button type="submit" className="form-btn">
                      SIGN UP
                    </button>
  
                </center>
              </form>
             
              
            </div>
          </div>
        </body>
  
    );
  }
  
  export default About;