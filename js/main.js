let tl1=gsap.timeline({
  scrollTrigger:{
      trigger:".sec1",
      start:"0%",
      end:"90%",
      scrub:1
  }
},);
let tl2=gsap.timeline({
  scrollTrigger:{
      trigger:".sec1",
      start:"0%",
      end:"90%",
      scrub:1
  }
},);

tl1.fromTo(".quotes",{y:0},{y:-400});
tl2.fromTo(".logo",{scale:4},{scale:1,top:"0.7rem",left:"3rem",x:"50%",y:"50%"});
let tl4=gsap.timeline({
  scrollTrigger:{
      trigger:".sec",
      start:"0%",
      end:"90%",
      scrub:1
  }
},);
let tl5=gsap.timeline({
  scrollTrigger:{
      trigger:".sec",
      start:"0%",
      end:"80%",
      scrub:1
  }
},);
let tl6=gsap.timeline({
  scrollTrigger:{
      trigger:".sec",
      start:"0%",
      end:"70%",
      scrub:1
  }
},);
tl4.fromTo(".sq",{left:"70%"},{left:"100%",opacity:0,rotate:"360%"});
tl5.fromTo(".sq1",{left:"80%"},{left:"107%",opacity:0,rotate:"360%"});
tl6.fromTo(".sq2",{left:"86.5%"},{left:"110%",opacity:0,rotate:"360%"});



let tl3=gsap.timeline({
  scrollTrigger:{
      trigger:".sec1",
      start:"0%",
      end:"400%",
      scrub:1,
      pin:true,
      pinSpacing:false
  }
},);