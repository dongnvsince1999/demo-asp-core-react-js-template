import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import utils from '../../utils/utils';

const Router = () => {
  const UserLayout = utils.getRoute('/user').component;
  const AppLayout = utils.getRoute('/dashboard').component;
  const Home = utils.getRoute('/').component;

  return (
    <Switch>
      <Route path="/user" render={(props: any) => <UserLayout {...props} />} />
      <ProtectedRoute path="/dashboard" render={(props: any) => <AppLayout {...props} exact />} />
      <Route path="/" exact render={(props: any) => <Home {...props} />} />
    </Switch>
  );
};

export default Router;
