import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import axios from 'axios';

export default function NativeSelectDemo({ handleChange }) {
  return (
    <Box sx={{ minWidth: 90 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort By
        </InputLabel>
        <NativeSelect
          defaultValue={'title'}
          inputProps={{
            name: 'sort',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => handleChange(e.target.value)}
        >
          <option value={'title'}>title</option>
          <option value={'averageRatings'}>Average Rating</option>
          <option value={'releaseDate'}>Release Date</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
