import { Route, Switch, Redirect } from 'react-router-dom';
import SignIn from './components/SignIn';
import Home from './components/Home';

export const routes = (
  <Switch>
    <Route path="/signin" component={SignIn} />
    <Route path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);