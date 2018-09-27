import Wjs from './js/windowsjs/Wjs.js';

console.log('App loaded');

window.addEventListener("load", initializeWindowsJS ); 

var wjs;

function initializeWindowsJS(){

    wjs = Wjs();
    wjs.initialize();
    wjs.draw();

}
