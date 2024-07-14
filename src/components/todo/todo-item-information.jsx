import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { memo } from 'react';

const TodoItemInformation = ({ item }) => {
  const [isChecked, setIsChecked] = useState(item.finished);

  const CheckboxComponent = (
    <Checkbox
      checked={item.finished}
      onChange={(e) => {
        item.finished = !item.finished;
        setIsChecked(!isChecked);
      }}
    />
  );

  return (
    <div>
      <FormControlLabel control={CheckboxComponent} label={item.title} />
      <br></br>
      {item.createdAt}
    </div>
  );
};

export default TodoItemInformation;
