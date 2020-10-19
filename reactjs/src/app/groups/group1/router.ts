
import LoadableComponent from 'app/shared/components/Loadable'
const Group1Router =
    [
        {
            path: '/job-type',
            exact: true,
            name: 'job-type',
            permission: '',
            title: 'Loại công việc',
            icon: '',
            component: LoadableComponent(() => import('./scenes/jobTypeList/jobTypeList')), //path của Layout
            isLayout: true,
            showInMenu: false,
        },
        {
            path: 'admin/job-type',
            exact: true,
            name: 'job-type',
            permission: '',
            title: 'Quản lý loại công việc',
            icon: '',
            component: LoadableComponent(() => import('./scenes/jobTypeList/jobTypeList')), //path của Layout
            isLayout: true,
            showInMenu: false
        }
    ]
export default Group1Router;

