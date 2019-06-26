import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import details from './components/details';
import login from './components/login';
import register from './components/register';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/details" exact component={details} />
				<Route path="/login" exact component={login} />
				<Route path="/register" exact component={register} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
