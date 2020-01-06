import React from 'react';
import './UserCard.css';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: this.props.list,
      inactiveBgColor: "white",
      activeBgColor: "blue"
    };
  }

  boxClick = (val) => {
    this.props.activate(val);
  }

  render() {
    // alert("rerendered");
    const { unique, name, origin, dest, car, seats } = this.props;
    return (
      <div className={`user-card ${unique}`} id={unique} onClick={() => this.boxClick(unique)} style={{backgroundColor: this.props.active ? this.state.activeBgColor : this.state.inactiveBgColor}}>
        <div className="user-card-icon">
          <i className="glyphicon glyphicon-user user-icon"></i>
        </div>
        <div className="user-card-content">
          <h1>{name}</h1>
          <div>Route : <b><i>{origin} to {dest}</i></b></div>
          <div>Car : <b><i>{car}</i></b>   Seats : <b><i>{seats}</i></b></div>
        </div>
      </div>
    );
  }
}

export default UserCard;