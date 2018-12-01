import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';
import PrivateDashboard from './components/PrivateDashboard';
import Auth from './Auth';
import Dashboard from './AdminPanel/Admin';
import CreateTableUI from './AdminPanel/CreateTableUI';
import Terminal from './AdminPanel/component/terminal';

import comp1 from './AdminPanel/component/main';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/logout"
              render={() => {
                Auth.signout();
                return <Redirect to="/" />;
              }}
            />
            <PrivateRoute path="/private-dashboard" component={PrivateDashboard} />
            <PrivateRoute path="/terminal" component={Terminal} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/test" component={comp1} />
            <Route path="/create" component={CreateTableUI} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
