import React from "react";
import "./App.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      types: this.props.types,
      name: "",
    };
  }

  flip = () => {
    this.setState({
      flipped: true,
    });
    console.log(this.props.name, "name on flip");

    let objOfCard = {
      name: this.props.name,
      src: this.props.src,
      key: this.props.key,
    };
    this.props.onFlipped(objOfCard);
  };

  render() {
    return (
      <div className="container">
        <div
          onClick={this.flip}
          className={`card${this.state.flipped ? "-flipped " : ""}`}
        >
          <div className="front">
            <img
              src="./cards/back.jpeg"
              alt=""
              width="90px"
              height="120px"
            ></img>
          </div>
          <div className="back">
            <img
              src={this.props.src}
              alt={this.props.key}
              width="90px"
              height="120px"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
