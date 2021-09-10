import React from "react";
import "./App.css";
class PopUpExplainCards extends React.Component {
  render() {
    return (
      <div className="modal-pop-up">
        <div className="modal-content">{this.props.desc}</div>
        <button className="close-popUp">close</button>
      </div>
    );
  }
}

export default PopUpExplainCards;
