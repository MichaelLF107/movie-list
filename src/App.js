import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home/Home';
import UserSelect from './pages/UserSelect/UserSelect';
import Settings from './pages/Settings/Settings';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UserSelect />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}