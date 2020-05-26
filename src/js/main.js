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

