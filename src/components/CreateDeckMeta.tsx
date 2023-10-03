import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Header from './Header';
import { DeckProps } from './Deck';
import { LinkWrapper, ContainerWrapper } from '../styles/common';
import { DeckCategory } from '../types/type';
import { SelectChangeEvent } from "@mui/material";

interface Props {
  setDeckProps: React.Dispatch<React.SetStateAction<any>>; // Adjust the type accordingly
}

const CreateDeckMeta: React.FC<Props> = ({ setDeckProps }) => {
  const [deckName, setDeckName] = useState('');
  const [deckDescription, setDeckDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DeckCategory>(DeckCategory.COLLECTION);
  const enumValues = Object.keys(DeckCategory).map((key) => DeckCategory[key as keyof typeof DeckCategory]);
  const [error, setError] = useState<boolean>(true);
  const handleSelect = (event: SelectChangeEvent<DeckCategory>) => {
    const result: DeckCategory = event.target.value as DeckCategory
    setSelectedCategory(result);
  }
  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setError(true);
    if (!deckName || error) {
      e.preventDefault();
    }
    console.log("here before navigation");
    if(!error) {
      const newDeck: DeckProps = {
        name: deckName,
        description: deckDescription,
        category: selectedCategory,
        flashcards: []
      };
      setDeckProps(newDeck);
    }
  };
  const handleDeckNameChange = (e: React.ChangeEvent<HTMLTextAreaElement >) => {
    if(e.target.value.trim().length === 0) setError(true);
    else setError(false);
    setDeckName(e.target.value);
  }
  return (
    <>
    <Header />
    <ContainerWrapper>
    { error ? (<div className="error" style = {{color: "red", padding:"10px"}}>
      <p>Deck Name is necessary</p>
      </div>):
      (<></>)
    }
    <div className="create-deck-page">
      <Typography variant="h6">Create a New Deck</Typography>
      <TextField
        label="Deck Name"
        fullWidth
        value={deckName}
        onChange={handleDeckNameChange}
        style={{padding: 10}}
      />
      <TextField
        label="Deck Description"
        fullWidth
        value={deckDescription}
        onChange={(e) => setDeckDescription(e.target.value)}
        style={{padding: 10}}
      />
      <FormControl variant="outlined" style={{ minWidth: '200px', padding: '10px' }}>
        <label>Select Deck Category:</label>
        <Select
          value={selectedCategory}
          onChange={handleSelect}
          label="Deck Category"
        >
          {enumValues.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br />
      <LinkWrapper to={deckName ? "/create-flashcard-points": "/create-deck"} 
            onClick={handleButtonClick}
        >
          Start Creating flashcards
      </LinkWrapper>
      
    </div>
    </ContainerWrapper>
    </>
  );
};

export default CreateDeckMeta;
