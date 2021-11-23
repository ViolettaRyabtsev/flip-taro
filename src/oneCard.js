import React from "react";
// import Cards from "./cards";
import cards from "./card.json";
import "./App.css";
class OneCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      start: false,
      name: "",
      meaning: "",
      src: "",
    };
  }

  handleClick = () => {
    var item =
      this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
    console.log(item, "am i here");

    this.setState({
      start: true,
      name: item.name,
      meaning: item.meaning,
      src: item.src,
    });
  };

  render() {
    console.log(this.state.cards, "cards");
    return (
      <div>
        <button onClick={this.handleClick}> start reading</button>
        {this.state.start ? (
          <div className="description">
            <img
              width="200px"
              height="300px"
              src={this.state.src}
              alt="card"
            ></img>
            <h2>{this.state.name}</h2>
            <p>{this.state.meaning}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default OneCard;
