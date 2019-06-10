import React from "react";
import Quotes from "./components/Quotes";
import GetRandomQuotes from "./components/GetRandomQuotes";
import SearchBar from "./components/SearchBar";

const API_URL_RANDOM = "https://api.tronalddump.io/random/quote";
class App extends React.Component {
  state = {
    tag: undefined,
    value: undefined,
    tweet_url: undefined,
    error: undefined
  };

  getRandomQuote = async e => {
    e.preventDefault();
    console.log("here");
    const api_call = await fetch(API_URL_RANDOM);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      tag: data.tags[0],
      value: data.value,
      tweet_url: data._embedded.source[0].url,
      error: ""
    });
  };

  getQuoteOn = async e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    const api_call = await fetch(
      `https://api.tronalddump.io/search/quote?query=${query}`
    );
    const data = await api_call.json();
    console.log(data);
    // console.log("here");
  };

  render() {
    return (
      <div className="box">
        <GetRandomQuotes getRandomQuote={this.getRandomQuote} />
        {/* <SearchBar getQuoteOn={this.getQuoteOn} /> */}
        <Quotes
          
          tag={this.state.tag}
          value={this.state.value}
          tweet_url={this.state.tweet_url}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
