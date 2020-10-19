import './index.less';

import * as React from 'react';

import { Avatar, Badge, Dropdown, Icon, Menu } from 'antd';

import { L } from 'shared/lib/abpUtility';
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
      // <div className={'header-container '} style = {{justifyContent: "space-between !important", width: "100%"}}>
      <div className={'header-container'} >
        <div style={{ display: "flex" }}>
          {window.location.pathname === "/dashboard" ?
            <div style={{ textAlign: 'left' }} >
              <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.props.toggle} />
            </div> :
            <div  >
              <div style={{ width: "30px", height: "30px", background: "green" }}>Logo</div>
            </div>}

          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }} >Việc làm</div>
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }} >Phỏng vấn</div>
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }} >Công ty</div>
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }} >Nhà tuyển dụng</div>
          <div style={{ padding: '0px 8px 0px 8px', textAlign: 'center' }} >
            <Link to="/dashboard">
              Quản trị
           </Link>
          </div >
        </div>
        <div style={{ padding: '0px 8px 0px 8px', textAlign: 'right' }} >
          <LanguageSelect /> {' '}
          <Dropdown overlay={userDropdownMenu} trigger={['click']}>
            <Badge style={{}} count={3}>
              <Avatar style={{ height: 24, width: 24 }} shape="circle" alt={'profile'} src={profilePicture} />
            </Badge>
          </Dropdown>
        </div>
      </div >
    );
  }
}

export default Header;
