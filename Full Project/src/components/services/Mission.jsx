import '../../assets/css/Nav.css';
import NavBar from "./Navbar";
import Footer from "./Footer";
import back from '../../assets/images/contact.jpg'; // Import the background image

function Career() {
  
  const boxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 0, // Set margin to 0
    paddingRight: '30px', // Set padding to 0
    paddingTop:'30px',
    height: '90vh', // Set the height to cover the entire viewport
    marginBottom: '30px', // Adjust the marginBottom as needed
    position: 'relative', // Add position relative
  };

  const backgroundImageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '140%',
    backgroundImage: `url(${back})`, // Apply the background image
    backgroundSize: 'cover',
    backgroundPosition: 'cover',
    zIndex: -1, // Set a lower zIndex to place it behind the content
  };

  return (
    <div>
      <NavBar/>
      <div>
        <div data-overlay="5">
          <div id="box" style={boxStyle}>
            <div style={backgroundImageStyle}></div>
            <div className="box2">
              <div className="home">
                <h1 id="heading">Vision</h1>
                <p id="text" style={{color:"black"}}>
                  Promoting Agri-Business by encouraging institutional and private sector investments and linkages to ensure the empowerment of all farmers in the country.
                </p>
                <br/>
                <h1 id="heading">Mission</h1>
                <p id="text" style={{color:"black"}}>
                  To link small farmers to technology as well as to the markets in association with private, corporate, or cooperative sectors and, if necessary, by providing backward and forward linkages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Career;
