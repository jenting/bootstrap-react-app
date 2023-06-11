import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

const ShxtTable = () => {
  const links = [
    { id: 1, label: 'Application 1', path: '/application/1' },
    { id: 2, label: 'Application 2', path: '/application/2' },
    { id: 3, label: 'Application 3', path: '/application/3' },
    // Add more links as needed
  ];

  return (
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Label</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {links.map(link => (
          <tr key={link.id}>
            <td>{link.id}</td>
            <td>{link.label}</td>
            <td>
              <Link to={link.path}>{link.path}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ShxtTable;
