
import UserLayout from 'components/Layout/UserLayout'
import AppLayout from 'components/Layout/AppLayout'

//UserLayout: Page without header and Footer
//DashBoardLayout:  Page with Header + Footer + Dashboard 
//AppLayout: Page with 100% width Header

const Group1Router =
    [
        { path: "/user/tao-cv/", exact: true, component: UserLayout, permission: "User" },
        { path: "/user/info",exact: true, component: UserLayout, permission: [] },


    ]
export default Group1Router;

