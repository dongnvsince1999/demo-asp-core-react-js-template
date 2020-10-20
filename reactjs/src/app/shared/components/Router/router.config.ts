import Group1NavbarRouter from 'app/groups/group1/router';
import LoadableComponent from '../Loadable/index';
// import 
//Maybe dashboard
export interface IRouter {
  path: string,
  exact: boolean,
  name: string,
  permission: string,
  title: string,
  component: any,
  showInNavbar: string,
}

export const userRouter: any = [
  {
    path: '/user',
    name: 'user',
    title: 'User',
    component: LoadableComponent(() => import('../Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/login',
    name: 'login',
    title: 'LogIn',
    component: LoadableComponent(() => import('app/shared/scenes/Login')),
    showInMenu: false,
  },
];

export const navRouters: Array<IRouter> =
  Group1NavbarRouter


export const managementRouters: any = [
  {
    path: '/',
    exact: true,
    name: 'home',
    permission: '',
    title: 'Home',
    icon: 'home',
    component: LoadableComponent(() => import('../Layout/AppLayout')),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: '/admin',
    name: 'admin',
    permission: '',
    title: 'Dashboard',
    icon: 'home',
    showInMenu: true,
    component: LoadableComponent(() => import('../Layout/ManagementLayout')),
    // component: LoadableComponent(() => import('app/shared/scenes/Dashboard'))

  },
  {
    path: '/admin/users',
    permission: 'Pages.Users',
    title: 'Users',
    name: 'user',
    icon: 'user',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Users'))
  },
  {
    path: '/admin/roles',
    permission: 'Pages.Roles',
    title: 'Roles',
    name: 'role',
    icon: 'tags',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Roles')),
  },
  {
    path: '/admin/tenants',
    permission: 'Pages.Tenants',
    title: 'Tenants',
    name: 'tenant',
    icon: 'appstore',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/Tenants')),
  },
  {
    path: '/admin/about',
    permission: '',
    title: 'About',
    name: 'about',
    icon: 'info-circle',
    showInMenu: true,
    component: LoadableComponent(() => import('app/shared/scenes/About')),
  },
  {
    path: '/logout',
    permission: '',
    title: 'Logout',
    name: 'logout',
    icon: 'info-circle',
    showInMenu: false,
    component: LoadableComponent(() => import('../Logout')),
  },
  {
    path: '/exception?:type',
    permission: '',
    title: 'exception',
    name: 'exception',
    icon: 'info-circle',
    showInMenu: false,
    component: LoadableComponent(() => import('app/shared/scenes/Exception')),
  },
];

export const routers = [...userRouter, ...managementRouters, ...navRouters];
