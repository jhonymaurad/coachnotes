import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

async function getMatches() {
  const resp = await axios.get('/api/matches');
  console.log(resp.data);
}

getMatches();

class App extends Component {
  render() {
    return (
      <div className="App">
        hello world
      </div>
    );
  }
}

export default App;
