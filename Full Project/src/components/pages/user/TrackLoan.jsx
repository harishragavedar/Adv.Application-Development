import  { useState } from 'react';
import '../../../assets/css/TrackLoan.css'
import Navbar from '../../services/Navbar';

const TrackLoan = () => {
  const [loanNumber, setLoanNumber] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your logic here to handle the search using the loanNumber state
    console.log(`Searching for loan number: ${loanNumber}`);
  };

  return (
    <>
    <Navbar/>
    <div className="page-container">
      <div className="loan-tracker-container">
        <h1 className="tracker-header">Track My Loans</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={loanNumber}
            onChange={(e) => setLoanNumber(e.target.value)}
            placeholder="Enter Loan Number"
            required
            className="loan-input"
            />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default TrackLoan;