import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import PropTypes from 'prop-types';

const { Sider } = Layout;
const { SubMenu } = Menu;


const SideBar = ({ routes }) => (
  <Sider className="site-layout-background">
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0 }}
    >
      {Object.keys(routes).map((key) => (
        <SubMenu key={key} title={<span>{key}</span>}>
          {routes[key].map((subRoute) => (
            <Menu.Item key={subRoute.title}>
              <Link to={subRoute.path}>{subRoute.title}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  </Sider>
);

SideBar.propTypes = { routes: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))) };

SideBar.defaultProps = { routes: {} };


export default SideBar;
