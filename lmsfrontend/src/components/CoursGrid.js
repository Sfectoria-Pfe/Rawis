import React from 'react'
import { Grid } from '@mui/material';
import CoursCard from './CoursCard';

const CoursGrid = ({ rows }) => {
  return (
    <Grid className='d-flex justify-content-center gap-3 flex-wrap'>
      {rows.map((row, index) => {
        console.log(row,"this is the row for the student")
        return (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CoursCard row={row} />
          </Grid>
        )
      })}
    </Grid>
  );
}

export default CoursGrid
