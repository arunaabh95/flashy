import React from 'react';
import Deck, { DeckProps } from './Deck';
import Grid from '@mui/material/Grid';

interface DeckListProps {
  decks: DeckProps[];
}

const DeckList: React.FC<DeckListProps> = ({ decks }) => {
  return (
    <Grid container spacing={2}>
      {decks.map((deck, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Deck {...deck} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DeckList;
