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
import FarmersStats from './components/Stats/FarmersStats'


const App = () => {
  return(
   
    <div className="App">
       <Router>
        <Navbar />
         <div className='App-content'>
          <Switch>
           <Route exact path="/" component={Mappy}/>
           <Route path = "/about" component={About}/>
          </Switch>
         </div>
       
        <Footer />
      </Router>
    </div>
    
  );
}

  

export default App;
