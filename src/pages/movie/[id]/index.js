import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; 
import { Box, Typography, CardContent, CardMedia, Grid, Button, Card } from '@mui/material';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';


const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMovieDetails(id);
    }
  }, [id]);

  const fetchMovieDetails = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/movie/${id}`);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <Header />
      <Box sx={{ padding: '0 160px', mt: 15 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2,  }}> 
          <Link href="/" passHref>
            <Button sx={{ color: '#697586' }}>Home</Button>
          </Link>
          <Typography sx={{ color: '#003055' }}> | {movie.title}</Typography>
        </Box>
        <Box sx={{ background: '#fff', padding: '32px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ width: '400px', height: '540px' }}>
                <CardMedia
                  component="img"
                  image={movie.poster}
                  alt={movie.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ position: 'relative', paddingTop: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10.65px' }}>
                <video
                  src={movie.trailer}
                  controls
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                ></video>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
              {movie.title} <Typography variant="h5" component="span" sx={{ fontWeight: 'normal', color: '#697586' }}>
                ({movie.releaseYear})
              </Typography>
            </Typography>  
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <img src="/images/starIcon.jpg" alt="star icon" style={{ height: 20, marginRight: 5 }} />
              <Typography variant="body1" sx={{ color: 'blue' }}>{movie.avgRating} </Typography> <Typography sx={{ml:"10px"}}> Reviews</Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 1, color: '#003055' }}>
              Duration: {movie.duration}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#003055' }}>
              Genres: {Array.isArray(movie.genres) ? movie.genres.map(genre => genre.name).join(', ') : 'N/A'}
            </Typography>

            <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mb: 1, color: '#003055' }}>Overview</Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#003055' }}>{movie.overview}</Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#003055', fontWeight: 'bold' }}>
                Director: {' '}
                {movie.director ? (
                  <Typography component="span" sx={{ fontWeight: 'normal' }}>
                    {movie.director.firstName} {movie.director.lastName}
                  </Typography >
                ) : (
                  'Unknown'
                )}
              </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#003055', fontWeight: 'bold' }}>Writer: <Typography component="span" sx={{ fontWeight: 'normal' }}>{movie.writer}</Typography></Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#003055', fontWeight: 'bold' }}>Language: <Typography component="span" sx={{ fontWeight: 'normal' }}>{movie.language}</Typography></Typography>
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700, mt: 4, mb: 2, color: '#003055' }}>Cast</Typography>
           <Grid container spacing={2}>
              {movie.actors.map((actor) => (
                <Grid item key={actor.id} xs={12} md={6}>
                  <Link href={`/actor/${actor.id}`} passHref>
                    <Button sx={{
                      width: '100%',
                      height: '74px',
                      padding: '12px 54px 12px 12px',
                      borderRadius: '10px',
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      justifyContent: 'flex-start'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={actor.photo} alt={actor.name} style={{ height: '50px', marginRight: '12px', borderRadius: '50%' }} />
                        <Typography variant="body1" sx={{ color: '#003055' }}>{actor.firstName} {actor.lastName}</Typography>
                      </Box>
                    </Button>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MovieDetails;
