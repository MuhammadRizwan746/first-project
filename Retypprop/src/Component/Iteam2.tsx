import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Todoitem2: React.FC = () => {
  return (
    <Grid container spacing={1} className="container">
      <Grid item xs={4}>
        <Typography>GO TO UNIVERSITY</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>11/1/2024</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button variant="contained" color="error">DELETE</Button>
      </Grid>
    </Grid>
  );
}

export default Todoitem2;
