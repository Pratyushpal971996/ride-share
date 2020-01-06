import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import UserList from './UserList';
import Header from './Header';
import './UserCard.css';

class App extends React.Component {
  state = { filteredUser: [], originDummyToBeDeleted : '' };

  onSearchSubmit = (org, dest) => {
    this.setState({originDummyToBeDeleted : origin});
    axios.get('http://localhost:3001/posts',{
      params : {origin : org, destination : dest}
    }).then(response => {
      this.setState({
        filteredUser: response.data
      })
    });
  }

  render() {
    return (
      <div className="quick-ride">
        <Header heading={window.location.pathname} />
        <div><SearchBar onSubmit={this.onSearchSubmit} /></div>
        <div><UserList lists={this.state.filteredUser} /></div>
      </div>
    );
  }
}

export default App;