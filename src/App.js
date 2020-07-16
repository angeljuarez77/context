import React from 'react';
import './App.css';
import Firstgen from './components/Firstgen';

export const UsernameContext = React.createContext("youngThugger")

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <UsernameContext.Provider value="youngThugger">
        <Firstgen />
        </UsernameContext.Provider>
      </header>
    </div>
  );
}
}

export default App;
