'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import getDOMElement from '../utils/getDOMElement.js';
import createQuestionCounter from '../views/createQuestionCounter.js';
import { handleResultButtonClick } from './handleResultButtonClick.js';
import {
  QUESTION_CONTAINER_ID,
  NEXT_QUESTION_BUTTON_ID,
  RESULT_BUTTON_ID,
} from '../constants.js';
import createLinkElement from '../views/createLinkElement.js';
import createDOMElement from '../utils/createDOMElement.js';

const handleNextQuestion = () => {
  if (quizData.questions[quizData.currentQuestionIndex].selected != null) {
    const questionContainer = getDOMElement(QUESTION_CONTAINER_ID);
    if (quizData.currentQuestionIndex == quizData.questions.length - 2) {
      // checking the second last question array to insert the result button on quizContainer

      const nextBtn = getDOMElement(NEXT_QUESTION_BUTTON_ID);
      nextBtn.remove();
      const resultBtn = createDOMElement('button', {
        id: RESULT_BUTTON_ID,
      });
      resultBtn.innerText = 'Show Result';
      questionContainer.parentElement.appendChild(resultBtn);

      // result btn function
      resultBtn.addEventListener('click', handleResultButtonClick);
    }
    if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
      quizData.currentQuestionIndex++;

      createQuestionCounter(quizData);
      createLinkElement(quizData);

      showCurrentQuestion();
    }
  } else alert('please choose an answer to go to the next question');
};

export default handleNextQuestion;
