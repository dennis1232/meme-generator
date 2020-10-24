'use strict';
var elCanvas = document.getElementById("canvas-container");
var elGallery = document.getElementById("gallery-container");
var elSavedMemes = document.getElementById("saved-memes")

function showCanvas() {
    elCanvas.classList.add("show");
    elCanvas.classList.remove("hide");
    elGallery.classList.add("hide");
}
function HideGallery() {
    elGallery.classList.add("hide");
}
function showGallery() {
    elGallery.classList.remove("hide");
    elCanvas.classList.add("hide");
    elCanvas.classList.remove("show");
    elSavedMemes.classList.add("hide")
    elSavedMemes.classList.remove("show")
}
function showSavedMemes(){
    elCanvas.classList.add("hide");
    elCanvas.classList.remove("show")
    elGallery.classList.add("hide");
    elSavedMemes.classList.add("show");
}
