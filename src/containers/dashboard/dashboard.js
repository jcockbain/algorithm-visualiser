import {
  Menu, Layout, Breadcrumb,
} from 'antd';
import React from 'react';
import Footer from '../../components/footer';
import NavBar from '../../components/navBar';
import AlgorithmContainer from '../AlgorithmContainer';
import Description from '../../components/description';
import algorithmInfo from '../../data/algorithmDescriptions';

const {
  Sider, Content,
} = Layout;
const { SubMenu } = Menu;

const Dashboard = () => (
  <Layout>
    <NavBar />
    <Layout>
      <Sider className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="Sorting" title={<span>Sorting</span>}>
            <Menu.Item key="1">Bubble Sort</Menu.Item>
            <Menu.Item key="2">Merge Sort</Menu.Item>
            <Menu.Item key="3">Quick Sort </Menu.Item>
            <Menu.Item key="4">Insertion Sort</Menu.Item>
          </SubMenu>
          <SubMenu key="Searching" title={<span>Searching</span>}>
            <Menu.Item key="5">Binary Search</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Sorting</Breadcrumb.Item>
          <Breadcrumb.Item>Bubble Sort</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 480,
          }}
        >
          <AlgorithmContainer />
          <Description AlgorithmInfo={algorithmInfo.bubbleSort} />
        </Content>
      </Layout>
    </Layout>
    <Footer />
  </Layout>
);

export default Dashboard;
