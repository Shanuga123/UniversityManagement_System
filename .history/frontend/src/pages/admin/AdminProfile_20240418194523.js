import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div style={styles.container}>
            <div style={styles.details}>
                <p style={styles.label}>Name:</p>
                <p style={styles.value}>{currentUser.name}</p>

                <p style={styles.label}>Email:</p>
                <p style={styles.value}>{currentUser.email}</p>

                <p style={styles.label}>School:</p>
                <p style={styles.value}>{currentUser.schoolName}</p>
            </div>
        </div>
    );
};

export default AdminProfile;

const styles = {
    container: {
        padding: '20px',
    },
    details: {
        backgroundColor: '#f4f4f4',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
    value: {
        marginBottom: '15px',
    },
};
