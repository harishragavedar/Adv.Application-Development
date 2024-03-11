import back from '../../assets/images/contact.jpg';

import Footer from './Footer';
import NavBar from "./Navbar";

function About() {
  
  const boxStyle = {
    display: 'flex',
    justifyContent: 'cover',
    margin: '30px',
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

        <div className="box1">
        <h1 id="heading1" style={{textAlign:"center",color:"black"}}>WHO WE ARE</h1>
          <div className="home">
            <marquee
              direction="up"
              height="250px" id="heading">
              AGROFUNDX is India`s apex development bank, established in 1982 under an Act 
              of Parliament to promote sustainable and equitable agriculture and rural 
              development. In its journey of more than four decades, the premier development 
              financial institution has transformed lives in Indian villages through agri-finance, 
              infrastructure development, banking technology, promotion of microfinance and 
              rural entrepreneurship through SHGs & JLGs and more. It continues to aid in nation
              building through participative financial and non-financial interventions, 
              innovations, technology and institutional development in rural areas.
              <br></br><br></br>
              The knowledge of our asset managers and economists will satisfy even 
              the most demanding customer. Experienced specialists and partners with an impeccable 
              reputation help our clients achieve their goals, implement large infrastructure, 
              industrial and energy projects virtually anywhere in the world.
            </marquee>
          </div>
        </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default About;