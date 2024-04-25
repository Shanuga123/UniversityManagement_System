import { useSelector } from 'react-redux';

const AdminProfile = () => {
    const { currentUser } = useSelector((state) => state.user);

    return (
        <div style={styles.container}>
            <div style={styles.details}>
                <h2 style={styles.heading}>Admin Profile</h2>
                <div dangerouslySetInnerHTML={{ __html: `
                    <div class="tenor-gif-embed" data-postid="17669438" data-share-method="host" data-aspect-ratio="1" data-width="100%">
                        <a href="https://tenor.com/view/queen-mara-mara-animated-cartoon-girl-gif-17669438">Queen Mara Mara Sticker</a> from
                        <a href="https://tenor.com/search/queen+mara-stickers">Queen Mara Stickers</a>
                    </div>
                    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
                ` }} />
                <div style={styles.info}>
                    <div style={styles.field}>
                        <span style={styles.label}>Name:</span>
                        <span style={styles.value}>{currentUser.name}</span>
                    </div>
                    <div style={styles.field}>
                        <span style={styles.label}>Email:</span>
                        <span style={styles.value}>{currentUser.email}</span>
                    </div>
                    <div style={styles.field}>
                        <span style={styles.label}>School:</span>
                        <span style={styles.value}>{currentUser.schoolName}</span>
                    </div>
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
        height: '100vh',
        background: 'linear-gradient(to right, #4CAF50, #2196F3)',
    },
    details: {
        backgroundColor: '#f9f9f9',
        padding: '30px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
        transition: 'box-shadow 0.3s ease-in-out',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
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
