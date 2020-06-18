import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import './App.css';
import Task from './components/Task'
import Search from './components/Search'

const App = () => {
  return (
    <div className="App">
      <header style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <NavLink
          to="/"
          exact
        >
          List
          </NavLink>
        <NavLink
          to="/search"
        >
          Search
        </NavLink>
      </header>
      <Switch>
        <Route
          exact
          path="/"
        >
          <Task />
        </Route>
        <Route
          path="/search"
        >
          <Search />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
