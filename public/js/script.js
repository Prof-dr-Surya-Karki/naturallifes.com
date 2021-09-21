//initialize variables
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const adaptiveBG =  document.querySelectorAll(".adaptiveBG");


//initialize functions
function toggleNavbar(){

    hamburger.classList.toggle("nav-active");
    navLinks.classList.toggle("open");
}


function checkWindowResize(){
    let windowWidth = window.innerWidth;
    if(windowWidth > 780){
        hamburger.classList.remove("nav-active");
        navLinks.classList.remove("open");
    }
}

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 90,
    header = document.getElementById('header');
    
    if (distanceY > shrinkOn) {
     header.classList.add("sticky-header");
     adaptiveBG.forEach(function(el){
        el.classList.remove('greyscale')
     })
    
    } else {
        header.classList.remove("sticky-header");
        adaptiveBG.forEach(function(el){
            el.classList.add('greyscale')
         })
    }
  }
  
  //call functions
  window.addEventListener('scroll', resizeHeaderOnScroll)
  window.addEventListener('resize', checkWindowResize)
  hamburger.addEventListener('click',toggleNavbar)
