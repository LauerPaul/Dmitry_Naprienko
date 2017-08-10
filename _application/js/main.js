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
}
