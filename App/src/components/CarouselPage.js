import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselPage = () => {
  return (
    <Box sx={{ background: '#fff', padding: '20px' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 3 }}>
        Image Carousel
      </Typography>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="image1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="image2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Second Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="image3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Third Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
};

export default CarouselPage;
