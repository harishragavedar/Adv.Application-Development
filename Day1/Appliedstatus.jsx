import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Adminnav';
// import clas from "../assets/bluefloral.jpg";
import './Appliedstatus.css'
import Adminnav from './Adminnav';
function Appliedstatus() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.get('http://localhost:8080/registration-forms/all', {
        headers: {
          Authorization: `Bearer ${token}`,  // Corrected string interpolation
        },
      });

      console.log('Fetched data:', response.data);
      const modifiedData = response.data.slice(1);

      // Update the state with the modified data
      setServicesData(modifiedData);
      // Update the state with the fetched data
      // setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };
  return (
    <div>
       <Adminnav />
      <div className="clas">
        <div className='adminback'>
          <div className='viewback'>
            <div className="views">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Registered Uers</h2>
                </center>
                <table className='admintable'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Address</th>
                      <th>Phone Number</th>
                      <th>Aadhar Number</th>
                      <th>Pan Number</th>
                      <th>Applicant Salary</th>
                      <th>Loan Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.fullName}</td>
                        <td>{service.email}</td>
                        <td>{service.streetAddress}</td>
                        <td>{service.phoneNumber}</td>
                        <td>{service.aadhaarNumber}</td>
                        <td>{service.panNumber}</td>
                        <td>{service.applicantSalary}</td>
                        <td>{service.loanAmountRequired}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appliedstatus;