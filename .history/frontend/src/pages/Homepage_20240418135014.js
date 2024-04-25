import React, { useState, useRef } from 'react';
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
  const contactSectionRef = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollLeft = () => {
    const container = document.getElementById('testimonialSliderContainer');
    if (container) {
      const newPosition = Math.max(scrollPosition - 300, 0); // Adjust the scroll amount as needed
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
  };

  const handleScrollRight = () => {
    const container = document.getElementById('testimonialSliderContainer');
    if (container) {
      const newPosition = Math.min(scrollPosition + 300, container.scrollWidth - container.clientWidth); // Adjust the scroll amount as needed
      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      });
      setScrollPosition(newPosition);
    }
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
          <img src={Students} alt="students" style={{ width: '100%', paddingTop: '60px', paddingLeft: '30px' }} />
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
            {/* Course cards go here */}
          </CoursesGrid>
        </CoursesSection>
      </div>
      <div ref={facultySectionRef}>
        <FacultySection>
          <h2>Meet Our Faculty</h2>
          <FacultyGrid>
            {/* Faculty cards go here */}
          </FacultyGrid>
        </FacultySection>
      </div>
      <TestimonialsSection>
        <h2>What Our Students Say</h2>
        <TestimonialSliderContainer id="testimonialSliderContainer">
          <SliderButtonLeft onClick={handleScrollLeft}>{'<'}</SliderButtonLeft>
          <SliderButtonRight onClick={handleScrollRight}>{'>'}</SliderButtonRight>
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
        </TestimonialSliderContainer>
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
  padding: 0;
`;

const StyledPaper = styled.div`
  padding: 24px;
  margin-bottom: 30px;
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
  padding-left: 50px;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 20px;
`;

const StyledText = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  letter-spacing: normal;
  line-height: normal;
  padding-left: 50px;
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
  padding: 30px;
`;

const CourseCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, height 0.3s ease;
  background-size: cover;
  background-position: center;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
    height: 300px;
  }

  h3 {
    margin-bottom: 10px;
    color: #080a43;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    transition: top 0.3s ease;
  }

  p {
    color: #fff;
    font-weight: bold;
    display: none;
    text-align: center;
  }

  &:hover h3 {
    top: 90px;
  }

  &:hover p {
    display: block;
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

const TestimonialsSection = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const TestimonialSliderContainer = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const TestimonialSlider = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
  padding-bottom: 20px;
  transition: transform 0.5s ease;
  width: 100%;
  height: auto;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
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

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
`;

const SliderButtonLeft = styled(SliderButton)`
  left: 10px;
`;

const SliderButtonRight = styled(SliderButton)`
  right: 10px;
`;

export default Homepage;
