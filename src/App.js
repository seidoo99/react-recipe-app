import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Recipes from './components/Recipes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router >
    <div className="App">
    <Route path='/' exact component={Home}/>
    <Route path='/Recipes' exact component={Recipes}/>
    </div>
    </Router>
  );
}

export default App;
