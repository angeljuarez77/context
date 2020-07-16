import React from 'react';
import Secondgen from './Secondgen';

class Firstgen extends React.Component {
  render() {
    return (
      <div>
        <h1>Firstgen component</h1>
        <Secondgen />
      </div>
    )
  }
}

export default Firstgen;
