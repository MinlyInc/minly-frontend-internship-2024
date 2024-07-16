import * as React from 'react';
import { Button, Menu, MenuItem, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import SortIcon from '@mui/icons-material/Sort';

const dropDownItems = [
  { option: 'Date', value: 'releaseDate' },
  { option: 'Rating', value: 'averageRating' },
];

// Custom styled button to match the desired shape and style
const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px', // Rounded edges
  border: '1px solid #e0e0e0', // Light gray border
  color: '#6e6e6e', // Text color
  textTransform: 'none', // Maintain the text case as is
  padding: '8px 16px', // Padding for button content
  fontSize: '16px', // Font size
  fontWeight: 'normal', // Font weight
  display: 'flex', // Flex display for icon and text alignment
  alignItems: 'center', // Vertically center the icon and text
  justifyContent: 'space-between', // Space between icon and text
}));

export default function SortOptionsDropDown({ sortBy, setSortBy }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    setSortBy(value);
    handleClose();
  };

  const getSelectedOption = () => {
    const selectedItem = dropDownItems.find(item => item.value === sortBy);
    return selectedItem ? selectedItem.option : 'Sort by';
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <StyledButton
        aria-controls="sort-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<SortIcon />} // Adding the sort icon
      >
        {getSelectedOption()}
      </StyledButton>
      <Menu
        id="sort-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem value="none" onClick={() => handleMenuItemClick('none')}>
          <em>None</em>
        </MenuItem>
        {dropDownItems.map((dropDownItem, index) => (
          <MenuItem
            key={`drop-down-item-${index}`}
            value={dropDownItem.value}
            onClick={() => handleMenuItemClick(dropDownItem.value)}
          >
            {dropDownItem.option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
