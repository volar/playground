import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import getImageUrl from '../utils/getImageUrl';
import people from '../data/scientistData';

export default function ScientistList() {
  const [filter, setFilter] = useState<string>('all'); // Initial filter state

  // Function to handle filter change
  const handleFilterChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setFilter(newValue);
  };

  // Filter the scientists based on the selected filter
  const filteredScientists = filter === 'all' ? people : people.filter((person) => person.profession === filter);

  return (
    <Container>
      <Navigation />
      <Tabs value={filter} onChange={handleFilterChange} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" value="all" />
        <Tab label="Chemists" value="chemist" />
        <Tab label="Mathematician" value="mathematician" />
        <Tab label="Astrophysicist" value="astrophysicist" />
      </Tabs>
      <List>
        {filteredScientists.map((person) => (
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
      <Footer />
    </Container>
  );
}
