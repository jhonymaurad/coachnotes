import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Profile from './components/Profile';
import AuthForms from './components/AuthForms';
import AddMatch from './components/AddMatch';
import Footer from './components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      login: {
        username: '',
        password: ''
      },
      register: {
        username: '',
        password: '',
        password_confirmation: ''
      }
    }
  }

  handleChange(e){
    const {name , value} = e.target
    this.setState(prevState => (
      {
        login: {
          ...prevState.login,
          [name] : value
        }
      }
    ))
  }

  handleRegisterChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        register: {
          ...prevState.register,
          [name] : value
        }
      }
    ))
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={AuthForms} />
          <Route path="/profile" component={Profile} />
          <Route path="/addmatch" component={AddMatch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
