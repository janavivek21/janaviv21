import React from 'react';

const TermsAndConditionsPage = () => {
  return (
    <div className="terms-container">
      <header>
        <h1 className='h1'>Terms and Conditions</h1>
      </header>
      <section className="terms-content">
        <h2>1. Introduction</h2>
        <p>
          Welcome to our online payment platform. These terms and conditions outline the rules and regulations for the use of our services.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p>
          By using our platform, you accept these terms and conditions in full. If you disagree with any part of these terms, you must not use our services.
        </p>

        <h2>3. Account Registration</h2>
        <p>
          To use certain features of our platform, you may be required to register for an account. You agree to provide accurate and complete information during the registration process.
        </p>

        <h2>4. Payment Security</h2>
        <p>
          We take the security of your payments seriously. All transactions are encrypted, and we follow industry best practices to protect your financial information.
        </p>

        <h2>5. Prohibited Activities</h2>
        <p>
          You must not engage in any activities that violate the law or the rights of others while using our platform. This includes, but is not limited to, fraud, money laundering, and unauthorized access.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms and conditions at any time. You are responsible for regularly reviewing these terms, and your continued use of the platform constitutes acceptance of any changes.
        </p>

        <h2>7. Termination</h2>
        <p>
          We may terminate or suspend your account and access to our services at our sole discretion, without notice, for any reason, including violation of these terms.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditionsPage;
