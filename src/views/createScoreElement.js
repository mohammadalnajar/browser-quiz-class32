'use strict';
import { SCORE_CONTAINER_ID, USER_SCORE_ID } from '../constants.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';

export function createScoreElement(quizData) {
  const scoreContainer = getDOMElement(SCORE_CONTAINER_ID);
  clearDOMElement(scoreContainer);

  const score = createDOMElement('h3', { id: USER_SCORE_ID });
  score.style.width = `${
    (quizData.correctAnswers.length / quizData.questions.length) * 100
  }%`;

  scoreContainer.appendChild(score);
}
