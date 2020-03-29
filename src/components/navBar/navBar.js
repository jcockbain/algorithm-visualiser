import React from 'react';
import {
  Menu, Layout,
} from 'antd';
import Logo from '../../elements/logo';

const { Header } = Layout;

const navBar = () => (
  <Layout>
    <Header>
      <Logo />
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Arrays</Menu.Item>
          {/* <Menu.Item key="2">Graphs</Menu.Item>
          <Menu.Item key="3">Trees</Menu.Item> */}
        </Menu>
      </div>
    </Header>
  </Layout>
);


export default navBar;
