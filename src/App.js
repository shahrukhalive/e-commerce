import React from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from "./Checkout";
// import {useStateValue} from "./StateProvider";


function App() {
  // const[{},dispatch] = useStateValue();

  // useEffect()

  return (
    // BEM 
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
            <h1>hello login</h1>
          </Route>

          <Route path = "/checkout">
            <Header/> 
            <Checkout />
          </Route> 
          <Route path = "/">
            <Header/>
            <Home/>
          </Route> 
       </Switch>
      </div>
    </Router>
  );
}

export default App;

