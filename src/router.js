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
        <Route path="/details" exact component={details} />
        <Route path="/movie/more/:title" exact component={More} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
