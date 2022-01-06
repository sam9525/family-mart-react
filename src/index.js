import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container/app/Home';
import Mall from './container/app/Mall'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'


const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Mall" element={<Mall />} />
    </Routes>
    </React.StrictMode>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
