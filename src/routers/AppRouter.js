import React from 'react';
import { Router, Route, Switch, Link, NavLink,BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Home from '../components/Home';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import DashboardPage from '../components/DashboardPage';
import Details_View_Page from '../components/Details_View_Page';

export const history = createHistory();

const AppRouter = () => (
  <BrowserRouter>
    <div>
    <Header/>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/home" component={Home} excat={true} />
        <Route path="/details" component={Details_View_Page}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
