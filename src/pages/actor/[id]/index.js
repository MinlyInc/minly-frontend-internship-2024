import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Typography, CardMedia, Grid, Button, Card } from '@mui/material';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const ActorDetails = () => {

return(
    <div>
    <Header />
    <Box  sx={{ mb: 15}}/>
    <Footer />
    </div>
);
}

export default ActorDetails; 