import  { useState } from 'react';
import './Remove.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios' 
const Remove = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  let token = localStorage.getItem('token');
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.delete(
        `http://localhost:8080/registration-forms/delete/${formData.fullName}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'cache-control': 'no-cache',
          },
          // Data should be included in the 'data' property
          data: {
            fullName: formData.fullName,
          },
        }
      );
      console.log(response.data);
      navigate('/Home');

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  
    return (
      <div className='apply26g' >
        <img className='imgremve'></img>
      <section className='container26g'>
        <header>Delete Loan</header>
        <form className='form26g' onSubmit={handleSubmit}>
          {/* Your input fields with corresponding names and values */}
          <div className='input-box26g'>
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
          <button className="msg"type="submit">Delete Loan</button>
        </form>
      </section>
    </div>
  );
};
  export default Remove;