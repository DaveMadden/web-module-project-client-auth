import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import Logout from './components/Logout';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/logout" component={Logout}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/friendslist" component={FriendsList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
