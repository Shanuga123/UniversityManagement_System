import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/uni.jpg";
import { BlueButton, LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%', paddingTop: '60px' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
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
            <CoursesSection>
                <h2>Explore Our Courses</h2>
                {/* Add course cards or list here */}
            </CoursesSection>
            <FacultySection>
                <h2>Meet Our Faculty</h2>
                {/* Add faculty profiles or cards here */}
            </FacultySection>
            <TestimonialsSection>
                <h2>What Our Students Say</h2>
                {/* Add testimonial cards or carousel here */}
            </TestimonialsSection>
            <Footer>
                {/* Add footer content here */}
            </Footer>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  padding-bottom: 50px; /* Adjust as needed */
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
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 20px; /* Adjust as needed */
`;

const StyledText = styled.p`
  margin-top: 10px; /* Adjust as needed */
  margin-bottom: 10px; /* Adjust as needed */
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CoursesSection = styled.section`
  background-color: #f9f9f9; /* Adjust as needed */
  padding: 50px 0;
  text-align: center;
`;

const FacultySection = styled.section`
  background-color: #eaeaea; /* Adjust as needed */
  padding: 50px 0;
  text-align: center;
`;

const TestimonialsSection = styled.section`
  background-color: #f5f5f5; /* Adjust as needed */
  padding: 50px 0;
  text-align: center;
`;

const Footer = styled.footer`
  background-color: #333; /* Adjust as needed */
  color: #fff;
  padding: 30px 0;
  text-align: center;
`;
