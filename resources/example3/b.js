define(function(require,exports,module) {
	var pubsubObj = {};
	exports.init = function() {
		setTimeout(function() {
			$.pubsub.publish(pubsubObj , 'ready' , 'hello,world');
		} , 3000);
		
	};
	exports.pubsubObj = pubsubObj;
});