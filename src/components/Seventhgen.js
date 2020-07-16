import React from 'react';

class Seventhgen extends React.Component {
  constructor(props) {
    super(props)
    
  }
  
  render() {
    return (
      <div>
        <h1>Your username is {this.props.name}</h1>
      </div>
    )
  }
}

export default Seventhgen;
