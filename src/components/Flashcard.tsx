import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type {FlashcardResponse} from '../types/type';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 300px; /* Set your desired width here */
  margin: 10px; /* Adjust the margin for spacing between cards */
  background-color: ${(props) => props.color} !important;
`;

export interface FlashcardProps {
  content: FlashcardResponse;
  color: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ content, color }) => {
  return (
    <StyledCard color={color}>
      <CardContent>
        <Typography variant="body1">{content.title as string}</Typography>
        {content.image && content.image.length > 0 && (
          <img
            src={content.image as string}
            alt="Flashcard"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
        <p> {content.description} </p>
      </CardContent>
    </StyledCard>
  );
};

export default Flashcard;
