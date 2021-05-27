import React from "react";
import "./App.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
  }

  flip = (e) => {
    e.preventDefault();
    this.setState({
      flipped: !this.state.flipped,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div
            onClick={this.flip}
            className={`card${this.state.flipped ? " flipped " : ""}`}
          >
            <div className="front" onClick={this.props.onClick}>
              <img
                src="./cards/back.jpeg"
                alt=""
                width="250px"
                height="400px"
              ></img>
            </div>
            <div className="back">
              <img
                src={this.props.src}
                alt=""
                width="250px"
                height="400px"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
