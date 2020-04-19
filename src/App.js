import React, { Component } from "react";
import TeamCard from "./components/TeamCard";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Navbar from './components/Navbar';
import teams from "./teams.json";
import Footer from "./components/Footer";
import Swal from "sweetalert2";

// Shuffle the cards
function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  // Set the state
  state = {
    teams,
    currentScore: 0,
    topScore: 0,
    message: "",
    clicked: []
  };

  // Set the click handler for when user clicks on the card
  clickHandler = id => {
    let instructionsText = document.getElementById("instructions");
    instructionsText.textContent = "";
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({
        clicked: this.state.clicked.concat(id),
      });
    } else {
      this.Reset();
    }
  };


  // Handle the increment that adds one each time a different card is clicked
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    if (newScore === 10) {
      this.setState({
        currentScore: 0,
        clicked: []
      }, function () {
        this.setState({
          clicked: [],
        })
      });
      Swal.fire("Congratulations! You win!");
      this.setState({
      });
    }
    this.handleShuffle();
  };

  // Reset the score to 0
  Reset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    Swal.fire("Sorry, better luck next time!");
    this.setState({
    });
    this.handleShuffle();
  };

  // Reset by clicking Navbar title
  NavReset = (e) => {
    e.preventDefault();
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  // Handle the shuffling of cards
  handleShuffle = () => {
    let shuffledCards = shuffleCards(teams);
    this.setState({ teams: shuffledCards });
  };

  // Render the components
  render() {
    return (
      <div>
        <Navbar
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.teams.map(teams => (
            <TeamCard
              clickHandler={this.clickHandler}
              handleShuffle={this.handleShuffle}
              key={teams.id}
              id={teams.id}
              image={teams.image}
              name={teams.name}
              stadium={teams.stadium}
              worldseries={teams.worldseries}
            />
          ))}

        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default App;
