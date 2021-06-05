'use strict';

import {
  QUESTION_CONTAINER_ID,
  QUIZ_CONTAINER_ID,
  SCORE_CONTAINER_ID,
  USER_INTERFACE_ID,
  RESOURCE_CONTAINER_ID,
  QUESTION_COUNTER_CONTAINER_ID,
  STOP_ANIMATION_ID,
  LINK_ADDRESS_ID,
  START_GAME_ID,
} from '../constants.js';
import { showCurrentQuestion } from '../handlers/showCurrentQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createNextQuestionButtonElement from '../views/createNextQuestionButtonElement.js';
import { quizData } from '../data.js';
import { createQuestionCounter } from '../views/createQuestionCounter.js';
import stopAnimation from '../handlers/stopAnimation.js';
import createLinkElement from '../views/createLinkElement.js';

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  setupQuizHTML();

  showCurrentQuestion();
};

const setupQuizHTML = () => {
  // initializing variables to create HTML elements
  const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);
  const scoreContainer = createDOMElement('div', { id: SCORE_CONTAINER_ID });
  const questionCounterContainer = createDOMElement('div', {
    id: QUESTION_COUNTER_CONTAINER_ID,
  });
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  const resourceLink = createDOMElement('a', { id: LINK_ADDRESS_ID });
  const resourceLinkContainer = createDOMElement('div', {
    id: RESOURCE_CONTAINER_ID,
  });

  const nextQuestionButton = createNextQuestionButtonElement();

  // appending elements
  document.body.appendChild(questionCounterContainer);
  document.body.appendChild(scoreContainer);
  userInterfaceContainer.appendChild(quizContainer);
  quizContainer.appendChild(questionContainer);
  quizContainer.appendChild(nextQuestionButton);
  quizContainer.appendChild(resourceLinkContainer);
  resourceLinkContainer.appendChild(resourceLink);

  createLinkElement(quizData);
  createQuestionCounter(quizData);
};

const startGame = () => {
  const userInterfaceContainer = getDOMElement(USER_INTERFACE_ID);
  const startButton = createDOMElement('button', { id: START_GAME_ID });
  const stopAnimationButton = createDOMElement('button', {
    id: STOP_ANIMATION_ID,
  });
  startButton.innerText = 'Start The Game';

  startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    initializeQuiz();
  });
  stopAnimationButton.innerText = 'Stop Animation';
  stopAnimationButton.addEventListener('click', stopAnimation);
  userInterfaceContainer.appendChild(startButton);
  document.body.appendChild(stopAnimationButton);
};

window.addEventListener('load', startGame);
