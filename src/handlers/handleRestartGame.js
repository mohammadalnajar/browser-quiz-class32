'use strict';

import { SCORE_CONTAINER_ID, USER_INTERFACE_ID } from "../constants.js";
import clearDOMElement from "../utils/clearDOMElement.js";
import getDOMElement from "../utils/getDOMElement.js";
import {initializeQuiz} from "../init/initializeQuiz.js";
import createDOMElement from "../utils/createDOMElement.js";

const handleRestartGame = ()=> {
   clearDOMElement(document.body);
   
    // const userInterFace = getDOMElement(USER_INTERFACE_ID);
    // const lifeBar = getDOMElement(SCORE_CONTAINER_ID);

    // clearDOMElement(lifeBar);

    // clearDOMElement(userInterFace);
    const userInterFace = createDOMElement('div', {id: USER_INTERFACE_ID, className: 'centered'});
    document.body.appendChild(userInterFace);

    initializeQuiz();
}

export default handleRestartGame;