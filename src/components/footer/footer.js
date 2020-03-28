import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';


const { Footer } = Layout;

const StyledFooter = styled(Footer)`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const PageFooter = () => (
  <StyledFooter>
    <div>
      Made by
      {' '}
      <a href="https://jamescockbain.com">
        James Cockbain
      </a>

    </div>
  </StyledFooter>
);

export default PageFooter;
