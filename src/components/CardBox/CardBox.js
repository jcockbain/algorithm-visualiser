import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash';

import { Button } from 'antd';
import styled from 'styled-components';
import NumberCard from '../../elements/numberCard';


const CardContainer = styled.div`
  margin-top: 1rem;
  background: green;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const spring = {
  type: 'spring',
  damping: 100,
  stiffness: 500,
};

const initialCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sorter = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const sortCards = (cards) => {
  const cardsCopy = [...cards];
  cardsCopy.sort(sorter);
  return cardsCopy;
};

const CardBox = () => {
  const [cards, setCards] = useState(initialCards);

  const cardArray = cards
    && cards.map((card) => (
      <motion.li
        style={{
          listStyle: 'none',
        }}
        key={card}
        layoutTransition={spring}
      >
        <NumberCard value={card} />
      </motion.li>
    ));

  return (
    <div>
      <Button onClick={() => setCards(shuffle(cards))}>Shuffle Cards</Button>
      <Button onClick={() => setCards(sortCards(cards))}>Sort Cards</Button>
      <CardContainer>
        <CardList>{cardArray}</CardList>
      </CardContainer>
    </div>
  );
};

export default CardBox;
