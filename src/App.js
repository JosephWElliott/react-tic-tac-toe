import React from 'react';
import './static/style/main.css';
import './static/style/main.css';
import TicTacToe from './TicTacToe'; // Import TicTacToe component

class App extends React.Component {
  render() {
    return (
      <>
        <div id="article">
          <h1>Good Luck!</h1>
          <div>
            <p>“Java is to JavaScript what Car is to Carpet.”</p>
            <p>— Chris Heilmann</p>
          </div>
        </div>
        <TicTacToe /> {/* Add TicTacToe component */}
      </>
    );
  }
}

export default App;
