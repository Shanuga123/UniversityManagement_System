import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Typography, Tab, IconButton, Paper, Grid, Divider, Card, CardContent } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f0f0f0', // Example background color
        padding: theme.spacing(3),
        borderRadius: theme.spacing(1),
    },
    tabLabel: {
        fontWeight: 'bold',
        fontSize: '1rem',
    },
    card: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
    },
    cardTitle: {
        marginBottom: theme.spacing(2),
    },
    addButton: {
        marginRight: theme.spacing(2),
    },
    deleteButton: {
        marginLeft: theme.spacing(2),
    },
}));

const ClassDetails = () => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            {/* Tabs */}
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Class Details
                </Typography>
                {/* Class Details Section */}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                            Class Details
                        </Typography>
                        <Grid container spacing={2}>
                            {/* Display class details here */}
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom>
                                    Class Name: Example Class
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Number of Subjects: 5
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    Number of Students: 30
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
                {/* Subjects Section */}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                            Subjects List
                        </Typography>
                        {/* Display subjects list here */}
                    </CardContent>
                </Card>
                {/* Students Section */}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                            Students List
                        </Typography>
                        {/* Display students list here */}
                    </CardContent>
                </Card>
                {/* Teachers Section */}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom className={classes.cardTitle}>
                            Teachers
                        </Typography>
                        {/* Display teachers list here */}
                    </CardContent>
                </Card>
            </Container>
            {/* Popup */}
        </Box>
    );
};

export default ClassDetails;
