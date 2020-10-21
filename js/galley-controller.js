'use strict';




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