import React, {useEffect, useState} from 'react';
import { getTopicList } from '../backend/topics';
import { DeckProps } from './Deck';
import Flashcard, {FlashcardProps} from './Flashcard';
import type { FlashcardResponse } from '../types/type';
import { CardColor } from '../types/type';
import CircularProgress from '@mui/material/CircularProgress';
import Header from './Header';
import '../App.css';

const CreateDeck: React.FC<DeckProps> = ({name, description, category, flashcards}) => {
  // Your flashcard creation logic goes here
  const [deck, setDeck] = useState<DeckProps>({
    name: '',
    description: '',
    category: category,
    flashcards: [],
  });
  const [loading, setLoading] = useState(true); // Initial loading state
  const getRandomColor = () => {
    const colorsArray = Object.values(CardColor);
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomIndex];
  };
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response: FlashcardResponse[] = await getTopicList(name, category);
      // Populate flashcards array and assign random colors
      const flashcards: FlashcardProps[] = response.map((flashcard) => ({
        content: flashcard,
        color: getRandomColor().toString(),
      }));

      // Create the Deck
      const newDeck: DeckProps = {
        name: name,
        description: '', // You can set the description as needed
        category: category,
        flashcards: flashcards,
      };

      // Set the state with the new deck
      setDeck(newDeck);

      // Store the deck in localStorage
      /*const deckStr = localStorage.getItem('decks') || "";
      const decks = JSON.parse(deckStr) || {} 
      decks[name] = response; // Add or update the deck with the name as the key
      localStorage.setItem('decks', JSON.stringify(decks)); // Store the updated decks in localStorage*/
      setLoading(false);
      }catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
      
    };
      fetchData();
  }, [name, category]);
  return (
    <>
    <Header />
    <div className="create-deck-container"> 
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Category: {category}</h2>
      <div>
        {loading ? ( // If loading is true, show the loading spinner
          <CircularProgress />
        ) : (
          <div className="flashcard-container"> {/* Apply CSS class */}
            {deck.flashcards.map((flashcard, index) => (
              <Flashcard
                key={index}
                color={flashcard.color}
                content={flashcard.content}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default CreateDeck;
