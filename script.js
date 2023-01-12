'use strict';
/* 
Working with classes, hide them and show them.
Using click and keyboard events
*/
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//! Using do not repeat yourself (Refactoring) for open Modal

const openModal = function () {
  console.log('Button clicked'); // Testing the buttons in the console.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

// A loop to review all the buttons
/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
   
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
  */

// To close the modal when it is opened using the X button

/*
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
// To close the modal clicking outside

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
*/
//! Using do not repeat yourself (Refactoring) for close Modal

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Working with the keyboard event listener
document.addEventListener('keydown', function (e) {
  //console.log(e.key); // To check in the console which key was pressed

  // When ESC is pressed  the modal will be closed.
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
