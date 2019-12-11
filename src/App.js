import React from 'react';
import logo from './logo.svg';
import './App.css';
import cards from "./cards.json"
import Nav from "./components/Nav";
import Header from "./components/Header";
import Card from "./components/Card";

class App extends React.Component {

  state = {
    cards,
    score: 0,
    topscore: 0,
    message: "Click an image to beign!",
  }

  gameOver = () => {
    // Reset card counts
    this.state.cards.forEach(card => {
      card.count = 0;
    });

    // Display incorrect message
    this.setState({message: "You guess incorrectly!"});

    // Reset score
    this.setState({score: 0});
    return true;
  }

  handleClick = id => {
    // Check how many times the card has been clicked
    this.state.cards.find((card, i) => {
      if (card.id === id) {

        // If has not been clicked
        if (cards[i].count === 0) {
          // Increase the score and count
          cards[i].count += 1;
          this.setState({score: this.state.score + 1}, function() {
            console.log(this.state.score);
          });

          // Display correct message
          this.setState({message: "You guess correctly!"});

          // increase top score if necessary
          if (this.state.score >= this.state.topscore) {
            this.setState({topscore: this.state.score +1}, function() {
              console.log(this.state.topscore);
            });
          }

          // Shuffle the cards
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;

          // If guessed incorrect
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Nav score={this.state.score} topscore={this.state.topscore} message={this.state.message} />
        <Header/>
        <div className="container mb-5 pb-5">
          <div className="row text-center">
            {this.state.cards.map(card => (
              <Card 
                image={card.url} 
                name={card.name} 
                id={card.id} 
                key={card.id}
                handleClick={this.handleClick} 
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
