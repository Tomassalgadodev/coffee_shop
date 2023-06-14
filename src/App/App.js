import React from 'react';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import InfoBody from '../InfoBody/InfoBody';

const App = () => {
  return (
    <React.Fragment>
      <Route exact path='/' render={() => {
        return (
          <>
            <Header />
            <NavBar />
            <PhotoCarousel />
            <InfoBody />
          </>
        )
      }}>
      </Route>
    </React.Fragment>
  );
}

export default App;
