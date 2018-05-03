/*=========================================

Template Name: New - Personal Portfolio Template
Author: assiathemes
Version: 1.0

=========================================*/

$(document).on('ready', function () {
  "use strict"; // Start of use strict

/*---------------------------------------------------*/
/* Preloader
/*---------------------------------------------------*/  
	$(window).on("load",function (){

  	 $('.loading').delay(1000).fadeOut(1000);
   
	});
/*---------------------------------------------------*/
/* magnificPopup
/*---------------------------------------------------*/  
 
        $('.work-popup').magnificPopup({type:'image'});
 
/*---------------------------------------------------*/
/* navbar Scroll
/*---------------------------------------------------*/

        $(".navbar a").on('click', function(event) {
            if (this.hash !== "") {
             event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
             scrollTop: $(hash).offset().top
            }, 900, function(){    
            window.location.hash = hash;
           });
       } 
    });


/*------------------------------------------------------------*/
/* Closes responsive menu when a scroll trigger link is clicked
/*------------------------------------------------------------*/
  $('a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

 
/*----------------------------------------------------------------*/
/* Activate scrollspy to add active class to navbar items on scroll
/*-----------------------------------------------------------------*/
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

   
/*---------------------------------------------------*/
/* Collapse the navbar when page is scrolled
/*---------------------------------------------------*/
 // 
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });


/*---------------------------------------------------*/
/* Counter
/*---------------------------------------------------*/   
 
        $('.numbre').counterUp({
        delay: 50,
        time: 2000
        });
	
/*---------------------------------------------------*/
/* Filter Item work
/*---------------------------------------------------*/    

		$(".work ul li").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
        });
        $('.work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        });
/*---------------------------------------------------*/
/* button Back to top
/*---------------------------------------------------*/
  
        var offset = 250;
        var duration = 300;
        jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) { 
            jQuery('.back-to-top').fadeIn(duration);
         } else {
            jQuery('.back-to-top').fadeOut(duration); 
         }
        });

        jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
         });
   	

});
	 
 