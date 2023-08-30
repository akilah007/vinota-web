// JavaScript Document
	$(window).on('scroll', function() {

		"use strict";

		/*----------------------------------------------------*/
		/*	Navigtion Menu Scroll
		/*----------------------------------------------------*/

    const b = $(window).scrollTop();

    if( b > 80 ){
			$(".main-header").addClass("scroll");
			$(".link-stripe").addClass("scroll");
			$(".wsmainfull").addClass("scroll");
		} else {
			$(".main-header").removeClass("scroll");
			$(".link-stripe").removeClass("scroll");
			$(".wsmainfull").removeClass("scroll");
		}

	});


	$(document).ready(function() {
    "use strict";
		new WOW().init();
	});

