'use strict';
import { LINK_ADDRESS_ID, RESOURCE_CONTAINER_ID } from '../constants.js';
import getDOMElement from '../utils/getDOMElement.js';

const createLinkElement = (quizData) => {
  const resourceLink = getDOMElement(LINK_ADDRESS_ID);
  const resourceLinkContainer = getDOMElement(RESOURCE_CONTAINER_ID);
  resourceLink.innerText = `For more information ${
    quizData.questions[quizData.currentQuestionIndex].links[0].text
  }`;
  resourceLink.href =
    quizData.questions[quizData.currentQuestionIndex].links[0].href;
  resourceLinkContainer.appendChild(resourceLink);
};

export default createLinkElement;
