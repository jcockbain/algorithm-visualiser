import React from 'react';
import styled from 'styled-components';
import {
  Menu, Layout, Breadcrumb,
} from 'antd';
import CardBox from './components/CardBox';

const {
  Header, Footer, Sider, Content,
} = Layout;
const { SubMenu } = Menu;

const StyledFooter = styled(Footer)`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`;

function App() {
  return (
    <Layout>
      <Layout>
        <Header>
          <Logo />
          <div>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Arrays</Menu.Item>
              <Menu.Item key="2">Graphs</Menu.Item>
              <Menu.Item key="4">Trees</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
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
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 480,
            }}
          >
            <CardBox />
          </Content>
        </Layout>
      </Layout>
      <StyledFooter>
        <div>
          Made by
          {' '}
          <a href="https://jamescockbain.com">
            James Cockbain
          </a>

        </div>
      </StyledFooter>
    </Layout>
  );
}

export default App;
