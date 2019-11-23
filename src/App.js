import React from 'react';
import Header from './Header'
import Home from './views/Home'
import Posts from './views/Posts'
import Users from './views/Users'
import './styles/App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}



export default App;
