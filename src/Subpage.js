import React from 'react';
import { useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Subpage = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>AT Subpage: {name}</h2>
      {/* Add content specific to the subpage */}
    </div>
  );
};

export default Subpage;
