import Config from './data/config';
import Detector from './utils/detector';
import Main from './app/main';

// import fontawesome from '@fortawesome/fontawesome';
// import solid from '@fortawesome/fontawesome-free-solid';
// fontawesome.config = {
//   familyPrefix: 'xd',
//   autoReplaceSvg: false,
//   searchPseudoElements: false
// }

import { prosidebar } from "../vendor/pro-sidebar/js/custom";

// Check environment and set the Config helper
if(__ENV__ === 'dev') {
  console.log('----- RUNNING IN DEV ENVIRONMENT! -----');
  Config.isDev = true;
}

function init() {
  // Check for webGL capabilities
  if(!Detector.webgl) {
    Detector.addGetWebGLMessage();
  } else {
    const container = document.getElementById('appContainer');
    new Main(container);
  }
}

init();
