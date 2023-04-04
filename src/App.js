import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/item/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
