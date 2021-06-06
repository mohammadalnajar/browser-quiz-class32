'use strict';

import { QUIZ_CONTAINER_ID, RESTART_BUTTON_ID } from '../constants.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import handleRestartGame from '../handlers/handleRestartGame.js';

export const createResultContainer = (quizData) => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  const restartBtn = createDOMElement('btn', {id: RESTART_BUTTON_ID, className: 'btn'});
  restartBtn.innerText = 'restart the game';
  restartBtn.addEventListener('click', handleRestartGame);
  
  
  

  const resultPageScoreElement = createDOMElement('div', {
    className: 'result-page-score-element',
    id: 'resultPageScoreElement',
  });
  const correctQuestionContainer = createDOMElement('ol', {
    className: 'correct-question-container',
    id: 'correctQuestionContainer',
  });

  resultPageScoreElement.innerText = `You have answered ${quizData.correctAnswers.length} out of ${quizData.questions.length} Correctly`;

  quizData.correctAnswers.forEach((item, i) => {
    const correctQuestionList = createDOMElement('li', {
      className: 'result_item',
    });
    const correctQuestion = createDOMElement('h2');
    const correctAnswer = createDOMElement('h4');

    correctQuestion.innerText = `${i + 1}- ${item.text}`;

    correctQuestionContainer.appendChild(correctQuestionList);
    correctQuestionContainer.appendChild(restartBtn);
    correctQuestionList.appendChild(correctQuestion);
    

    //loop through the answers object to get only the correct answer
    for (const answerKey in item.answers) {
      if (item.correct == answerKey) {
        correctAnswer.innerText = `${item.correct}: ${item.answers[answerKey]}`;
        correctQuestionList.appendChild(correctAnswer);
      }
    }

    resultPageScoreElement.appendChild(correctQuestionContainer);
    quizContainer.appendChild(resultPageScoreElement);
  });
};
export default createResultContainer;
