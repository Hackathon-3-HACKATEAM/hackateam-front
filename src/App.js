import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch} from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Search from './components/SearchBar/Search';
import Mappy from './components/Map/Map';


const App = () => {
  return(
    <div className="App">
      <Router>
        <Navbar />

        <div className='App-content'>

          <Route path="/">
            <Mappy />
          </Route>

          <Route path = "/about">
            <About />
          </Route>

        </div>

      </Router>

      <Footer />
    </div>
  );
}

  

export default App;
