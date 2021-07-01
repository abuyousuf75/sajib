
/// Custom All Js


$(function(){

	/// Bottom-Top-btn

	$('.back-top-btn').click(function(){

    $('body,html').animate({scrollTop:0},1000);

	});
	//Add New Navbar

	$(window).scroll(function(){

        var scroll =$(this).scrollTop();
        if(scroll>200){
            $('.navbar').addClass('navbar-new');
        }else{
            $('.navbar').removeClass('navbar-new');
        };
        if(scroll>200){
            $('.back-top-btn').fadeIn(500);
        }else{
            $('.back-top-btn').fadeOut(500);
        };
    });





// Servics Slider

$('.servics-slider').slick({
    slidesToShow: 3,
    autoplay:false,
    autoplaySpeed:1200,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.s-left',
    nextArrow:'.s-right',
    dots:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
    
  });

// Testomonial Slider

$('.testo-slick').slick({
    slidesToShow: 3,
    autoplay:false,
    autoplaySpeed:1200,
    slidesToScroll: 1,
    arrows:true,
    prevArrow:'.t-left',
    nextArrow:'.t-right',
    dots:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
  });
// Blog Slider

$('.blog-slick').slick({
    slidesToShow: 3,
    autoplay:false,
    autoplaySpeed:1200,
    slidesToScroll: 1,
    arrows:false,
    dots:false,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
    ]
  });


// wow js
new WOW().init();

//Counter Up

$('.counter').counterUp({
	delay: 10,
	time: 2500,
  });

  //Tab
  var containerEl = document.querySelector('.iteam-start');

  var mixer = mixitup(containerEl);

    


// Type js 

	$(".typed").typed({
		strings: ["Web Designer","Wordpress Designer","Javascript Devoloper","Full Stack Devoloper"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});


//Smoth Scroll 
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top -85
            }, 1500);
            return false;
        }
    }
});

})