'use strict';

import { showCurrentQuestion } from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import createDOMElement from '../utils/createDOMElement.js';
import { questionContainer } from '../handlers/showCurrentQuestion.js';
import getDOMElement from '../utils/getDOMElement.js';
import createQuestionCounter from '../views/createQuestionCounter.js';
import { handleResultButtonClick } from './handleResultButtonClick.js';

const handleNextQuestion = () => {
  if (quizData.currentQuestionIndex == quizData.questions.length - 2) {
    // check if we are on the question before the last question

    const resultBtn = createDOMElement('button', { id: 'result-btn' });
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

    const links = getDOMElement('link-address');
    links.innerText = `For more information ${
      quizData.questions[quizData.currentQuestionIndex].links[0].text
    }`;
    links.href =
      quizData.questions[quizData.currentQuestionIndex].links[0].href;
    showCurrentQuestion();
  }
};

export default handleNextQuestion;
