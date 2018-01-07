// import React from "react";
import React, { Component } from "react";
import "./Main.css";
import Friends from "../friends.json";
import FriendCard from "../FriendCard/FriendCard";

// RecipeList renders a bootstrap list item
//export const RecipeList = props => <ul className="list-group">{props.children}</ul>;

class Main extends Component {

   state = {
    Friend: [],
    id: '',
    image: ''
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Friend = this.state.Friends.filter(friend => Friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Friends });
  };

    render() {
      return (
        <main class="container">
            {this.state.friends.map(friend => (
              <FriendCard
                removeFriend={this.removeFriend}
                id={friend.id}
                name={friend.name}
                image={friend.image}
              />
            ))}
        </main>
      );
    }
}


export default Main;  