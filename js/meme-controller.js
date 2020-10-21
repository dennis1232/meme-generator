'use strict';

var gCanvas;
var gCtx;

function onInit(){
    renderGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log(gCtx)
    
}

drawText(gMeme.line.txt, 55, 55)


function drawText(text, x, y) { 
    gCtx.lineWidth = '2'
    gCtx.font = '38px IMPACT'
    gCtx.textAlign = 'start'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}