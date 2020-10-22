'use strict';


//gImgs
const gImgs = [
    { id: 1, url: 'meme-imgs/1.jpg', keywords: [] },
    { id: 2, url: 'meme-imgs/2.jpg', keywords: [] },
    { id: 3, url: 'meme-imgs/3.jpg', keywords: [] },
    { id: 4, url: 'meme-imgs/4.jpg', keywords: [] },
    { id: 5, url: 'meme-imgs/5.jpg', keywords: [] },
    { id: 6, url: 'meme-imgs/6.jpg', keywords: [] },
    { id: 7, url: 'meme-imgs/7.jpg', keywords: [] },
    { id: 8, url: 'meme-imgs/8.jpg', keywords: [] },
    { id: 9, url: 'meme-imgs/9.jpg', keywords: [] },
    { id: 10, url: 'meme-imgs/10.jpg', keywords: [] },
    { id: 11, url: 'meme-imgs/11.jpg', keywords: [] },
    { id: 12, url: 'meme-imgs/12.jpg', keywords: [] },
    { id: 13, url: 'meme-imgs/13.jpg', keywords: [] },
    { id: 14, url: 'meme-imgs/14.jpg', keywords: [] },
    { id: 15, url: 'meme-imgs/15.jpg', keywords: [] },
    { id: 16, url: 'meme-imgs/16.jpg', keywords: [] },
    { id: 17, url: 'meme-imgs/17.jpg', keywords: [] },
    { id: 18, url: 'meme-imgs/18.jpg', keywords: [] }
]
/// gMeme
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        _createLine(200, 50)
    ]
}
///get meme
function getMeme() {
    return gMeme;
}


//find img by id
function findImgById(imgId) {
    return gImgs.find(img => {
        return img.id === imgId
    });
}


function changeLineTxt(txt, lineIdx) {
    return gMeme.lines[lineIdx].txt = txt
}



function updateMeme(id) {
    gMeme.selectedImgId = id;
}



//change font size
function changeFontSize(num) {
    if (gMeme.lines[gMeme.selectedLineIdx].size === 100 || gMeme.lines[gMeme.selectedLineIdx].size === 5) return
    gMeme.lines[gMeme.selectedLineIdx].size += num;
    console.log('font size', gMeme.lines[gMeme.selectedLineIdx].size);
}
function changeHieghtLine(num) {
    if (gMeme.lines[gMeme.selectedLineIdx].y <= 25) gMeme.lines[gMeme.selectedLineIdx].y = 25
    if (gMeme.lines[gMeme.selectedLineIdx].y >= 345) gMeme.lines[gMeme.selectedLineIdx].y = 345
    gMeme.lines[gMeme.selectedLineIdx].y += num;
    console.log('font size', gMeme.lines[gMeme.selectedLineIdx].y)

}
///swithLine
function switchLine() {
    var lineIdx = gMeme.lines;
    var linesLength = lineIdx.length - 1;
    if (gMeme.selectedLineIdx < linesLength) {
        gMeme.selectedLineIdx++;
    }
    else if (gMeme.selectedLineIdx === linesLength) {
        gMeme.selectedLineIdx = 0
    }
}


///get gallery data
function getGalleryData() {
    let imgs = gImgs
    return imgs
}
//add line
function addLine() {
    if (gMeme.lines.length === 0) gMeme.lines.push(_createLine(200, 50))
    else if (gMeme.lines.length === 1) gMeme.lines.push(_createLine(200, 340))
    else if (gMeme.lines.length === 2) gMeme.lines.push(_createLine(200, 200))
    else gMeme.lines.push(_createLine(70, 200))

}

function _createLine(x, y) {
    return {
        txt: 'Enter YourText',
        size: 28,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'IMPACT',
        x,
        y
    }
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1);
    if (gMeme.selectedLineIdx > 0 && gMeme.selectedLineIdx) gMeme.selectedLineIdx -= 1;
}

function changeColor() {
    const elFillColor= document.getElementById('fill-color').value;
    gMeme.lines[gMeme.selectedLineIdx].color =elFillColor
}
function changeStrokeColor() {
    const elStrokeColor= document.getElementById('stroke-color').value;
    gMeme.lines[gMeme.selectedLineIdx].stroke =elStrokeColor
}

///alignment
function alignmentText(direction){
    gMeme.lines[gMeme.selectedLineIdx].align = direction
}
// font family
function setFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font = font
}


