import  { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import img from "../assets/detail-rice-plant.jpg"


function Signup() {
  const [email, setEmail] = useState("");
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleSubmit = async (event) => {

    event.preventDefault();
    const data = {
      email,
      name:user,
      password,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      

      // Handle the response, e.g., redirect to a different page
      console.log(response.data);
      navigate('/Login');

    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error during signup:', error);
    }
  };



  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
    // phonenumber: '',
    // password: '',
    // cpassword: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSignup = async (e) => {
  //   e.preventDefault();

  //   try {
      // const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);

      // Handle successful signup, e.g., redirect or display a success message
      // console.log('Signup successful:', response.data);
      // navigate('/Login');

      // Redirect or perform any additional actions here
    // } catch (error) {
      // Handle signup failure, e.g., display an error message
  //     console.error('Signup failed:', error.message);
  //   }
  // };

  return (
    <div>
      <img className='signimgg' src={img}></img>


        <div className="container">
          <form className='signu' onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="txt_field">
              <input type="text" name="name" value={user} onChange={(e) => setUsername(e.target.value)} required />
              <span></span>
              <label>Name</label>
            </div>
            <div className="txt_field">
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required />
              <span></span>
              <label>Email</label>
            </div>
            {/* <div className="txt_field">
              <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
              <span></span>
              <label>Phone number</label>
            </div> */}
            <div className="txt_field">
              <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
              <span></span>
              <label>Password</label>
            </div>
            {/* <div className="txt_field">
              <input type="password" name="cpassword" value={formData.cpassword} onChange={handleChange} required />
              <span></span>
              <label>Confirm Password</label>
            </div> */}
            
            <center><button className='signbutttr' type="submit">Signup</button></center>
            
            <div className="signup_link">
              Have an Account? <Link to={"/Login"}>Login Here</Link>
            </div>
          </form>
        </div>
      {/* </body> */}
    </div>
  );
}

export default Signup;
