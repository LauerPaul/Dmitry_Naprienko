var app = {
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
		
		if(index == 1){
			setTimeout(function(){indexFuncs.designer()}, 900);
			setTimeout(function(){$('.btn-menu-toggle, .navigation-right').addClass('animate');}, 2000);
		}
	},
	designer: function(){
		$('.section.designer .designer-text h2').addClass('animate')
		setTimeout(function(){$('.section.designer .title-wrapper h1').addClass('animate');}, 600);
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
			console.log(index);
			console.log(nextIndex);
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