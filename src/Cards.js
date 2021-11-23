import React from "react";
import Card from "./card";
import cards from "./card.json";
import "./App.css";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      showCards: true,
      CardsFomPyramid: [],
      countFromPyramid: 0,
      countFromThreeCards: 0,
    };
  }

  handleFlippedCard = (value) => {
    let newArrFromPyramid = [];
    newArrFromPyramid = this.state.CardsFomPyramid.slice();
    newArrFromPyramid.push(value);

    this.setState({
      CardsFomPyramid: newArrFromPyramid,
      countFromPyramid: this.state.countFromPyramid + 1,
    });

    this.props.onRecivedCards(
      this.state.CardsFomPyramid,
      this.state.countFromPyramid
    );
  };

  render() {
    return (
      <div className="start-reading-cards">
        <div className={this.state.showCards ? "show" : ""}>
          {this.state.cards.map((item) => (
            <Card
              onFlipped={this.handleFlippedCard}
              types={this.props.typeReading}
              src={item.src}
              key={item.name}
              name={item.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
