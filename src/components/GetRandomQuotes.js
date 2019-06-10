import React from "react";

class GetRandomQuotes extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getRandomQuote}>
        <button className="button is-success is-rounded">Get Random Quote</button>
      </form>
    );
  }
}

export default GetRandomQuotes;
