import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const dropDownItems = [
  {option : 'Date' , value: 'releaseDate'},
  {option : 'Rating' , value: 'averageRating'},
]


export default function SortOptionsDropDown({sortBy , setSortBy}) {
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={sortBy}
          onChange={handleChange}
        >
          <MenuItem value="none">
            <em>None</em>
          </MenuItem>
          {dropDownItems.map((dropDownItem, index) => (
            <MenuItem key={`drop-down-item-${index}`} value={dropDownItem.value}>
              {dropDownItem.option}
            </MenuItem>
          ))}

        </Select>
      </FormControl>
    </div>
  );
}
