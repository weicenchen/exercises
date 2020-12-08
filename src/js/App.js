import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import '../css/reset.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/netflix">Netflix</Link>
            </li>
            <li>
              <Link to="/zillow-group">Zillow Group</Link>
            </li>
            <li>
              <Link to="/yahoo">Yahoo</Link>
            </li>
            <li>
              <Link to="/modus-create">Modus Create</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/:id" children={<Child />} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

function Child() {
  let { id } = useParams();
  return (
    <div>
      <h3>THIS IS : {id} page</h3>
    </div>
  );
}

export default App;
