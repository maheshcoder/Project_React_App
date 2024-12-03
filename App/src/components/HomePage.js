import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#f7f7f7',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Welcome to the Home Page!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 3, textAlign: 'center' }}>
        Here's where you can find the best of what we offer.
      </Typography>
      <Button variant="contained" color="secondary" sx={{ borderRadius: '30px' }}>
        Explore More
      </Button>
    </Box>
  );
};

export default HomePage;
