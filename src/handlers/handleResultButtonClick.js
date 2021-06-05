import { quizData } from '../data.js';
import { QUIZ_CONTAINER_ID } from '../constants.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import { createScoreElement } from '../views/createScoreElement.js';
import { resultPageScoreElementFunc } from '../views/resultPageScoreElement.js';

export const handleResultButtonClick = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
  quizContainer.classList.add('result-container');

  createScoreElement(quizData);
  resultPageScoreElementFunc(quizData);
};
