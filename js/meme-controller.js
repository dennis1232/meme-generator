'use strict';

var gCanvas;
var gCtx;

function onInit(){
    renderGallery()
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    console.log(gCtx)
    
}



function renderGallery(){
    const elGallery= document.querySelector('.gallery-content')
    const gallery= getGalleryData()
    console.log(gallery);
    
    const strDivs = gallery.map( img=> {
        return `<div class="picture"  onclick="drawImg(${img.id})">
                    <img id="${img.id}" src=${img.url} alt=${img.id}>
                </div>`;
    })
    elGallery.innerHTML = strDivs.join('');
}


function drawText() { 
    var text = userTextInput();
    gCtx.font = `24px IMPACT`
    gCtx.textAlign = 'start'
    gCtx.fillText(text,100 ,100)
    gCtx.strokeText(text, 100, 100)
}