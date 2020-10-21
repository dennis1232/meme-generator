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
        {
            txt: 'I never eat Falafel',
            size: 28,
            align: 'center',
            color: 'white',
            font: 'IMPACT',
            x: 200,
            y: 50
        },
        {
            txt: 'who likes Falafel',
            size: 28,
            align: 'center',
            color: 'white',
            font: 'IMPACT',
            x: 200,
            y: 340
        }
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
hieght


//change font size
function changeFontSize(num) {
    if (gMeme.lines[0].size === 100 || gMeme.lines[0].size === 5) return
    gMeme.lines[0].size += num;
    console.log('font size', gMeme.lines[0].size);
}
function changeHieghtLine(num){
    if(gMeme.lines[0].y === 0 || gMeme.lines[0].y === 350) return
    gMeme.lines[0].y += num;
    console.log('font size', gMeme.lines[0].y)

}


///get gallery data
function getGalleryData() {
    let imgs = gImgs
    return imgs
}
