import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


export  const FloatingActionButtons=({handleCalculateLevenshteinDistance})=> {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add" onClick={handleCalculateLevenshteinDistance}>
        <AddIcon />
      </Fab>
    </Box>
  );
}