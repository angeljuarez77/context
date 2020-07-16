import React from 'react';

class Seventhgen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Seventhgen component { this.props.username }</h1>
      </div>
    )
  }
}

export default Seventhgen;
