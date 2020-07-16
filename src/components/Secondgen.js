import React from 'react';
import Thirdgen from './ThirdGen';

class Secondgen extends React.Component {
  render() {
    return (
      <div>
        <h1>Secondgen component</h1>
        <Thirdgen />
      </div>
    )
  }
}

export default Secondgen;
