import React from 'react';


const SecurityPage = () => {
  return (
    <div className="security-container">
      <header>
        <h1 className='h1'>Security Information</h1>
      </header>
      <img src="images/secu.png" className="sec" alt='logo' />
      <section className="security-content">
        <h2>1. Account Security</h2>
        <p>
          We prioritize the security of your account. To enhance security:
        </p>
        <ul>
          <li>Use a strong and unique password for your account.</li>
          <li>Enable two-factor authentication (2FA) for an extra layer of protection.</li>
          <li>Regularly update your password and avoid using easily guessable information.</li>
        </ul>

        <h2>2. Phishing Awareness</h2>
        <p>
          Be cautious of phishing attempts. We will never ask for your password or sensitive information through email or other unsecured channels. Verify the authenticity of communication before responding.
        </p>

        <h2>3. Secure Transactions</h2>
        <p>
          All transactions are securely encrypted to protect your financial information. Verify the website's SSL certificate to ensure a secure connection before making any transactions.
        </p>

        <h2>4. Suspicious Activity</h2>
        <p>
          If you notice any suspicious activity or unauthorized access to your account, report it immediately to our support team.
        </p>

        <h2>5. Software Updates</h2>
        <p>
          Keep your device's operating system and security software up-to-date to benefit from the latest security patches and improvements.
        </p>
      </section>
    </div>
  );
};

export default SecurityPage;
