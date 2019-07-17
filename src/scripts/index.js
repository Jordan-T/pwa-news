import '../styles/index.scss';

import {MDCTopAppBar} from '@material/top-app-bar';

// init
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));


import {MDCLinearProgress} from '@material/linear-progress';

// home
const loadHomeJs = () => import(
  /* webpackChunkName: "home-page" */
  /* webpackPreload: true */
  './home.js'
);
const loaderElm = new MDCLinearProgress(document.querySelector('.js-home-loader'));
const btnElm = document.querySelector('.js-load-home');
const handleLoadHomeClick = () => {
    loaderElm.open();
    loadHomeJs()
      .then(js => js.default())
      .then(() => {
          loaderElm.close();
          const btnElm = document.querySelector('.js-load-home');
          btnElm.removeEventListener('click', handleLoadHomeClick, true);
          btnElm.remove();
      });
}
btnElm.addEventListener('click', handleLoadHomeClick, true)
