import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import details from './components/details';
import More from './routes/more/More.js';
import login from './components/login';
import register from './components/register';
import search from './components/search';
import searchDetails from './components/searchDetails';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/movie/more/:title" exact component={More} />
        <Route path="/details/:id" exact component={details} />
        <Route path="/details" exact component={details} />
				<Route path="/login" exact component={login} />
				<Route path="/register" exact component={register} />
				<Route path="/search" exact component={search} />
				<Route path="/searchDetails/:keyword" exact component={searchDetails} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
