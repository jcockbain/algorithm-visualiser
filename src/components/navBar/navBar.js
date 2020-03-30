import React from 'react';
import {
  Menu, Layout,
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../elements/logo';


const { Header } = Layout;

const NavBar = ({ updateDataStruct }) => (
  <Layout>
    <Header>
      <Logo />
      <div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link onClick={() => updateDataStruct('Arrays')} to="/arrays">Arrays</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link onClick={() => updateDataStruct('Trees')} to="/trees">Trees</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link onClick={() => updateDataStruct('Graphs')} to="/graphs">Graphs</Link>
          </Menu.Item>
        </Menu>
      </div>
    </Header>
  </Layout>
);

NavBar.propTypes = {
  updateDataStruct: PropTypes.func.isRequired,
};


export default NavBar;
