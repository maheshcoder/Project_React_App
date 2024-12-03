import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

const LogoPage = () => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/details');
  };

  return (
    <Box
      onDoubleClick={handleDoubleClick}
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)',
        animation: 'fadeIn 2s ease-in-out',
      }}
    >
      <Box>
        <img src="logo.png" alt="Logo" style={{ width: '80%', borderRadius: '15px' }} />
        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            textAlign: 'center',
            marginTop: 2,
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          Welcome to Our App
        </Typography>
      </Box>
    </Box>
  );
};

export default LogoPage;
