import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import Diocese from "./Components/Diocese/Diocese";
import Region from "./Components/Region/Region";
import Observe from "./Components/Observe/Observe";
import Actual from "./Components/Actual/Actual";
import storeRow from './Components/Store/StoreRow';

const App = () => {
  return (
    <div className="app">
        <Header store={storeRow}/>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/diocese' component={Diocese}/>
                <Route exact path='/region' component={Region}/>
                <Route exact path='/observe' component={Observe}/>
                <Route exact path='/actual' component={Actual}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
