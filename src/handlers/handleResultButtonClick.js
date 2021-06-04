import { quizData } from '../data.js';
import { QUIZ_CONTAINER_ID } from '../constants.js';
import createDOMElement from '../utils/createDOMElement.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import { createScoreElement } from '../views/createScoreElement.js';

export const handleResultButtonClick = () => {
  const quizContainer = getDOMElement(QUIZ_CONTAINER_ID);
  clearDOMElement(quizContainer);
  quizContainer.classList.add('result-container');
  createScoreElement(quizData);

  // loop through the correct questions answered array to initialize a new div with h2 and h4
  quizData.correctAnswers.forEach((item, i) => {
    const newQuestionContainer = createDOMElement('div', {
      className: 'result_item',
    });
    const correctQuestion = createDOMElement('h2');
    const correctAnswer = createDOMElement('h4');
    correctQuestion.innerText = `${i + 1}- ${item.text}`;

    newQuestionContainer.appendChild(correctQuestion);

    //loop through the answers object to get only the correct answer
    for (const answerKey in item.answers) {
      if (item.correct == answerKey) {
        correctAnswer.innerText = `${item.correct}: ${item.answers[answerKey]}`;
        newQuestionContainer.appendChild(correctAnswer);
      }
    }
    quizContainer.appendChild(newQuestionContainer);
  });
};
