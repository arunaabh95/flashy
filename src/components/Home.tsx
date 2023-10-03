import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Header from './Header';
import { Container } from '@mui/material';
import { ContainerWrapper } from '../styles/common';

const Home: React.FC = () => {
  // Sample data for current decks (replace with your actual data)
  const currentDecks = [
    { id: 1, name: 'Deck 1', description: 'Description for Deck 1' },
    { id: 2, name: 'Deck 2', description: 'Description for Deck 2' },
    // Add more decks as needed
  ];

  return (
    <div className="home">
      <Header />
      <ContainerWrapper>
      <Container>
        <Link to="/create-deck">
          <Button variant="contained" color="primary">
            Create New Deck
          </Button>
        </Link>
      </Container>
      </ContainerWrapper>

      <ContainerWrapper>
      <Typography variant="h5">My Current Decks</Typography>
      <Grid container spacing={2}>
        {currentDecks.map((deck) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={deck.id}>
            <div className="deck-card">
              <Typography variant="h6">{deck.name}</Typography>
              <Typography variant="body2">{deck.description}</Typography>
            </div>
          </Grid>
        ))}
      </Grid>
      </ContainerWrapper>
    </div>
  );
};

export default Home;
