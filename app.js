let nextButtton = document.getElementById('next');
let prevButtton = document.getElementById('prev');
let backButtton = document.getElementById('back');
let seeMoreButton = document.querySelectorAll('.seeMore');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextButtton.onclick = function(){
    showSlider('next');
}
prevButtton.onclick = function(){
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) => {
    nextButtton.style.pointerEvents = 'none';
    prevButtton.style.pointerEvents = 'none';
    carousel.classList.remove('prev', 'next');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButtton.style.pointerEvents = 'auto';
        prevButtton.style.pointerEvents = 'auto';
    }, 2000);
}

seeMoreButton.forEach(button => {
    button.onclick = function(){
        carousel.classList.add('showDetails');
    }
})
backButtton.onclick = function(){
    carousel.classList.remove('showDetails')
}