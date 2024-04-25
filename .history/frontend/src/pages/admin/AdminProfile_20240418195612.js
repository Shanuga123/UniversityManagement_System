import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div style={styles.container}>
            <div style={styles.details}>
                <h2 style={styles.heading}>Admin Profile</h2>
                <div style={styles.info}>
                    <p style={styles.label}>Name:</p>
                    <p style={styles.value}>{currentUser.name}</p>

                    <p style={styles.label}>Email:</p>
                    <p style={styles.value}>{currentUser.email}</p>

                    <p style={styles.label}>School:</p>
                    <p style={styles.value}>{currentUser.schoolName}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    details: {
        backgroundColor: '#f9f9f9',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    info: {
        marginBottom: '20px',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#555',
    },
    value: {
        marginBottom: '15px',
        color: '#333',
    },
};
