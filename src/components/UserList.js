import React from 'react';
import './UserCard.css';
import UserCard from './UserCard';
import Button from '@material-ui/core/Button';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class UserList extends React.Component {
  state = {
    selectedCard: -1,
    disableButton: true
  }

  activateCard = (selectedID) => {
    if (this.state.selectedCard > -1) {
      this.props.lists.find(x => x.id === this.state.selectedCard).active = false;
    }
    this.props.lists.find(obj => obj.id === selectedID).active = true;
    this.setState({ selectedCard: selectedID, disableButton: false });
  }

  confirmRide = () => {
    var rider = this.props.lists.find(x => x.id === this.state.selectedCard).name;
    NotificationManager.success(`${rider} is coming to pick you up`, 'RIDE CONFIRMED!');
  }
  
  render() {
    const riders = this.props.lists.map((list, index) => {
      return (
        <UserCard
          key={index}
          unique={list.id}
          name={list.name}
          origin={list.origin}
          dest={list.destination}
          car={list.car} seats={list.seats}
          active={list.active}
          activate={this.activateCard}
        />
      );
    });

    return (
      <div className="user-list">
        <div className="card">{riders}</div>
        <div>
          {this.props.lists.length && (
            <Button
              style={{
                left: 40 + "%",
                top: 92 + "%",
                width: 20 + "%",
                height: 60 + "px",
                position: "fixed",
                fontSize: 25 + "px"
              }}
              variant="contained"
              color="primary"
              className="confirm-button"
              disabled={this.state.disableButton}
              onClick={this.confirmRide}
            >
              Confirm Ride
        </Button>
          )}
        </div>
        <NotificationContainer />
      </div>
    );
  }
}

export default UserList;