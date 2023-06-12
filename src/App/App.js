import React from 'react';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
const App = () => {
  return (
    <React.Fragment>
      <Route exact path='/' render={() => {
        return (
          <h1>Hello</h1>
        )
      }}>
      </Route>
    </React.Fragment>
  );
}

export default App;
