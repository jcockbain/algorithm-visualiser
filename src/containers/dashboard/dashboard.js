import {
  Menu, Layout, Breadcrumb,
} from 'antd';
import React, { useState } from 'react';
import Footer from '../../components/footer';
import NavBar from '../../components/navBar';
import AlgorithmContainer from '../AlgorithmContainer';

import ComingSoon from '../comingSoon';

const {
  Sider, Content,
} = Layout;
const { SubMenu } = Menu;

const routing = {
  arrays: {
    bubbleSort: (<AlgorithmContainer />),
    mergeSort: <ComingSoon />,
    quickSort: <ComingSoon />,
    insertionSort: <ComingSoon />,
    binarySearch: <ComingSoon />,
  },
};

const Dashboard = () => {
  const [structure, setStructure] = useState('arrays');
  const [algorithm, setAlgorithm] = useState('bubbleSort');

  return (
    <Layout>
      <NavBar updateStructure={setStructure} />
      <Layout>
        <Sider className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="Sorting" title={<span>Sorting</span>}>
              <Menu.Item onClick={() => setAlgorithm('bubbleSort')} key="bubbleSort">Bubble Sort</Menu.Item>
              <Menu.Item onClick={() => setAlgorithm('mergeSort')} key="mergeSort">Merge Sort</Menu.Item>
              <Menu.Item onClick={() => setAlgorithm('quickSort')} key="quickSort">Quick Sort </Menu.Item>
              <Menu.Item onClick={() => setAlgorithm('insertionSort')} key="insertionSort">Insertion Sort</Menu.Item>
            </SubMenu>
            <SubMenu key="Searching" title={<span>Searching</span>}>
              <Menu.Item onClick={() => setAlgorithm('binarySearch')} key="5">Binary Search</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Arrays</Breadcrumb.Item>
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
            {routing[structure][algorithm]}
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Dashboard;
