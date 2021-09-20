import { TextField, Grid, Input, Select, MenuItem  } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const CustomTextField = ({ name, label }) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
           <Controller 
            render={({ field }) => (
             <TextField {...field} name={name} label={label} required />
            )}
            control={control}
            fullWidth
            name={name}
            label={label}
           /> 
        </Grid>  
    )
}

export default CustomTextField
