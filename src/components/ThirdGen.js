import React from 'react';
import Fourthgen from './Fourthgen';

class Thirdgen extends React.Component {
  render() {
    return (
      <div>
        <h1>Thirdgen component</h1>
        <Fourthgen />
      </div>
    )
  }
}

export default Thirdgen;
