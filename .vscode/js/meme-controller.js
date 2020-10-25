'use strict';

var gCanvas;
var gCtx;

var currMeme = getMeme()


function onInit() {
    gCanvas = document.querySelector('#my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery()
    renderMeme();
    

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
    var currIdx = currMeme.selectedLineIdx;
    changeLineTxt(value, currIdx);
    renderMeme()
}

///render txt
function renderTxt(txt) {
    txt.forEach(line => {
        drawText(line.txt, line.size, line.color, line.align, line.x, line.y, line.font, line.stroke)

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
function onChangeXHeightLine(num) {
    changeXHieghtLine(num);
    renderMeme();
}
///line switch
function onSwitchLine() {
    switchLine();

    document.querySelector('.add-txt').value = currMeme.lines[currMeme.selectedLineIdx].txt;
    renderMeme()
    drawRect();

}

///line add
function onAddLine() {
    addLine();
    renderMeme();
    document.querySelector('.add-txt').value = currMeme.lines[currMeme.lines.length-1].txt;
}

///delete line
function onDeleteLine() {
    deleteLine()
    renderMeme()
    document.querySelector('.add-txt').value = currMeme.lines[currMeme.selectedLineIdx].txt;



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
function onAlignmentText(direction) {
    alignmentText(direction);
    renderMeme();

}
///setfont
function onSetFont(font) {
    setFont(font);
    renderMeme()
}

function onSaveMeme() {
    saveMeme();
    renderSavedMemes();
}
function getCanvas() {
    return gCanvas;
}




function renderSavedMemes() {
    const elSavedMemes = document.querySelector('.saved-memes')
    let savedMemes = getMemesFromStorage()
    console.log(savedMemes);

    const strDivs = savedMemes.map(savedMeme => {
        return `<div class="picture">
        <img src = ${savedMeme.content} ">
         </div>
         <div class="btn  delete-saved  flex align-center justify-center"><img src="icons avocado/trash.png"
         alt="delete" onclick = onDeleteSavedMeme(${savedMeme.imgId})></div>`
    });
    elSavedMemes.innerHTML = strDivs.join('');
}
function onDeleteSavedMeme(id){
    deleteSavedMeme(id)
    renderSavedMemes()
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

function renderCanvas(img) {
    gCanvas.width = img.width;
    gCanvas.height = img.height;
    gCtx.drawImage(img, 0, 0);
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function onImgInput(ev) {
    loadImageFromInput(ev, renderMeme)
}
function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader();

    reader.onload = function (event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]);
}

function drawRect() {

    var x = currMeme.lines[currMeme.selectedLineIdx].x
    var y = currMeme.lines[currMeme.selectedLineIdx].y
    var hight = currMeme.lines[currMeme.selectedLineIdx].size
    gCtx.rect(x - 80, y - hight, gCtx.measureText(currMeme.lines[currMeme.selectedLineIdx].txt).width, hight)
    gCtx.strokeStyle = 'red'
    gCtx.stroke()

}



function onRemoveMemes() {
    deleteFromStorage(memesDB);
    onInit()
}