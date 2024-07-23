import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(272.5deg, #003055 0%, #034A81 100.67%)', 
      padding: '20px 0', 
      textAlign: 'center' 
    }}>
       <Link href="/" passHref>
      <Typography 
        variant="h6" 
        component="div" 
        sx={{ mb: 2, mt: 2, color: '#418CFB', display: 'inline-block', padding: '5px 10px', borderRadius: '5px', fontWeight: 'bold',
        }}
      >
        MMDB
      </Typography>
      </Link>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', mb: 2 }}>
        <Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>About</Link>
        <Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>Terms of Use</Link>
        <Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>Privacy Policy</Link>
        <Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>Help</Link>
      </Box>
      <Typography variant="body2" sx={{ color: '#D1D5DB', mb: 2 }}>
        ©2024 MMDB. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
