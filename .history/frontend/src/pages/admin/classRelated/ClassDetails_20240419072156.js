import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography, Tab, IconButton, Paper, Grid, Divider, Card, CardContent, Modal } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
    },
}));

const ClassDetails = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null); // To store the selected subject

    const handleViewDetails = (subject) => {
        setSelectedSubject(subject);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Other code remains the same

    return (
        <>
            {/* Other JSX code */}
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="class-details-modal"
                aria-describedby="class-details-description"
            >
                <Box className={classes.modal}>
                    <Typography variant="h4" gutterBottom>
                        Class Details
                    </Typography>
                    {selectedSubject && (
                        <Grid container spacing={2}>
                            {/* Display class details here */}
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Subject Name: {selectedSubject.name}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Subject Code: {selectedSubject.code}
                                </Typography>
                                {/* Add more class details as needed */}
                            </Grid>
                        </Grid>
                    )}
                </Box>
            </Modal>
        </>
    );
};

export default ClassDetails;
