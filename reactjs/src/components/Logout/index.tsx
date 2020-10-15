import * as React from 'react';

import AuthenticationStore from '../../stores/authenticationStore';
import Stores from '../../stores/storeIdentifier';
import { inject } from 'mobx-react';

export interface ILogoutProps {
  authenticationStore?: AuthenticationStore;
}

@inject(Stores.AuthenticationStore)
class Logout extends React.Component<ILogoutProps> {
  componentDidMount() {
    this.props.authenticationStore!.logout();
    console.log("logout");
    // window.location.href = '/';
  }

  render() {
    // co
    return window.location.href = '/';
  }
}

export default Logout;
