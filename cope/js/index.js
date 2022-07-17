console.log("My scripts are working! :D")


var textArray = [
  'Gateway to wild imaginations!',
  'Activate the send-portal!',
  'Empower the Minds'
];
const h_1_elem = document.getElementById('main-h1');
h_1_elem.innerText = textArray[randomNumber()].replaceAll(" ","\n");

function randomNumber() {
  let number = Math.floor(Math.random()*textArray.length);
  return number;
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  breakpoints: {
   768: {
      slidesPerView: 2,
    },

    991: {
      slidesPerView: 3,
    },
  },
  loop: true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }


});



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function scrolle(){
    window.scrollBy(0,1000);
     var x = document.getElementById("main");
     x.style.cssText = " transistion: 500ms ease-in; filter: hue-rotate(160deg);";
     var y = document.getElementById("svg-bor");
    y.style.cssText = " transistion: 500ms ease-in; filter: hue-rotate(-172deg);";
    let z = document.getElementById("cards").style.cssText = "  transition: 250ms ease;";
  }
  window.addEventListener('load', onWndLoad, false);

    
