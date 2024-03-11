
import { Avatar, Card, CardContent } from "@mui/material";
import './profile.css';

const AdminProfile = () => {
  return (
    <div>
    <Card className="user-profile-card">
      <CardContent className="user-details">
        <div className="user-profile">
          <Avatar src="./broken-image.jpg" sx={{ width: 300, height: 300 }} className="avatar"/>
          <div className="my-info">
          <p><strong>First Name:</strong> John</p>
          <br></br>
          <p><strong>Last Name:</strong> Doe</p>
          <br></br>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <br></br>
          <p><strong>Address:</strong> 123 Main St, City, Country</p>
          <br></br>
          <p><strong>Phone Number:</strong> +1234567890</p>
          </div>
          </div>
          <h2 className="my-name">John Doe</h2>
      </CardContent>
    </Card>
    </div>
  );
};

export default AdminProfile;
