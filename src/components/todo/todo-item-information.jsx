import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useState } from 'react';
import { memo } from 'react';



function comparePrevPropWithNextProps(prevProps, nextProps) {
    return prevProps.item.title === nextProps.item.title && prevProps.item.id === nextProps.item.id;
}


const TodoItemInformation = ({item}) => {
    const [isChecked , setIsChecked] = useState(item.finished) ;

    const CheckboxComponent = 
     <Checkbox checked={item.finished} onChange={e => {item.finished = !item.finished ; setIsChecked(!isChecked)}}/>

    return(
        <div>
        <FormControlLabel control={CheckboxComponent} label={item.title} />
        <br></br>
        {item.createdAt}
    </div>
    ) ;
}

export default memo(TodoItemInformation , comparePrevPropWithNextProps) ;