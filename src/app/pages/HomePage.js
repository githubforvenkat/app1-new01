import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <h1>My Notes</h1>
      <List>
        <ListItem>
          <ListItemText primary="My First Note" />
        </ListItem>
        <ListItem>
          <ListItemText primary="My Second Note" />
        </ListItem>
        <ListItem>
          <ListItemText primary="My Third Note" />
        </ListItem>
      </List>
    </div>
  );
};

export default HomePage;
