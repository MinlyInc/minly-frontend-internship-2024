import Button from '@mui/material/Button';


const PrimaryButton = ({placeholder , onClick}) => {
    return (
        <Button variant="contained" onClick={onClick}>{placeholder}</Button>
    ); 
}

export default PrimaryButton ;