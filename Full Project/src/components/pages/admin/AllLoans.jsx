import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../services/AdminNavbar';

const AllLoans = () => {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [emailFilter, setEmailFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8181/api/v1/auth/getloan')
      .then(response => {
        setLoans(response.data);
      })
      .catch(error => {
        console.error('Error fetching loans:', error);
      });
  }, []);

  useEffect(() => {
    filterLoans();
  }, [loans, statusFilter, emailFilter, typeFilter]);

  const filterLoans = () => {
    let filtered = [...loans];

    if (statusFilter) {
      filtered = filtered.filter(loan => loan.loanStatus.toLowerCase() === statusFilter.toLowerCase());
    }
    if (emailFilter) {
      filtered = filtered.filter(loan => loan.email.toLowerCase().includes(emailFilter.toLowerCase()));
    }
    if (typeFilter) {
      filtered = filtered.filter(loan => loan.loanType.toLowerCase().includes(typeFilter.toLowerCase()));
    }

    setFilteredLoans(filtered);
  };

  return (
    <div>
      <AdminNavbar />
      
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Loans Details</h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Filter by status"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className='loan-input'
        />
        <input
          type="text"
          placeholder="Filter by email"
          value={emailFilter}
          onChange={e => setEmailFilter(e.target.value)}
          className='loan-input'
        />
        <input
          type="text"
          placeholder="Filter by type"
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
          className='loan-input'
        />
      </div>
      <div className="appliedcard-list">
        {filteredLoans.map((loan, index) => (
          <div key={index} className="appliedcard" style={{backgroundColor:'whitesmoke'}}>
            <p className="acard-title">Applicant Name: {loan.user.name}</p>
            <p className="acard-title">Application Loan Id: {loan.id}</p>
            <p className="acard-title">Application Loan Type: {loan.loanType}</p>
            <p className="acard-title">Applicant Phone No: {loan.user.phone}</p>
            <p className="acard-title">Application Email: {loan.email}</p>
            <p className="acard-title">Loan Amount: {loan.loanAmount}</p>
            <strong><p className="acard-title">Status: {loan.loanStatus}</p></strong>
            <p className='acard-title'>Image URL: <a href={loan.imageUrl} target="_blank">Click</a></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLoans;
