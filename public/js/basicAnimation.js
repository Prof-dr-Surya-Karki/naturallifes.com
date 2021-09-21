
  const fromLeftElements = document.querySelectorAll('.animation__from__left')
  const fromRightElements = document.querySelectorAll('.animation__from__right')
  const fromTopElements = document.querySelectorAll('.animation__from__top')
  const fromBottomElements = document.querySelectorAll('.animation__from__bottom')
  const fromHeight0Elements = document.querySelectorAll('.animation__from__height__0')
  const fromScale2Elements = document.querySelectorAll('.animation__from__scale__2')


  fromLeftElements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart complete restart reverse",
      },
      x:-200,
      duration:0.5,
      autoAlpha:0,
    })
  })
  
  fromRightElements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart pause restart reverse",
      },
      x:200,
      duration:0.5,
      autoAlpha:0,
    })
  })

  fromTopElements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart pause restart reverse",
      },
      y:-200,
      duration:0.5,
      autoAlpha:0,
    })
  })

  fromBottomElements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart pause restart reverse",
      },
      y:200,
      duration:0.5,
      autoAlpha:0,
    })
  })

  fromHeight0Elements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart pause restart reverse",
      },
      duration:0.5,
      height:0,
    })
  })

  fromScale2Elements.forEach(function(element){
    gsap.from(element,{
      scrollTrigger: {
        trigger: element,
        start: start,
        toggleActions: "restart pause restart reverse",
      },
      duration:0.5,
      transform:'scale(2)',
      autoAlpha:0,
      delay:0.4
    })
  })

