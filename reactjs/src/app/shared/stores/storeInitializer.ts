import RoleStore from 'shared/stores/roleStore';
import TenantStore from 'shared/stores/tenantStore';
import UserStore from 'shared/stores/userStore';
import SessionStore from 'shared/stores/sessionStore';
import AuthenticationStore from 'shared/stores/authenticationStore';
import AccountStore from 'shared/stores//accountStore';

//import from groups
import JobtypeStore from 'app/groups/group1/stores/jobTypeStore';

export default function initializeStores() {
  return {
    authenticationStore: new AuthenticationStore(),
    roleStore: new RoleStore(),
    tenantStore: new TenantStore(),
    userStore: new UserStore(),
    sessionStore: new SessionStore(),
    accountStore: new AccountStore(),

    //groups
    jobTypeStore: new JobtypeStore()
  };
}
