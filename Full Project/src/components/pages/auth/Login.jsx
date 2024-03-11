import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../../assets/css/login.css';
import { setAuthentication, setRole, setToken, setUserEmail } from '../../redux/authSlice';
import { login } from '../../services/auth';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginEmailError, setLoginEmailError] = useState('');
  const [loginPasswordError, setLoginPasswordError] = useState('');
  const navigate=useNavigate();
  const dispatch = useDispatch()


  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
    setLoginEmailError('');
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
    setLoginPasswordError('');
  };

  const validateLoginEmail = () => {
    if (!loginEmail.includes('@')) {
      setLoginEmailError('Email must contain @.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      setLoginEmailError('Invalid email format.');
      return false;
    }

    return true;
  };

  const validateLoginPassword = () => {
    // Password should be at least 8 characters
    if (loginPassword.length < 8) {
      setLoginPasswordError('Password must be at least 8 characters.');
      return false;
    }
    return true;
  };


  const handleLoginSubmit =async (e) => {
    e.preventDefault();

    if (validateLoginEmail() && validateLoginPassword()) {
      console.log('Valid email and password for login. Submitting the form...');
      const form = {
        email:loginEmail,
        password:loginPassword
      }
      console.log(form);
      await login(form).then((res)=>{
        console.log(res.data.access_token);
        console.log(res);
        console.log(loginEmail);
        dispatch(setUserEmail(loginEmail));
        dispatch(setAuthentication(true));
        dispatch(setToken(res?.data?.access_token));
        dispatch(setRole(jwtDecode(res?.data?.access_token).role));
        navigate((jwtDecode(res?.data?.access_token).role === 'USER') ? '/uhome' : '/ahome');
      }).catch((error)=>console.log(error));
    }
  };

  return (
    <div id="bk">
    <section className={`wrapper`}>
      <div className="form signup">
        <header>Login</header>
        <form onSubmit={handleLoginSubmit}>
          <input type="text" placeholder="Email address" value={loginEmail} onChange={handleLoginEmailChange} required />
          {loginEmailError && <span className="error">{loginEmailError}</span>}
          <input type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPasswordChange} required />
          {loginPasswordError && <span className="error">{loginPasswordError}</span>}
          <div className='alcc'><Link to="/forgot"><span>Reset Password!</span></Link></div>
          <input type="submit" value="Login" />
          <div className='already_acc'>New user? <Link to="/signup">Create Account</Link></div>
        </form>
      </div>
    </section>
    </div>
  );
};

export default Login;