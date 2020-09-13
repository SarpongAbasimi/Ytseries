import React from 'react';
import { TodoPage } from './Pages/todo';
import { Show } from './Pages/show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
          <Route path='/show/:id'> 
            <Show/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;




























// import React from 'react';
// import { TodoPage } from './Pages/todo';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// function App() {
//   return (
//     <Router>
//         <Switch>
//           <Route path='/'> 
//             <TodoPage/>
//           </Route>
//         </Switch>
//     </Router>
//   );
// }

// export default App;
