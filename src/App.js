import "./App.css";
import Card from "./card";
import React from "react";
import cards from "./card.json";
import PopUpExplainCards from "./PopUp";
//import uniqueRandom from "unique-random";
import Cards from "./Cards";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      url: [],
      arrOfCards: [],
      information: [],
      showPopUp: false,
      chosen: false,
      description: [],
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

  componentDidMount = () => {
    async function getApiRequest() {
      // var options = {
      const response = await axios.get(
        `https://rws-cards-api.herokuapp.com/api/v1/cards/`
      );
      const resData = response.data.cards;
      const arr = resData.filter((obj) => obj.type === "major");
      return arr;
    }
    (async () => {
      this.setState({
        information: await getApiRequest(),
        // showPopUp: !this.state.showPopUp,
      });
    })();
  };

  handleClick = (index) => {
    this.setState({
      chosen: !this.state.chosen,
    });

    for (var i = 0; i < this.state.information.length; i++) {
      if (this.state.information[i].name === this.state.names[index].name) {
       
        this.setState({
          showPopUp: !this.state.showPopUp,
          description: this.state.information[i].name,
        });
      }
    }

    
    // console.log(this.state.description, " more desc");
    // var arr = this.state.description.slice();
    // arr.push(this.state.description);
    // this.setState({
    //   description: arr,
    // });

    return;
  };
  render() {
    console.log(this.state.names, "names");
    console.log(this.state.information, " more information");

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
          {this.state.names.map((name, index) => (
            <div className="meaning-box">
              <h2 className="name-card" onClick={() => this.handleClick(index)}>
                {name.name}{" "}
              </h2>
              {this.state.showPopUp ? (
                <PopUpExplainCards desc={this.state.description} />
              ) : null}
              <h3>{name.meaning}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
