import TextField from '@material-ui/core/TextField';
import React from 'react';


interface Props {
    placeholder: string;
}
const AppOutlineInput:React.FC<Props> = ({placeholder}) => {
  return (
    
                                <TextField
                                    InputLabelProps={{
                                        style: { color: '#6B7280' },
                                    }}
                                    style={{ width: '100%', borderRadius:'20px', marginBottom:'30px', color:'#6B7280' }} size='small' id="outlined-basic" label={placeholder} variant="outlined" />
  )
}

export default AppOutlineInput
