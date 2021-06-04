'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  SCORE_CONTAINER_ID,
  USER_INTERFACE_ID,
  RESOURCE_CONTAINER_ID,
  QUESTION_COUNTER_CONTAINER_ID,
} from '../constants.js';
import { showCurrentQuestion } from '../handlers/showCurrentQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createNextQuestionButtonElement from '../views/createNextQuestionButtonElement.js';
import { quizData } from '../data.js';
import { createQuestionCounter } from '../views/createQuestionCounter.js';

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  setupQuizHTML();

  showCurrentQuestion();
};

const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);
  const scoreContainer = createDOMElement('div', { id: SCORE_CONTAINER_ID });
  const questionCounterContainer = createDOMElement('div', {
    id: QUESTION_COUNTER_CONTAINER_ID,
  });
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });

  quizContainer.appendChild(questionContainer);

  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  userInterfaceContainer.appendChild(quizContainer);
  document.body.appendChild(questionCounterContainer);
  document.body.appendChild(scoreContainer);
  const dataLinks = createDOMElement('div', { id: RESOURCE_CONTAINER_ID });
  const links = createDOMElement('a', { id: 'link-address' });
  dataLinks.appendChild(links);
  quizContainer.appendChild(dataLinks);

  dataLinks.style.color = 'white';
  links.innerText = `For more information ${
    quizData.questions[quizData.currentQuestionIndex].links[0].text
  }`;
  links.href = quizData.questions[quizData.currentQuestionIndex].links[0].href;
  createQuestionCounter(quizData);
};

const startGame = () => {
  const startButton = createDOMElement('button', { id: 'start-game' });
  const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);
  startButton.innerText = 'Start The Game';
  userInterfaceContainer.appendChild(startButton);
  startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    // progressBar.classList.remove('hide');

    initializeQuiz();
  });
};

window.addEventListener('load', startGame);
