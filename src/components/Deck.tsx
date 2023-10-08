import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DeckCategory } from '../types/type';
import { FlashcardProps} from './Flashcard';
import Flashcard from './Flashcard';

export interface DeckProps {
  name: string;
  description: string;
  category: DeckCategory,
  flashcards: Array<FlashcardProps>;
}

const Deck: React.FC<DeckProps> = ({ name, description, category, flashcards }: DeckProps) => {
  const firstCard = flashcards.length > 0 ? flashcards[0] : null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
        {firstCard && (
          <>
            <div className="flashcard">
              <Flashcard content={firstCard.content} color={firstCard.color}/>
            </div>
          </>
        )}
        <Typography variant="body2">Card Count: {flashcards.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default Deck;
