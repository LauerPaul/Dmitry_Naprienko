var global_status=true,
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
	},
	index: function(){
		console.log('index');
	}
},
indexFuncs = {
	start: function(index){
		$('header, .footer, footer').addClass('animate');

		switch(index) {
			case 1:
				setTimeout(function(){indexFuncs.designer()}, 900);
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 2:
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 3:
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
			case 4:
				setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
				break;
		}
	},
	designer: function(a){
		var b = typeof(a) == 'undefined' ? false : (a == 'destroy' ? true : false);

		if(!b){
			$('.section.designer .designer-text h2').addClass('animate')
			setTimeout(function(){$('.section.designer .title-wrapper h1').addClass('animate');}, 600);
		}
		else{
			$('.section.designer .designer-text h2, .section.designer .title-wrapper h1').removeClass('animate');
			return false;
		}
	},
	scrollNext: function(a,b,c){
		var func;
		switch(a) {
			case 1:
				func = function(){indexFuncs.designer('destroy');}
				break;
			case 2:
				break;
			case 3:
				break;
			case 4:
				break;
		}

		// $('.mask-nextPage').addClass('animate');
		global_status=false;
		setTimeout(function(){
			c.silentMoveTo(b);
			func();
		},800)
		// setTimeout(function(){
		// 	$('.mask-nextPage').removeClass('animate');
		// },1500)
	}
}

window.onload = setTimeout(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: '#navigation',
		lockAnchors: false,
		anchors:['designer', 'about', 'services', 'contacts'],
		navigation: false,
		// navigationPosition: 'right',
		// navigationTooltips: ['firstSlide', 'secondSlide'],
		// showActiveTooltip: false,
		// slidesNavigation: false,
		// slidesNavPosition: 'bottom',

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
		// sectionsColor : ['#ccc', '#fff'],
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
}, 2000);