import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <form onSubmit={this.props.getQuoteOn}>
        <input type="text" name="query" placeholder="clinton" />
        <button>Get Quote</button>
      </form>
    );
  }
}

export default SearchBar;
