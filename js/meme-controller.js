'use strict';

var gCanvas;
var gCtx;
var currMeme = getMeme()


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
    renderMeme()

}
function renderMeme() {
    var img = findImgById(currMeme.selectedImgId);
    drawImg(img.url)
}
function onUpdateMeme(id) {
    updateMeme(id);
    renderMeme();
}

///draw img on canvas
function drawImg(imgUrl) {
    var img = new Image();
    img.src = imgUrl
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        renderTxt(currMeme.lines);
    };
}

///change text
function changeText(value) {
    console.log(value);
    var currIdx = currMeme.selectedLineIdx;
    changeLineTxt(value, currIdx);
    renderMeme()
}

///render txt
function renderTxt(txt) {
    txt.forEach(line => {
        drawText(line.txt, line.size,line.color,line.align , line.x, line.y, line.font)
        console.log('txt', line.txt);
        
    });
}



///text 
function drawText(txt, size, color, align, x, y, font = 'IMPACT') {
    gCtx.beginPath()
    gCtx.strokeStyle = 'black';
    gCtx.font = `${size}px ${font}`;
    gCtx.lineWidth = '2';
    gCtx.textAlign = align;
    gCtx.fillStyle = color;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    // console.log('font',gCtx.font,'strokestyle', gCtx.strokeStyle , 'txt',gCtx.fillText(txt,x,y));
    
}
//font size
function onChangeFontSize(num){
    changeFontSize(num);
    renderMeme();
}
//line height
function onChangeHeightLine(num){
    changeHieghtLine(num);
    renderMeme();
}




function renderGallery() {
    const elGallery = document.querySelector('.gallery-content')
    const gallery = getGalleryData()

    const strDivs = gallery.map(img => {
        return `<div class="picture"  onclick="onUpdateMeme(${img.id})">
     <img id="${img.id}" src=${img.url} alt=${img.id}>
      </div>`;
    });
    elGallery.innerHTML = strDivs.join('');
}