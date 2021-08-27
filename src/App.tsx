import React, { useEffect, useState } from 'react';
import './App.css';
import { ICard } from './iCard';
import CardComponent  from "./CardComponent";

function App() {
  //create state to hold onto data we want to display to user
  const [cardsFound, setCardsFound] = useState<ICard[]>([]);
  const [cardSearch, setCardSearch] = useState('');

  // api call const searchForRecipes async await
  
  const searchForMagicCards = async (query: string): Promise<ICard[]> => {
    const result = await fetch(`https://api.magicthegathering.io/v1/cards?name=${query}`);
    return (await result.json()).cards;
  }

  const search = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.querySelector('#searchText') as HTMLInputElement;  //demonstrating how to set type to query selectors etc. 
    setCardSearch(input.value);
  }

  useEffect(() => {
    (async () => {
      const query = encodeURIComponent(cardSearch);
      if(query) {
        console.log(query)
        const response = await searchForMagicCards(query);
        console.log(response)
        setCardsFound(response);
      }
      })()
  }, [cardSearch]); //this is a dependency - only calls the useEffect if cardSearch state is updated 'listens to state' 

  return (
    <div className="App">
      <h1>Magic Card Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)}>
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      {cardSearch} && <p>Results for { cardSearch }...</p>

      <div className="card-container">
        {cardsFound.length &&
          cardsFound.map(card =>
            (<CardComponent key={card.id} card={card} />)
          )}
      </div>
    </div>
  );
}

export default App;
