import React, { useState } from 'react';
import {
  Layout, Breadcrumb,
} from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NavBar from './components/navBar';
import AlgorithmContainer from './containers/BubbleSort';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import ComingSoon from './containers/comingSoon';

const { Content } = Layout;

const subRoutes = {
  Arrays: {
    Sorting: [
      {
        title: 'Bubble Sort',
        path: '/arrays/bubble-sort',
      },
      {
        title: 'Merge Sort',
        path: '/arrays/merge-sort',
      },
      {
        title: 'Quick Sort',
        path: '/arrays/quick-sort',
      },
      {
        title: 'Insertion Sort',
        path: '/arrays/insertion-sort',
      },
    ],
    Searching: [
      {
        title: 'Binary Search',
        path: '/arrays/binary-search',
        component: ComingSoon,
      },
    ],
  },
  Graphs: {},
  Trees: {},
};

const routes = [
  {
    title: 'bubble-sort',
    path: '/arrays/bubble-sort',
    component: AlgorithmContainer,
  },
  {
    title: 'merge-sort',
    path: '/arrays/merge-sort',
    component: ComingSoon,
  },
  {
    title: 'quick-sort',
    path: '/arrays/quick-sort',
    component: ComingSoon,
  },
  {
    title: 'insertion-sort',
    path: '/arrays/insertion-sort',
    component: ComingSoon,
  },
  {
    id: 'binary-search',
    path: '/arrays/binary-search',
    component: ComingSoon,
  },
  {
    id: 'arrays',
    path: '/arrays',
    component: AlgorithmContainer,
  },
  {
    id: 'trees',
    path: '/trees',
    component: ComingSoon,
  },
  {
    id: 'graphs',
    path: '/graphs',
    component: ComingSoon,
  },
];


function App() {
  const [dataStruct, setDataStruct] = useState('Arrays');

  return (
    <Router>
      <Layout>
        <NavBar updateDataStruct={setDataStruct} />
        <Layout>
          <SideBar routes={subRoutes[dataStruct]} />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 480,
            }}
          >
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>{dataStruct}</Breadcrumb.Item>
                {/* <Breadcrumb.Item>Sorting</Breadcrumb.Item>
                <Breadcrumb.Item>Bubble Sort</Breadcrumb.Item> */}
              </Breadcrumb>
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.id}
                    path={route.path}
                    render={() => (<route.component routes={route.routes} />)}
                  />
                ))}
              </Switch>
            </Layout>
          </Content>
        </Layout>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
