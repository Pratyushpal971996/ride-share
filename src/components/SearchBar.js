import React from 'react';
import TextField from "@material-ui/core/TextField";
import './UserCard.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { source: '', destination: '' };
  }

  onFormSubmit = () => {
    this.props.onSubmit(this.state.source, this.state.destination);
  }

  render() {
    return (
      <div className="sourceDestinationForm">
        <form onFormSubmit={this.onFormSubmit}>
          <div className="checkdivparent">
            <div className="checkdiv">
              <TextField
                id="standard-full-width"
                label="Start From"
                style={{ margin: 8 }}
                placeholder="enter start location"
                margin="normal"
                size="medium"
                className="textfield"
                value={this.state.source}
                onChange={e => this.setState({ source: e.target.value }, this.onFormSubmit)}
                InputLabelProps={{
                  shrink: true,
                  size: "medium"
                }}
              />
            </div>

            <div className="checkdiv">
              <TextField
                id="standard-full-width"
                label="Destination"
                style={{ margin: 8 }}
                placeholder="enter destination"
                margin="normal"
                className="textfield"
                value={this.state.destination}
                onChange={e => this.setState({ destination: e.target.value }, this.onFormSubmit)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;