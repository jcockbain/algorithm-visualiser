import React from 'react';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import NumberCard from '../../elements/numberCard';


const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const transition = {
  duration: 1,
};

const CardBox = ({ cards }) => {
  const cardArray = cards
    && cards.map((card) => (
      <motion.li
        style={{
          listStyle: 'none',
        }}
        key={card}
        layoutTransition={transition}
      >
        <NumberCard value={card} />
      </motion.li>
    ));

  return (
    <div>
      <motion.ul>
        <CardList>{cardArray}</CardList>
      </motion.ul>
    </div>
  );
};

export default CardBox;
