import React from "react";
import Cards from "./cards";
import "./App.css";
class ThreeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
      arrOfCards: [],
      count: 0,
    };
  }

  recivedCards = (arr, count) => {
    if (count === 3) {
      this.setState({
        choose: false,
      });
    }
    this.setState({
      arrOfCards: arr,
      count: count,
    });
  };

  render() {
    return (
      <div>
        {this.state.choose ? (
          <div>
            <h2 className="choose">Choose 3 Cards</h2>
            <Cards
              typeReading="three-cards"
              onRecivedCards={this.recivedCards}
            />
          </div>
        ) : (
          <div>
            <button onClick={() => this.setState({ choose: true })}>
              {" "}
              start reading
            </button>
            <div className="three-cards">
              {this.state.arrOfCards.map((item) => (
                <div className="description">
                  <img
                    src={item.src}
                    alt={item.key}
                    width="150px"
                    height="200px"
                  ></img>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ThreeCards;
