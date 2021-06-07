'use strict';

import getDOMElement from '../utils/getDOMElement.js';
import { TIMER_CONTAINER_ID } from '../constants.js';

const startTimer = (quizData) => {
  let counterSec = 0;
  let counterMin = 0;
  let counter = 0;
  const timerDiv = getDOMElement(TIMER_CONTAINER_ID);
  let interval = setInterval(() => {
    counterSec++;
    if (counterSec == 60) {
      counterSec = 0;
      counterMin++;
    }
    counter = `${counterMin < 10 ? `0${counterMin}` : `${counterMin}`}:${
      counterSec < 10 ? `0${counterSec}` : `${counterSec}`
    }`;
    quizData.timer = counter;
    timerDiv.innerText = quizData.timer;
  }, 1000);
};
export default startTimer;
