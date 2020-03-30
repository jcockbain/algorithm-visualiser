import React, { useState, useEffect, useCallback } from 'react';
import {
  Button, Row, Col, InputNumber, Slider,
} from 'antd';
import { shuffle } from 'lodash';
import {
  StepForwardOutlined, CaretRightOutlined, ReloadOutlined, PauseOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import Description from '../../components/description';
import algorithmInfo from '../../data/algorithmDescriptions';

import CardBox from '../../components/CardBox';

const CardContainer = styled.div`
  margin-top: 1rem;
`;

const SliderWrapper = styled.div`
  padding-top: 0.2rem;
`;

const CenteredDiv = styled.div`
  display: block;
  margin: auto;
`;

const initialCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BubbleSort = () => {
  const [cards, setCards] = useState(initialCards);
  const [sortIndex, setSortIndex] = useState(0);
  const [runSort, setRunSort] = useState(false);
  const [swapped, setSwapped] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [sortSpeed, setSortSpeed] = useState(5);

  const updateCardLength = (value) => {
    const newArray = [];
    for (let i = 0; i < value; i += 1) {
      newArray.push(i);
    }
    setSortIndex(0);
    setCards(newArray);
  };

  const shuffleCards = () => {
    setSortIndex(0);
    setCards(shuffle(cards));
    setSorted(false);
  };

  const completeSort = () => {
    setSorted(true);
    setRunSort(false);
    setSortIndex(0);
    setSwapped(false);
  };

  const bubbleSort = useCallback(() => {
    if (!cards) {
      return;
    }
    const inputCopy = [...cards];
    let j = sortIndex;
    const len = inputCopy.length;

    if (inputCopy[j] > inputCopy[j + 1]) {
      const tmp = inputCopy[j];
      inputCopy[j] = inputCopy[j + 1];
      inputCopy[j + 1] = tmp;
      setSwapped(true);
    }

    j = (j + 1 === len) ? 0 : j + 1;
    if (j + 1 === len) {
      setSwapped(false);
      if (!swapped) {
        completeSort();
      }
    }
    setSortIndex(j);
    setCards(inputCopy);
  }, [cards, sortIndex]);

  useEffect(() => {
    if (runSort) {
      setTimeout(() => bubbleSort(), 1600 - 150 * (sortSpeed));
    }
  }, [runSort, cards]);

  const cardsToHighlight = sorted ? cards + [0] : [sortIndex, sortIndex + 1];
  const cardsLength = (cards) ? cards.length : 0;
  return (
    <div>
      <Row justify="left" gutter={[16, 8]}>
        <Col span={4}>
          <Button
            disabled={runSort}
            icon={<ReloadOutlined />}
            onClick={shuffleCards}
          >
            Shuffle
          </Button>
        </Col>
        <Col span={4}>
          <Button
            disabled={runSort}
            icon={<StepForwardOutlined />}
            onClick={() => bubbleSort()}
          >
            Next Sort
          </Button>
        </Col>
        <Col span={4}>
          {runSort ? (
            <Button
              icon={<PauseOutlined />}
              onClick={() => setRunSort(false)}
            >
              Stop Sort
            </Button>
          ) : (
            <Button
              icon={<CaretRightOutlined />}
              onClick={() => setRunSort(true)}
            >
              Run Sort
            </Button>
          )}
        </Col>
      </Row>
      <Row justify="left" gutter={[16, 16]}>
        <Col span={4}>
          <CenteredDiv>
            <p>Array Length: </p>
            <InputNumber
              disabled={runSort}
              min={2}
              max={20}
              onChange={updateCardLength}
              defaultValue={cardsLength}
            />
          </CenteredDiv>
        </Col>
        <Col span={4}>
          <CenteredDiv>
            <p>Sort Speed:</p>
            <SliderWrapper>
              <Slider
                min={1}
                max={10}
                onChange={(value) => setSortSpeed(value)}
              />
            </SliderWrapper>
          </CenteredDiv>
        </Col>
      </Row>
      <Row justify="left" gutter={[16, 16]} />
      <CardContainer>
        <CardBox cards={cards} selectedCards={cardsToHighlight} />
      </CardContainer>
      <Description AlgorithmInfo={algorithmInfo.bubbleSort} />
    </div>
  );
};


export default BubbleSort;
