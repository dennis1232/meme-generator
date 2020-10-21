'use strict';
var gCanvas;
var gCtx;
const gImgs =[
    {id:1, url: 'meme-imgs/1.jpg', keywords:[]},
    {id:2, url: 'meme-imgs/2.jpg', keywords:[]},
    {id:3, url: 'meme-imgs/3.jpg', keywords:[]},
    {id:4, url: 'meme-imgs/4.jpg', keywords:[]},
    {id:5, url: 'meme-imgs/5.jpg', keywords:[]},
    {id:6, url: 'meme-imgs/6.jpg', keywords:[]},
    {id:7, url: 'meme-imgs/7.jpg', keywords:[]},
    {id:8, url: 'meme-imgs/8.jpg', keywords:[]},
    {id:9, url: 'meme-imgs/9.jpg', keywords:[]},
    {id:10, url: 'meme-imgs/10.jpg', keywords:[]},
    {id:11, url: 'meme-imgs/11.jpg', keywords:[]},
    {id:12, url: 'meme-imgs/12.jpg', keywords:[]},
    {id:13, url: 'meme-imgs/13.jpg', keywords:[]},
    {id:14, url: 'meme-imgs/14.jpg', keywords:[]},
    {id:15, url: 'meme-imgs/15.jpg', keywords:[]},
    {id:16, url: 'meme-imgs/16.jpg', keywords:[]},
    {id:17, url: 'meme-imgs/17.jpg', keywords:[]},
    {id:18, url: 'meme-imgs/18.jpg', keywords:[]}
] 

var gMeme = {
    selectedImgId: null,
    selectedLineIdx: 0,

    line: [
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function getGalleryData() {
    let imgs = gImgs
    console.log(imgs);
    
    return imgs
}




function findImgById(imgId) {
    return gImgs.find(img=>{
        return img.id === imgId
    });
}
    

function drawImg(imgId) {
    var img = new Image()
    let currImg = findImgById(imgId)
    img.src = currImg.url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}
