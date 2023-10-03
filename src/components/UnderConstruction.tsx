import React from 'react';

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Feature Under Construction</h1>
        <p style={styles.description}>
          This feature is currently under construction. Please check back later.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Background color
  },
  content: {
    textAlign: 'center' as 'center', // Specify 'center' as the type
    padding: '20px',
    backgroundColor: '#fff', // Content background color
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box shadow
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333', // Text color
  },
  description: {
    fontSize: '16px',
    color: '#666', // Text color
  },
};

export default UnderConstruction;
