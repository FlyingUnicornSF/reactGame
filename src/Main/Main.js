// import React from "react";
import React, { Component } from "react";
import "./Main.css";
import friends from "./friends.json";
import FriendCard from "./FriendCard/FriendCard";


class Main extends Component {

   state = {
    friends
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

    render() {
      return (
        <main class="container">
            {this.state.friends.map(friend => (
              <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                key={friend.id}
                image={friend.image}
              />
            ))}
        </main>
      );
    }
}


export default Main;  