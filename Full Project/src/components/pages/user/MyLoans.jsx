import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../services/Navbar';
import { useSelector } from 'react-redux';

const MyLoans = () => {
  const [loans, setLoans] = useState([]);
  const email = useSelector((state) => state.auth.userEmail);

  useEffect(() => {
    axios
      .post('http://localhost:8181/api/v1/auth/getLoansByEmail', { email: email })
      .then((response) => {
        setLoans(response.data);
      })
      .catch((error) => {
        console.error('Error fetching loans:', error);
      });
  }, [email]);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '50px',backgroundSize:'cover' ,height:'100vh'}}>
        <h1 style={{ textAlign: 'center', marginBottom: '19px', marginTop: '-15px' }}>My Loans</h1>
        <div className="appliedcard-list">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="appliedcard"
              style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                marginBottom: '20px',
              }}
            >
              <p className="acard-title">Loan Id: {loan.id}</p>
              <p className="acard-title">Loan Type: {loan.loanType}</p>
              <p className="acard-title">Loan Amount: {loan.loanAmount}</p>
              <strong>
                <p className="acard-title">Repayment Months: {loan.loanRepaymentMonth}</p>
              </strong>
              <p className="acard-title">
                Image URL: <a href={loan.imageUrl} target="_blank" rel="noopener noreferrer">Click</a>
              </p>
              <strong>
                <p className="acard-title">Status: {loan.loanStatus}</p>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLoans;
