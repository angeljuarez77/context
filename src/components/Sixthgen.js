import React from 'react';
import Seventhgen from './Seventhgen';

import { UsernameContext } from '../App';

class Sixthgen extends React.Component {
  render() {
    return (
      <div>
        <h1>Sixthgen component</h1>
        <UsernameContext.Consumer>
          { username => ( <Seventhgen username={ username } /> ) }
        </UsernameContext.Consumer>
      </div>
    )
  }
}

export default Sixthgen;
