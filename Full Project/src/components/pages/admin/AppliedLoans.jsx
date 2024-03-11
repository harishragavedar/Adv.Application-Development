import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../assets/css/AppliedLoans.css';
import AdminNavbar from '../../services/AdminNavbar';
import { Button } from '@mui/material';

const AppliedLoans = () => {
  const [loanData, setLoanData] = useState([]);
  const [approvalStatus, setApprovalStatus] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8181/api/v1/auth/getPendingLoans')
      .then(response => {
        setLoanData(response.data); // Assuming response.data is an array of loan objects
      })
      .catch(error => {
        console.error('Error fetching loan data:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once on component mount

 
  const handleApprove = (id) => {
    axios.put('http://localhost:8181/api/v1/auth/updateLoanStatus', { loanId: id, loanStatus: 'Approved' })
      .then(() => {
        setApprovalStatus(prevState => ({
          ...prevState,
          [id]: 'Approved'
        }));
      })
      .catch(error => {
        console.error('Error approving loan:', error);
      });
  };
  
  const handleReject = (id) => {
    axios.put('http://localhost:8181/api/v1/auth/updateLoanStatus', { loanId: id, loanStatus: 'Rejected' })
      .then(()=> {
        setApprovalStatus(prevState => ({
          ...prevState,
          [id]: 'Rejected'
        }));
      })
      .catch(error => {
        console.error('Error rejecting loan:', error);
      });
  };

  return (
    <div>
      <AdminNavbar />
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Applied Loans</h1>
      <div className="appliedcard-list" >
        {loanData.map((acard, index) => (
          <div key={index} className="appliedcard" style={{backgroundColor:'white',borderRadius:'20px'}}>
            <p className="acard-title">Name:{acard.user.name}</p>
            <p className="acard-title">Phone:{acard.user.phone}</p>
            <p className="acard-title">Email:{acard.email}</p>
            <p className="acard-title">Loan Id:{acard.id}</p>
            <p className="acard-title">Loan Type:{acard.loanType}</p>
            <p className="acard-title">Aadhar Number:{acard.userAadharNumber}</p>
            <p className="acard-title">Pan Number:{acard.userPanNumber}</p>
            <p className="acard-title">Salary:{acard.salary}</p>
            <p className="acard-title">Loan Amount:{acard.loanAmount}</p>
            <p className="acard-title">Repayment Months:{acard.loanRepaymentMonth}</p>
            <p className='acard-title'>Image URL: <a href={acard.imageUrl} target="_blank">Click</a></p>
            

            {approvalStatus[acard.id] ? ( // Display status if available
              <p className='acard-title'><strong>Status: {approvalStatus[acard.id]}</strong></p>
            ) : ( // Display buttons if status is not available
              <div style={{ display: "flex", paddingLeft: "70px", paddingTop: "20px" }}>
                <div style={{ paddingRight: "50px" }}>
                  <Button
                    style={{ color: "white", backgroundColor: "green", borderRadius: "6px" }}
                    onClick={() => handleApprove(acard.id)}>Approve</Button>
                </div>
                <div>
                  <Button
                    style={{ color: "white", backgroundColor: "red", borderRadius: "6px" }}
                    onClick={() => handleReject(acard.id)}>Reject</Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedLoans;
