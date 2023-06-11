import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Subpage = () => {
  const { name } = useParams();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Subpage
          </Typography>
        </Toolbar>
      </AppBar>
      <h2>Application name: {name}</h2>
      {/* Add content specific to the subpage */}
    </div>
  );
};

export default Subpage;
