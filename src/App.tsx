import React, {useState} from 'react';
import Home from './components/Home';
import CreateDeckMeta from './components/CreateDeckMeta';
import UnderConstruction from './components/UnderConstruction';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DeckProps } from './components/Deck';
import CreateDeck from './components/CreateDeck';
import { DeckCategory } from './types/type';
import './App.css';

function App() {
  const[deckProps, setDeckProps] = useState<DeckProps>({name:"", description:"", category:DeckCategory.OTHER, flashcards:[]});
    return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-deck" element={<CreateDeckMeta setDeckProps={setDeckProps}/>} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/create-flashcard-points" element ={
              <CreateDeck name={deckProps.name} 
                                    description={deckProps.description} 
                                    category={deckProps.category} 
                                    flashcards={deckProps.flashcards} />}
              />

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
