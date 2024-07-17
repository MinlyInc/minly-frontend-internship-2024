import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

const Movie = ({ movie }) => {

const starIcon = '/images/starIcon.jpg'; 

return (
  <Link href={`/movie/${movie.id}`} passHref>
    <Card sx={{ 
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'scale(1.07)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.2)'
          },
     }}>
      <CardMedia
        component="img"
        height="464"
        width = "278"
        image={movie.poster}
        alt={movie.title}
        sx={{ objectFit: 'cover', margin: '0px' }}
      />

     <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
          <img src={starIcon} alt="star icon" style={{ height: 20, marginRight: 5 }} />
          <Typography variant="body2" color="textSecondary" fontWeight="bold">
            {movie.avgRating}
          </Typography>
        </div>
        <Typography variant="h6" component="div" fontWeight="bold" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.releaseYear}
        </Typography>
      </CardContent>
    </Card>
  </Link>
  );
};

export default Movie;
