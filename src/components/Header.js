import React from 'react';

class Header extends React.Component {
    
  render () {
    var head = {
      "/login": "LOGIN TO APP",
      "/register": "REGISTER TO APP",
      "/riders": "PICK A RIDER"
    }

    return (
        <div className="header">
          <i className="fa fa-automobile" style={{fontSize:36}}>   {head[this.props.heading]} </i>
        </div>
    );
  }
}

export default Header;