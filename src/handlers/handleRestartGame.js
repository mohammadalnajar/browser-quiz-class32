'use strict';

import clearDOMElement from '../utils/clearDOMElement.js';
import { startGame } from '../init/initializeQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';
import { USER_INTERFACE_ID } from '../constants.js';

const handleRestartGame = () => {
  clearDOMElement(document.body);
  const userInterFace = createDOMElement('div', {
    id: USER_INTERFACE_ID,
  });
  document.body.appendChild(userInterFace);

  startGame();
};

export default handleRestartGame;
