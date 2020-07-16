import React from 'react';
import './App.css';
import Firstgen from './components/Firstgen';

export const UsernameContext = React.createContext('Angel');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsernameContext.Provider value="Angel">
          <Firstgen />
        </UsernameContext.Provider>
      </header>
    </div>
  );
}

export default App;