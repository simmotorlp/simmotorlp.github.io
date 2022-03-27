// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js
// Feel free with using ES6 here.
import $ from 'jquery';

import menu from './modules/mobile-menu';

// When DOM is ready
$(() => {
  menu();
});
