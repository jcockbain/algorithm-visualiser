import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { shuffle } from 'lodash';

import {
  Button, Row, Col, InputNumber,
} from 'antd';
import { StepForwardOutlined, CaretRightOutlined, ReloadOutlined } from '@ant-design/icons';
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

const StyledButton = styled(Button)`
  /* display: block;
  margin: auto; */
`;

const CenteredDiv = styled.div`
  display: block;
  margin: auto;
`;

const transition = {
  duration: 1,
};

const initialCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const bubbleSort = (inputArr) => {
  const inputCopy = [...inputArr];
  const len = inputCopy.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len; j += 1) {
      if (inputCopy[j] > inputCopy[j + 1]) {
        const tmp = inputCopy[j];
        inputCopy[j] = inputCopy[j + 1];
        inputCopy[j + 1] = tmp;
      }
    }
  }
  return inputCopy;
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
        layoutTransition={transition}
      >
        <NumberCard value={card} />
      </motion.li>
    ));

  const updateCardLength = (value) => {
    const newArray = [];
    for (let i = 0; i < value; i += 1) {
      newArray.push(i);
    }
    setCards(newArray);
  };

  return (
    <div>
      <Row justify="left" gutter={[16, 8]}>
        <Col span={4}>
          <StyledButton icon={<ReloadOutlined />} onClick={() => setCards(shuffle(cards))}>Shuffle</StyledButton>
        </Col>
        <Col span={4}>
          <StyledButton icon={<CaretRightOutlined />} onClick={() => setCards(bubbleSort(cards))}>Run Sort</StyledButton>
        </Col>
        <Col span={4}>
          <StyledButton icon={<StepForwardOutlined />} onClick={() => setCards(bubbleSort(cards))}>Next Sort</StyledButton>
        </Col>
      </Row>
      <Row justify="left" gutter={[16, 16]}>
        <Col span={4}>
          <CenteredDiv>
            <p>Array Length: </p>
            <InputNumber min={2} max={20} onChange={updateCardLength} defaultValue={cards.length} />
          </CenteredDiv>
        </Col>
      </Row>
      <CardContainer>
        <motion.ul>
          <CardList>{cardArray}</CardList>
        </motion.ul>
      </CardContainer>
    </div>
  );
};

export default CardBox;
