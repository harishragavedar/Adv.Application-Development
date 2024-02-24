import  { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios library
import './Profile.css';
import { useNavigate } from 'react-router-dom';
// import regiamge from '../assets/regiamge.jpg';

const Profile = () => {
  const navigate=useNavigate();
  // Use state hooks to manage form data
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'http://localhost:8080/registration-forms/update' with the actual endpoint where you want to send the form data
      const response = await axios.put(
        `http://localhost:8080/registration-forms/update/${formData.fullName}`,
        {
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
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
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
  };

  return (
    <div className='apply26'>
      <section className='container26'>
        <header>Update Loan</header>
        <form className='form26' onSubmit={handleSubmit}>
          {/* Your input fields with corresponding names and values */}
          <div className='input-box26'>
            <label>Full Name</label>
            <input
              type='text'
              name='fullName'
              placeholder='Enter full name'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box26'>
            <label>Email Address</label>
            <input
              type='text'
              name='email'
              placeholder='Enter email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='column26'>
            <div className='input-box26'>
              <label>Phone Number</label>
              <input
                type='number'
                name='phoneNumber'
                placeholder='Enter phone number'
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className='input-box26'>
              <label>Birth Date</label>
              <input
                type='date'
                name='birthDate'
                placeholder='Enter birth date'
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='input-box26'>
            <label>Gender</label>
            <input
              type='text'
              name='gender'
              placeholder='Enter your gender'
              value={formData.gender}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-box26 address26'>
            <label>Address</label>
            <input
              type='text'
              name='streetAddress'
              placeholder='Enter street address'
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
            <div className='column26'>
              <input
                type='text'
                name='city'
                placeholder='Enter your city'
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className='column262'>
              <input
                type='text'
                name='region'
                placeholder='Enter your region'
                value={formData.region}
                onChange={handleChange}
                required
              />
              <input
                type='number'
                name='postalCode'
                placeholder='Enter postal code'
                value={formData.postalCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <br></br>
          <div className='input-box262'>
            <label>Proof Details</label>
            <br></br>
            <input
              type='number'
              name='aadhaarNumber'
              placeholder='Enter Applicant Aadhaar Number'
              value={formData.aadhaarNumber}
              onChange={handleChange}
              required
            />
            <input
              type='number'
              name='panNumber'
              placeholder='Enter Applicant Pan Number'
              value={formData.panNumber}
              onChange={handleChange}
              required
            />
            <input
              type='number'
              name='applicantSalary'
              placeholder='Enter Applicant Salary'
              value={formData.applicantSalary}
              onChange={handleChange}
              required
            />
            <input
              type='number'
              name='loanAmountRequired'
              placeholder='Enter Loan Amount Required'
              value={formData.loanAmountRequired}
              onChange={handleChange}
              required
            />
            <center><button className='applbutt' type='submit'>SUBMIT</button></center>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Profile;