import React from "react";

class Quotes extends React.Component {
  render() {
    return (
      <div className="box" style={{
        marginTop: 20,
        marginBottom: 20
      }}>
        <div className="media">
          <div className="media-left">
            <img
              className="is-rounded"
              src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_bigger.jpg"
              alt="Image"
            />
          </div>
          <div className="media-content">
            {this.props.tag && <p>Tag: {this.props.tag}</p>}
            {this.props.value && (
              <p>
                <strong>Donal Trump</strong> <small>@realDonaldTrump</small>{" "}
                <br />
                {this.props.value}
              </p>
            )}
            {this.props.tweet_url && (
              <a href={this.props.tweet_url}>Visit Source</a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Quotes;
