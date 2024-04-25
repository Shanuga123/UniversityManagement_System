import React, { useState ,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/uni.jpg";
import ComputerScienceImage from '../assets/computer_science.jpg';
import GeoImage from '../assets/geo.jpg';
import TechImage from '../assets/tech.jpg';
import AgriImage from '../assets/agri.jpg';
import ManagementImage from '../assets/market.jpg';
import MedicineImage from '../assets/med.jpg';
import AppliedImage from '../assets/applied.jpg';
import SocialImage from '../assets/social.jpg';
import { BlueButton, LightPurpleButton } from '../components/buttonStyles';


const Homepage = () => {
  
  const coursesSectionRef = useRef(null);
  const welcomeSectionRef = useRef(null);
  const facultySectionRef = useRef(null);
  const contactSectionRef=useRef(null);

    const scrollToCourses = () => {
        coursesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToWelcome = () => {
      welcomeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToFaculty = () => {
    facultySectionRef.current.scrollIntoView({ behavior: 'smooth' });
};
const scrollToContact = () => {
  contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
};
    return (
        <div>
            <Navbar>
                <NavBrand to="/">Uni Management System</NavBrand>
                <NavLinks>
                <NavLink to="/" onClick={scrollToWelcome}>About</NavLink>
                <NavLink to="/" onClick={scrollToCourses}>Courses</NavLink>
                <NavLink to="/" onClick={scrollToFaculty}>Faculty</NavLink>
                <NavLink to="/" onClick={scrollToContact}>Contact</NavLink>
                </NavLinks>
            </Navbar>
            
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <img src={Students} alt="students" style={{ width: '100%', paddingTop: '60px', paddingLeft:'30px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}>
                        <StyledTitle ref={welcomeSectionRef}>
                                Welcome to Uni Management System
                            </StyledTitle>
                            <StyledText>
                                Streamline University management, class organization, and add students and faculty.
                                Seamlessly track attendance, assess performance, and provide feedback.
                                Access records, view marks, and communicate effortlessly.
                            </StyledText>
                            <StyledBox>
                                <StyledLink to="/choose">
                                    <BlueButton variant="contained" fullWidth>
                                        Login
                                    </BlueButton>
                                </StyledLink>
                                <StyledLink to="/chooseasguest">
                                    <Button variant="outlined" fullWidth
                                        sx={{ mt: 2, mb: 3, color: "#00008B", borderColor: "#00008B" }}
                                    >
                                        Login as Guest
                                    </Button>
                                </StyledLink>
                                <StyledText>
                                    Don't have an account?{' '}
                                    <Link to="/Adminregister" style={{ color: "#00008B" }}>
                                        Sign up
                                    </Link>
                                </StyledText>
                            </StyledBox>
                        </StyledPaper>
                    </Grid>
                </Grid>
                <div ref={coursesSectionRef}>
                <CoursesSection>
                <h2>Explore Our Courses</h2>
                <CoursesGrid>
                    <CourseCard style={{ backgroundImage: `url(${ComputerScienceImage})` }}>
                        <h3>Computing</h3>
                        <p>Computing courses offer a comprehensive exploration of computer science principles, programming languages, and software engineering practices. </p>
   
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${GeoImage})` }}>
                        <h3>Geomatics</h3>
                        <p>Geomatics courses focus on the study of geographic information systems (GIS), remote sensing, and cartography. Students explore techniques for acquiring, .</p>
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${TechImage})` }}>
                        <h3>Technology</h3>
                        <p>Technology courses explore the latest advancements in computing, engineering, and applied sciences, preparing students for careers at the forefront of innovation. </p>
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${AgriImage})` }}>
                        <h3>Agriculture</h3>
                        <p>Agriculture courses cover a broad range of topics related to the science, technology, and management of food and fiber production.  </p>
   
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${ManagementImage})` }}>
                        <h3>Mnagement Studies</h3>
                        <p>Management studies courses encompass the principles and practices essential for effective organizational leadership and strategic decision-making</p>
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${AppliedImage})` }}>
                        <h3>Applied Sciences</h3>
                        <p>Applied sciences involve the practical application of scientific knowledge to solve specific problems in various fields. .</p>
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${MedicineImage})` }}>
                        <h3>Medicine</h3>
                        <p>Medical science courses provide comprehensive training in various aspects of healthcare, including anatomy, physiology, pathology, and pharmacology</p>
                    </CourseCard>
                    <CourseCard style={{ backgroundImage: `url(${SocialImage})` }}>
                        <h3>Social Sciences & Languages</h3>
                        <p>Social sciences and language courses offer a multidisciplinary exploration of human behavior, societies, and cultures.
.</p>
                    </CourseCard>
                </CoursesGrid>
            </CoursesSection>
            </div>
            <div ref={facultySectionRef}>
                <FacultySection>
                    <h2>Meet Our Faculty</h2>
                    <FacultyGrid>
                        <FacultyCard>
                            <img src="faculty1.jpg" alt="Faculty 1" />
                            <h3>Dr. John Smith</h3>
                            <p>Professor of Computer Science</p>
                        </FacultyCard>
                        <FacultyCard>
                            <img src="faculty2.jpg" alt="Faculty 2" />
                            <h3>Dr. Emily Johnson</h3>
                            <p>Assistant Professor of Business Administration</p>
                        </FacultyCard>
                        <FacultyCard>
                            <img src="faculty3.jpg" alt="Faculty 3" />
                            <h3>Dr. Sarah Williams</h3>
                            <p>Associate Professor of Psychology</p>
                        </FacultyCard>
                    </FacultyGrid>
                </FacultySection>
                </div>
                <TestimonialsSection>
                    <h2>What Our Students Say</h2>
                    <TestimonialSlider>
                        <TestimonialCard>
                            <p>"The courses offered here are comprehensive and engaging. I've learned so much and feel well-prepared for my career."</p>
                            <cite>- John Doe</cite>
                        </TestimonialCard>
                        <TestimonialCard>
                            <p>"The faculty members are incredibly knowledgeable and supportive. They go above and beyond to help students succeed."</p>
                            <cite>- Jane Smith</cite>
                        </TestimonialCard>
                    </TestimonialSlider>
                </TestimonialsSection>
                
                <Footer ref={contactSectionRef}>
                    <p>&copy; 2024 Uni Management System. All rights reserved.</p>
                    <SocialIcons>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                    </SocialIcons>
                </Footer>
            
        </div>
    );
};

export default Homepage;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const NavBrand = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
  
  &:hover {
    color: #007bff;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding:0;
`;

const StyledPaper = styled.div`
  padding: 24px;
  margin-bottom: 30px; /* Adjust as needed */
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: #252525;
  font-weight: bold;
  padding-top: 50px;
  padding-left:50px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 20px; /* Adjust as needed */
`;

const StyledText = styled.p`
  margin-top: 20px; /* Adjust as needed */
  margin-bottom: 10px; /* Adjust as needed */
  letter-spacing: normal;
  line-height: normal;
  padding-left:50px;
  
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CoursesSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  padding:30px;
`;

const CourseCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, height 0.3s ease; /* Added height transition */
  background-size: cover;
  background-position: center;
  position: relative;
  height: 200px;
  display: flex; /* Use flexbox for centering */
  flex-direction: column; /* Arrange content vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  
  &:hover {
    transform: translateY(-5px);
    height: 300px; /* Adjust height to accommodate expanded content */
  }
  
  h3 {
    margin-bottom: 10px;
    color: #080A43;
    text-align: center; /* Center the text */
    position: absolute; /* Position at the top */
    top: 50%; /* Move to the middle vertically */
    left: 50%; /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust for both horizontal and vertical centering */
    width: 100%; /* Take full width */
    transition: top 0.3s ease; /* Added transition for smooth movement */
  }

  p {
    color: #fff; 
    font-weight: bold;
    display: none; /* Hide paragraph text by default */
    text-align: center; /* Center the text */
  }

  &:hover h3 {
    top: 90px; /* Move to the top when hovered */
  }

  &:hover p {
    display: block; /* Display paragraph text on hover */
  }
`;




const FacultySection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const FacultyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const FacultyCard = styled.div`
  text-align: center;
  border-radius: 8px;
 
  overflow: hidden;
  
  img {
    width: 100%;
    max-width: 200px;
    border-radius: 0%;
    border-bottom: 1px solid #ddd;
  }
  
  h3 {
    margin: 10px 0;
    color: #333;
  }
  
  p {
    margin-bottom: 20px;
    color: #666;
  }
`;

const TestimonialsSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const TestimonialSlider = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  margin: auto;
  
  p {
    margin-bottom: 15px;
    color: #333;
  }
  
  cite {
    color: #666;
  }
`;

const Footer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 30px 0;
  text-align: center;
  width: 100%;
`;



const SocialIcons = styled.div`
  margin-top: 20px;
  
  a {
    color: #fff;
    font-size: 24px;
    margin-right: 10px;
    transition: color 0.3s ease;
    
    &:hover {
      color: #007bff;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`;
