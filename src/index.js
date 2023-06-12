import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import logo from './assets/CrownLogoPlain.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/hxg1yhc.css"
        />
        <title>The Crown</title>
      </Helmet>
      <App />
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
