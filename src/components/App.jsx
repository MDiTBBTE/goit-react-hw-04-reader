import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from './Loader/Loader';
import './App.css';

const AsyncReader = Loadable({
  loader: () => import('./Reader/Reader'),
  loading: Loader,
});

const App = () => (
  <Switch>
    <Route path="/reader" component={AsyncReader} />
    <Redirect to="/reader" />
  </Switch>
);

export default App;
