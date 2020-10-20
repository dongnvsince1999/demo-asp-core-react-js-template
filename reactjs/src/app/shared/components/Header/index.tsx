import './index.less';

import * as React from 'react';

import { Avatar, Badge, Dropdown, Icon, Menu } from 'antd';

import { isGranted, L } from 'shared/lib/abpUtility';
import LanguageSelect from '../LanguageSelect';
import { Link } from 'react-router-dom';

import profilePicture from 'assets/images/user.png';
// import Logout from 'components/Logout';

export interface IHeaderProps {
  collapsed?: any;
  toggle?: any;
}

const userDropdownMenu = (
  <Menu>
    {/* for logout logic */}
    <Menu.Item key="2">
      <Link to="/logout">
        <Icon type="logout" />
        <span> {L('Logout')}</span>
      </Link>
    </Menu.Item>
  </Menu>
);

export class Header extends React.Component<IHeaderProps> {
  render() {

    //code for menu item

    return (
      <div className='header-nav-container' >

        <div className="header">
          {window.location.pathname.substring(0, 5) === "/admin" ?
            <div style={{ textAlign: 'left' }} >
              <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
            </div> :
            <Link to="/">
              <div style={{ width: "30px", height: "30px", background: "#c4c4c4" }} onClick={() => { }} >Logo</div>
            </Link>
          }
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'right' }} >
            <LanguageSelect /> {' '}
            <Dropdown overlay={userDropdownMenu} trigger={['click']}>
              <Badge style={{}} count={3}>
                <Avatar style={{ height: 24, width: 24 }} shape="circle" alt={'profile'} src={profilePicture} />
              </Badge>
            </Dropdown>
          </div>
        </div>

        <div className="navbar">
          <div style={{ display: "flex" }}>
            <div style={{ padding: '0px 8px 0px 8px' }} >Việc làm</div>
            <div style={{ padding: '0px 8px 0px 8px' }} >Phỏng vấn</div>
            <div style={{ padding: '0px 8px 0px 8px' }} >Công ty</div>
            <div style={{ padding: '0px 8px 0px 8px' }} >Nhà tuyển dụng</div>
            <Link style={{ padding: '0px 8px 0px 8px' }} to="/job-type">
              Demo
           </Link>
          </div>

          <div style={{ display: "flex" }}>
            {
              (isGranted('Pages.Roles') && isGranted('Pages.Tenants') && isGranted('Pages.Users')) &&
              <Link style={{ padding: '0px 8px 0px 8px' }} to="/admin">
                Quản trị
           </Link>
            }
            <Link style={{ padding: '0px 8px 0px 8px' }} to="/admin/job-type">
              Demo_permission
           </Link>
          </div>
        </div >
      </div >
    );
  }
}

export default Header;
