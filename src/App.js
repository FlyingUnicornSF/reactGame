import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav/Nav';
import friends from "./friends.json";

class App extends Component {

  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };


  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

