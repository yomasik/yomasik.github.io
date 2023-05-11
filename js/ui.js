
const dm = document.documentElement;
const js_header__title = document.querySelector('.header__title');
let gs_header__title =   gsap.to(".header__title",{
    scale: .9,
    rotation: 90,
    y: 150,
    alpha: .6,
    duration: 1,
});
js_header__title.addEventListener('click', function(e){
    e.preventDefault();
    scrollUp();
  })
  const documentHeight = dm.scrollHeight;

window.addEventListener('scroll', function(){
  let scrollToTop = dm.scrollTop;
  if(documentHeight != 0){
    const actionHeight = 20;
    if(scrollToTop > actionHeight){
        gs_header__title.play();
    } else {
        gs_header__title.reverse();
    }
  }
});

  function scrollUp(){
    let upper = setInterval(function(){
      if (dm.scrollTop != 0){
        window.scrollBy(0, -55);
      } else {
       clearInterval(upper) ;
      }    
    })
  };
  