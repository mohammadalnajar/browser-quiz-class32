'use strict';

import { QUESTION_COUNTER_CONTAINER_ID } from '../constants.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';

export const createQuestionCounter = (quizData) => {
  const questionCounterContainer = getDOMElement(QUESTION_COUNTER_CONTAINER_ID);
  clearDOMElement(questionCounterContainer);
  const questionCounter = createDOMElement('div');
  questionCounter.classList.add('questionCounter');
  questionCounter.innerText = `Your Current Question is ${
    quizData.currentQuestionIndex + 1
  } out of ${quizData.questions.length}`;
  questionCounterContainer.appendChild(questionCounter);
};
export default createQuestionCounter;
