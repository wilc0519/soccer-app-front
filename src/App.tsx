import React from 'react';
import logo from './logo.svg';
import './App.css';
import PositionTable from './components/PositionTable';
import PositionTableMiu from './components/PositionTableMui';


function App() {
  return (
    <div className="App">
      <header>
        <h1>Position Table</h1>
      </header>
      <body>
       <PositionTableMiu/>
      </body>
    </div>
    
  );
}

export default App;
