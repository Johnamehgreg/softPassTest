import MenuItem from '@material-ui/core/MenuItem';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface Props {
    option: any;
    placeholder: string;
    
}


const CustomSelect = () => {

    const [container, setcontainer] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setcontainer(event.target.value as string);
    };
    return (
        <Box sx={{ minWidth: 120 }}>
            
            <FormControl fullWidth>
                <InputLabel  id="demo-simple-select-label">Container</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={container}
                    label="Container"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default CustomSelect