import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDownList({
  placeholder,
  dropDownItems,
  filter,
  setFilter,
}) {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{placeholder}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="filteration"
        onChange={handleChange}
      >
        <MenuItem key={`drop-down-item-none`} value={'none'}>
          None
        </MenuItem>

        {dropDownItems.map((dropDownItem, index) => (
          <MenuItem key={`drop-down-item-${index}`} value={dropDownItem.value}>
            {dropDownItem.option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
