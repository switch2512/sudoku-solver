import React from 'react';
import './App.css';
import Sudoku from '../sudoku/sudoku.js'

class App extends React.Component {
  

  render() {
    return(
      <div>
        <h1>Sudoku Solver</h1>
        <Sudoku />
      </div>
    )
  }
}

export default App;
