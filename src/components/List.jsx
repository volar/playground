import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import getImageUrl from '../utils/getImageUrl';
import { people } from '../data/scientistData';

export default function ScientistList() {
  // filter the people array to only include chemists
  // const chemists = people.filter((person) => person.profession === "chemist");

  return (
    <List>
      {people.map((person) => (
        <ListItem key={person.id}>
          <ListItemAvatar>
            <Avatar alt={person.name} src={getImageUrl(person)} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <>
                <Typography variant="h6">{person.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {person.profession} known for {person.accomplishment}
                </Typography>
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
