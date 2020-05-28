svg4everybody(); //for svg spite in ie
// objectFitImages();


let $body,
    wWidth = 0,
    wHeight = 0,
    W_SM = 576,
    W_MD = 768,
    W_LG = 992,
    W_XL = 1200,

    LOADER_HTML = '<div class="overlay-loader"><div class="loader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>'

;


$(document).ready(function () {
  $body = $('body');

	$('.slider').slick({
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: false,
		nextArrow: $('.portfolio__next-slide-button'),
		prevArrow: $('.portfolio__prev-slide-button')
	});    
});

let workProcessSlides = document.querySelectorAll('.work-process__slides-item');
let workProcessControls = document.querySelectorAll('.work-process__button');

for (let i = 0; i < workProcessControls.length; i++) {
  (function (i) {
    workProcessControls[i].addEventListener('click', function (evt) {
      // evt.preventDefault();


      for (let j = 0; j < workProcessSlides.length; j++) {
        workProcessControls[j].classList.remove('work-process__button-active');
        workProcessSlides[j].classList.remove('work-process__slides-item-active');
      }
      workProcessControls[i].classList.add('work-process__button-active');
      workProcessSlides[i].classList.add('work-process__slides-item-active');
    });
  })(i);
}

let faqToggleButtons = document.querySelectorAll('.faq__expand-button');
let faqElements = document.querySelectorAll('.faq__accordion');

for (let i = 0; i <= faqElements.length; i++) {
  faqToggleButtons[i].onclick = function() {
    faqElements[i].classList.toggle('faq__accordion-collapsed');
  };
}

// leftMenu();

//     function leftMenu () {
//         let leftNav = $('.main-menu'),
//             leftNavIsOpen = leftNav.hasClass('open'),
//             openClass = 'main-menu-open',
//             opening = false,
//             transitionTime = 500,
//             timeout;



//         $body.on('click touch', '.js-main-menu-trigger', function (e) {
//             e.preventDefault();
//             navToggle();
//         });


//         $body.on('click touch', function (event) {
//             let obj = $(event.target);

//             if ( !opening && leftNav.hasClass('open') && !obj.closest('.main-menu').length && !obj.closest('.fancybox-container').length ) {
//                 navClose();
//             };
//         });

//         $body.on('keydown', function(e) {
//             if ( !opening && leftNavIsOpen && (e.keyCode  === 27)) { // escape key maps to keycode '27'
//                 navToggle()
//             };
//         });

//         function navToggle() {
//             if ( opening ) {
//                 return 
//             }

//             opening = true;

//             leftNavIsOpen = leftNav.hasClass('open');

//             leftNav.toggleClass('open', !leftNavIsOpen);

//             if (!leftNavIsOpen) {
//                 $body.toggleClass(openClass, true);
//             }
           
//             if ( timeout ) {
//                 clearTimeout(timeout)
//             }

//             timeout = setTimeout(function() {
//                 leftNavIsOpen = leftNav.hasClass('open');

//                 if (!leftNavIsOpen) {
//                     $body.toggleClass(openClass, false);
//                 }
//                 opening = false;
//             }, transitionTime)
            
//         };

//         $('.main-menu__columns-container').on('scroll',function(e) {
//             if ( $('.main-menu__columns-container').scrollTop() > 10 ) {
//                 $body.addClass('main-menu-scroll');
//             } else {
//                 $body.removeClass('main-menu-scroll');
//             }
//         });
//     };