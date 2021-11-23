import React from "react";
import "./App.css";
import Cards from "./cards";

class PyramidLove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choose: false,
      arrOfCards: [],
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({
      choose: true,
    });
  };

  recivedCards = (arr, count) => {
    if (count === 4) {
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
    console.log(this.state.arrOfCards, "count");
    return (
      <div>
        {this.state.choose ? (
          <div className="choose">
            <h2 className="choose"> Choose 4 Cards</h2>
            <Cards
              onRecivedCards={this.recivedCards}
              typeReading="pyramidLove"
            />
          </div>
        ) : (
          <div>
            <button onClick={this.handleClick}>start reading</button>
            <div className="four-cards">
              {this.state.arrOfCards.map((item) => (
                <div>
                  <img
                    src={item.src}
                    alt={item.key}
                    width="150px"
                    height="200px"
                  ></img>
                </div>
              ))}
            </div>
            {this.state.arrOfCards.map((item) => (
              <div className="description">
                <img
                  src={item.src}
                  alt={item.key}
                  width="100px"
                  height="120px"
                ></img>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default PyramidLove;
