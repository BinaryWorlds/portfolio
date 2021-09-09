/* eslint-disable */
import React, { useMemo } from 'react';
import Lights from './Lights';
import Ball from './Balls';

const gradients = [
  { stops: [0, 0.5], colors: ['#9CF1F6', '#049DF0'] },
  { stops: [0, 0.5], colors: ['#FD9966', '#FD4A5F'] },
  { stops: [0, 0.7, 1], colors: ['#D672C5', '#A981F8', '#C2B4DE'] },
];

const gradientsLength = gradients.length;

function Scene() {
  const ballsAmount = 20;

  const balls = useMemo(
    () =>
      new Array(ballsAmount)
        .fill()
        .map((_, index) => (
          <Ball key={index} gradient={gradients[index % gradientsLength]} size={1} />
        )),
    [ballsAmount],
  );

  return (
    <>
      <Lights />
      {balls}
    </>
  );
}

export default Scene;
