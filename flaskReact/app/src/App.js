import React from 'react';
import { TodoPage } from './Pages/todo';
import { Show } from './Pages/show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
        <Switch>
          <Route exact path='/'> 
            <TodoPage/>
          </Route>
          <Route path='/:id'> 
            <Show/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
