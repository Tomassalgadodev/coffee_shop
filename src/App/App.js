import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';


const App = () => {
  return (
    <React.Fragment>
      <Route exact path='/' render={() => {
        return (
          <>
            <Header />
            <NavBar />
            <PhotoCarousel />
          </>
        )
      }}>
      </Route>
    </React.Fragment>
  );
}

export default App;
