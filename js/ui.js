
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
  

  //animation

	$(window).on('scroll', function () {
		var bodyScroll = $(document).scrollTop();
		if (bodyScroll === 0) {
			$("*").removeClass('subOn');
		}
	});

	var $section = $('.ani'),
		bodyScroll, windowHeight;

	function sectionAni() {
		bodyScroll = $(document).scrollTop(),
			windowHeight = $(window).height() / 1;

		$section.each(function () {
			if (bodyScroll >= $(this).offset().top + 80 - windowHeight && bodyScroll < $(this).offset().top + $(this).height()) {
				$(this).addClass('on');
				$(this).addClass('subOn');
			}
			else {
				$(this).removeClass('on');
			}
		});
	}
	$(function () {
		sectionAni();
	});
	$(window).on('scroll', function () {
		sectionAni();
	});
