'use strict';

const markList = document.querySelector('.markList');
const submitButton = document.querySelector(".rateComp__button");
const rateQuiz = document.querySelector(".rateComp__quiz");
const rateThanks = document.querySelector(".rateComp__thanks");
const selectedMarkPlace = document.querySelector(".thanksComp__selectedMark");
let selectedMark = 0;
let selectedItem;

markList.addEventListener('click', handleListClick);

function handleListClick (event) {
    
    if (!event.target.matches('li')) return;
    if (selectedItem) {
        selectedItem.classList.remove("markList__item--active");
    }
    selectedItem = event.target;
    selectedItem.classList.add("markList__item--active");
    selectedItem.blur();
    selectedMark = event.target.textContent;
}

submitButton.addEventListener('click', function (e) {
    if (!selectedItem) {
        alert("You have not selected a grade. Please grade us!");
    } else if(selectedItem.classList.contains('markList__item--active')) {
        e.preventDefault;
        selectedMarkPlace.textContent = selectedMark;
        rateQuiz.classList.add("hidden");
        rateThanks.classList.remove("hidden");    
    } 
});