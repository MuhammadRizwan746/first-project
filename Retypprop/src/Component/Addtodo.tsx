import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const Addtodo: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <TextField label="Enter todo here" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={3}>
        <TextField type="date" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="success" fullWidth>ADD</Button>
      </Grid>
    </Grid>
  );
}

export default Addtodo;
