'use strict'
var mySlider = [
    "img/home-1-slider-image-1.jpg",
    "img/home-1-slider-image-2.jpg",
    "img/home-1-slider-image-3.jpg",

]
var currentSlide = 0
var img = document.querySelector("#section-1 img")
img.src = mySlider[0]
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
next.onclick = myNextSlider

function myNextSlider() {
    currentSlide++
    if (currentSlide >= mySlider.length) {
        currentSlide = 0
    }
    img.src = mySlider[currentSlide]
    clearInterval(myInterval)
        // setTimeout(setInterval(playSlider, 1000), 5000)
}

function playSlider() {
    currentSlide++
    if (currentSlide >= mySlider.length) {
        currentSlide = 0
    }
    img.src = mySlider[currentSlide]
}
prev.onclick = function() {
    currentSlide--
    if (currentSlide == -1) {
        currentSlide = mySlider.length - 1
    }
    img.src = mySlider[currentSlide]
}
var myInterval = setInterval(playSlider, 1000);

// function interval() {
//     setInterval(playSlider, 1000);
// }