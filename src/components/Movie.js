import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const Movie = ({ movie }) => {

const starIcon = '/images/starIcon.jpg'; 

return (
    <Card sx={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="344"
        width = "256"
        image={movie.poster}
        alt={movie.title}
        sx={{ objectFit: 'cover', margin: '2px' }}
      />

     <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <img src={starIcon} alt="star icon" style={{ height: 20, marginRight: 5 }} />
          <Typography variant="body2" color="textSecondary" fontWeight="bold">
            {movie.rating}
          </Typography>
        </div>
        <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Movie;
