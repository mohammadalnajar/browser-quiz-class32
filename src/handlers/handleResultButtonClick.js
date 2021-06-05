import { quizData } from '../data.js';
import { QUIZ_CONTAINER_ID } from '../constants.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import { createScoreElement } from '../views/createScoreElement.js';
import { createResultContainer } from '../views/createResultContainer.js';

export const handleResultButtonClick = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
  quizContainer.classList.add('result-container');
  quizContainer.classList.add('resultHeight');

  createScoreElement(quizData);
  createResultContainer(quizData);
};
