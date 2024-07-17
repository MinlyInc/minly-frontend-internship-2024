import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { Box, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MovieList from './MovieList';

const NavBar = ({ onSearch }) => {
  const [search, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (search == '') {
      return MovieList;
    } else {
      fetch(`http://localhost:3001/movies?search=${search}`)
        .then((response) => response.json())
        .then((data) => {
          onSearch(data);
        })
        .catch((error) =>
          console.error('Error fetching search results:', error)
        );
    }
  };

  return (
    <div className={styles.navbar}>
      <Box className={styles.logo}>MMDB</Box>
      <Box
        component="form"
        onSubmit={handleSearchSubmit}
        className={styles.searchContainer}
      >
        <Box>
          <SearchIcon
            style={{
              height: 20,
              width: 20,
              marginRight: 370,
            }}
          />
          <InputBase
            placeholder="Search…"
            style={{
              right: 350,
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={search}
            onChange={handleSearchChange}
          />
        </Box>
      </Box>
    </div>
  );
};

export default NavBar;
