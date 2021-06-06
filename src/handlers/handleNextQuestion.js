'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createQuestionCounter from '../views/createQuestionCounter.js';
import { handleResultButtonClick } from './handleResultButtonClick.js';
import {
  QUESTION_CONTAINER_ID,
  
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import createLinkElement from '../views/createLinkElement.js';
import createResultContainer from '../views/createResultContainer.js';

const handleNextQuestion = () => {
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  if (quizData.currentQuestionIndex == quizData.questions.length - 2) {
    // checking the second last question array to insert the result button on quizContainer
   
    const nextBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
    nextBtn.innerText = 'show result';
    
    questionContainer.parentElement.appendChild(nextBtn);

    // result btn function
    nextBtn.addEventListener('click', handleResultButtonClick);
    
  }
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex++;

    createQuestionCounter(quizData);
    createLinkElement(quizData);

    showCurrentQuestion();
  }
};

export default handleNextQuestion;
