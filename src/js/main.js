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
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/arrow.png" alt="next arrow" style="transform: rotate(180deg);"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/arrow.png" alt="next arrow"></button>',
	});    
});

var workProcessSlides = document.querySelectorAll('.work-process__slides-item');
var workProcessControls = document.querySelectorAll('.work-process__button');

for (var i = 0; i < workProcessControls.length; i++) {
  (function (i) {
    workProcessControls[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      for (var j = 0; j < workProcessSlides.length; j++) {
        workProcessControls[j].classList.remove('work-process__button-active');
        workProcessSlides[j].classList.remove('work-process__slides-item-active');
      }
      workProcessControls[i].classList.add('work-process__button-active');
      workProcessSlides[i].classList.add('work-process__slides-item-active');
    });
  })(i);
}


leftMenu();

    function leftMenu () {
        let leftNav = $('.main-menu'),
            leftNavIsOpen = leftNav.hasClass('open'),
            openClass = 'main-menu-open',
            opening = false,
            transitionTime = 500,
            timeout;



        $body.on('click touch', '.js-main-menu-trigger', function (e) {
            e.preventDefault();
            navToggle();
        });


        $body.on('click touch', function (event) {
            let obj = $(event.target);

            if ( !opening && leftNav.hasClass('open') && !obj.closest('.main-menu').length && !obj.closest('.fancybox-container').length ) {
                navClose();
            };
        });

        $body.on('keydown', function(e) {
            if ( !opening && leftNavIsOpen && (e.keyCode  === 27)) { // escape key maps to keycode '27'
                navToggle()
            };
        });

        function navToggle() {
            if ( opening ) {
                return 
            }

            opening = true;

            leftNavIsOpen = leftNav.hasClass('open');

            leftNav.toggleClass('open', !leftNavIsOpen);

            if (!leftNavIsOpen) {
                $body.toggleClass(openClass, true);
            }
           
            if ( timeout ) {
                clearTimeout(timeout)
            }

            timeout = setTimeout(function() {
                leftNavIsOpen = leftNav.hasClass('open');

                if (!leftNavIsOpen) {
                    $body.toggleClass(openClass, false);
                }
                opening = false;
            }, transitionTime)
            
        };

        $('.main-menu__columns-container').on('scroll',function(e) {
            if ( $('.main-menu__columns-container').scrollTop() > 10 ) {
                $body.addClass('main-menu-scroll');
            } else {
                $body.removeClass('main-menu-scroll');
            }
        });
    };