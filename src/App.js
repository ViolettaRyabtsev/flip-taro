import "./App.css";
import React from "react";
// import Cards from "./cards";

import axios from "axios";
import OneCard from "./oneCard";
import PyramidLove from "./PyramidLove";
import ThreeCards from "./ThreeCards";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [],
      cards: [],
      showCards: false,
      timePassed: false,
    };
  }

  flip = (e) => {
    e.preventDefault();
    this.setState({
      flipped: true,
    });
  };

  showCards = () => {
    this.setState({
      showCards: true,
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
      });
    })();
  };

  render() {
    return (
      <div className="table">
        <h1>Choose Tarot Reading type </h1>
        <Router>
          <div className="App">
            <div className="links">
              <Link className="reading-type" to="/onecard">
                <h2>"One card"</h2>
                <p>
                  to get a quick answer to your question in this
                  fortune-telling, it is enough to draw one card, in this case
                  you will receive an extremely unambiguous answer, since there
                  are no other cards that could confuse you. Fortune-telling
                  uses a deck of cards with major and minor arcana."
                </p>
                <div className="line"></div>
              </Link>
              <Link className="reading-type" to="/pyramidLove">
                <h2>"Pyramid of lover"</h2>
                <p>
                  this is fortune-telling in the senior lasso, the layout is
                  simple on the one hand, but at the same time very deep: it
                  will help you understand complex and confusing relationships,
                  find the answer to your question.
                </p>
                <div className="line"></div>
              </Link>
              <Link className="reading-type" to="/three-cards">
                {" "}
                <h2>"Three Cards"</h2>
                <p>
                  using this layout, you will receive an answer to the
                  development of the current situation. The first card will tell
                  about the past, the second - about the present, the third -
                  about the possible future.
                </p>
                <div className="line"></div>
              </Link>
            </div>
            <div className="cards-grid">
              <Routes>
                <Route path="/onecard" element={<OneCard />}></Route>
                <Route path="/pyramidLove" element={<PyramidLove />}></Route>
                <Route path="/three-cards" element={<ThreeCards />}></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
