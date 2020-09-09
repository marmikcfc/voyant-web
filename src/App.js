import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import ForgotPassword from './components/ForgotPassword';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={false} component={Home} path="/" exact />
          <PublicRoute restricted={true} component={LoginModal} path="/signin" exact />
          <PublicRoute restricted={true} component={RegisterModal} path="/register" exact />
          <PublicRoute restricted={true} component={ForgotPassword} path="/forgotPassword" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
