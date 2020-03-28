import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import NumberCard from '../../elements/numberCard';


const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const transition = {
  duration: 0.5,
};

const CardBox = ({ cards, selectedCards }) => {
  const cardArray = cards
    && cards.map((card, index) => {
      let selected = false;
      if (selectedCards) {
        selected = selectedCards.includes(index);
      }
      return (
        <motion.li
          style={{
            listStyle: 'none',
          }}
          key={card}
          layoutTransition={transition}
        >
          <NumberCard selected={selected} value={card} />
        </motion.li>
      );
    });

  return (
    <div>
      <motion.ul>
        <CardList>{cardArray}</CardList>
      </motion.ul>
    </div>
  );
};

CardBox.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.number).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.number),
};

CardBox.defaultProps = {
  selectedCards: [],
};

export default CardBox;
