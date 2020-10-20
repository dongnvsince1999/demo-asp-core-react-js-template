import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from 'app/shared/components/Router/ProtectedRoute';
import utils from 'shared/utils/utils'
import { navRouters } from './router.config';

const Router = () => {
  const Login = utils.getRoute('/login').component;
  const ManagementLayout = utils.getRoute('/admin').component;
  const AppLayout = utils.getRoute('/').component;
  const Logout = utils.getRoute('/logout').component;
  const Exception = utils.getRoute('/exception?:type').component;

  //Route is AppLayout
  //ProtectedRoute is ManagementLayout

  return (
    <Switch>

      {/* Login, logout, home */}
      <Route path="/login" exact render={(props: any) => <Login {...props} />} />
      <Route path="/logout" exact render={(props: any) => <Logout {...props} />} />
      <Route path="/" exact render={(props: any) => <AppLayout {...props} />} />

      {/* Dashboard */}
      <ProtectedRoute path="/admin" exact render={(props: any) => <ManagementLayout {...props} />} />
      <ProtectedRoute path="/admin/users" exact render={(props: any) => < ManagementLayout {...props} />} />
      <ProtectedRoute path="/admin/roles" exact render={(props: any) => < ManagementLayout {...props} />} />
      <ProtectedRoute path="/admin/tenants" exact render={(props: any) => < ManagementLayout {...props} />} />

      {/* Exception */}
      <ProtectedRoute path="/exception?:type" exact render={(props: any) => < Exception {...props} />} />

      {/* Group */}
      {navRouters.map(route =>
        route.permission ?
          <ProtectedRoute path={route.path} key={route.path} exact={route.exact} render={(props: any) => <AppLayout {...props} />} />
          :
          <Route path={route.path} key={route.path} exact={route.exact} render={(props: any) => <AppLayout {...props} />} />
      )}


    </Switch>
  );
};

export default Router;
