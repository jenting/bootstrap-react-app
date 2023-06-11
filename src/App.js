import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ShxtTable from './ShxtTable';
import Subpage from './Subpage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to='/application' />} />
          <Route exact path="/application" Component={ShxtTable} />
          <Route path="/application/:name" Component={Subpage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
