'use strict';
import { LINK_ADDRESS_ID, RESOURCE_CONTAINER_ID } from '../constants.js';
import getDOMElement from '../utils/getDOMElement.js';

const createLinksElement = (quizData) => {
  const links = getDOMElement(LINK_ADDRESS_ID);
  const dataLinks = getDOMElement(RESOURCE_CONTAINER_ID);
  links.innerText = `For more information ${
    quizData.questions[quizData.currentQuestionIndex].links[0].text
  }`;
  links.href = quizData.questions[quizData.currentQuestionIndex].links[0].href;
  dataLinks.appendChild(links);
};

export default createLinksElement;
