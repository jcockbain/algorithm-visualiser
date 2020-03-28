import { Card } from 'antd';
import styled from 'styled-components';
import React from 'react';

const StyledCard = styled(Card)`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 8px solid black;
  border-radius: 4px;
  background: white;
`;

const NumberCard = ({ value }) => (
  <StyledCard key={value}>
    {value}
  </StyledCard>
);

export default NumberCard;
