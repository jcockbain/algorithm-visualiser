import { Card } from 'antd';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledCard = styled(Card)`
  padding: 0.5rem;
  margin: 0.5rem;
  border: 8px solid black;
  border-radius: 4px;
  background: ${(props) => (props.selected ? 'green' : 'white')};
`;

const NumberCard = ({ value, selected }) => (
  <StyledCard selected={selected} key={value}>
    {value}
  </StyledCard>
);

NumberCard.propTypes = {
  value: PropTypes.number.isRequired,
  selected: PropTypes.bool,
};

NumberCard.defaultProps = {
  selected: false,
};

export default NumberCard;
