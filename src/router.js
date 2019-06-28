import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import details from './components/details';
import More from './routes/more/More.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/movie/more/:title" exact component={More} />
        <Route path="/details/:id" exact component={details} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
