// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Apply.css'
// import regiamge from '../assets/regiamge.jpg'
// const Apply = () => {
//   return (
//     <div className='apply26' style={{ backgroundImage:url(${regiamge}) }} >
//          <section className="container26">
//       <header>Registration Form</header>
//       <form action="#" className="form26">
//         <div className="input-box26">
//           <label>Full Name</label>
//           <input type="text" placeholder="Enter full name" required />
//         </div>
//         <div className="input-box26">
//           <label>Email Address</label>
//           <input type="text" placeholder="Enter email address" required />
//         </div>
//         <div className="column26">
//           <div className="input-box26">
//             <label>Phone Number</label>
//             <input type="number" placeholder="Enter phone number" required />
//           </div>
//           <div className="input-box26">
//             <label>Birth Date</label>
//             <input type="date" placeholder="Enter birth date" required />
//           </div>
//         </div>
//         <div className="input-box26">
//           <label>Gender</label>
//           <input type="gender" placeholder="Enter your gender" required />
//         </div>
//         <div className="input-box26 address26">
//           <label>Address</label>
//           <input type="text" placeholder="Enter street address" required />
//           <div className="column26">
//             <input type="text" placeholder="Enter your city" required />
//           </div>
//           <div className="column262">
//             <input type="text" placeholder="Enter your region" required />
//             <input type="number" placeholder="Enter postal code" required />
//           </div>
//         </div>
//         <br></br>
//         <div className="input-box262">
//           <label>Proof Details</label>
//           <br></br>
//           <input type="number" placeholder="Enter Applicant Aadhaar Number" required />
//           <input type="number" placeholder="Enter Applicant Pan Number" required />
//             <input type="number" placeholder="Enter Applicant Salary" required />
//             <input type="number" placeholder="Enter Loan Amount Required" required />
//         </div>
//         <Link to="/Doc"><button>NEXT</button></Link>
//       </form>
//     </section>
//     </div>
//   )
// }
// export default Apply

import{ useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Apply.css';
// import regImage from '../assets/regImage.jpg';

const Apply = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    birthDate: '',
    gender: '',
    streetAddress: '',
    city: '',
    region: '',
    postalCode: '',
    aadhaarNumber: '',
    panNumber: '',
    applicantSalary: '',
    loanAmountRequired: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  let token=localStorage.getItem('token')
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'http://localhost:8080/registration-forms/submit' with the actual endpoint where you want to send the form data
      const response = await axios.post('http://localhost:8080/registration-forms/submit', {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        birthDate: formData.birthDate,
        gender: formData.gender,
        streetAddress: formData.streetAddress,
        city: formData.city,
        region: formData.region,
        postalCode: formData.postalCode,
        aadhaarNumber: formData.aadhaarNumber,
        panNumber: formData.panNumber,
        applicantSalary: formData.applicantSalary,
        loanAmountRequired: formData.loanAmountRequired,
      },
      {
        headers:{
          "Authorization":`Bearer ${token}`,
          "cache-control":'no-cache',
        }
      }
      );

      // Handle the response as needed
      console.log(response.data);
      navigate('/Home');


      // Redirect or perform other actions after successful submission
      // Example: Redirecting to /Doc after successful submission
      // history.push('/Doc');
    } catch (error) {
      // Handle error
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='apply26' >
      <section className="container26">
        <header>Registration Form</header>
        <form onSubmit={handleSubmit} className="form26">
          
<div className="input-box26">
  <label>Full Name</label>
  <input
    type="text"
    placeholder="Enter full name"
    name="fullName"
    value={formData.fullName}
    onChange={handleChange}
    required
  />
</div>
<div className="input-box26">
  <label>Email Address</label>
  <input
    type="text"
    placeholder="Enter email address"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>
<div className="column26">
  <div className="input-box26">
    <label>Phone Number</label>
    <input
      type="number"
      placeholder="Enter phone number"
      name="phoneNumber"
      value={formData.phoneNumber}
      onChange={handleChange}
      required
    />
  </div>
  <div className="input-box26">
    <label>Birth Date</label>
    <input
      type="date"
      placeholder="Enter birth date"
      name="birthDate"
      value={formData.birthDate}
      onChange={handleChange}
      required
    />
  </div>
</div>
<div className="input-box26">
  <label>Gender</label>
  <input
    type="text"
    placeholder="Enter your gender"
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
  />
</div>
<div className="input-box26 address26">
  <label>Address</label>
  <input
    type="text"
    placeholder="Enter street address"
    name="streetAddress"
    value={formData.streetAddress}
    onChange={handleChange}
    required
  />
  <div className="column26">
    <input
      type="text"
      placeholder="Enter your city"
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
    />
  </div>
  <div className="column262">
    <input
      type="text"
      placeholder="Enter your region"
      name="region"
      value={formData.region}
      onChange={handleChange}
      required
    />
    <input
      type="number"
      placeholder="Enter postal code"
      name="postalCode"
      value={formData.postalCode}
      onChange={handleChange}
      required
    />
  </div>
</div>
{/* Other input fields... */}

          <div className="input-box262">
            <label>Proof Details</label>
            <br></br>
            <input
              type="number"
              placeholder="Enter Applicant Aadhaar Number"
              name="aadhaarNumber"
              value={formData.aadhaarNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Applicant Pan Number"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Applicant Salary"
              name="applicantSalary"
              value={formData.applicantSalary}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Enter Loan Amount Required"
              name="loanAmountRequired"
              value={formData.loanAmountRequired}
              onChange={handleChange}
              required
            />
          </div>
          <center><button className='applbutt' type="submit">SUBMIT</button></center>
        </form>
      </section>
    </div>
  );
};

export default Apply;