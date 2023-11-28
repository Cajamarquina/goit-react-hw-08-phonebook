import React from 'react';
import { AnimationPhonebook } from './Lottie.styled';
import groovyWalkAnimation from './phonebook-animation.json';

export const Animation = () => (
  <AnimationPhonebook animationData={groovyWalkAnimation} loop={true} />
);