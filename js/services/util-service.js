'use strict';
function toggleElement(el, className) {
    el.classList.toggle(className);
}
function showCanvas() {
    var elCanvas = document.getElementById("canvas-container");
    elCanvas.classList.add("show");
    elCanvas.classList.remove("hide")
}
function HideGallery() {
    var elGallery = document.getElementById("gallery-container");
    elGallery.classList.add("hide");
}
function showGallery() {
    var elGallery = document.getElementById("gallery-container");
    elGallery.classList.remove("hide");
    var elCanvas = document.getElementById("canvas-container");
    elCanvas.classList.add("hide")
    elCanvas.classList.remove("show")
}