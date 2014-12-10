define(function(require,exports,module) {
	var b = require('./b');
	exports.init = function() {
		$.pubsub.subscribe(b.pubsubObj , 'ready' , function(event , data) {
			alert(data);
		});
		b.init();
	};
});