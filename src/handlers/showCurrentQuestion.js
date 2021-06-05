'use strict';

import { QUESTION_CONTAINER_ID } from '../constants.js';
import createQuestionElement from '../views/createQuestionElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import { quizData } from '../data.js';

export const showCurrentQuestion = () => {
  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  const questionDOM = createQuestionElement(currentQuestion);

  clearDOMElement(questionContainer);
  questionContainer.appendChild(questionDOM);
};

export default showCurrentQuestion;
