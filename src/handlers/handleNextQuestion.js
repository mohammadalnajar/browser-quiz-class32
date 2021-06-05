'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createQuestionCounter from '../views/createQuestionCounter.js';
import { handleResultButtonClick } from './handleResultButtonClick.js';
import {
  LINK_ADDRESS_ID,
  QUESTION_CONTAINER_ID,
  RESULT_BUTTON_ID,
} from '../constants.js';
const handleNextQuestion = () => {
  const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
  if (quizData.currentQuestionIndex == quizData.questions.length - 2) {
    // checking the second last question array to insert the result button on quizContainer
    const resultBtn = createDOMElement('button', { id: RESULT_BUTTON_ID });
    resultBtn.innerText = 'SHOW  RESULT';
    const nextBtn = getDOMElement('next-question-button');
    nextBtn.classList.add('hide');
    questionContainer.parentElement.appendChild(resultBtn);

    // result btn function
    resultBtn.addEventListener('click', handleResultButtonClick);
  }
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex++;

    createQuestionCounter(quizData);
    // createLinksElement(quizData);

    const links = getDOMElement(LINK_ADDRESS_ID);
    links.innerText = `For more information ${
      quizData.questions[quizData.currentQuestionIndex].links[0].text
    }`;
    links.href =
      quizData.questions[quizData.currentQuestionIndex].links[0].href;
    showCurrentQuestion();
  }
};

export default handleNextQuestion;
