import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  //create state to hold onto data we want to display to user
  const [cardsFound, setCardsFound] = useState([]);
  const [cardSearch, setCardSearch] = useState('');

  // api call const searchForRecipes async await
  
  const searchForMagicCards = async (query: string): Promise<any> => {
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
  }, [cardSearch]); //this is a dependency - only calls the useEffect if card search

  return (
    <div className="App">
      <h1>Magic Card Search App</h1>
      <form className="searchForm" onSubmit={event => search(event)}>
        <input id="searchText" type="text" />
        <button>Search</button>
      </form>
      
    </div>
  );
}

export default App;
