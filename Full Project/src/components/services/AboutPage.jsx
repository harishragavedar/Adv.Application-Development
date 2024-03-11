import { useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import '../../assets/css/AboutPage.css';
import Navbar from './Navbar';
import i1 from '../../assets/images/croploan.jpg';
import i2 from '../../assets/images/drought.jpg';
import i3 from '../../assets/images/equipment.jpg';
import i4 from '../../assets/images/livestock.jpeg';

const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the current slide index
            setCurrentSlide((prevSlide) => (prevSlide + 1) % 4); // Assuming 4 images in the carousel
        }, 3000); // Change slide every 5 seconds (5000 milliseconds)

        return () => clearInterval(interval); // Cleanup function to clear the interval
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <div>
            <Navbar />
            <div className='cont-abt'>
                <div className="abt-page">
                    <div className="carousel">
                        <img src={i1} alt="Slide 1" style={{ display: currentSlide === 0 ? 'block' : 'none' }} />
                        <img src={i2} alt="Slide 2" style={{ display: currentSlide === 1 ? 'block' : 'none' }} />
                        <img src={i3} alt="Slide 3" style={{ display: currentSlide === 2 ? 'block' : 'none' }} />
                        <img src={i4} alt="Slide 4" style={{ display: currentSlide === 3 ? 'block' : 'none' }} />
                    </div>
                    <div className="vision-mission">
                        <h2>Vision & Mission</h2>
                        <div className="vmcard">
                            <h3>Vision</h3>
                            <p>Our vision statement goes here. This is a brief statement describing the desired future state or long-term goal of the organization.</p>
                        </div>
                        <div className="vmcard">
                            <h3>Mission</h3>
                            <p>Our mission statement goes here. This is a statement outlining the purpose, values, and core objectives of the organization.</p>
                        </div>
                    </div>

                    <h2>Our Features</h2>
                    <div className="feature-cards">
                        <div className="fcard">
                            <h3>Feature 1</h3>
                            <p>Description of Feature 1</p>
                        </div>
                        <div className="fcard">
                            <h3>Feature 2</h3>
                            <p>Description of Feature 2</p>
                        </div>
                        <div className="fcard">
                            <h3>Feature 3</h3>
                            <p>Description of Feature 3</p>
                        </div>
                    </div>

                    <h2>Testimonials</h2>
                    <Testimonial />
                </div>
            </div>
        </div>
    );
}

export default About;
