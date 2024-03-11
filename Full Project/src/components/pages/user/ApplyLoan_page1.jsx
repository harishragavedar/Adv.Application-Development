import  { useState } from 'react';
import Navbar from '../../services/Navbar';
import { applyLoan } from '../../services/auth';
import { useSelector } from 'react-redux';
import '../../../assets/css/ApplyLoan.css';

const ApplyLoan_page1 = () => {
  const email = useSelector((state) => state.auth.userEmail);
  const [formData, setFormData] = useState({
    loanType: '',
    userAadharNumber: '',
    userPanNumber: '',
    salary: '',
    loanAmount: '',
    loanRepaymentMonth: '',
    loanStatus: 'Pending',
    email: email,
    imageUrl: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData); // Just for debugging purposes
      await applyLoan(formData);
      alert('Application received. Please wait for approval.');
      // Reset the form after successful submission
      setFormData({
        loanType: '',
        userAadharNumber: '',
        userPanNumber: '',
        salary: '',
        loanAmount: '',
        loanRepaymentMonth: '',
        loanStatus: 'Pending',
        email: email,
        imageUrl: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="body22" >
        <div className="container99" style={{ paddingRight: '40px', paddingLeft: '30px' }}>
          <div className="title1">LOAN DETAILS</div>
          <form onSubmit={handleSubmit}>
            <div className="user__details" >
              <div className="input__box">
                <span className="details" style={{ paddingLeft: '0.2px', marginLeft: '-4px', border: 'none', marginTop: '15px' }}
                >Loan Type:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '10px', marginLeft: '-3px', border: 'none', marginTop: '2px' }}
                  placeholder="Enter Loan Type"
                  name="loanType"
                  value={formData.loanType}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details" style={{ marginTop: '15px' }}>Loan Amt:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '0.2px', marginLeft: '17px', border: 'none', marginTop: '5px' }}
                  placeholder="Enter Loan Amt"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details"  style={{ marginTop: '5px' }}>Applicant Aadhar:</span>
                <input
                  type="tel"
                  style={{ paddingLeft: '0.5px', marginLeft: '-40px', border: 'none' }}
                  pattern="[0-9]{12}"
                  placeholder="Enter Aadhar number"
                  name="userAadharNumber"
                  value={formData.userAadharNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details"  style={{ marginTop: '5px' }}>Applicant PAN NO:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '0.2px', marginLeft: '-2px', border: 'none' }}
                  placeholder="Enter PAN number"
                  name="userPanNumber"
                  value={formData.userPanNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details"  style={{ marginTop: '5px' }}>Applicant Salary:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '0.2px', marginLeft: '-3px', border: 'none' }}
                  placeholder="Enter Applicant Salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details"  style={{ marginTop: '5px' }}>Repayment months:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '0px', marginLeft: '3px', width: '180px', border: 'none' }}
                  placeholder="Repayment months"
                  name="loanRepaymentMonth"
                  value={formData.loanRepaymentMonth}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input__box">
                <span className="details"  style={{ marginTop: '16px' }}>Aadhar Url:</span>
                <input
                  type="text"
                  style={{ paddingLeft: '0.2px', marginLeft: '-3px', border: 'none' }}
                  placeholder="Aadhar Image Url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <br />
            <div>
              <button type="submit" className="button33">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ApplyLoan_page1;
