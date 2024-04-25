// About.js

import React from 'react';
import styled from 'styled-components';
import TeamImage1 from '../assets/team1.jpg';
import TeamImage2 from '../assets/team2.jpg';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`;

const AboutList = styled.ul`
  list-style-type: square;
  padding-left: 20px;
  margin-bottom: 20px;
`;

const AboutListItem = styled.li`
  font-size: 1.2rem;
  color: #666;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TeamImage = styled.img`
  width: 48%;
  border-radius: 8px;
`;

const About = () => {
    return (
        <div>
            <AboutContainer>
                <AboutTitle>About Us</AboutTitle>
                <AboutText>
                    Welcome to Uni Management System! We are dedicated to revolutionizing the management of universities and higher education institutions. Our platform offers comprehensive solutions for streamlining administrative tasks, enhancing communication between faculty and students, and improving overall efficiency.
                </AboutText>
                <AboutText>
                    Our mission is to empower educational institutions with innovative tools and technologies that simplify complex processes, foster collaboration, and promote academic success. We strive to create a seamless and engaging learning environment for students while supporting faculty and administrators in their daily operations.
                </AboutText>
                <AboutList>
                    <AboutListItem>Efficient management of student records and academic data</AboutListItem>
                    <AboutListItem>Automated attendance tracking and grading systems</AboutListItem>
                    <AboutListItem>Interactive learning resources and virtual classrooms</AboutListItem>
                    <AboutListItem>Integrated communication channels for students, faculty, and administrators</AboutListItem>
                </AboutList>
                <AboutText>
                    At Uni Management System, we are committed to excellence and continuous improvement. Join us in shaping the future of education and unlocking the full potential of every learner.
                </AboutText>
                <ImageWrapper>
                    <TeamImage src={TeamImage1} alt="Team 1" />
                    <TeamImage src={TeamImage2} alt="Team 2" />
                </ImageWrapper>
            </AboutContainer>
        </div>
    );
};

export default Aboutpage;
