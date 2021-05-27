import "./App.css";
import Card from "./card";
import React from "react";
import cards from "./card.json";
//import uniqueRandom from "unique-random";
import Cards from "./Cards";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      url: [],
      arrOfCards: [],
    };
  }

  getNameCard = () => {
    const random = Math.floor(Math.random() * cards.length);
    const CardsObject = cards[random];

    cards.splice(random, 1);

    var arr = this.state.arrOfCards.slice();
    const arrNames = this.state.names.slice();
    const urlArr = this.state.url.slice();

    arr.push(CardsObject);

    arrNames.push(CardsObject.name);
    urlArr.push(CardsObject.src);

    this.setState({
      arrOfCards: arr,
      names: arr,
      url: urlArr,
    });
  };

  shuffleCards = () => {};

  render() {
    console.log(this.state.names, "names");
    return (
      <div>
        <h1> Choose 4 cards and know your future </h1>
        <div className="top-cards">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <div className="shuffle">
          <button onClick={this.shuffleCards}>Shuffle</button>
        </div>
        <div className="App">
          <Card
            onClick={this.getNameCard}
            name={this.state.names[0]}
            src={this.state.url[0]}
          />{" "}
          <Card
            onClick={this.getNameCard}
            name={this.state.names[1]}
            src={this.state.url[1]}
          />
          <Card
            onClick={this.getNameCard}
            name={this.state.names[2]}
            src={this.state.url[2]}
          />
          <Card
            onClick={this.getNameCard}
            name={this.state.names[3]}
            src={this.state.url[3]}
          />
        </div>

        <div className="text-container">
          {this.state.names.map((name) => (
            <div className="meaning-box">
              <h2>{name.name} </h2>
              <h3>{name.meaning}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
