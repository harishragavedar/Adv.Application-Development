import back from '../../../assets/images/adminh.jpg';
import Footer from "../../services/Footer";
import AdminNavbar from '../../services/AdminNavbar';

function AdminHome() {
    const containerStyle = {
        padding: '50px',
        color: '#333',
        minHeight: '100vh',
        backgroundImage: `url(${back})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
       
      };
    
  const textStyle = {
    color:'white',
    textAlign: 'center',
    borderRadius: '8px',
    paddingBottom:'100px'
   
  };
  return (
    <div>
    <AdminNavbar/>

      <div style={containerStyle}>
        
          <div style={textStyle}>
            <h1 >Welcome Admin!<hr></hr>Manage and oversee the loan approval processes efficiently and securely.</h1>
          </div>
         
      
      </div>
      <Footer />
    </div>
  );
}

export default AdminHome;