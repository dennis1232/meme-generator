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
    showCanvas()
    HideGallery()
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
function onChangeText(value) {
    console.log(value);
    var currIdx = currMeme.selectedLineIdx;
    changeLineTxt(value, currIdx);
    renderMeme()
}

///render txt
function renderTxt(txt) {
    txt.forEach(line => {
        drawText(line.txt, line.size, line.color, line.align, line.x, line.y, line.font, line.stroke)
        console.log('txt', line.txt);

    });
}



///text 
function drawText(txt, size, color, align, x, y, font = 'IMPACT', stroke) {
    gCtx.beginPath()
    gCtx.strokeStyle = 'black';
    gCtx.font = `${size}px ${font}`;
    gCtx.lineWidth = '2';
    gCtx.textAlign = align;
    gCtx.fillStyle = color;
    gCtx.strokeStyle = stroke;
    gCtx.fillText(txt, x, y);
    gCtx.strokeText(txt, x, y);
    // console.log('font',gCtx.font,'strokestyle', gCtx.strokeStyle , 'txt',gCtx.fillText(txt,x,y));

}
//font size
function onChangeFontSize(num) {
    changeFontSize(num);
    renderMeme();
}
//line height
function onChangeHeightLine(num) {
    changeHieghtLine(num);
    renderMeme();
}
///line switch
function onSwitchLine() {
    switchLine();
}

///line add
function onAddLine() {
    addLine();
    renderMeme();
    document.querySelector('.add-txt').value = ''
}

///delete line
function onDeleteLine() {
    deleteLine()
    renderMeme()
}
// change fill color 
function onChangeFillColor() {
    changeColor()
    renderMeme()
}
function onChangeStrokeColor() {
    changeStrokeColor()
    renderMeme()
}

///alignment
function onAlignmentText(direction){
    alignmentText(direction);
    renderMeme();

}
///setfont
function onSetFont(font){
    setFont(font);
    renderMeme()
}
///download 
function onDownLoad(link){
    const data = gCanvas.toDataURL('image/png');
    link.href = data;
}





function renderGallery() {
    const elGallery = document.querySelector('.gallery-content')
    const gallery = getGalleryData()

    const strDivs = gallery.map(img => {
        return `<div class="picture" onclick="onUpdateMeme(${img.id})">
     <img id="${img.id}" src=${img.url} alt=${img.id}>
      </div>`;
    });
    elGallery.innerHTML = strDivs.join('');
}

