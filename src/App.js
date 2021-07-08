import React from 'react';
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Switch, Redirect } from 'react-router-dom'
import './App.css';
import './App2.css';
//import  "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import   "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home  from './components/Home';
import About  from './components/About';
import Service  from './components/Service';
import Contact  from './components/Contact';
import Navbar  from './components/Navbar';

function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Navbar/>
    <Switch>
         <Route path="/" exact component={() => <Home />} />
         <Route path="/about" exact component={() => <About />} />
         <Route path="/service" exact component={() => <Service />} />
         <Route path="/contact" exact component={() => <Contact />} />
         <Redirect to="/" />
        </Switch>
        
      </Router>
    </div>
    </>
  );
}

export default App;
