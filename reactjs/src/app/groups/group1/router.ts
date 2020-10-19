
import AppLayout from 'app/shared/components/Layout/AppLayout'
import ManagementLayout from 'app/shared/components/Layout/ManagementLayout'
import jobTypeList from 'app/groups/group1/scenes/jobTypeList/jobTypeList'

//ManagementLayout:  Page with Header + Footer + Dashboard 
//AppLayout: Page with 100% width Header

const Group1Router =
    [
        { path: "/danh-sach-loai-cong-viec/", exact: true, layout: AppLayout, component: jobTypeList , permission: "USER_PERMISSION" }, //Only user can access this url
        { path: "/admin/danh-sach-loai-cong-viec", exact: true, layout: ManagementLayout,component: jobTypeList, permission: "USER_PERMISSION" },
        // { path: "/nha-tuyen-dung/", exact: true, layout: AppLayout } //Everyone can access this url.
    ]
export default Group1Router;

