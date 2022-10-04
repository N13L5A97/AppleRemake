// JavaScript Document


const menu = document.querySelector('#menuButton');
const fold = document.querySelector('.foldableMenu');
var menuIcon= document.querySelector('#menuIcon');

menu.addEventListener('click', showMenu);

function showMenu() {
	fold.classList.toggle('show');

    // hier veranderen we het menu icoontje

    if (menuIcon.src.match("Exit.svg")){
        menuIcon.src='../images/Menu.svg';
        console.log("check");
    }
    


    else{
        menuIcon.src='../images/Exit.svg';
    }
    
}
