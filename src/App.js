import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route


} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Search from './components/SearchBar/Search';
import Mappy from './components/Map/Map';


function App() {
  return(
  <Router>
  <div>
       <Navbar />
       <Route path="/">
       <Mappy />
       <Search />
       </Route>
       <Route path = "/about">
       <About />
       </Route>
       <Footer />

  </div>
  </Router>
  );
}

  

export default App;
