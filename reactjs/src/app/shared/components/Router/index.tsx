import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import ProtectedRoute from 'app/shared/components/Router/ProtectedRoute';
// import Logout from 'app/shared/components/Logout';
import utils from 'shared/utils/utils'


const Router = () => {
  const Login = utils.getRoute('/login').component;
  const Home = utils.getRoute('/').component;
  
 //Route is AppLayout
 //ProtectedRoute is ManagementLayout

  return (
    <Switch>
      <Route path="/login" exact render={(props: any) => <Login {...props} />} />   
      <ProtectedRoute path="/" exact render={(props: any) => <Home {...props} />} />
    </Switch>
  );
};

export default Router;
