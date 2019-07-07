import '../styles/index.scss';

console.log('webpack starterkit');

import {MDCTopAppBar} from '@material/top-app-bar';

// init
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);


import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
