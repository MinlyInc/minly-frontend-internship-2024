import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import GenreMenu from '@/components/drop-down/menu';
import { useRouter } from 'next/navigation';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  paddingTop: '2px',
  color: 'rgba(105, 117, 134, 1)',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
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

export default function Header() {
  const router = useRouter();

  const handleNavigate = (path) => {
    router.push(path);
  };


  return (

    <AppBar position="static" sx={{
      display: 'flex',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      height: '72px',
      justifyContent: 'center',
    }}>
      <Toolbar>

        <Typography
          variant="h5"
          noWrap
          component="div"
          onClick={() => handleNavigate('/')}
          sx={{
            display: { xs: 'none', sm: 'block' },
            color: 'rgba(65, 140, 251, 1)',
            fontFamily: 'Rubik',
            fontWeight: 700,
            marginLeft: '9%',
            cursor: 'pointer',
          }}
        >
          MMDB
        </Typography>

        <Typography
          onClick={() => handleNavigate('/')}
          noWrap
          component="div"
          sx={{ marginLeft: '61px', display: { xs: 'none', sm: 'block' }, color: 'black', cursor: 'pointer' }}
        >
          Home
        </Typography>

        <Typography component="div" sx={{
          marginLeft: '34px',
          flexGrow: 1,
          marginBottom: '1%',
        }}>
          <GenreMenu />
        </Typography>

        <Search
          sx={{
            marginRight: '9%',
            borderRadius: '60px',
            border: '1px solid rgba(229, 229, 229, 1)',
            width: '227px',
            height: '48px',

          }}>
          <SearchIconWrapper>
            <SearchIcon sx={{ height: '20px', width: '20px', color: 'rgba(105, 117, 134, 1)' }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>


      </Toolbar>

    </AppBar>
  );
}
