import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, InputBase, IconButton, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  color: '#697586',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#697586',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#697586',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Header = ({ handleSearch }) => {
  return (  
    <Box sx={{  padding: '0 160px', mt: 15 }}>
     
    <AppBar sx={{ backgroundColor: '#ffffff', color: 'white', height: '80px' }}>
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ color: '#418CFB', flexGrow: 0.05, marginLeft: '150px',  fontWeight: 'bold' }}>
          MMDB
        </Typography>
        
        <Button color="inherit"  sx={{ color: 'black', fontWeight: 'bold', fontSize: '0.9rem', padding: '10px 20px' }}>Home</Button>
        <Box sx={{ flexGrow: 1 }} />
        <Search sx={{ marginRight: '150px' }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={handleSearch}
          />
        </Search>
      </Toolbar>
    </AppBar>
</Box>
  );
};

export default Header;
