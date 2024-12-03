import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const DetailPage = () => {
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    navigate('/carousel');
  };

  return (
    <Box
      onDoubleClick={handleDoubleClick}
      sx={{
        padding: '20px',
        background: '#f0f0f0',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        animation: 'fadeIn 1.5s ease-in-out',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        More Details About Our App
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, textAlign: 'center' }}>
        Explore more features, functionalities, and other cool stuff in this app.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/carousel')}
        sx={{ padding: '10px 20px', borderRadius: '20px' }}
      >
        Go to Carousel
      </Button>
    </Box>
  );
};

export default DetailPage;
