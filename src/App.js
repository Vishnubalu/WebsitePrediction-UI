import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Main from "./mian";
import ButtonAppBar from "./appbar";
import About from "./about";
import Home from "./home"
import Download from "./download";
import "./App.css"


function App(props) {
    return (
        <Router>
            <div className='app'>
            <ButtonAppBar/>
            <Route path="/main" component={Main}/>
            <Route path="/home" component={Home}/>
            <Route path="/download" component={Download}/>
            <Route path="/about" component={About}/>
        </div>
        </Router>

    );
}

export default App;