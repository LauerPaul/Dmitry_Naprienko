var global_status=true,
audioBg = document.getElementById("audioBg"),
app = {
	load: function(){
	    $('.creative').textillate({
            effect: 'bounceInLeft',
            loop: true,
            initialDelay: 0,
            minDisplayTime: 1000,
            autoStart: true,
            inEffects: [],
            outEffects: [ 'fadeOutUpBig' ],
            in: {
		      effect: 'fadeInUpRight',
		      delayScale: 1.5,
		      delay: 50,
		      sync: true,
		      shuffle: false
		    },
		    out: {
		      effect: 'flip',
		      delayScale: 1.5,
		      delay: 50,
		      sync: false,
		      shuffle: false,
		    },
		    type: 'word'
	    });
	}
},
indexFuncs = {
	start: function(index){
		$('header, .footer, footer').addClass('animate');

		switch(index) {
			case 1:
				setTimeout(function(){indexFuncs.designer()}, 700);
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 2:
				setTimeout(function(){indexFuncs.about()}, 700);
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 3:
				setTimeout(function(){indexFuncs.services()}, 700);
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 4:
				setTimeout(function(){indexFuncs.contacts()}, 700);
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
		}
	},
	designer: function(){
		$('.section.designer .designer-text h2').addClass('animate')
		setTimeout(function(){$('.section.designer .title-wrapper h1, .section.designer .scroll-bottom').addClass('animate');}, 600);
	},
	about: function(){
		$($('.section.about .title .title-animation > div')[0]).addClass('animate');
		setTimeout(function(){$($('.section.about .title .title-animation > div')[1]).addClass('animate');}, 300);
		setTimeout(function(){$('.section.about .text-about .column').addClass('animate');}, 600);
		setTimeout(function(){$('.section.about .title-wrapper h2').addClass('animate');}, 1200);
	},
	services: function(){
		$('.section.services .title h2 span').addClass('animate');
		setTimeout(function(){$('.section.services .column:not(.second)').addClass('animate');}, 400);
		setTimeout(function(){$('.section.services .title h3 span').addClass('animate');}, 900);
		setTimeout(function(){$('.section.services .column.second').addClass('animate');}, 1400);
		setTimeout(function(){$('.section.services .title-wrapper h1').addClass('animate');}, 1300);
	},
	contacts: function(){
		$($('.section.contacts span.animation_item')[0]).addClass('animate');
		setTimeout(function(){$($('.section.contacts span.animation_item')[1]).addClass('animate');}, 450);
		setTimeout(function(){
			$('.section.contacts .column p.decor, .section.contacts .column p:not(.decor) span, .section.contacts .button-wrapper').addClass('animate');
		}, 1000);
		setTimeout(function(){$('.section.contacts .title-wrapper h1').addClass('animate');}, 1600);
	},
	destroy: function(){
		$('.section .animate').removeClass('animate');
	},
	scrollNext: function(a,b,c){
		// $('.mask-nextPage').addClass('animate');
		global_status=false;
		$('section').animate({'opacity' : 0})
		setTimeout(function(){
			indexFuncs.destroy();
			$('section').animate({'opacity' : 1})
			c.silentMoveTo(b);
		},400)
		// setTimeout(function(){
		// 	$('.mask-nextPage').removeClass('animate');
		// },1500)
	}
},
fullpage = {
	init:function(){
		if($('#fullpage').length > 0){
			$('#fullpage').fullpage({
				//Navigation
				menu: '#navigation',
				lockAnchors: false,
				anchors:['designer', 'about', 'services', 'contacts'],
				navigation: false,

				//Scrolling
				css3: true,
				scrollingSpeed: 700,
				autoScrolling: true,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				continuousHorizontal: false,
				scrollHorizontally: false,
				interlockedSlides: false,
				dragAndMove: false,
				offsetSections: false,
				resetSliders: false,
				fadingEffect: false,
				normalScrollElements: '#element1, .element2',
				scrollOverflow: false,
				scrollOverflowReset: false,
				scrollOverflowOptions: null,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,
				bigSectionsDestination: null,

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//Design
				controlArrows: true,
				verticalCentered: true,
				fixedElements: '#header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,
				responsiveSlides: false,
				parallax: false,
				parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				lazyLoading: true,

				//events
				onLeave: function(index, nextIndex, direction){
					if(global_status){
						var func = $.fn.fullpage;
						indexFuncs.scrollNext(index, nextIndex, func);
						return false;
					}else{
						global_status = true;
					}
				},

				afterLoad: function(anchorLink, index){
					indexFuncs.start(index)
				},
				afterRender: function(){},
				afterResize: function(){},
				afterResponsive: function(isResponsive){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
			});
		}
		if($('#fullpageTerms').length > 0){
			$('#fullpageTerms').fullpage({
				//Navigation
				menu: '#navigation',
				lockAnchors: false,
				anchors:['info', 'contacts'],
				navigation: false,
				//Scrolling
				css3: true,
				scrollingSpeed: 700,
				autoScrolling: true,
				fitToSection: true,
				fitToSectionDelay: 1000,
				scrollBar: false,
				easing: 'easeInOutCubic',
				easingcss3: 'ease',
				loopBottom: false,
				loopTop: false,
				loopHorizontal: true,
				continuousVertical: false,
				continuousHorizontal: false,
				scrollHorizontally: false,
				interlockedSlides: false,
				dragAndMove: false,
				offsetSections: false,
				resetSliders: false,
				fadingEffect: false,
				normalScrollElements: '#termsWrap',
				scrollOverflow: false,
				scrollOverflowReset: false,
				scrollOverflowOptions: null,
				touchSensitivity: 15,
				normalScrollElementTouchThreshold: 5,
				bigSectionsDestination: null,

				//Accessibility
				keyboardScrolling: true,
				animateAnchor: true,
				recordHistory: true,

				//Design
				controlArrows: true,
				verticalCentered: true,
				sectionsColor : ['#fff'],
				// paddingTop: '3em',
				// paddingBottom: '10px',
				fixedElements: '#header, .footer',
				responsiveWidth: 0,
				responsiveHeight: 0,
				responsiveSlides: false,
				parallax: false,
				parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

				//Custom selectors
				sectionSelector: '.section',
				slideSelector: '.slide',

				lazyLoading: true,

				//events
				onLeave: function(index, nextIndex, direction){
					if(global_status){
						var func = $.fn.fullpage;
						indexFuncs.scrollNext(index, nextIndex, func);
						return false;
					}else{
						global_status = true;
					}
				},

				afterLoad: function(anchorLink, index){
					indexFuncs.start(index)
				},
				afterRender: function(){},
				afterResize: function(){},
				afterResponsive: function(isResponsive){},
				afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
				onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
			});
		}
	}
}



window.onload = setTimeout(function() {fullpage.init();}, 2000);

$(document).on('click', '.volume-toggle', function(){
	if($(this).hasClass('off')){
		$(this).removeClass('off');
		sessionStorage.setItem('music', '1');
		audioBg.play()
	}else{
		$(this).addClass('off');
		sessionStorage.setItem('music', '0');
		audioBg.pause();
	}
}).ready(function() {
	var music = sessionStorage.getItem('music');
	if(music == null){
		$('.volume-toggle').removeClass('off');
		sessionStorage.setItem('music', '1');
		audioBg.play();
	}
	else {
		if(music == 1 && $(audioBg).length > 0){
			$('.volume-toggle').removeClass('off');
			audioBg.play();
		}
	}
});