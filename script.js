// ==UserScript==
// @name         Better Uwufufu
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Moves text to the bottom, hides comments. Useful especially for twitch.
// @author       itedya
// @match        https://www.uwufufu.com/games/*
// @icon         https://www.google.com/s2/favicons?domain=uwufufu.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle(`.comment-desktop { display: none !important; }`);
addGlobalStyle(`.comment-mobile { display: none !important; }`);

setInterval(() => {
    const selectionImages = [];
    document.querySelectorAll(`.selection-image`).forEach(ele => selectionImages.push(ele.offsetHeight));

    document.querySelectorAll(`.selection-image__name`).forEach((ele, i) => {
        ele.style.position = `relative`;
        ele.style.top = `60%`;
    });
}, 50);
