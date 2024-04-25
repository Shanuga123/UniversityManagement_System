import React, { useEffect, useState } from 'react'
import { getClassStudents, getSubjectDetails } from '../../../redux/sclassRelated/sclassHandle';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Tab, Container, Typography, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { BlueButton, GreenButton, PurpleButton } from '../../../components/buttonStyles';
import TableTemplate from '../../../components/TableTemplate';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import InsertChartIcon from '@mui/icons-material/InsertChart';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import TableChartIcon from '@mui/icons-material/TableChart';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';

const ViewSubject = () => {
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch();
  const { subloading, subjectDetails, sclassStudents, getresponse, error } = useSelector((state) => state.sclass);

  const { classID, subjectID } = params

  useEffect(() => {
    dispatch(getSubjectDetails(subjectID, "Subject"));
    dispatch(getClassStudents(classID));
  }, [dispatch, subjectID, classID]);

  if (error) {
    console.log(error)
  }

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [selectedSection, setSelectedSection] = useState('attendance');
  const handleSectionChange = (event, newSection) => {
    setSelectedSection(newSection);
  };

  const studentColumns = [
    { id: 'rollNum', label: 'Roll No.', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 170 },
  ]

  const studentRows = sclassStudents.map((student) => {
    return {
      rollNum: student.rollNum,
      name: student.name,
      id: student._id,
    };
  })

  const StudentsAttendanceButtonHaver = ({ row }) => {
    return (
      <>
        <BlueButton
          variant="contained"
          onClick={() => navigate("/Admin/students/student/" + row.id)}
        >
          View
        </BlueButton>
        <PurpleButton
          variant="contained"
          onClick={() =>
            navigate(`/Admin/subject/student/attendance/${row.id}/${subjectID}`)
          }
        >
          Take Attendance
        </PurpleButton>
      </>
    );
  };

  const StudentsMarksButtonHaver = ({ row }) => {
    return (
      <>
        <BlueButton
          variant="contained"
          onClick={() => navigate("/Admin/students/student/" + row.id)}
        >
          View
        </BlueButton>
        <PurpleButton variant="contained"
          onClick={() => navigate(`/Admin/subject/student/marks/${row.id}/${subjectID}`)}>
          Provide Marks
        </PurpleButton>
      </>
    );
  };

  const SubjectStudentsSection = () => {
    return (
      <>
        {getresponse ? (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
              <GreenButton
                variant="contained"
                onClick={() => navigate("/Admin/class/addstudents/" + classID)}
              >
                Add Students
              </GreenButton>
            </Box>
          </>
        ) : (
          <>
            <Typography variant="h5" gutterBottom>
              Students List:
            </Typography>

            {selectedSection === 'attendance' &&
              <TableTemplate buttonHaver={StudentsAttendanceButtonHaver} columns={studentColumns} rows={studentRows} />
            }
            {selectedSection === 'marks' &&
              <TableTemplate buttonHaver={StudentsMarksButtonHaver} columns={studentColumns} rows={studentRows} />
            }

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
              <BottomNavigation value={selectedSection} onChange={handleSectionChange} showLabels>
                <BottomNavigationAction
                  label="Attendance"
                  value="attendance"
                  icon={selectedSection === 'attendance' ? <TableChartIcon /> : <TableChartOutlinedIcon />}
                />
                <BottomNavigationAction
                  label="Marks"
                  value="marks"
                  icon={selectedSection === 'marks' ? <InsertChartIcon /> : <InsertChartOutlinedIcon />}
                />
              </BottomNavigation>
            </Paper>

          </>
        )}
      </>
    )
  }

  const SubjectDetailsSection = () => {
    const numberOfStudents = sclassStudents.length;
  
    return (
      <div style={styles.container}>
        <div style={styles.details}>
          <h2 style={styles.heading}> Subject Details</h2>
          <div style={styles.gifContainer}>
            {/* <img src={userProfileGif} alt="User Profile GIF" style={styles.gif} /> */}
          </div>
          <div style={styles.info}>
            <div style={styles.field}>
              <span style={styles.label}> Subject Name :</span>
              <span style={styles.value}>{subjectDetails && subjectDetails.subName}</span>
            </div>
            <div style={styles.field}>
              <span style={styles.label}> Subject Code:</span>
              <span style={styles.value}>{subjectDetails && subjectDetails.subCode}</span>
            </div>
            <div style={styles.field}>
              <span style={styles.label}>Subject Sessions :</span>
              <span style={styles.value}>{subjectDetails && subjectDetails.sessions}</span>
            </div>
            <div style={styles.field}>
              <span style={styles.label}> Number of Students:</span>
              <span style={styles.value}> {numberOfStudents}</span>
            </div>
            <div style={styles.field}>
              <span style={styles.label}>Class Name :</span>
              <span style={styles.value}>{subjectDetails && subjectDetails.sclassName && subjectDetails.sclassName.sclassName}</span>
            </div>
            {subjectDetails && subjectDetails.teacher &&
              <div style={styles.field}>
                <span style={styles.label}>Teacher Name :</span>
                <span style={styles.value}> {subjectDetails.teacher.name}</span>
              </div>
            }
          </div>
        </div>
        {!subjectDetails.teacher &&
          <GreenButton variant="contained" onClick={() => navigate("/Admin/teachers/addteacher/" + subjectDetails._id)}>
            Add Subject Teacher
          </GreenButton>
        }
      </div>
    );
  };
  
  return (
    <>
      {subloading ?
        < div > Loading...</div >
        :
        <>
          <Box sx={{ width: '100%', typography: 'body1', }} >
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} sx={{ position: 'fixed', width: '100%', bgcolor: 'background.paper', zIndex: 1 }}>
                  <Tab label="Details" value="1" />
                  <Tab label="Students" value="2" />
                </TabList>
              </Box>
              <Container sx={{ marginTop: "3rem", marginBottom: "4rem" ,padding:}}>
                <TabPanel value="1" sx={{ p: 0 }}>
                  <SubjectDetailsSection />
                </TabPanel>
                <TabPanel value="2" sx={{ p: 0 }}>
                  <SubjectStudentsSection />
                </TabPanel>
              </Container>
            </TabContext>
          </Box>
        </>
      }
    </>
  )
}

export default ViewSubject
const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(to right, #455a64, #607d8b)',
    },
    details: {
        backgroundColor: '#f9f9f9',
        paddingLeft: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '700px',
        width: '100%',
        transition: 'box-shadow 0.3s ease-in-out',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    gifContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    gif: {
        maxWidth: '100%',
        height: 'auto',
    },
    info: {
        marginBottom: '20px',
    },
    field: {
        marginBottom: '15px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    label: {
        fontWeight: 'bold',
        color: '#555',
        marginRight: '10px',
        flexBasis: '30%',
    },
    value: {
        flexBasis: '70%',
        color: '#333',
    },
};
