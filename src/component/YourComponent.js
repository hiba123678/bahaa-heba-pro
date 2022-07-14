import React from 'react';
import styled, { keyframes } from 'styled-components';
import bounceOut from 'react-animations/lib/bounce-out';

const AnimatedComponent = styled.div`
  animation: 3.5s ${keyframes(bounceOut)};
`;

const YourComponent = () => <AnimatedComponent >I am animated</AnimatedComponent>;


export default YourComponent;