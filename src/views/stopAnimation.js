'use strict';
import { doc } from 'prettier';
import { STOP_ANIMATION_BUTTON_ID} from '../constants.js';
import createDOMElement from '../utils/createDOMElement.js';


const stopAnimationBtn = () => {
    const stopAnimationButton = createDOMElement('button', {
      id: STOP_ANIMATION_BUTTON_ID,
    });
    stopAnimationBtn.addEventListener('click',stopAnimation){
        document.body.style.backgroundImage="..public/quiz-bg3.gif";
        return stopAnimation;
    }
  document.body.appendChild(stopAnimationButton);
};

export default stopAnimation;
