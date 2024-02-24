import { useState } from 'react';
import './Adminlog.css';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminLog() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
        email,
      password,
      });
      console.log(response.data);
      if(email==="admin@gmail.com"&&password==="admin@123"){
        navigate('/Appliedstatus');
      }
      else{
        window.alert("Invalid");
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div >
      <img className='bgimgad'></img>
      <form className='adminforrr' onSubmit={handleLogin}>
        <h3><b>Login Here</b></h3>

        <label className='loginl11'>Email</label>
        <input
          className='admininp'
          type="email"
          placeholder="Enter your Username"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>

        <label className='loginl11'>Password</label>
        <input
        className='admininp'
          type="password"
          placeholder="Enter your Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>

        <center><button className='adminbutt' type="submit">Login</button></center>
        <br></br>
        {/* <center> <p>Create an account !  Sign up</p></center> */}
      </form>
    </div>
  );
}

export default AdminLog;
