// import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import './Applyform.css';

const Applyform = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target); // Create a FormData object from the form
      const response = await axios.post('http://localhost:8080/api/v1/auth/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data for file uploads
        }
      });
      // Handle successful form submission
      console.log('Form submitted successfully:', response.data);
      // Optionally, you can redirect the user to another page upon successful form submission
      // window.location.href = "/success";
    } catch (error) {
      // Handle form submission failure
      console.error('Form submission failed:', error);
    }
  };

  return (
    <div className='apply26' >
      <section className="container26">
        <header>Registration Form</header>
        <form action="#" className="form26" onSubmit={handleSubmit}> {/* Add onSubmit attribute to the form */}
          <div className="input-box26">
            <label>Full Name</label>
            <input type="text" placeholder="Enter full name" name="fullName" required />
          </div>

          <div className="input-box26">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" name="email" required />
          </div>

          <div className="column26">
            <div className="input-box26">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter phone number" name="phoneNumber" required />
            </div>
            <div className="input-box26">
              <label>Birth Date</label>
              <input type="date" placeholder="Enter birth date" name="birthDate" required />
            </div>
          </div>
          {/* Add rest of the form inputs */}
          <br></br>
          <label>Documents</label>

          <div className='updoc'>
            <label className='labdoc' htmlFor="aadharFile">Upload Aadhar Card</label>
            <input className='typeupdoc' type="file" id="aadharFile" name="aadharFile" multiple />
          </div>
          <div className='updoc'>
            <label className='labdoc' htmlFor="panFile">Upload Pan Card</label>
            <input className='typeupdoc' type="file" id="panFile" name="panFile" multiple />
          </div>
          <div className='updoc'>
            <label className='labdoc' htmlFor="incomeFile">Upload Income Certificate</label>
            <input className='typeupdoc' type="file" id="incomeFile" name="incomeFile" multiple />
          </div>
          {/* End document upload section */}
          <button type="submit">Submit</button> {/* Change button type to submit */}
        </form>
      </section>
    </div>
  );
};

export default Applyform;



// // import React from 'react';
// import { Link } from 'react-router-dom';
// import './Applyform.css';
// // import regiamge from '../assets/regiamge.jpg';

// const Applyform = () => {
//   const handleSubmit = () => {
//     // Handle form submission logic here
//   };

//   return (
//     <div className='apply26' >
//       <section className="container26">
//         <header>Registration Form</header>
//         <form action="#" className="form26">
//           <div className="input-box26">
//             <label>Full Name</label>
//             <input type="text" placeholder="Enter full name" required />
//           </div>

//           <div className="input-box26">
//             <label>Email Address</label>
//             <input type="text" placeholder="Enter email address" required />
//           </div>

//           <div className="column26">
//             <div className="input-box26">
//               <label>Phone Number</label>
//               <input type="number" placeholder="Enter phone number" required />
//             </div>
//             <div className="input-box26">
//               <label>Birth Date</label>
//               <input type="date" placeholder="Enter birth date" required />
//             </div>
//           </div>
//           <div className="gender-box26">
//             <h3>Gender</h3>
//             <div className="gender-option26">
//               <div className="gender26">
//                 <input type="radio" id="check-male" name="gender" defaultChecked />
//                 <label htmlFor="check-male">male</label>
//               </div>
//               <div className="gender26">
//                 <input type="radio" id="check-female" name="gender" />
//                 <label htmlFor="check-female">Female</label>
//               </div>
//               {/* <div className="gender26">
//                 <input type="radio" id="check-other" name="gender" />
//                 <label htmlFor="check-other">prefer not to say</label>
//               </div> */}
//             </div>
//           </div>
//           <div className="input-box26 address26">
//             <label>Address</label>
//             <input type="text" placeholder="Enter street address" required />
//             <input type="text" placeholder="Enter street address line 2" required />
//             <div className="column26">
//               <input type="text" placeholder="Enter your city" required />
//             </div>
//             <div className="column262">
//               <input type="text" placeholder="Enter your region" required />
//               <input type="number" placeholder="Enter postal code" required />
//             </div>
//           </div>
//           <br></br>
//           <div className="input-box262">
//             <label>Proof Details</label>
//             <br></br>
//             <input type="number" placeholder="Enter Applicant Aadhaar Number" required />
//             <input type="number" placeholder="Enter Applicant Pan Number" required />
//             <input type="number" placeholder="Enter Applicant Salary" required />
//             <input type="number" placeholder="Enter Loan Amount Required" required />
//           </div>
//           {/* Add document upload section here */}
//           <br></br>
//           <label>Documents</label>

//           <div className='updoc'>
//             <label className='labdoc' htmlFor="aadharFile">Upload Aadhar Card</label>
//             <input className='typeupdoc' type="file" id="aadharFile" name="aadharFile" multiple />
//           </div>
//           <div className='updoc'>
//             <label className='labdoc' htmlFor="panFile">Upload Pan Card</label>
//             <input className='typeupdoc' type="file" id="panFile" name="panFile" multiple />
//           </div>
//           <div className='updoc'>
//             <label className='labdoc' htmlFor="incomeFile">Upload Income Certificate</label>
//             <input className='typeupdoc' type="file" id="incomeFile" name="incomeFile" multiple />
//           </div>
//           {/* End document upload section */}
//           <Link to={"/Home"}><button onClick={handleSubmit}>SUBMIT</button></Link>
//         </form>
//       </section>
//     </div>
//   );
// };

// export default Applyform;