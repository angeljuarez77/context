import React from 'react';

class Seventhgen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.name.name, this.props.name.lastName);
  }

  render() {
    return (
      <div>
        <h1>Your firstname is { this.props.name.name }</h1>
        <h1>Your lastname is { this.props.name.lastName }</h1>
      </div>
    )
  }
}

export default Seventhgen;
