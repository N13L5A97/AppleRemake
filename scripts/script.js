// JavaScript Document


const menu = document.querySelector('#menuButton');
const fold = document.querySelector('.foldableMenu');

menu.addEventListener('click', showMenu);

function showMenu() {
	fold.classList.toggle('show');
    console.log("check");
}


function check(){
    console.log("check");

}