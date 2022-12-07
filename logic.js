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
    event.target.classList.add("markList__item--active");
    if (selectedItem) {
        selectedItem.classList.remove("markList__item--active");
    }
    selectedItem = event.target;
    selectedItem.classList.add("markList__item--active");
    selectedItem.blur();
    selectedMark = event.target.textContent;
}

submitButton.addEventListener('click', function (e) {
    e.preventDefault;
    selectedMarkPlace.textContent = selectedMark;
    rateQuiz.classList.add("hidden");
    rateThanks.classList.remove("hidden");    
});