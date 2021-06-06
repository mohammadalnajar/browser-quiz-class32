'use strict';

const stopAnimation = () => {
  const btn = document.getElementById('stop_animation');
  if (document.body.classList.contains('no-animation')) {
    document.body.classList.remove('no-animation');
    btn.textContent = 'NO ANIMATION';
  } else {
    document.body.classList.add('no-animation');
    btn.textContent = 'ANIMATION';
  }
};

export default stopAnimation;
