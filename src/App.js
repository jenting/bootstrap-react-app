import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, Navigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ShxtTable from './ShxtTable';
import Subpage from './Subpage';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Main Page
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <Routes>
          <Route exact path="/" element={<Navigate to='/application' />} />
          <Route exact path="/application" Component={ShxtTable} />
          <Route path="/application/:name" Component={Subpage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
