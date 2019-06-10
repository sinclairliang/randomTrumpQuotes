import React from "react";

class Quotes extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getRandomQuote}>
        <button>Get Random Quote</button>
      </form>
    );
  }
}

export default Quotes;
