import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GenreMenu() {
  const [genre, setGenre] = React.useState('');

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, width: '103px' }}>
        <InputLabel id="demo-simple-select-standard-label">Genre</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={genre}
          onChange={handleChange}
          label="Genre"
          sx={{
            '&:before': {
              borderBottom: 'none',
            },
            '&:after': {
              borderBottom: 'none',
            },
            '&:hover:not(.Mui-disabled):before': {
              borderBottom: 'none',
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Action</MenuItem>
          <MenuItem value={20}>Comedy</MenuItem>
          <MenuItem value={30}>Horror</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
