import React from "react";
import Quote from "./components/Quotes";
import SearchBar from "./components/SearchBar";
import axios from 'axios';

const API_URL_RANDOM = "https://api.tronalddump.io/random/quote";
class App extends React.Component {

  state ={
    
  }



  getRandomQuote = async (e) => {
    e.preventDefault();
    console.log("here");
    const api_call = await fetch(API_URL_RANDOM);
    const data = await api_call.json();
    console.log(data)
  }

  getQuoteOn = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const api_call = await fetch(`https://api.tronalddump.io/search/quote?query=${query}`);
    const data = await api_call.json();
    console.log(data);
    // console.log("here");
  }

  render() {
    return (
      <div>
        <Quote getRandomQuote={this.getRandomQuote}/>
        <SearchBar getQuoteOn={this.getQuoteOn} />
      </div>
    );
  }
}

export default App;
