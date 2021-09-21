//register plugin
gsap.registerPlugin(ScrollTrigger)

//variables
  var start = "top 80%",
      toggleActions = "play complete none none"

  const animateEl = document.querySelectorAll('.animate__from')
  const animateHeightEl = document.querySelectorAll('.animate__height')
  const animateScaleEl = document.querySelectorAll('.animate__scale')
 
 


  animateEl.forEach(function(element){
  let x=0,y=0,duration=0.5,delay=0

  if(element.classList.contains('left'))
    x=-200
  else  if(element.classList.contains('right'))
    x=200
  
  if(element.classList.contains('top'))
    y=-200
  else  if(element.classList.contains('bottom'))
    y=200
  
  if(element.classList.contains('delay'))
    delay=0.2
  else if(element.classList.contains('delay__long'))
    delay=0.5

    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: toggleActions,
      },
      x: x,
      y: y,
      duration: duration,
      delay:delay,
      autoAlpha:0,
    })
  })
  
  animateHeightEl.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: toggleActions,
      },
      duration:0.5,
      height:0,
    })
  })

  animateScaleEl.forEach(function(element){
    let delay=0
    if(element.classList.contains('delay'))
      delay=0.2
    else if(element.classList.contains('delay__long'))
      delay=0.5

    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: toggleActions,
      },
      duration:0.5,
      transform:'scale(2)',
      autoAlpha:0,
      delay:delay
    })
  })

    gsap.from('section.services .service-card',{
      scrollTrigger: {
        trigger: 'section.services .flex-block',
        start:start,
        toggleActions: toggleActions,
      },
      x:-200,
      duration:0.5,
      autoAlpha:0,
      stagger:0.2,
      delay:0.8
    })


  //animation for serving years
gsap.from('#serving-years', {
  scrollTrigger:{
                  trigger: ".serving-since",
                  start: start,      
                  toggleActions: toggleActions,
                },
  textContent: 1,
  duration: 1.5,
  snap: { textContent: 1 }
})

