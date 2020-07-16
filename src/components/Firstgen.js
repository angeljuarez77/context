import React from 'react';
import Secondgen from './Secondgen';


class Firstgen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Firstgen stuff</h1>
        <Secondgen />
      </div>
    )
  }
}

export default Firstgen;
