'use strict';

import showCurrentQuestion from './showCurrentQuestion.js';
import { quizData } from '../data.js';
import {quizContainer} from '../init/initializeQuiz.js'
import {userInterfaceContainer} from '../init/initializeQuiz.js'
import {wrongAnswer, correctAnswer} from '../views/createQuestionElement.js'

let progressCounter = 1;
export const progressBar = document.createElement('div');
progressBar.classList.add('hide');
document.body.appendChild(progressBar);
progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

const handleNextQuestion = () => {
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    progressCounter++;
    progressBar.innerText = '';
    progressBar.innerText = `Your Current Question is ${progressCounter} out of ${quizData.questions.length}`;

    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    showCurrentQuestion();
  } else {

  quizContainer.classList.add('hide')
  progressBar.classList.add('hide');
  const showResult = document.createElement('button')
  showResult.innerText = 'ShowResult'
  userInterfaceContainer.appendChild(showResult)

  showResult.addEventListener('click', () => {
      // console.log(wrongAnswer[1])
  userInterfaceContainer.innerText = `The Number of Wrong Answers : ${wrongAnswer.length} and the Number of Correct of Answer : ${correctAnswer.length}`
        })
    
  console.log('hellooooo');
  } //else {another function to show the results}
};

export default handleNextQuestion;
