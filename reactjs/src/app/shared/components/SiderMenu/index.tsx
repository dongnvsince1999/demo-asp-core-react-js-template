import './index.less';

import * as React from 'react';

import { Avatar, Col, Icon, Layout, Menu } from 'antd';
import { L, isGranted } from '../../lib/abpUtility';

import Logo from '../../images/abp-logo-long.png';
import { appRouters } from '../Router/router.config';

const { Sider } = Layout;

export interface ISiderMenuProps {
  path: any;
  collapsed: boolean;
  onCollapse: any;
  history: any;
}

const SiderMenu = (props: ISiderMenuProps) => {
  const { collapsed, history, onCollapse } = props;
  return (
    <Sider trigger={null} className={'sidebar'} width={256} collapsible collapsed={collapsed} onCollapse={onCollapse}>
      {collapsed ? (
        <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
          {/* <Avatar shape="square" style={{ height: 27, width: 64 }} alt={"SE347.L11.Logo"} src={"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} /> */}
          <Avatar shape="square" style={{ height: 27, width: 64 }} alt={"SE347.L11.Logo"} src={Logo} />

        </Col>
      ) : (
          <Col style={{ textAlign: 'center', marginTop: 15, marginBottom: 10 }}>
            {/* <Avatar shape="square" style={{ height: 54, width: 128 }} alt={"SE347.L11.Logo"} src={"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"} /> */}
            <Avatar shape="square" style={{ height: 54, width: 128 }} alt={"SE347.L11.Logo"} src={Logo} />

          </Col>
        )}

      <Menu theme="dark" mode="inline">
        {appRouters
          .filter((item: any) => !item.isLayout && item.showInMenu)
          .map((route: any, index: number) => {
            if (route.permission && !isGranted(route.permission)) return null;

            return (
              <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
                <Icon type={route.icon} />
                <span>{L(route.title)}</span>
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
