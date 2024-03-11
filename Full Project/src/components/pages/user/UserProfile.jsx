import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../assets/css/uprofile.css';
import { useSelector } from "react-redux";

const UserProfile = () => {
  const [isEditing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const email = useSelector((state) => state.auth.userEmail);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8181/api/v1/user/get/${email}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [email]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(`http://localhost:8181/api/v1/user/editProfile/${email}`, userData);
      console.log('Profile updated successfully:', response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="page">
    <div className="user-profile">
      <div className="profile-header">
        <img src="src/assets/images/admin.png" alt="User Profile" className="profile-image" />
      </div>
      <div className="profile-details">
        <div className="field">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          ) : (
            <span>{userData.name}</span>
          )}
        </div>
        <div className="field">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="text"
              value={userData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </div>
        <div className="field">
          <label>Phone Number:</label>
          {isEditing ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
            />
          ) : (
            <span>{userData.phone}</span>
          )}
        </div>
        <div className="buttons">
          {isEditing ? (
            <button onClick={handleSaveClick}>Save Changes</button>
          ) : (
            <button  onClick={handleEditClick}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
