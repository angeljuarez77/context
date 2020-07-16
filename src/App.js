import React, { Component } from 'react';
import './App.css';
import Firstgen from './components/Firstgen';

export const UsernameContext = React.createContext({ name: "Angel", lastName: "Juarez"});

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <UsernameContext.Provider value={ {name: "Angel from app.js", lastName: "Juarez"} }>
            <Firstgen />
          </UsernameContext.Provider>
        </header>
      </div>
    );
  }
}


export default App;
