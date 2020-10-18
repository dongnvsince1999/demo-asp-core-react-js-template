import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';
import utils from '../../utils/utils';
import Logout from 'components/Logout';
// import Home from 'utils/utils'
const Router = () => {
  const UserLayout = utils.getRoute('/user').component;
  const AppLayout = utils.getRoute('/').component;
  // const ManagementLayout = utils.getRoute('/dashboard').component;
  // const Home  = utils.getRoute(/)
  return (
    <Switch>
      <Route path="/user/login" exact render={(props: any) => <UserLayout {...props} />} />
      <Route path="/logout" exact render={(props: any) => <Logout {...props} />} />
      <ProtectedRoute path="/dashboard" exact render={(props: any) => <AppLayout {...props} />} />
      {/* <ProtectedRoute path="/quan-ly-cv" exact render={(props: any) => <AppLayout {...props} />} /> */}
      
      <Route path="/" exact render={(props: any) => <AppLayout {...props} />} />
    </Switch>
  );
};

export default Router;
