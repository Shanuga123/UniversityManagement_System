import React, { useEffect } from 'react';
import { getTeacherDetails } from '../../../redux/teacherRelated/teacherHandle';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Typography } from '@mui/material';

const TeacherDetails = () => {
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { loading, teacherDetails, error } = useSelector((state) => state.teacher);

    const teacherID = params.id;

    useEffect(() => {
        dispatch(getTeacherDetails(teacherID));
    }, [dispatch, teacherID]);

    if (error) {
        console.log(error);
    }

    const isSubjectNamePresent = teacherDetails?.teachSubject?.subName;

    const handleAddSubject = () => {
        navigate(`/Admin/teachers/choosesubject/${teacherDetails?.teachSclass?._id}/${teacherDetails?._id}`);
    };

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div >
        <div style={styles.container}>
        <h2 style={styles.heading}>Class Details</h2>
        
        
            <div style={styles.details}>
                <div style={styles.gifContainer}>
                    { <img src={ClassRoomGif} alt="User Profile GIF" style={styles.gif} /> }
                </div>
                <div style={styles.info}>
                    <div style={styles.field}>
                        <span style={styles.label}>Teacher Name: </span>
                        <span style={styles.value}>{teacherDetails?.name}</span>
                    </div>
                    <div style={styles.field}>
                        <span style={styles.label}>Class Name: </span>
                        <span style={styles.value}>{teacherDetails?.teachSclass?.sclassName}</span>
                    </div>
                    {isSubjectNamePresent ? (
                    <div style={styles.field}>
                        <span style={styles.label}> Subject Name: </span>
                        <span style={styles.value}>{teacherDetails?.teachSubject?.subName}</span>
                    </div>
                    <div style={styles.field}>
                        <span style={styles.label}> Subject Sessions:  </span>
                        <span style={styles.value}>{teacherDetails?.teachSubject?.sessions}</span>
                </div>): (
                        <Button variant="contained" onClick={handleAddSubject}>
                            Add Subject
                        </Button>
                    )
            </div>
        </div>
        </div>
                
            )}
        </>
    );
};

export default TeacherDetails;