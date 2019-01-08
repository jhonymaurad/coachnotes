import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import AuthForms from './components/AuthForms';
import AddMatch from './components/AddMatch';
import Footer from './components/Footer';
import RegisterForm from './components/RegisterForm';
import ViewPlayers from './components/ViewPlayers';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthForms} />
          <Route path="/profile" component={Profile} />
          <Route path="/addmatch" component={AddMatch} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/viewPlayers" component={ViewPlayers} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
