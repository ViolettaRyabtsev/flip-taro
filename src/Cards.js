import React from "react";
import "./App.css";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false,
    };
  }

  chosenCrad = () => {
    this.setState({
      chosen: true,
    });
  };

  render() {
    return (
      <div
        className={`top-card${this.state.chosen ? " chosen " : ""}`}
        onClick={this.chosenCrad}
      >
        <img src="./cards/back.jpeg" alt="" width="150px" height="220px"></img>
      </div>
    );
  }
}
export default Cards;
