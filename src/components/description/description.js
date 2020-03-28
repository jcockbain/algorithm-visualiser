import React from 'react';
import { Descriptions } from 'antd';

import PropTypes from 'prop-types';

const Description = ({ AlgorithmInfo }) => (
  <Descriptions title={AlgorithmInfo.name}>
    <Descriptions.Item label="Worst Complexity">{AlgorithmInfo.worstComplexity}</Descriptions.Item>
    <Descriptions.Item label="Average Complexity">{AlgorithmInfo.worstComplexity}</Descriptions.Item>
    <Descriptions.Item label="Best Complexity">{AlgorithmInfo.bestComplexity}</Descriptions.Item>
    <Descriptions.Item label="Space Complexity">{AlgorithmInfo.spaceComplexity}</Descriptions.Item>
  </Descriptions>
);

Description.propTypes = {
  AlgorithmInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default Description;
