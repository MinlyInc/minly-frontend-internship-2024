import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontSize: '24px', fontWeight: 600, lineHeight: '36px', textAlign: 'left' }}>
        Movie Details for ID: {id}
      </Typography>
    </Box>
  );
};

export default MovieDetails;
