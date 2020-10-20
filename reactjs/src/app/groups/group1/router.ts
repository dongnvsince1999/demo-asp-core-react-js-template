
import LoadableComponent from 'app/shared/components/Loadable'
import { IRouter } from 'app/shared/components/Router/router.config';

const Group1NavbarRouter: Array<IRouter> =
    [
        {
            path: '/job-type',
            exact: true,
            name: 'job-type',
            permission: '',
            title: 'Loại công việc',
            component: LoadableComponent(() => import('./scenes/JobTypeList/JobTypeList')),
            showInNavbar: "left",
        },
        {
            path: '/admin/job-type',
            exact: true,
            name: 'job-type',
            permission: 'Pages.JobType', // can co quyen truy cap quyen, neu khong co quyen ma dang nhap se ra trang 401, neu chua dang nhap thi yeu cau dang nhap
            title: 'Quản lý loại công việc',
            component: LoadableComponent(() => import('./scenes/JobTypeList/JobTypeList')), //path của Layout
            showInNavbar: "right", //khong show neu no la 1 subdomain (none), show ben trai => left, ben phai => right
        },
        
    ]
export default Group1NavbarRouter;

