'use strict';

import clearDOMElement from '../utils/clearDOMElement.js';
import { startGame } from '../init/initializeQuiz.js';
import createDOMElement from '../utils/createDOMElement.js';
import { USER_INTERFACE_ID } from '../constants.js';

const handleRestartGame = () => {
  clearDOMElement(document.body);

  // const userInterFace = getDOMElement(USER_INTERFACE_ID);
  // const lifeBar = getDOMElement(SCORE_CONTAINER_ID);

  // clearDOMElement(lifeBar);

  // clearDOMElement(userInterFace);
  const userInterFace = createDOMElement('div', {
    id: USER_INTERFACE_ID,
    className: 'centered',
  });
  document.body.appendChild(userInterFace);

  startGame();
};

export default handleRestartGame;
