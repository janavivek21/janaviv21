import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
  return (
   
    
    <div>
     
        <section className="about-us">
          <div className="about">
            <img src="images/jpay-logo.png" className="pic" alt='logo' />
            <div className="text">
              <h2>Welcome</h2>
              <h5>
                <span>
                  <u>JPAY..!</u>
                </span>
              </h5>
              <h1>India's Most-loved</h1>
              <h1>Payments App</h1>
              <p>Recharge & pay bills, book flights & movie tickets,</p>
              <p>open a savings account, invest in stocks & mutual</p>
              <p>funds, and do a lot more.</p>
             
              <div className="data">
                
                <p>
                  <b>
                    Hey not yet joined
                  </b>
                  
                </p>
                <br />
                <button className="hire"><Link className="Signup" to={'/Signup'}>GET STARTED ⫸ </Link>
                
                </button>
                
              </div>
            </div>
          </div>
        </section>

        {/* //footer ; */}
        
     
</div>
  );
}

export default Home;
